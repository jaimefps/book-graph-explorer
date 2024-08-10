import "./BookModal.css"
import React, { forwardRef, useEffect, useRef, useState } from "react"
import Slide from "@mui/material/Slide"
import Dialog from "@mui/material/Dialog"
import CloseIcon from "@mui/icons-material/Close"
import { TransitionProps } from "@mui/material/transitions/transition"
import { useExploreContext } from "./context/ExploreContext"
import BookmarkIcon from "@mui/icons-material/Bookmark"
import StarIcon from "@mui/icons-material/Star"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import IconButton from "@mui/material/IconButton"
import PassPageIcon from "@mui/icons-material/ArrowForwardIos"
import ChatIcon from "@mui/icons-material/Chat"
import ArrowDownwardIcon from "@mui/icons-material/KeyboardArrowDown"
import { bookGraph, getNodeIdx, getNodeText } from "./lib/graph"
import { useStorageContext } from "./context/StorageContext"
import PanToolAltIcon from "@mui/icons-material/PanToolAlt"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import Snackbar from "@mui/material/Snackbar"
import AddCommentIcon from "@mui/icons-material/Save"
import { Button, Tooltip } from "@mui/material"
import { EntryMenu } from "./EntryMenu"
import { usePrevious } from "./lib/utils"
import { book } from "./lib/book"
import cs from "clsx"
import { isMobile } from "react-device-detect"
import { useDemo } from "./context/DemoContext"

const UpdateAlert = () => {
  const [alert, setAlert] = useState<any>(undefined)
  const { storage } = useStorageContext()

  const prev = usePrevious(storage.bookmark)
  const curr = storage.bookmark

  useEffect(() => {
    if (prev && curr && prev !== curr) {
      setAlert(
        <>
          Bookmark moved from <b>{prev}</b> to <b>{curr}</b>
        </>
      )
    }
  }, [prev, curr])

  return (
    <Snackbar
      key="bookmark-update"
      open={!!alert}
      autoHideDuration={5000}
      message={alert}
      onClose={() => setAlert(undefined)}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      action={
        <IconButton
          size="small"
          color="inherit"
          aria-label="close"
          onClick={() => setAlert(undefined)}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
      ContentProps={{
        style: {
          color: "black",
          background: "darkseagreen",
          fontSize: "1.1rem",
        },
      }}
    />
  )
}

const placeHolderItem = [
  {
    createdAt: 1,
    text: (
      <>
        <PanToolAltIcon
          fontSize="medium"
          style={{
            marginBottom: `-0.4rem`,
            transform: "rotate(180deg)",
          }}
        />{" "}
        Take your first note below.
      </>
    ),
  },
]

function formatDate(createdAt: number) {
  const theDate = new Date(createdAt)
  const day = String(theDate.getDate()).padStart(2, "0")
  const month = theDate.toLocaleString("en-US", { month: "short" })
  const year = theDate.getFullYear()
  return `${month}/${day}/${year}`
}

const Notes: React.FC<{
  noteText: string
  setNoteText: (s: string) => void
  demoId: string
}> = ({ noteText, setNoteText, demoId }) => {
  const { storage, addNote, clearNote } = useStorageContext()
  const { focusNode } = useExploreContext()

  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollToEnd = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current?.scrollHeight
    }
  }

  // todo: consider if there is
  // a better way than this:
  if (!focusNode) {
    throw new Error("Failed to render notes section")
  }

  // can have empty array after
  // adding and deleting notes:
  const notes = storage.notes[focusNode]?.length
    ? storage.notes[focusNode]
    : placeHolderItem

  useEffect(() => scrollToEnd(), [notes])

  function handleSubmit(targetNode: string) {
    if (!noteText.length) {
      window.alert("Write something first!")
      return
    }
    addNote(targetNode, noteText)
    setNoteText("")
  }

  return (
    <div data-demo={demoId} className="book-entry-notes">
      <div ref={scrollRef} className="book-entry-notes-stored-group">
        {notes.map((note, idx) => {
          const thisKey = `${note.text}_${note.createdAt}`
          const isPlaceholder = note.createdAt === 1
          const dateStr = formatDate(note.createdAt)
          return (
            <div
              key={thisKey}
              className="book-entry-notes-stored"
              style={{
                // boxShadow: isPlaceholder ? "none" : undefined,
                background: isPlaceholder ? "beige" : undefined,
                color: isPlaceholder ? "darkslategray" : undefined,
                opacity: isPlaceholder ? 0.5 : undefined,
              }}
            >
              <div className="notes-stored-left">
                <div>{note.text}</div>
                {!isPlaceholder && (
                  <div className="note-stored-date">{dateStr}</div>
                )}
              </div>

              <div className="notes-stored-right">
                {!isPlaceholder && (
                  <Tooltip title="delete note">
                    <IconButton
                      aria-label="delete note"
                      onClick={() => clearNote(focusNode, idx)}
                      style={{ border: "1px solid lightgray" }}
                      size="small"
                    >
                      <DeleteForeverIcon
                        style={{
                          color: "lightgray",
                          fontSize: "1rem",
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <div className="book-entry-notes-form">
        <textarea
          value={noteText}
          placeholder="Your insights here..."
          className="book-entry-form-input"
          onChange={(ev) => setNoteText(ev.target.value)}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              ev.preventDefault()
              handleSubmit(focusNode)
            }
          }}
        />
        <IconButton
          size="medium"
          aria-label="save note for entry"
          style={{
            marginLeft: "0.8rem",
            background: "orangered",
          }}
          onClick={() => handleSubmit(focusNode)}
        >
          <AddCommentIcon style={{ color: "white" }} />
        </IconButton>
      </div>
    </div>
  )
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export const BookModal = () => {
  const { enabled } = useDemo()
  const [noteText, setNoteText] = useState("")
  const { focusNode, setFocusNode, openNotes, setOpenNotes, lang } =
    useExploreContext()
  const { storage, setBookmark, clearBookmark, setFavorite, clearFavorite } =
    useStorageContext()

  // if the focus node changes, make sure to hide
  // the notes, to avoid adding notes to wrong entry:
  useEffect(() => {
    setOpenNotes(false)
  }, [setOpenNotes, focusNode])

  // todo: consider if there is
  // a better way than this:
  if (!focusNode) {
    return null
  }

  const focusIdx = getNodeIdx(focusNode)
  const parents = bookGraph.getParents(focusNode)
  const isFavorite = storage.favorites[focusNode]
  const isFirstEntry = focusIdx === 0
  const isLastEntry = focusIdx === book.length - 1

  function handleClose() {
    setFocusNode(undefined)
    setOpenNotes(false)
  }

  const disabledJump = !storage.bookmark || storage.bookmark === focusNode
  const jumpToBookmark = (
    <Button
      onClick={() => {
        if (storage.bookmark) {
          setFocusNode(storage.bookmark)
        }
      }}
      disabled={disabledJump}
      size="small"
      variant="contained"
      sx={{
        textTransform: "none",
        color: "darkslategray",
        background: "ghostwhite",
        fontWeight: "bold",
        ":focus": {
          background: "ghostwhite",
          opacity: 0.8,
        },
        ":hover": {
          background: "ghostwhite",
          opacity: 0.8,
        },
        ":disabled": {
          color: "darkslategray",
          background: "ghostwhite",
          opacity: 0.4,
        },
      }}
      endIcon={
        <BookmarkIcon
          style={{
            color: "orangered",
            opacity: disabledJump ? 0.5 : undefined,
          }}
        />
      }
    >
      Go to
    </Button>
  )

  return (
    <Dialog
      fullScreen
      open={!!focusNode}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <UpdateAlert />
      <div className="book-modal">
        <div className="book-appbar">
          <div className="book-appbar-col-left">
            <div className="book-appbar-logo">
              <MenuBookIcon className="book-appbar-reader-icon" />
              <span className="book-appbar-logo-ext">Book</span> Reader
            </div>
            <div
              data-demo={isMobile ? undefined : "book-controls"}
              className="entry-menu-large"
            >
              <EntryMenu /> {jumpToBookmark}
            </div>
          </div>
          <div
            data-demo={isMobile ? "book-controls" : undefined}
            className="entry-menu-small"
          >
            <EntryMenu /> {jumpToBookmark}
          </div>
          <div className="book-appbar-col-right">
            <IconButton
              aria-label="close"
              style={{ color: "ghostwhite" }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <div className="book-content">
          <div className="book-content-col-left">
            <div data-demo="entry-header" className="book-entry-name">
              <span className="book-pagination-large">
                <Tooltip title="previous entry">
                  <span>
                    <IconButton
                      aria-label="go to previous entry"
                      disabled={isFirstEntry}
                      onClick={() => {
                        const newNodeName = book[focusIdx - 1][0]
                        setFocusNode(newNodeName)
                      }}
                    >
                      <PassPageIcon
                        className="book-pagination-icon"
                        style={{
                          transform: "rotate(180deg)",
                          opacity: isFirstEntry ? 0.3 : 1,
                        }}
                      />
                    </IconButton>
                  </span>
                </Tooltip>
              </span>
              {/* SPLIT */}
              <div
                id="demo-book-entry-name"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Tooltip title="Bookmark this entry">
                  <IconButton
                    aria-label="bookmark this entry"
                    onClick={() => {
                      if (storage.bookmark === null) {
                        setBookmark(focusNode)
                        return
                      }
                      if (storage.bookmark === focusNode) {
                        const confirm = window.confirm(
                          "If you clear the bookmark, you'll start from the beginning the next time you open Book Reader."
                        )
                        if (confirm) clearBookmark()
                        return
                      }
                      if (storage.bookmark !== null) {
                        // const confirm = window.confirm(
                        //   `Are you sure you want to change your bookmark from ${storage.bookmark} to ${focusNode}?`
                        // )
                        // if (confirm)
                        setBookmark(focusNode)
                        return
                      }
                    }}
                  >
                    <BookmarkIcon
                      className="book-entry-name-icon"
                      style={{
                        color:
                          storage.bookmark === focusNode
                            ? "orangered"
                            : undefined,
                      }}
                    />
                  </IconButton>
                </Tooltip>
                <div className="book-entry-name-text">{focusNode}</div>
                <Tooltip title="Save to favorites">
                  <IconButton
                    aria-label="save to favorites"
                    onClick={() => {
                      if (storage.favorites[focusNode]) {
                        clearFavorite(focusNode)
                      } else {
                        setFavorite(focusNode)
                      }
                    }}
                  >
                    <StarIcon
                      className="book-entry-name-icon"
                      style={{
                        color: isFavorite ? "gold" : undefined,
                      }}
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip title="open notes">
                  <IconButton
                    data-demo="mobile-open-notes"
                    aria-label="open notes"
                    className="book-entry-notes-button"
                    onClick={() => setOpenNotes(true)}
                    style={{
                      position: "absolute",
                      right: 0,
                      top: 1,
                    }}
                  >
                    <ChatIcon
                      style={{
                        color: "darkseagreen",
                      }}
                    />
                  </IconButton>
                </Tooltip>
              </div>
              {/* SPLIT */}
              <span className="book-pagination-large">
                <Tooltip title="next entry">
                  <span>
                    <IconButton
                      aria-label="go to next entry"
                      disabled={isLastEntry}
                      onClick={() => {
                        const newNodeName = book[focusIdx + 1][0]
                        setFocusNode(newNodeName)
                      }}
                    >
                      <PassPageIcon
                        className="book-pagination-icon"
                        style={{
                          opacity: isLastEntry ? 0.3 : 1,
                        }}
                      />
                    </IconButton>
                  </span>
                </Tooltip>
              </span>
            </div>
            <div className="book-entry-content">
              <div className="book-entry-content-text">
                {getNodeText(focusNode, lang)}
                {parents.length > 0 && (
                  <div
                    data-demo="entry-proofs"
                    className="book-entry-proof-group"
                  >
                    <p className="book-proofs-label">proved via:</p>
                    {parents.map((proof, idx, list) => (
                      <React.Fragment key={proof}>
                        <Tooltip title="jump to entry">
                          <button
                            className="book-entry-proof"
                            onClick={() => setFocusNode(proof)}
                          >
                            {proof}
                          </button>
                        </Tooltip>
                        {idx < list.length - 1 && ","}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
              <div className="book-entry-button-group">
                <Tooltip title="previous entry">
                  <span>
                    <IconButton
                      aria-label="go to previous entry"
                      disabled={isFirstEntry}
                      onClick={() => {
                        const newNodeName = book[focusIdx - 1][0]
                        setFocusNode(newNodeName)
                      }}
                    >
                      <PassPageIcon
                        className="book-pagination-icon"
                        style={{
                          transform: "rotate(180deg)",
                          opacity: isFirstEntry ? 0.3 : 1,
                        }}
                      />
                    </IconButton>
                  </span>
                </Tooltip>
                <Tooltip title="next entry">
                  <span>
                    <IconButton
                      aria-label="go to next entry"
                      disabled={isLastEntry}
                      onClick={() => {
                        const newNodeName = book[focusIdx + 1][0]
                        setFocusNode(newNodeName)
                      }}
                    >
                      <PassPageIcon
                        className="book-pagination-icon"
                        style={{
                          opacity: isLastEntry ? 0.3 : 1,
                        }}
                      />
                    </IconButton>
                  </span>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="book-content-col-right">
            <Notes
              demoId={isMobile ? "" : "book-notes"}
              noteText={noteText}
              setNoteText={setNoteText}
            />
          </div>
          <div
            className={cs("book-notes-drawer", {
              instant: enabled,
              open: openNotes,
            })}
          >
            <div className="book-notes-drawer-appbar">
              <p className="book-notes-drawer-appbar-title">
                notes on{" "}
                <b
                  style={{
                    fontWeight: 900,
                  }}
                >
                  {focusNode}
                </b>
              </p>
              <Tooltip title="hide notes">
                <IconButton
                  aria-label="close notes drawer"
                  onClick={() => setOpenNotes(false)}
                >
                  <ArrowDownwardIcon />
                </IconButton>
              </Tooltip>
            </div>
            <Notes
              demoId={isMobile ? "book-notes" : ""}
              noteText={noteText}
              setNoteText={setNoteText}
            />
          </div>
        </div>
      </div>
    </Dialog>
  )
}

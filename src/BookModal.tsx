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
import AddCommentIcon from "@mui/icons-material/Save"
import { Tooltip } from "@mui/material"
import { EntryMenu } from "./EntryMenu"
import { book } from "./lib/book"
import cs from "clsx"

function getRandomPlaceholder() {
  const placeholders = [
    "Spot the hidden pattern in the chaos?",
    "Got a mind-blowing insight?",
    "What's your latest epiphany?",
    "Seen anything intriguing lately?",
  ]
  const max = placeholders.length
  const idx = Math.floor(Math.random() * max)
  return placeholders[idx]
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
}> = ({ noteText, setNoteText }) => {
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
    <div className="book-entry-notes">
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
                  <IconButton
                    aria-label="delete note"
                    onClick={() => clearNote(focusNode, idx)}
                    style={{ border: "1px solid lightgray" }}
                    size="small"
                  >
                    <DeleteForeverIcon
                      style={{ color: "lightgray" }}
                      fontSize="small"
                    />
                  </IconButton>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <div className="book-entry-notes-form">
        <textarea
          value={noteText}
          placeholder={getRandomPlaceholder()}
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
  const [openNotes, setOpenNotes] = useState(false)
  const [noteText, setNoteText] = useState("")

  const { focusNode, setFocusNode, lang } = useExploreContext()
  const { storage, setBookmark, clearBookmark, setFavorite, clearFavorite } =
    useStorageContext()

  // if the focus node changes, make sure to hide
  // the notes, to avoid adding notes to wrong entry:
  useEffect(() => {
    setOpenNotes(false)
  }, [focusNode])

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

  return (
    <Dialog
      fullScreen
      open={!!focusNode}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <div className="book-modal">
        <div className="book-appbar">
          <div className="book-appbar-col-left">
            <div className="book-appbar-logo">
              <MenuBookIcon className="book-appbar-reader-icon" />
              <span className="book-appbar-logo-ext">Book</span> Reader
            </div>
            <div className="entry-menu-large">
              <EntryMenu />
            </div>
          </div>
          <div className="entry-menu-small">
            <EntryMenu />
          </div>
          <div className="book-appbar-col-right">
            <IconButton
              aria-label="close"
              style={{ color: "white" }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <div className="book-content">
          <div className="book-content-col-left">
            <div className="book-entry-name">
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Tooltip
                  title="Start from here the next time you open the Book Reader."
                  PopperProps={{ style: { width: 160 } }}
                >
                  <IconButton
                    aria-label="bookmark this entry"
                    onClick={() => {
                      if (storage.bookmark === null) {
                        setBookmark(focusNode)
                        return
                      }
                      if (storage.bookmark === focusNode) {
                        const confirm = window.confirm(
                          "Are you sure you want to clear your bookmark? You'll start from the beginning the next time you open Book Reader."
                        )
                        if (confirm) clearBookmark()
                        return
                      }
                      if (storage.bookmark !== null) {
                        const confirm = window.confirm(
                          `Are you sure you want to change your bookmark from ${storage.bookmark} to ${focusNode}?`
                        )
                        if (confirm) setBookmark(focusNode)
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
                  <div className="book-entry-proof-group">
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
            <Notes noteText={noteText} setNoteText={setNoteText} />
          </div>
          <div
            className={cs("book-notes-drawer", {
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
            <Notes noteText={noteText} setNoteText={setNoteText} />
          </div>
        </div>
      </div>
    </Dialog>
  )
}

import "./BookModal.css"
import React, { forwardRef } from "react"
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
import { bookGraph, getNodeIdx, getNodeText } from "./lib/graph"
import { useStorageContext } from "./context/StorageContext"
import { Tooltip } from "@mui/material"
import { book } from "./lib/book"

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export const BookModal = () => {
  const { focusNode, setFocusNode, lang } = useExploreContext()
  const { storage, setBookmark, clearBookmark, setFavorite, clearFavorite } =
    useStorageContext()

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
            <MenuBookIcon className="book-appbar-reader-icon" />
            Book Reader
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
              <IconButton
                aria-label="open notes"
                className="book-entry-notes-button"
                onClick={() => console.log("notes")}
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
          <div
            className="book-content-col-right"
            style={{ background: "darkseagreen" }}
          >
            note taking here
          </div>
        </div>
      </div>
    </Dialog>
  )
}

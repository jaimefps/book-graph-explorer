import "./BookModal.css"
import { forwardRef } from "react"
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
import { Tooltip } from "@mui/material"
import { getNodeIdx, getNodeText } from "./lib/graph"
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

  // todo: consider if there is
  // a better way than this:
  if (!focusNode) {
    return null
  }

  const focusIdx = getNodeIdx(focusNode)

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
              onClick={handleClose}
              aria-label="close"
              style={{ color: "white" }}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <div className="book-content">
          <div className="book-content-col-left">
            <div className="book-entry-name">
              {focusNode}{" "}
              <Tooltip
                title="Start from here the next time you open the Book Reader."
                PopperProps={{ style: { width: 160 } }}
              >
                <IconButton
                  onClick={() => console.log("icon click")}
                  aria-label="close"
                >
                  <BookmarkIcon className="book-entry-name-icon" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Save to favorites">
                <IconButton
                  onClick={() => console.log("icon click")}
                  aria-label="close"
                >
                  <StarIcon className="book-entry-name-icon" />
                </IconButton>
              </Tooltip>
            </div>
            <div className="book-entry-content">
              <div className="book-entry-content-text">
                {getNodeText(focusNode, lang)}
              </div>
              <div className="book-entry-button-group">
                <Tooltip title="go to previous entry">
                  <IconButton
                    aria-label="go to previous entry"
                    disabled={focusIdx === 0}
                    onClick={() => {
                      const newNodeName = book[focusIdx - 1][0]
                      setFocusNode(newNodeName)
                    }}
                  >
                    <PassPageIcon
                      className="book-pagination-icon"
                      style={{ transform: "rotate(180deg)" }}
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip title="go to next entry">
                  <IconButton
                    aria-label="go to next entry"
                    disabled={focusIdx === book.length - 1}
                    onClick={() => {
                      const newNodeName = book[focusIdx + 1][0]
                      setFocusNode(newNodeName)
                    }}
                  >
                    <PassPageIcon className="book-pagination-icon" />
                  </IconButton>
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

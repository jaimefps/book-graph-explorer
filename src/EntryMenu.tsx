import "./EntryMenu.css"
import { useState } from "react"
import StarIcon from "@mui/icons-material/Star"
import CommentIcon from "@mui/icons-material/Comment"
import BookmarkIcon from "@mui/icons-material/Bookmark"
import { useExploreContext } from "./context/ExploreContext"
import { useStorageContext } from "./context/StorageContext"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import { nodeOpts } from "./lib/book"

const options = nodeOpts

const OFF = "#f3f3f3"
const ITEM_HEIGHT = 48

export const EntryMenu = () => {
  const { storage } = useStorageContext()
  const { focusNode, setFocusNode } = useExploreContext()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        className="book-entries-menu"
        size="small"
        id="book-entries-list"
        aria-label="jump to entry"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
        endIcon={
          <MoreVertIcon
            style={{
              color: "darkslategray",
            }}
          />
        }
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
        }}
      >
        All entries
      </Button>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "book-entries-list",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 6.5,
              marginTop: 3,
              width: "25ch",
            },
          },
        }}
      >
        {options.map((option) => {
          const isFavorite = storage.favorites[option]
          const isBookmark = storage.bookmark === option
          const hasNotes = storage.notes[option]?.length
          return (
            <MenuItem
              key={option}
              selected={option === focusNode}
              onClick={() => {
                setFocusNode(option)
                handleClose()
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <>
                {option}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <CommentIcon
                    style={{ color: hasNotes ? "darkseagreen" : OFF }}
                    fontSize="small"
                  />
                  <StarIcon
                    style={{ color: isFavorite ? "gold" : OFF }}
                    fontSize="small"
                  />
                  <BookmarkIcon
                    style={{ color: isBookmark ? "orangered" : OFF }}
                    fontSize="small"
                  />
                </div>
              </>
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  )
}

import "./Translations.css"
import { useState } from "react"
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material"
import { useExploreContext } from "./context/ExploreContext"
import TranslateIcon from "@mui/icons-material/Translate"
import { logAnalytics } from "./lib/analytics"

const ITEM_HEIGHT = 48

const opts = [
  { label: "English", value: "en" },
  { label: "Español", value: "es" },
  { label: "Latin", value: "la" },
] as const

export const Translations = () => {
  const { lang, setLang } = useExploreContext()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="translations-picker">
      <Tooltip title="translations">
        <IconButton
          size="small"
          onClick={handleClick}
          data-demo="translations"
          aria-expanded={open ? "true" : undefined}
          sx={{ border: "1px solid darkseagreen" }}
          aria-label="pick translation"
          aria-haspopup="true"
        >
          <TranslateIcon fontSize="small" sx={{ color: "darkseagreen" }} />
        </IconButton>
      </Tooltip>
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
              width: "12ch",
            },
          },
        }}
      >
        {opts.map((option) => {
          return (
            <MenuItem
              key={option.value}
              selected={option.value === lang}
              onClick={() => {
                logAnalytics(`pick-translation:${option.label}`)
                setLang(option.value)
                handleClose()
              }}
            >
              {option.label}
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  )
}

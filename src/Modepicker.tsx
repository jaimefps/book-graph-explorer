import "./ModePicker.css"
import { GraphMode } from "./lib/types"
import HubIcon from "@mui/icons-material/Hub"
import { useExploreContext } from "./context/ExploreContext"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import { useStorageContext } from "./context/StorageContext"
import HistoryIcon from "@mui/icons-material/HistoryToggleOff"
import { IconButton, Tooltip } from "@mui/material"
import { logAnalytics } from "./lib/analytics"
import Close from "@mui/icons-material/Close"
import { formatDate } from "./lib/utils"
import React, { useState } from "react"
import { book } from "./lib/book"
import cs from "clsx"
import { DeleteForever } from "@mui/icons-material"

const History: React.FC<{
  show: boolean
  hide: () => void
}> = ({ show, hide }) => {
  const { storage, removeHistory } = useStorageContext()
  const { setMode, setInputNodes } = useExploreContext()
  return (
    <div
      className={cs("history-drawer", {
        open: show,
      })}
    >
      <div className="history-drawer-appbar">
        <div>history</div>
        <IconButton size="small" onClick={hide} disabled={!show}>
          <Close fontSize="small" />
        </IconButton>
      </div>
      <div className="history-drawer-list">
        {storage.history?.map((el, idx) => (
          <div key={el.createdAt} className="history-item-wrapper">
            <button
              className="history-item"
              disabled={!show}
              onClick={() => {
                logAnalytics("apply-history")
                setInputNodes(el.inputNodes)
                setMode(el.mode)
              }}
            >
              <div>
                <b>{el.mode}</b>
              </div>
              <div>
                <i>{el.inputNodes[0]}</i>{" "}
                {el.mode === "connection" && (
                  <>
                    - <i>{el.inputNodes[1]}</i>
                  </>
                )}
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "darkseagreen",
                }}
              >
                {formatDate(el.createdAt)}
              </div>
            </button>
            <IconButton
              size="small"
              onClick={(e) => {
                logAnalytics("remove-history")
                removeHistory(idx)
              }}
              sx={{
                ":focus": { opacity: 0.5 },
                ":hover": { opacity: 0.5 },
                position: "absolute",
                right: 4,
                top: 4,
              }}
            >
              <DeleteForever
                fontSize="small"
                sx={{
                  color: "beige",
                  border: "1px solid beige",
                  borderRadius: "50%",
                  padding: "2px",
                }}
              />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  )
}

export const ModePicker: React.FC<{
  setMode: (m: GraphMode) => void
}> = ({ setMode }) => {
  const { storage } = useStorageContext()
  const { setFocusNode } = useExploreContext()
  const [showHistory, setShowHistory] = useState(false)
  const openBookWith = storage.bookmark ?? book[0][0]
  return (
    <div className="mode-picker">
      <span className="history-open-button">
        <IconButton
          size="small"
          disabled={!storage.history?.length}
          onClick={() => setShowHistory(true)}
          sx={{
            borderRadius: 4,
            color: "darkseagreen",
            background: "darkslategray",
            padding: "4px 12px",
            gap: "0.5rem",
          }}
        >
          <span style={{ fontSize: "1rem" }}>history</span>{" "}
          <HistoryIcon fontSize="medium" />
        </IconButton>
      </span>
      <h2 className="mode-picker-header">
        What do you want to explore in the Ethics?
      </h2>
      <button
        data-demo="connection-picker"
        className="mode-picker-button"
        onClick={() => {
          logAnalytics("mode-connection")
          setMode("connection")
        }}
      >
        <div className="mode-picker-button-label">
          <HubIcon fontSize="small" /> connection
        </div>
        <div className="mode-picker-button-description">
          Illustrate the chain of arguments that connects any two statements.
        </div>
      </button>
      <button
        className="mode-picker-button"
        onClick={() => {
          logAnalytics("mode-descendancy")
          setMode("descendancy")
        }}
      >
        <div className="mode-picker-button-label">
          <HubIcon fontSize="small" /> descendancy
        </div>
        <div className="mode-picker-button-description">
          Illustrate the complete chain of consequences for a single statement.
        </div>
      </button>
      <button
        className="mode-picker-button"
        onClick={() => {
          logAnalytics("mode-ancestry")
          setMode("ancestry")
        }}
      >
        <div className="mode-picker-button-label">
          <HubIcon fontSize="small" /> ancestry
        </div>
        <div className="mode-picker-button-description">
          Illustrate the complete chain of proofs for a single statement.
        </div>
      </button>
      <button
        data-demo="book-picker"
        className="mode-picker-button"
        onClick={() => {
          logAnalytics("mode-book")
          setFocusNode(openBookWith)
        }}
        style={{ background: "beige" }}
      >
        <div
          className="mode-picker-button-label"
          style={{ color: "darkslategray" }}
        >
          <MenuBookIcon fontSize="small" /> book reader
        </div>
        <div className="mode-picker-button-description">
          You just want to read the Ethics, maybe take notes, or mark your
          favorite entries.
        </div>
      </button>
      <History show={showHistory} hide={() => setShowHistory(false)} />
    </div>
  )
}

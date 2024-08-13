import "./ModePicker.css"
import { GraphMode } from "./lib/types"
import HubIcon from "@mui/icons-material/Hub"
import { useExploreContext } from "./context/ExploreContext"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import { useStorageContext } from "./context/StorageContext"
import { logAnalytics } from "./lib/analytics"
import { book } from "./lib/book"

export const ModePicker: React.FC<{
  setMode: (m: GraphMode) => void
}> = ({ setMode }) => {
  const { storage } = useStorageContext()
  const { setFocusNode } = useExploreContext()
  const openBookWith = storage.bookmark ?? book[0][0]

  return (
    <div className="mode-picker">
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
    </div>
  )
}

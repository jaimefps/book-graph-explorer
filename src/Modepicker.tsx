import "./ModePicker.css"
import { GraphMode } from "./types"
import HubIcon from "@mui/icons-material/Hub"
import { useExploreContext } from "./context/ExploreContext"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import { useStorageContext } from "./context/StorageContext"
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
        className="mode-picker-button"
        onClick={() => setMode("connection")}
      >
        <div className="mode-picker-button-label">
          <HubIcon fontSize="small" /> Connection
        </div>
        <div className="mode-picker-button-description">
          Illustrate the chain of arguments that connects any two statements.
        </div>
      </button>
      <button
        className="mode-picker-button"
        onClick={() => setMode("descendancy")}
      >
        <div className="mode-picker-button-label">
          <HubIcon fontSize="small" /> Descendancy
        </div>
        <div className="mode-picker-button-description">
          Illustrate the complete chain of consequences for a single statement.
        </div>
      </button>
      <button
        className="mode-picker-button"
        onClick={() => setMode("ancestry")}
      >
        <div className="mode-picker-button-label">
          <HubIcon fontSize="small" /> Ancestry
        </div>
        <div className="mode-picker-button-description">
          Illustrate the complete chain of proofs for a single statement.
        </div>
      </button>
      <button
        className="mode-picker-button"
        onClick={() => setFocusNode(openBookWith)}
        style={{ background: "darkseagreen" }}
      >
        <div
          className="mode-picker-button-label"
          style={{ color: "darkslategray" }}
        >
          <MenuBookIcon fontSize="small" /> Book Reader
        </div>
        <div className="mode-picker-button-description">
          You just want to read the Ethics, maybe take notes, or save your
          favorite entries.
        </div>
      </button>
    </div>
  )
}

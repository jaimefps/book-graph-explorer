import "./ModePicker.css"
import { GraphMode } from "./types"

export const ModePicker: React.FC<{
  setMode: (m: GraphMode) => void
}> = ({ setMode }) => {
  return (
    <div className="mode-picker">
      <h2 className="mode-picker-header">
        What do you want to explore in the Ethics?
      </h2>
      <button
        className="mode-picker-button"
        onClick={() => setMode("ancestry")}
      >
        <div className="mode-picker-button-label">Ancestry</div>
        <div className="mode-picker-button-description">
          Illustrate the complete chain of proofs for a single statement.
        </div>
      </button>
      <button
        className="mode-picker-button"
        onClick={() => setMode("descendancy")}
      >
        <div className="mode-picker-button-label">Descendancy</div>
        <div className="mode-picker-button-description">
          Illustrate the complete chain of consequences for a single statement.
        </div>
      </button>
      <button
        className="mode-picker-button"
        onClick={() => setMode("connection")}
      >
        <div className="mode-picker-button-label">Connection</div>
        <div className="mode-picker-button-description">
          Illustrate the chain of arguments that connects two statements.
        </div>
      </button>
    </div>
  )
}

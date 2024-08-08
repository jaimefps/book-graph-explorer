import { useEffect, useState } from "react"
import { GraphMode, Translation } from "./types"
import { nodeOpts } from "./lib/book"
import { bookGraph } from "./lib/graph"
import { TextField, Button } from "@mui/material"
import AutoComplete from "@mui/material/Autocomplete"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import "./NodePicker.css"
import cs from "clsx"

const modeOptMap = {
  ancestry: nodeOpts,
  descendancy: nodeOpts,
  connection: nodeOpts,
}

const sharedProps = {
  disableElevation: true,
  style: {
    flex: 1,
    textTransform: "none",
    fontWeight: 600,
    width: 300,
  },
} as const

function getNodeText({
  node,
  lang = "en",
}: {
  node: string
  lang?: Translation
}): string | JSX.Element {
  return bookGraph.get(node).text[lang]
}

function withLabel(
  node: React.ReactNode,
  opts?: {
    label: string
    htmlFor: string
  }
) {
  if (opts) {
    return (
      <div className="node-picker-autocomplete-label">
        <div className="node-picker-autocomplete-label-span">{opts.label}</div>
        {node}
      </div>
    )
  }
  return node
}

export const NodePicker: React.FC<{
  setNodes: (n: string[]) => void
  reset: VoidFunction
  mode: GraphMode
}> = ({ setNodes, reset, mode }) => {
  const fromPreview =
    mode === "ancestry" ? modeOptMap[mode].slice(-1)[0] : modeOptMap[mode][0]

  const [fromNode, setFromNode] = useState<string>(fromPreview)
  const [toNode, setToNode] = useState<string>(modeOptMap[mode].slice(-1)[0])

  const [preview, setPreview] = useState(fromNode)
  useEffect(() => setPreview(toNode), [toNode])
  useEffect(() => setPreview(fromNode), [fromNode])

  return (
    <div className="node-picker">
      <div className="node-picker-col-left">
        <div className="node-picker-col-left-arrow" />
        <h2 className="node-picker-header">
          Which <span className="mode-span">{mode}</span> do you want to
          explore?
        </h2>
        <div className="node-picker-controls">
          <div className="node-picker-autocomplete-group">
            <AutoComplete
              className="node-picker-autocomplete"
              disableClearable
              options={nodeOpts}
              value={fromNode}
              onChange={(e, value) => setFromNode(value)}
              renderInput={(props) =>
                withLabel(
                  <TextField
                    {...props}
                    id="fromNode"
                    size="small"
                    InputProps={{
                      ...props.InputProps,
                      style: {
                        background: "white",
                      },
                    }}
                  />,
                  mode === "connection"
                    ? {
                        htmlFor: "fromNode",
                        label: "starting from",
                      }
                    : undefined
                )
              }
            />
            {mode === "connection" && (
              <AutoComplete
                className="node-picker-autocomplete"
                disableClearable
                options={nodeOpts}
                value={toNode}
                onChange={(e, value) => setToNode(value)}
                renderInput={(props) =>
                  withLabel(
                    <TextField
                      {...props}
                      id="toNode"
                      size="small"
                      InputProps={{
                        ...props.InputProps,
                        style: {
                          background: "white",
                        },
                      }}
                    />,
                    {
                      htmlFor: "toNode",
                      label: "ending at",
                    }
                  )
                }
              />
            )}
          </div>
          <div className="node-picker-button-group">
            <Button
              {...sharedProps}
              style={{
                ...sharedProps.style,
                background: "darkseagreen",
                color: "darkslategray",
              }}
              className="node-picker-button node-picker-button-submit"
              variant="contained"
              onClick={() => {
                if (mode === "connection") {
                  setNodes(
                    // enforce having earlier entry as
                    // the first element in the list:
                    [fromNode, toNode].sort(
                      (a, b) =>
                        bookGraph.get(a).entryIdx - bookGraph.get(b).entryIdx
                    )
                  )
                  return
                }
                setNodes([fromNode])
              }}
            >
              submit
            </Button>
            <Button
              {...sharedProps}
              style={{
                ...sharedProps.style,
                borderColor: "darkseagreen",
                color: "darkseagreen",
              }}
              className="node-picker-button"
              variant="outlined"
              onClick={reset}
            >
              back
            </Button>
          </div>
        </div>
      </div>
      <div className="node-picker-col-right">
        <div className="node-picker-entry-label-group">
          <div
            role="button"
            onClick={() => setPreview(fromNode)}
            className={cs("node-picker-entry-label", {
              disabledPickerLabel: preview !== fromNode,
              soloPickerLabel: mode !== "connection",
            })}
          >
            <ChevronRightIcon
              fontSize="medium"
              className={cs(preview !== fromNode && "node-picker-pulse")}
              style={{ marginBottom: -6, marginRight: -6 }}
            />{" "}
            {fromNode}
          </div>
          {mode === "connection" && (
            <div
              role="button"
              onClick={() => setPreview(toNode)}
              className={cs("node-picker-entry-label", {
                disabledPickerLabel: preview !== toNode,
              })}
            >
              <ChevronRightIcon
                fontSize="medium"
                className={cs(preview !== toNode && "node-picker-pulse")}
                style={{ marginBottom: -6, marginRight: -6 }}
              />{" "}
              {toNode}
            </div>
          )}
        </div>
        <div className="node-picker-entry-content">
          {getNodeText({
            node: preview,
          })}
        </div>
      </div>
    </div>
  )
}

import { bookGraph } from "./lib/graph"
import { RenderData } from "./lib/types"
import CytoscapeComponent from "react-cytoscapejs"
import { useEffect, useRef, useState } from "react"
import AutoComplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { nodeOpts } from "./lib/book"

// import Modal from "@mui/material/Modal"

type GraphMode = "ancestry" | "descendancy" | "connection"
type GraphQuery = { mode: GraphMode; nodes: string[] }

function getRenderData(query: GraphQuery) {
  const methodMap: {
    [k in GraphMode]: (nodes: string[]) => RenderData
  } = {
    ancestry: (nodes: string[]) =>
      bookGraph.getAncestryRenderData(...(nodes as [string])),
    descendancy: (nodes: string[]) =>
      bookGraph.getDescendancyRenderData(...(nodes as [string])),
    connection: (nodes: string[]) =>
      bookGraph.getConnectionRenderData(...(nodes as [string, string])),
  }

  return methodMap[query.mode](query.nodes)
}

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
          Illustrate the complete chain of proofs for some statement.
        </div>
      </button>
      <button
        className="mode-picker-button"
        onClick={() => setMode("descendancy")}
      >
        <div className="mode-picker-button-label">Descendancy</div>
        <div className="mode-picker-button-description">
          Illustrate the complete chain of consequences for some statement.
        </div>
      </button>
      <button
        className="mode-picker-button"
        onClick={() => setMode("connection")}
      >
        <div className="mode-picker-button-label">Connection</div>
        <div className="mode-picker-button-description">
          Illustrate the chain of arguments that connects two entries.
        </div>
      </button>
    </div>
  )
}

const sharedProps = {
  disableElevation: true,
  size: "small",
  style: {
    flex: 1,
    textTransform: "none",
    fontWeight: 600,
  },
} as const

const modeOptMap = {
  ancestry: nodeOpts,
  descendancy: nodeOpts,
  connection: nodeOpts,
}

export const NodesPicker: React.FC<{
  setNodes: (n: string[]) => void
  reset: VoidFunction
  mode: GraphMode
}> = ({ setNodes, reset, mode }) => {
  const defaultValue = modeOptMap[mode][0]
  const [selection, setSelection] = useState<string>(defaultValue)

  return (
    <div className="nodes-picker">
      <div className="column-left">
        <div className="column-left-arrow" />
        <h2 className="node-picker-header">
          Which <span style={{ textDecoration: "underline" }}>{mode}</span> do
          you want to explore?
        </h2>
        <AutoComplete
          disableClearable
          options={nodeOpts}
          value={selection}
          onChange={(e, value) => setSelection(value)}
          style={{ width: "100%" }}
          renderInput={(props) => (
            <TextField
              {...props}
              size="small"
              InputProps={{
                ...props.InputProps,
                style: {
                  background: "white",
                },
              }}
            />
          )}
        />
        <div className="node-picker-buttons">
          <Button
            {...sharedProps}
            style={{
              ...sharedProps.style,
              borderColor: "darkseagreen",
              color: "darkseagreen",
            }}
            variant="outlined"
            onClick={reset}
          >
            reset
          </Button>
          <Button
            {...sharedProps}
            style={{
              ...sharedProps.style,
              background: "darkseagreen",
              color: "darkslategray",
            }}
            variant="contained"
            onClick={() => setNodes([selection])}
          >
            illustrate
          </Button>
        </div>
      </div>

      <div className="column-right">
        <div className="column-right-title">{selection}</div>
        <div className="column-right-text">
          {bookGraph.get(selection).text.en}
        </div>
      </div>
    </div>
  )
}

export const GraphDisplay: React.FC<{
  query: GraphQuery
  reset: VoidFunction
}> = ({ query, reset }) => {
  const cyRef = useRef<cytoscape.Core>()
  const [lang, setlang] = useState<string>("la")
  const [focus, setFocus] = useState<string>(query.nodes[0])
  const [renderData] = useState(getRenderData(query))

  // helps to recenter by
  // remounting the component:

  useEffect(() => {
    if (cyRef.current) {
      const cy = cyRef.current

      // single node click:
      cy.on("click", "node", (event) => {
        // Prevents the event from
        // propagating to background:
        event.stopPropagation()
        const node = event.target
        const nodeId = node.id()
        setFocus(nodeId)
      })

      // background click
      // cy.on("click", (event) => {
      //   if (event.target === cy) {
      //     setFocus(undefined)
      //   }
      // })

      // todo: double click for zoom?
    }
  }, [])

  return (
    <div className="graph-container">
      <div className="graph-column">
        <div className="graph-header" style={{ padding: 0, margin: 0 }}>
          {query.mode} ({query.nodes[0]})
        </div>
        <Button
          {...sharedProps}
          style={{
            ...sharedProps.style,
            borderColor: "darkseagreen",
            color: "darkseagreen",
            position: "absolute",
            bottom: "1rem",
            left: "1rem",
            zIndex: 100,
          }}
          variant="outlined"
          onClick={() => {
            if (window.confirm("Are you sure you want to reset?")) {
              reset()
            }
          }}
        >
          reset
        </Button>
        <Button
          {...sharedProps}
          style={{
            ...sharedProps.style,
            borderColor: "darkseagreen",
            color: "darkseagreen",
            position: "absolute",
            bottom: "1rem",
            left: "6rem",
            zIndex: 100,
          }}
          variant="outlined"
          onClick={() => {
            cyRef.current?.fit()
            cyRef.current?.center()
          }}
        >
          recenter
        </Button>
        <CytoscapeComponent
          elements={renderData}
          cy={(cy) => {
            cyRef.current = cy
          }}
          layout={{
            name: "breadthfirst",
            directed: true,
            grid: true,
            // nodeDimensionsIncludeLabels: true,
          }}
          style={{
            background: "darkslategray",
            height: "100%",
          }}
          stylesheet={[
            {
              selector: "node",
              style: {
                label: "data(id)",
                "text-valign": "center",
                "text-halign": "center",
                // "border-color": "",
                color: "#fff",
                height: 75,
                width: 75,
              },
            },
            {
              selector: "node.selected",
              style: { color: "green" },
            },
            {
              selector: "edge",
              style: {
                width: 4,
                "line-color": "#ccc",
                "target-arrow-color": "#ccc",
                "target-arrow-shape": "triangle",
                "curve-style": "bezier",
                events: "no",
              },
            },
          ]}
        />
      </div>
      <div className="column-right">
        <div className="column-right-arrow" />
        <div className="column-right-title">{focus}</div>
        <div className="column-right-text">{bookGraph.get(focus).text.en}</div>
      </div>
    </div>
  )
}

const App = () => {
  const [nodes, setNodes] = useState<string[]>()
  const [mode, setMode] = useState<GraphMode>()

  if (!mode) {
    return <ModePicker setMode={setMode} />
  }

  if (!nodes?.length && mode) {
    return (
      <NodesPicker
        mode={mode}
        setNodes={setNodes}
        reset={() => {
          setMode(undefined)
        }}
      />
    )
  }

  if (mode && nodes?.length) {
    return (
      <GraphDisplay
        query={{
          mode,
          nodes,
        }}
        reset={() => {
          setMode(undefined)
          setNodes(undefined)
        }}
      />
    )
  }

  return (
    <div>
      Oops! Something went wrong. An engineer has been informed. Please click
      here to try agin. Otherwise, we should have this fixed soon.
    </div>
  )
}

export default App

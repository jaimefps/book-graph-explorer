import { bookGraph } from "./lib/graph"
import { GraphMode, GraphQuery, RenderData, Translation } from "./lib/types"
import CytoscapeComponent from "react-cytoscapejs"
import { useEffect, useMemo, useRef, useState } from "react"
import AutoComplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { nodeOpts } from "./lib/book"

function getBookText({
  node,
  trans = "en",
}: {
  node: string
  trans?: Translation
  onClickProof: (proofNode: string) => void
}): string | JSX.Element {
  // todo: handle languages:
  const Res = bookGraph.get(node).text.en
  return typeof Res === "string" ? (
    Res
  ) : (
    <Res onClickProof={(proofNode) => console.log("clicked:", proofNode)} />
  )
}

// import Modal from "@mui/material/Modal"

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

const sharedProps = {
  disableElevation: true,
  style: {
    flex: 1,
    textTransform: "none",
    fontWeight: 600,
    width: 300,
  },
} as const

const modeOptMap = {
  ancestry: nodeOpts,
  descendancy: nodeOpts,
  connection: nodeOpts,
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
      <label
        htmlFor={opts.htmlFor}
        style={{
          fontWeight: "700",
          color: "darkseagreen",
        }}
      >
        {opts.label}
        {node}
      </label>
    )
  }
  return node
}

export const NodesPicker: React.FC<{
  setNodes: (n: string[]) => void
  reset: VoidFunction
  mode: GraphMode
}> = ({ setNodes, reset, mode }) => {
  const fromPreview = modeOptMap[mode][0]
  const [fromNode, setFromNode] = useState<string>(fromPreview)
  const [toNode, setToNode] = useState<string>(modeOptMap[mode].slice(-1)[0])

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
          value={fromNode}
          onChange={(e, value) => setFromNode(value)}
          style={{ width: 300 }}
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
                    label: "starting from",
                    htmlFor: "fromNode",
                  }
                : undefined
            )
          }
        />
        {mode === "connection" && (
          <AutoComplete
            disableClearable
            options={nodeOpts}
            value={toNode}
            onChange={(e, value) => setToNode(value)}
            style={{ width: 300 }}
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
                  label: "ending at",
                  htmlFor: "toNode",
                }
              )
            }
          />
        )}
        <div className="node-picker-buttons">
          <Button
            {...sharedProps}
            style={{
              ...sharedProps.style,
              background: "darkseagreen",
              color: "darkslategray",
            }}
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
              // opacity: 0.5,
            }}
            variant="outlined"
            onClick={reset}
          >
            back
          </Button>
        </div>
      </div>

      <div className="column-right">
        <div className="column-right-title">{fromNode}</div>
        <div className="column-right-text">
          {/* {bookGraph.get(fromNode).text.en} */}
          {getBookText({
            node: fromNode,
            onClickProof(proof) {
              console.log("clicked:", proof)
            },
          })}
        </div>
        {mode === "connection" && (
          <>
            <hr className="styled-hr" />
            <div className="column-right-title">{toNode}</div>
            <div className="column-right-text">
              {getBookText({
                node: toNode,
                onClickProof(proof) {
                  console.log("clicked:", proof)
                },
              })}
            </div>
          </>
        )}
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
      // background click:
      // cy.on("click", (event) => {
      //   if (event.target === cy) {
      //   }
      // })
    }
  }, [])

  const hasEdges = useMemo(
    () => renderData.find((n) => !!n.data.source),
    [renderData]
  )

  return (
    <div className="graph-container">
      <div className="graph-column">
        <div className="graph-header" style={{ padding: 0, margin: 0 }}>
          {hasEdges ? (
            <>
              {query.mode} ({query.nodes[0]}
              {query.mode === "connection" && `, ${query.nodes[1]}`})
            </>
          ) : (
            <>
              note:{" "}
              {query.mode === "connection"
                ? `no connections found between ${query.nodes[0]} and ${query.nodes[1]}`
                : `no ${query.mode} found for ${query.nodes[0]}`}
            </>
          )}
        </div>
        <Button
          {...sharedProps}
          style={{
            ...sharedProps.style,
            backgroundColor: "darkslategray",
            borderColor: "darkseagreen",
            color: "darkseagreen",
            position: "absolute",
            bottom: "1rem",
            left: "1rem",
            zIndex: 100,
            width: "4rem",
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
            backgroundColor: "darkslategray",
            borderColor: "darkseagreen",
            color: "darkseagreen",
            position: "absolute",
            bottom: "1rem",
            left: "6rem",
            zIndex: 100,
            width: "8rem",
          }}
          variant="outlined"
          onClick={() => {
            cyRef.current?.fit(undefined, 16)
            cyRef.current?.center()
          }}
        >
          fit to screen
        </Button>
        <CytoscapeComponent
          elements={renderData}
          cy={(cy) => (cyRef.current = cy)}
          layout={{
            name: "breadthfirst",
            directed: true,
            grid: true,
            maximal: true,
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
        <div className="column-right-text">
          {getBookText({
            node: focus,
            onClickProof(proof) {
              console.log("clicked:", proof)
            },
          })}
        </div>
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

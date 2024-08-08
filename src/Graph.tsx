import { isMobile } from "react-device-detect"
import { GraphMode, GraphQuery, RenderData } from "./types"
import { useRef, useState, useEffect, useMemo, useCallback } from "react"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import CytoscapeComponent from "react-cytoscapejs"
import Snackbar from "@mui/material/Snackbar"
import Tooltip from "@mui/material/Tooltip"
import Button from "@mui/material/Button"
import { bookGraph } from "./lib/graph"
import "./Graph.css"

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

export const Graph: React.FC<{
  query: GraphQuery
  reset: VoidFunction
}> = ({ query, reset }) => {
  const cyRef = useRef<cytoscape.Core>()
  const [lang, setlang] = useState<string>("la")
  const [focus, setFocus] = useState<string>(query.nodes[0])
  const [renderData] = useState(getRenderData(query))
  const [openAlert, setOpenAlert] = useState(false)

  const handleAlertClose = useCallback(
    () => setOpenAlert(false),
    [setOpenAlert]
  )
  useEffect(() => {
    const t = setTimeout(() => setOpenAlert(true), 300)
    return () => clearTimeout(t)
  }, [])

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

  const edgeCount = useMemo(() => {
    return renderData.filter((n) => !!n.data.source).length
  }, [renderData])

  const hasEdges = useMemo(
    () => renderData.find((n) => !!n.data.source),
    [renderData]
  )

  const headerText = hasEdges ? (
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
  )

  return (
    <div className="graph-container">
      <Snackbar
        key="graph-zoom"
        open={openAlert}
        autoHideDuration={6000}
        message={`${isMobile ? "Pinch" : "Scroll"} on the graph to zoom`}
        onClose={handleAlertClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        action={
          <IconButton
            size="small"
            color="inherit"
            aria-label="close"
            onClick={handleAlertClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
        ContentProps={{
          style: {
            color: "black",
            background: "orange",
            fontSize: "1.1rem",
            textAlign: "center",
            fontWeight: "bold",
          },
        }}
      />
      <div className="graph-header">
        <Tooltip title={headerText} enterTouchDelay={0}>
          <div className="graph-header-text">{headerText}</div>
        </Tooltip>

        <div className="graph-header-button-group">
          <Button
            style={{
              width: "6rem",
            }}
            className="graph-button"
            variant="outlined"
            onClick={() => {
              cyRef.current?.fit(undefined, 16)
              cyRef.current?.center()
            }}
          >
            recenter
          </Button>
          <Button
            style={{
              width: "4rem",
            }}
            className="graph-button"
            variant="outlined"
            onClick={() => {
              if (window.confirm("Are you sure you want to reset?")) {
                reset()
              }
            }}
          >
            reset
          </Button>
        </div>
      </div>

      <CytoscapeComponent
        elements={renderData}
        cy={(cy) => (cyRef.current = cy)}
        layout={{
          name: "breadthfirst",
          avoidOverlap: true,
          animate: true,
          animationDuration: 350,
          spacingFactor: edgeCount > 25 ? 3 : 2,
          directed: true,
          maximal: true,
          grid: true,
        }}
        style={{
          height: "calc(100% - var(--graph-controls-height))",
          background: "darkslategray",
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
              height: 99,
              width: 99,
            },
          },
          {
            selector: "node.selected",
            style: { color: "green" },
          },
          {
            selector: "edge",
            style: {
              width: 6,
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
  )
}

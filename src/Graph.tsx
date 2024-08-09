import "./Graph.css"
import { isMobile } from "react-device-detect"
import { GraphMode, GraphQuery, RenderData } from "./types"
import { useExploreContext } from "./context/ExploreContext"
import { useRef, useState, useEffect, useMemo, useCallback } from "react"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import CytoscapeComponent from "react-cytoscapejs"
import Snackbar from "@mui/material/Snackbar"
import Tooltip from "@mui/material/Tooltip"
import Button from "@mui/material/Button"
import { bookGraph } from "./lib/graph"

const ZoomAlert: React.FC<{
  openAlert: boolean
  handleAlertClose: VoidFunction
}> = ({ openAlert, handleAlertClose }) => {
  return (
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
          background: "darkseagreen",
          fontSize: "1.1rem",
          textAlign: "center",

          height: "2.8rem",
          display: "flex",
          alignItems: "center",
          padding: "0 1rem",
        },
      }}
    />
  )
}

// lazy me, isolates casting shenanigans:
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

export const Graph = () => {
  const cyRef = useRef<cytoscape.Core>()
  const [openAlert, setOpenAlert] = useState(false)
  const { mode, inputNodes, setFocusNode, reset } = useExploreContext()

  const handleAlertClose = useCallback(
    () => setOpenAlert(false),
    [setOpenAlert]
  )

  if (!mode || !inputNodes) {
    // forces mode & inputNodes to
    // seem defined in typescript:
    throw new Error("Invalid state reached, cannot render Graph")
  }

  // stable reference:
  const [renderData] = useState(() =>
    getRenderData({
      nodes: inputNodes,
      mode: mode,
    })
  )

  const edgeCount = useMemo(() => {
    return renderData.filter((n) => !!n.data.source).length
  }, [renderData])

  useEffect(() => {
    const t = setTimeout(() => setOpenAlert(true), 300)
    return () => clearTimeout(t)
  }, [])

  // useRef to avoid linter issues
  // in the useEffect dependencies:
  const setFocus = useRef(setFocusNode)
  useEffect(() => {
    // ensure we don't go stale:
    setFocus.current = setFocusNode
  })

  useEffect(() => {
    if (cyRef.current) {
      const cy = cyRef.current

      // const handleSelect = (event: cytoscape.EventObject) => {
      //   // prevent event from propagating
      //   // to other graph event listeners:
      //   event.stopPropagation()
      //   const node = event.target
      //   const nodeId = node.id()
      //   setFocus.current(nodeId)
      // }

      const handleSelect = (event: cytoscape.EventObject) => {
        // Only proceed if there's a single touch point (not a pinch)
        if (
          event.originalEvent instanceof TouchEvent &&
          event.originalEvent.touches.length > 1
        ) {
          return // Ignore multi-touch events
        }

        // prevent event from propagating to other graph event listeners:
        event.stopPropagation()
        const node = event.target
        const nodeId = node.id()
        setFocus.current(nodeId)
      }

      // handle mobile device "clicks":
      cy.on("touchstart", "node", handleSelect)
      // regular mouse clicks:
      cy.on("click", "node", handleSelect)

      // background click:
      // cy.on("click", (event) => {
      //   if (event.target === cy) {
      //   }
      // })
    }
  }, [])

  const headerText =
    edgeCount > 0 ? (
      <>
        {mode} ({inputNodes[0]}
        {mode === "connection" && `, ${inputNodes[1]}`})
      </>
    ) : (
      <>
        {mode === "connection"
          ? `no connection found (${inputNodes[0]}, ${inputNodes[1]})`
          : `no ${mode} found (${inputNodes[0]})`}
      </>
    )

  return (
    <div className="graph-container">
      <ZoomAlert openAlert={openAlert} handleAlertClose={handleAlertClose} />

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
              const confirm = window.confirm(
                "Are you sure you want to leave this graph?"
              )
              if (confirm) {
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
        maxZoom={0.9}
        minZoom={0.1}
        layout={{
          name: "breadthfirst",
          avoidOverlap: true,
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
              color: "#fff",
              height: 105,
              width: 105,
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

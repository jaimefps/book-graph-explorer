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
      message={`${
        isMobile ? "Pinch" : "Scroll"
      } on the graph to zoom, or click on a node to read that entry in the book.`}
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

      let isDragging = false
      let startPosition = { x: 0, y: 0 }

      const handleTouchStart = (event: cytoscape.EventObject) => {
        if (
          event.originalEvent instanceof TouchEvent &&
          event.originalEvent.touches.length > 1
        ) {
          isDragging = false // Don't allow dragging during multi-touch
          return // Ignore multi-touch events
        }

        isDragging = true // Assume intent to drag unless proven otherwise
        startPosition = {
          x: event.position.x,
          y: event.position.y,
        } // Store the start position
        event.target.grabbed()
      }

      const handleTouchMove = (event: cytoscape.EventObject) => {
        if (isDragging) {
          event.target.emit("drag") // Emit drag event to allow dragging
        }
      }

      const handleTouchEnd = (event: cytoscape.EventObject) => {
        if (!isDragging) return

        const endPosition = {
          x: event.position.x,
          y: event.position.y,
        }

        const distanceMoved = Math.sqrt(
          Math.pow(endPosition.x - startPosition.x, 2) +
            Math.pow(endPosition.y - startPosition.y, 2)
        )

        const movementThreshold = 10 // Define a small threshold

        if (distanceMoved <= movementThreshold) {
          // If the movement was minimal, treat it as a tap
          const node = event.target
          const nodeId = node.id()
          setFocus.current(nodeId)
        }

        isDragging = false
      }

      // handle mobile device "clicks" and drag
      cy.on("touchstart", "node", handleTouchStart)
      cy.on("touchmove", "node", handleTouchMove)
      cy.on("touchend", "node", handleTouchEnd)

      // regular mouse clicks:
      cy.on("click", "node", (event) => {
        if (!isDragging) {
          // Only allow click if not dragging
          event.stopPropagation()
          const node = event.target
          const nodeId = node.id()
          setFocus.current(nodeId)
        }
      })
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
          spacingFactor: edgeCount > 50 ? 4 : edgeCount > 25 ? 3 : 2,
          directed: true,
          maximal: true,
          grid: true,
        }}
        style={{
          height: "calc(100% - var(--graph-controls-height))",
          background: "var(--dark-base)",
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
          {
            selector: "node[target]",
            style: {
              "background-color": "orange",
            },
          },
        ]}
      />
    </div>
  )
}

import { useEffect, useRef, useState } from "react"
import CytoscapeComponent from "react-cytoscapejs"
import { bookGraph, result } from "./lib/graph"
import Modal from "@mui/material/Modal"

const data = [
  { data: { id: "1", label: "1" }, grabbable: false },
  { data: { id: "2", label: "2" }, grabbable: false },
  { data: { id: "3", label: "3" }, grabbable: false },
  { data: { id: "4", label: "4" }, grabbable: false },
  { data: { source: "1", target: "2" } },
  { data: { source: "2", target: "3" } },
  { data: { source: "1", target: "3" } },
  { data: { source: "3", target: "4" } },
]

const MyApp = () => {
  const cyRef = useRef<cytoscape.Core>()
  const [lang, setlang] = useState<string>("la")
  const [focus, setFocus] = useState<string>()

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
      cy.on("click", (event) => {
        if (event.target === cy) {
          setFocus(undefined)
        }
      })

      // todo: double click for zoom?
    }
  }, [])

  return (
    <div className="container">
      <div className="graph-display">
        <CytoscapeComponent
          elements={result}
          cy={(cy) => {
            cyRef.current = cy
          }}
          layout={{
            name: "breadthfirst",
            directed: true,
            grid: true,
            // animate: true,
            // animationEasing: "ease-in-out-sine",
            nodeDimensionsIncludeLabels: true,
          }}
          style={{
            height: "100%",
          }}
          stylesheet={[
            {
              selector: "node",
              style: {
                label: "data(id)",
                "text-valign": "center",
                "text-halign": "center",
                color: "#fff",
                width: 75,
                height: 75,
              },
            },
            {
              selector: 'node[special = "true"].selected',
              style: {
                "background-color": "#FF5722", // Special background color for nodes with special attribute
              },
            },
            {
              selector: "node.selected",
              style: {
                "background-color": "#2196F3", // Color when selected (blue)
              },
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
      <div className="text-display">
        <div className="entry-title">{focus}</div>
        <div className="entry-text">
          {focus ? bookGraph.get(focus).text.la : ""}
        </div>
      </div>
    </div>
  )
}

export default MyApp

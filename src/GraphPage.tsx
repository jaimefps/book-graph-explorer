import "./GraphPage.css"
import { Page } from "./Page"
import { useState } from "react"
import { GraphMode } from "./types"
import { ModePicker } from "./ModePicker"
import { NodePicker } from "./NodePicker"
import { Graph } from "./Graph"

export const GraphPage = () => {
  const [mode, setMode] = useState<GraphMode>()
  const [nodes, setNodes] = useState<string[]>()

  // which states are defined and undefined
  // imply what page we are meant to be on:
  if (!mode) {
    return (
      <Page>
        <ModePicker setMode={setMode} />
      </Page>
    )
  }
  if (!nodes?.length) {
    return (
      <Page>
        <NodePicker
          mode={mode}
          setNodes={setNodes}
          reset={() => {
            setMode(undefined)
          }}
        />
      </Page>
    )
  }
  return (
    <Page>
      <Graph
        query={{
          mode,
          nodes,
        }}
        reset={() => {
          setMode(undefined)
          setNodes(undefined)
        }}
      />
    </Page>
  )
}

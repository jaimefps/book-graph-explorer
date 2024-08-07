import "./GraphPage.css"
import { Page } from "./Page"
import { useState } from "react"
import { GraphMode } from "./types"
import { ModePicker } from "./Modepicker"
import { NodePicker } from "./NodePicker"

export const GraphPage = () => {
  const [nodes, setNodes] = useState<string[]>()
  const [mode, setMode] = useState<GraphMode>()

  return (
    <Page>
      {(function () {
        // which states are defined and undefined
        // imply what page we are meant to be on:

        if (!mode) {
          return <ModePicker setMode={setMode} />
        }

        if (!nodes?.length) {
          return (
            <NodePicker
              mode={mode}
              setNodes={setNodes}
              reset={() => {
                setMode(undefined)
              }}
            />
          )
        }

        // if (mode && nodes?.length) {
        //   return (
        //     <GraphDisplay
        //       query={{
        //         mode,
        //         nodes,
        //       }}
        //       reset={() => {
        //         setMode(undefined)
        //         setNodes(undefined)
        //       }}
        //     />
        //   )
        // }

        return (
          <div>
            Oops! Something went wrong. We've been informed of the issue.
            Otherwise, we should have this fixed soon.
          </div>
        )
      })()}
    </Page>
  )
}

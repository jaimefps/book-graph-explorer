import "./GraphPage.css"
import { Page } from "./Page"
import { useState } from "react"
import { GraphMode } from "./types"
import { ModePicker } from "./Modepicker"

export const GraphPage = () => {
  const [nodes, setNodes] = useState<string[]>()
  const [mode, setMode] = useState<GraphMode>()

  return (
    <Page>
      {(function () {
        if (!mode) {
          return <ModePicker setMode={setMode} />
        }

        // if (!nodes?.length && mode) {
        //   return (
        //     <NodesPicker
        //       mode={mode}
        //       setNodes={setNodes}
        //       reset={() => {
        //         setMode(undefined)
        //       }}
        //     />
        //   )
        // }

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

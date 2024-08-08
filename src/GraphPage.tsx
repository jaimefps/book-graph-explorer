import "./GraphPage.css"
import { Page } from "./Page"
import { ModePicker } from "./ModePicker"
import { NodePicker } from "./NodePicker"
import { useExploreContext } from "./context/ExploreContext"
import { Graph } from "./Graph"

export const GraphPage = () => {
  const { mode, setMode, inputNodes, setInputNodes, reset } =
    useExploreContext()

  // which states are defined and undefined
  // imply what page we are meant to be on:
  if (!mode) {
    return (
      <Page>
        <ModePicker setMode={setMode} />
      </Page>
    )
  }
  if (!inputNodes?.length) {
    return (
      <Page>
        <NodePicker mode={mode} reset={reset} setNodes={setInputNodes} />
      </Page>
    )
  }
  return (
    <Page>
      <Graph
        query={{
          mode,
          nodes: inputNodes,
        }}
        reset={reset}
      />
    </Page>
  )
}

import React from "react"
import Slide from "@mui/material/Slide"
import Dialog from "@mui/material/Dialog"
import { TransitionProps } from "@mui/material/transitions/transition"
import { useExploreContext } from "./context/ExploreContext"
import "./BookModal.css"

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export const BookModal = () => {
  const { focusNode, setFocusNode } = useExploreContext()
  return (
    <Dialog
      fullScreen
      open={!!focusNode}
      onClose={() => setFocusNode(undefined)}
      TransitionComponent={Transition}
    >
      <button onClick={() => setFocusNode(undefined)}>close</button>
    </Dialog>
  )
}

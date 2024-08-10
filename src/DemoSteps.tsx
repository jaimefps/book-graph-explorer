import { Steps } from "intro.js-react"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDemo } from "./context/DemoContext"
import { useExploreContext } from "./context/ExploreContext"
import { isMobile } from "react-device-detect"

// demo selector:
function ds(demoId: string) {
  return `[data-demo="${demoId}"]`
}

const steps = [
  {
    // 0
    // target nothing as it starts
    intro: "welcome...blah blah",
  },
  {
    // 1
    element: ds("spinoza"),
    intro: "spinoza...blah blah",
  },
  {
    // 2
    element: ds("notation"),
    intro: "notation...blah blah",
  },
  {
    // 3
    element: ds("book-picker"),
    intro: "reader...blah blah",
  },
  {
    // 4
    element: ds("connection-picker"),
    intro: "graphs...blah blah",
  },
  {
    // 5
    element: ds("entry-pickers"),
    intro: "picker...blah blah",
  },
  {
    // 6
    element: ds("entry-preview-tabs"),
    intro: "previews...blah blah",
  },
  {
    // 7
    element: ds("submit-query"),
    intro: "here we go!...blah blah",
  },
  {
    // 8
    element: ds("query-details"),
    intro: "a graph has appeared...blah blah",
  },
  {
    // 9
    // intro.js can't select during transitions,
    // will need to try something else later:
    intro: "you can read...blah blah",
  },
  // {
  //   // 10
  //   element: ds("entry-header"),
  //   intro: "you can mark or fave...blah blah",
  // },
  // {
  //   // 11
  //   element: ds("entry-proofs"),
  //   intro: "jump to proof...blah blah",
  // },
  // {
  //   // 12
  //   element: ds("book-controls"),
  //   intro: "you can teleport...blah blah",
  // },
  // {
  //   // 13: trigger when small screen:
  //   element: ds("small-open-notes"),
  //   intro: "open notes...blah blah",
  // },
  // {
  //   // 14
  //   element: ds("book-notes"),
  //   intro: "notes form...blah blah",
  // },
  // {
  //   // 15
  //   element: ds("graph-controls"),
  //   intro: "you can fix & reset...blah blah",
  // },
  // {
  //   // 16
  //   element: ds("credits"),
  //   intro: "who and how...blah blah",
  // },
]

export const DemoSteps = () => {
  const navigate = useNavigate()
  const [stepNum, setStepNum] = useState(0)
  const { enabled, setEnabled, demoNodes } = useDemo()
  const { setMode, reset, setInputNodes, setOpenNotes, setFocusNode } =
    useExploreContext()

  const stepsRef = useRef<Steps>(null)

  useEffect(() => {
    if (enabled && stepsRef.current) {
      stepsRef.current.updateStepElement(stepNum)
      // @ts-ignore
      window._jaime = stepsRef.current?.introJs
    }
  }, [enabled, stepNum])

  return (
    <Steps
      options={{
        showProgress: true,
        showBullets: false,
        disableInteraction: true,
        exitOnOverlayClick: false,
      }}
      steps={steps}
      ref={stepsRef}
      enabled={enabled}
      initialStep={0}
      onBeforeChange={(idx, step) => {
        setStepNum(idx)
        if (idx === 0) {
          // do & undo
          navigate("/")
        }
        if (idx === 1) {
          // do & undo
          navigate("/about/spinoza")
        }
        if (idx === 2) {
          // do & undo
          navigate("/about/notation")
        }
        if (idx === 3) {
          // do & undo
          navigate("/explore")
        }

        if (idx === 4) {
          // undo 5
          setMode(undefined)
        }
        if (idx === 5) {
          // do
          setMode("connection")
        }
        if (idx === 7) {
          // undo 8
          setInputNodes(undefined)
        }
        if (idx === 8) {
          // undo 9
          setFocusNode(undefined)
          // do
          setInputNodes([demoNodes.from, demoNodes.to])
        }
        if (idx === 9) {
          // do
          setFocusNode(demoNodes.to)
        }

        // used for book modal:
        // if we need to skip or apply a step.
        const smallScreen = window.innerWidth < 850

        // // handle open notes:
        // if (small) {
        //   if (idx === 13) {
        //     // undo
        //     setOpenNotes(false)
        //   }
        //   if (idx === 14) {
        //     // do
        //     setOpenNotes(true)
        //   }
        // }

        // // handle going back to graph:
        // if (!small) {
        //   if (idx === 14) {
        //     // do
        //     setFocusNode(undefined)
        //     setOpenNotes(false)
        //   }
        // } else {
        //   if (idx === 15) {
        //     // do
        //     setFocusNode(undefined)
        //     setOpenNotes(false)
        //   }
        // }

        // // handle going to credits view:
        // if (!small) {
        //   if (idx === 15) {
        //     // do
        //     navigate("/about/credits")
        //   }
        // } else {
        //   if (idx === 16) {
        //     // do
        //     navigate("/about/credits")
        //   }
        // }
      }}
      onStart={() => {
        reset()
      }}
      onExit={() => {
        navigate("/")
        setEnabled(false)
        setStepNum(0)
        reset()
      }}
    />
  )
}

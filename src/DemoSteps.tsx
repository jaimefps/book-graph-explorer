import { Steps } from "intro.js-react"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDemoContext } from "./context/DemoContext"
import { useExploreContext } from "./context/ExploreContext"

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function waitForElementToLoad(
  selector: string,
  timeout = 3000,
  interval = 50
) {
  const startTime = Date.now()
  while (Date.now() - startTime < timeout) {
    const element = document.querySelector(selector)
    if (element) {
      return element
    }
    await new Promise((resolve) => setTimeout(resolve, interval))
  }
  throw new Error(
    `Element with selector "${selector}" did not load within ${timeout}ms`
  )
}

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
    // transitions seem to break:
    element: ds("book-entry-content"),
    intro: "you can read...blah blah",
  },
  {
    // 10
    element: ds("entry-header"),
    intro: "you can mark or fave...blah blah",
  },
  {
    // 11
    element: ds("entry-proofs"),
    intro: "jump to proof...blah blah",
  },
  {
    // 12
    element: ds("book-controls"),
    intro: "you can teleport...blah blah",
  },
  {
    // 13: only on small screens:
    element: ds("mobile-open-notes"),
    intro: "open notes...blah blah",
  },
  {
    // 14
    element: ds("book-notes"),
    intro: "notes form...blah blah",
  },
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
  const tourRef = useRef<Steps>(null)
  const { enabled, setEnabled, demoNodes } = useDemoContext()
  const { setMode, reset, setInputNodes, setOpenNotes, setFocusNode } =
    useExploreContext()

  // counter must start at null to know if prev is nothing:
  const [stepNum, setStepNum] = useState<null | number>(null)

  useEffect(() => {
    // induce
    if (enabled && tourRef.current) {
      tourRef.current.updateStepElement(stepNum ?? 0)

      // @ts-ignore
      window.jaime = tourRef.current.introJs
    }
  }, [enabled, stepNum])

  return (
    <Steps
      options={{
        showProgress: true,
        disableInteraction: true,
        exitOnOverlayClick: false,
      }}
      steps={steps}
      ref={tourRef}
      enabled={enabled}
      initialStep={0} // always from 0
      onAfterChange={(step) => {
        console.log("onafter", tourRef.current?.introJs._direction)
        if (step === 13) {
          const smallScreen = window.innerWidth < 850
          if (!smallScreen) tourRef.current?.introJs.nextStep()
        }
      }}
      onBeforeChange={async (step) => {
        // force resync:
        setStepNum(step)
        // for conditional steps:
        const smallScreen = window.innerWidth < 850

        if (step === 0) {
          // do & undo
          navigate("/")
        }
        if (step === 1) {
          // do & undo
          navigate("/about/spinoza")
        }
        if (step === 2) {
          // do & undo
          navigate("/about/notation")
        }
        if (step === 3) {
          // do & undo
          navigate("/explore")
        }

        if (step === 4) {
          // undo 5
          setMode(undefined)
        }
        if (step === 5) {
          // do
          setMode("connection")
        }
        if (step === 7) {
          // undo 8
          setInputNodes(undefined)
        }
        if (step === 8) {
          // undo 9
          setFocusNode(undefined)
          // do
          setInputNodes([demoNodes.from, demoNodes.to])
        }
        if (step === 9) {
          setFocusNode(demoNodes.to)
          await waitForElementToLoad(ds("book-entry-content"))
          await delay(500) // wait for transitions to finish
          tourRef.current?.updateStepElement(step)
        }

        if (step === 13) {
          if (smallScreen) {
            // undo 14
            setOpenNotes(false)
          }
        }

        if (step === 14) {
          if (smallScreen) {
            setOpenNotes(true)
            await waitForElementToLoad(ds("book-notes"))
            await delay(500) // wait for transition
            tourRef.current?.updateStepElement(step)
          }
        }

        // handle open notes:
        // if (smallScreen) {
        //   if (step === 13) {
        //     // undo
        //     setOpenNotes(false)
        //   }
        //   if (step === 14) {
        //     // do
        //     setOpenNotes(true)
        //   }
        // } else {
        //   // skip step based on nav direction:
        //   if (step < (prevNumRef.current ?? 0)) {
        //     // jump to 12
        //     tourRef.current?.introJs.goToStep(12)
        //   } else {
        //     // jump to 14
        //     tourRef.current?.introJs.goToStep(14)
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
        setStepNum(null)
        reset()
      }}
    />
  )
}

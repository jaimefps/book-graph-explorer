import { Steps } from "intro.js-react"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDemoContext } from "./context/DemoContext"
import { useExploreContext } from "./context/ExploreContext"
import { isMobile } from "react-device-detect"

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// demo selector:
function ds(demoId: string) {
  return `[data-demo="${demoId}"]`
}

const steps = [
  {
    // 0
    intro:
      "Welcome to a 1 min tour of the app. Just click 'next', and I'll take care of the rest.",
  },
  {
    // 1
    element: ds("spinoza"),
    intro:
      "If you don't know about Spinoza, I highly recommend you read a bit about him. You can start here on the 'about' tab, but let's move on to the features!",
  },
  {
    // 2
    element: ds("notation"),
    intro:
      "The 'about' tab also has a section explaining how we reference entries in Spinoza's Ethics. For example, e1p2 means Proposition 2 of Part 1 of the Ethics.",
  },
  {
    // 3
    element: ds("book-picker"),
    intro: "Over on the 'explore' tab, you can read the book...",
  },
  {
    // 4
    element: ds("connection-picker"),
    intro:
      "or better yet, you can illustrate the logical structure of the book. Let's try to find a connection between two entries!",
  },
  {
    // 5
    element: ds("entry-pickers"),
    intro:
      "Here you can pick what entries you want to illustrate via a logical dependency graph.",
  },
  {
    // 6
    element: ds("entry-preview-tabs"),
    intro: "You can preview any selected entries here.",
  },
  {
    // 7
    element: ds("submit-query"),
    intro: "And once you're satisfied, you can submit to generate.",
  },
  {
    // 8
    element: ds("query-details"),
    intro: `Woah, a graph has appeared! You can ${
      isMobile ? "pinch" : "scroll"
    } on the graph to zoom, drag the nodes around, or click any node to open the Reader for it.`,
  },
  {
    // 9
    // transitions seem to break:
    element: ds("book-entry-content"),
    intro:
      "When you click a node, you'll open the Reader where you can study that entry as well as...",
  },
  {
    // 10
    element: ds("entry-header"),
    intro: "thumb through entries, bookmark, or set your favorites.",
  },
  {
    // 11
    element: ds("entry-proofs"),
    intro:
      "You can also skip over to any of the proofs for this specific entry.",
  },
  {
    // 12
    element: ds("book-controls"),
    intro: "Or you can instantly navigate to any of the entries in the book.",
  },
  {
    // 13: only on small screens:
    element: ds("mobile-open-notes"),
    intro: "You can open the notes section here.",
  },
  {
    // 14
    element: ds("book-notes"),
    intro:
      "And take notes about the entry, which will be stored on your browser/device.",
  },
  {
    // 15
    element: ds("graph-controls"),
    intro:
      "If you close the book, you can continue exploring the graph, or reset to generate different graphs.",
    position: isMobile ? "bottom" : "left",
  },
  {
    // 16
    element: ds("about-me"),
    intro:
      "And this is me. Thanks for taking a look around. I hope you find this app useful. Bye!",
  },
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
    // induce syncs between steps:
    if (enabled && tourRef.current) {
      tourRef.current.updateStepElement(stepNum ?? 0)
    }
  }, [enabled, stepNum])

  useEffect(() => {
    // if user clicks back at any time during
    // the demo, we simply kill the demo:
    const handleBackButton = () => setEnabled(false)
    window.addEventListener("popstate", handleBackButton)
    return () => window.removeEventListener("popstate", handleBackButton)
  }, [setEnabled])

  return (
    <Steps
      options={{
        showProgress: true,
        showBullets: false,
        disableInteraction: true,
        exitOnOverlayClick: false,
      }}
      steps={steps}
      ref={tourRef}
      enabled={enabled}
      initialStep={0} // always from 0
      onAfterChange={(step) => {
        const smallScreen = window.innerWidth < 850
        if (step === 13 && tourRef.current?.introJs._direction === "forward") {
          if (!smallScreen) tourRef.current?.introJs.nextStep()
        }
        if (step === 13 && tourRef.current?.introJs._direction === "backward") {
          if (!smallScreen) tourRef.current?.introJs.previousStep()
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
          await delay(400) // wait for transitions to finish
          tourRef.current?.updateStepElement(step)
        }

        // how to open notes
        // on small screen:
        if (step === 13) {
          if (smallScreen) {
            // undo 14
            setOpenNotes(false)
          }
        }

        // where to take notes,
        // based on screen size:
        if (step === 14) {
          // undo 15
          if (tourRef.current?.introJs._direction === "backward") {
            setFocusNode(demoNodes.to)
            await delay(400) // transition
            tourRef.current?.updateStepElement(step)
          }

          if (smallScreen) {
            // do & undo
            setOpenNotes(true)
            await delay(400) // transition
            tourRef.current?.updateStepElement(step)
          }
        }

        if (step === 15) {
          // undo 16
          navigate("/explore")
          // do
          setFocusNode(undefined)
          setOpenNotes(false)
          tourRef.current?.updateStepElement(step)
        }

        if (step === 16) {
          // do
          navigate("/about/credits")
        }
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

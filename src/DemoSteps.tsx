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
      ref={stepsRef}
      enabled={enabled}
      initialStep={stepNum}
      steps={[
        {
          //0
          // target nothing as it starts
          intro: "welcome...blah blah",
        },
        {
          //1
          element: ds("spinoza"),
          intro: "spinoza...blah blah",
        },
        {
          //2
          element: ds("notation"),
          intro: "notation...blah blah",
        },
        {
          //3
          element: ds("book-picker"),
          intro: "book...blah blah",
        },
        {
          //4
          element: ds("connection-picker"),
          intro: "graphs...blah blah",
        },
        {
          //5
          element: ds("entry-pickers"),
          intro: "picker...blah blah",
        },
        {
          //6
          element: ds("entry-preview-tabs"),
          intro: "previews...blah blah",
        },
        {
          //7
          element: ds("submit-query"),
          intro: "here we go!...blah blah",
        },
        {
          //8
          element: ds("query-details"),
          intro: "a graph has appeared...blah blah",
        },
        {
          //9
          // intro.js can't select from drawer at the time it opens,
          // maybe remove transitions during demo and try again:
          intro: "you can read...blah blah",
        },
        {
          //10
          element: ds("entry-header"),
          intro: "you can mark or fave...blah blah",
        },
        {
          //11
          element: ds("entry-proofs"),
          intro: "jump to proof...blah blah",
        },
        {
          //12
          element: ds("book-controls"),
          intro: "you can teleport...blah blah",
        },
        // note sure how to skip via
        // onBeforeChange(), so this:
        ...(isMobile
          ? [
              {
                //13
                element: ds("mobile-open-notes"),
                intro: "open notes...blah blah",
              },
            ]
          : []),
        {
          // mobile(14) large(13)
          element: ds("book-notes"),
          intro: "notes form...blah blah",
        },
        {
          // mobile(15) large(14)
          element: ds("graph-controls"),
          intro: "you can fix & reset...blah blah",
        },
        {
          // mobile(16) large(15)
          element: ds("credits"),
          intro: "who and how...blah blah",
        },
      ]}
      onBeforeChange={(idx, step) => {
        setStepNum(idx)
        if (idx === 0) {
          navigate("/")
        }
        if (idx === 1) {
          navigate("/about/spinoza")
        }
        if (idx === 2) {
          navigate("/about/notation")
        }
        if (idx === 3) {
          navigate("/explore")
        }
        if (idx === 5) {
          setMode("connection")
        }
        if (idx === 8) {
          setInputNodes([demoNodes.from, demoNodes.to])
        }
        if (idx === 9) {
          setFocusNode(demoNodes.to)
        }
        if (isMobile) {
          if (idx === 14) {
            setOpenNotes(true)
          }
        }

        // handle going
        // back to graph:
        if (!isMobile) {
          if (idx === 14) {
            setOpenNotes(false)
            setFocusNode(undefined)
          }
        } else {
          if (idx === 15) {
            setOpenNotes(false)
            setFocusNode(undefined)
          }
        }

        // handle going to
        // credits view:
        if (!isMobile) {
          if (idx === 15) {
            navigate("/about/credits")
          }
        } else {
          if (idx === 16) {
            navigate("/about/credits")
          }
        }
      }}
      onStart={() => {
        reset()
      }}
      onExit={() => {
        navigate("/explore")
        setEnabled(false)
        setStepNum(0)
        reset()
      }}
    />
  )
}

import { Steps } from "intro.js-react"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDemo } from "./context/DemoContext"
import { useExploreContext } from "./context/ExploreContext"

export const DemoSteps = () => {
  const navigate = useNavigate()
  const { setMode, reset, setInputNodes } = useExploreContext()
  const { enabled, setEnabled, demoNodes } = useDemo()
  const [stepNum, setStepNum] = useState(0)

  const stepsRef = useRef<Steps>(null)

  useEffect(() => {
    if (enabled && stepsRef.current) {
      stepsRef.current.updateStepElement(stepNum)
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
          element: ".home-controls",
          intro: "welcome...blah blah",
        },
        {
          //1
          element: ".about-spinoza-col",
          intro: "spinoza...blah blah",
        },
        {
          //2
          element: ".about-notation",
          intro: "notation...blah blah",
        },
        {
          //3
          element: "#demo-book",
          intro: "book...blah blah",
        },
        {
          //4
          element: "#demo-connection",
          intro: "graphs...blah blah",
        },
        {
          //5
          element: ".node-picker-autocomplete-group",
          intro: "picker...blah blah",
        },
        {
          //6
          element: ".node-picker-entry-label-group",
          intro: "previews...blah blah",
        },
        {
          //7
          element: "#demo-submit",
          intro: "here we go!...blah blah",
        },
        {
          //8
          element: ".graph-header-text",
          intro: "a graph has appeared...blah blah",
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
      }}
      onStart={() => {
        reset()
      }}
      onExit={() => {
        setEnabled(false)
        setStepNum(0)
        reset()
      }}
    />
  )
}

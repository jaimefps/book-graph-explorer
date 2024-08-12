import { Steps } from "intro.js-react"
import React, { useContext, useRef, useState } from "react"

const demoNodes = {
  from: "e1def3",
  to: "e1p6cor",
} as const

const DemoContext = React.createContext<{
  enabled: boolean
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>
  demoNodes: typeof demoNodes
  tourRef: React.RefObject<Steps>
} | null>(null)

export const DemoProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [enabled, setEnabled] = useState(false)
  const tourRef = useRef<Steps>(null)
  return (
    <DemoContext.Provider
      value={{
        enabled,
        setEnabled,
        demoNodes,
        tourRef,
      }}
    >
      {children}
    </DemoContext.Provider>
  )
}

export const useDemoContext = () => {
  const value = useContext(DemoContext)
  if (!value) {
    throw new Error("Called useDemo outside of context")
  }
  return value
}

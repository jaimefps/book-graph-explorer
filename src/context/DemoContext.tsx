import React, { useContext, useState } from "react"

// todo: typescript
const DemoContext = React.createContext(null as any)

const demoNodes = {
  from: "e1def3",
  to: "e1p6cor",
}

export const DemoProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [enabled, setEnabled] = useState(false)

  return (
    <DemoContext.Provider
      value={{
        enabled,
        setEnabled,
        demoNodes,
      }}
    >
      {children}
    </DemoContext.Provider>
  )
}

export const useDemo = () => {
  const value = useContext(DemoContext)
  if (!value) {
    throw new Error("Called useDemo outside of context")
  }
  return value
}

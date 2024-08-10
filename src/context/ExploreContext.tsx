import { GraphMode, Translation } from "../types"
import React, { useCallback, useContext, useState } from "react"

const ExploreContext = React.createContext<{
  mode?: GraphMode
  setMode: React.Dispatch<React.SetStateAction<GraphMode | undefined>>
  focusNode?: string
  setFocusNode: React.Dispatch<React.SetStateAction<string | undefined>>
  inputNodes?: string[]
  setInputNodes: React.Dispatch<React.SetStateAction<string[] | undefined>>
  lang: Translation
  setLang: React.Dispatch<React.SetStateAction<Translation>>
  openNotes: boolean
  setOpenNotes: React.Dispatch<React.SetStateAction<boolean>>
  reset: VoidFunction
} | null>(null)

export const ExploreProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [mode, setMode] = useState<GraphMode>()
  const [focusNode, setFocusNode] = useState<string>()
  const [inputNodes, setInputNodes] = useState<string[]>()
  const [openNotes, setOpenNotes] = useState(false)
  const [lang, setLang] = useState<Translation>("en")

  const reset = useCallback(() => {
    setInputNodes(undefined)
    setFocusNode(undefined)
    setOpenNotes(false)
    setMode(undefined)
  }, [])

  return (
    <ExploreContext.Provider
      value={{
        mode,
        setMode,
        focusNode,
        setFocusNode,
        inputNodes,
        setInputNodes,
        lang,
        setLang,
        openNotes,
        setOpenNotes,
        reset,
      }}
    >
      {children}
    </ExploreContext.Provider>
  )
}

export const useExploreContext = () => {
  const value = useContext(ExploreContext)
  if (!value) {
    throw new Error("Called useExploreContext outside of context")
  }
  return value
}

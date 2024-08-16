import { GraphMode, Translation } from "../lib/types"
import React, { useCallback, useContext, useState } from "react"
import { useStorageContext } from "./StorageContext"

const ExploreContext = React.createContext<{
  mode?: GraphMode
  setMode: (n: GraphMode | undefined) => void
  focusNode?: string
  setFocusNode: (n: string | undefined) => void
  inputNodes?: string[]
  setInputNodes: (list: string[] | undefined) => void
  lang: Translation
  setLang: (lang: Translation) => void
  openNotes: boolean
  setOpenNotes: (b: boolean) => void
  reset: VoidFunction
} | null>(null)

export const ExploreProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const { storage, setLangStorage } = useStorageContext()
  const [mode, setMode] = useState<GraphMode>()
  const [focusNode, setFocusNode] = useState<string>()
  const [inputNodes, setInputNodes] = useState<string[]>()
  const [openNotes, setOpenNotes] = useState(false)

  // todo: start with english:
  const [lang, _setLang] = useState<Translation>(storage.lang ?? "es")

  const setLang = useCallback(
    (lang: Translation) => {
      setLangStorage(lang)
      _setLang(lang)
    },
    [setLangStorage]
  )

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

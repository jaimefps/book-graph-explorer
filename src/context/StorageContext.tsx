import React, { useCallback, useContext, useState } from "react"
import { GraphMode } from "../lib/types"

const STORAGE_KEY = "SPINOZA_IO_STORAGE"

type Storage = {
  bookmark: string | null
  favorites: { [k: string]: 1 }
  notes: {
    [k: string]: Array<{
      text: string
      // needed for uniqueness
      // in react mapped lists:
      createdAt: number
    }>
  }
  // was added later, so it is optional so
  // downstream code handles correctly:
  history?: Array<{
    mode: GraphMode
    inputNodes: string[]
    // needed for uniqueness
    // in react mapped lists:
    createdAt: number
  }>
}

const initStorage: Storage = {
  bookmark: null,
  favorites: {},
  notes: {},
  history: [],
}

const StorageContext = React.createContext<{
  storage: Storage
  setBookmark: (n: string) => void
  clearBookmark: () => void
  setFavorite: (n: string) => void
  clearFavorite: (n: string) => void
  addNote: (n: string, note: string) => void
  clearNote: (n: string, idx: number) => void
  pushHistory: (mode: GraphMode, inputNodes: string[]) => void
  removeHistory: (idx: number) => void
} | null>(null as any)

function saveStorage(payload: Storage) {
  const data = JSON.stringify(payload)
  window.localStorage.setItem(STORAGE_KEY, data)
}

function loadStorage(): Storage {
  const serial = window.localStorage.getItem(STORAGE_KEY)
  if (serial) {
    return JSON.parse(serial)
  } else {
    // If first time visiting app,
    // set the data for them:
    saveStorage(initStorage)
    return initStorage
  }
}

export const StorageProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [storage, _setStorage] = useState(loadStorage)

  // single point of entry to
  // write into localStorage:
  const handleStorage = useCallback((update: (data: Storage) => Storage) => {
    let result: Storage
    _setStorage((data) => {
      result = update(data)
      return result
    })
    // @ts-ignore
    if (!result) {
      throw new Error("Something went wrong during storage updates")
    }
    saveStorage(result)
  }, [])

  const setBookmark = useCallback(
    (node: string) => {
      handleStorage((prev) => ({
        ...prev,
        bookmark: node,
      }))
    },
    [handleStorage]
  )

  const clearBookmark = useCallback(() => {
    handleStorage((prev) => ({
      ...prev,
      bookmark: null,
    }))
  }, [handleStorage])

  const setFavorite = useCallback(
    (node: string) => {
      handleStorage((prev) => ({
        ...prev,
        favorites: {
          ...prev.favorites,
          [node]: 1,
        },
      }))
    },
    [handleStorage]
  )

  const clearFavorite = useCallback(
    (node: string) => {
      handleStorage((prev) => {
        delete prev.favorites[node]
        return {
          ...prev,
        }
      })
    },
    [handleStorage]
  )

  const addNote = useCallback(
    (node: string, note: string) => {
      handleStorage((prev) => {
        prev.notes[node] = [
          ...(prev.notes?.[node] ?? []),
          {
            createdAt: Date.now(),
            text: note,
          },
        ]
        return {
          ...prev,
        }
      })
    },
    [handleStorage]
  )

  const clearNote = useCallback(
    (node: string, clearIdx: number) => {
      handleStorage((prev) => {
        prev.notes[node] = prev.notes[node]?.filter(
          (_, itemIdx) => itemIdx !== clearIdx
        )
        return {
          ...prev,
        }
      })
    },
    [handleStorage]
  )

  const pushHistory = useCallback(
    (mode: GraphMode, inputNodes: string[]) => {
      handleStorage((prev) => {
        return {
          ...prev,
          history: [
            ...(prev.history ?? []),
            { mode, inputNodes, createdAt: Date.now() },
          ],
        }
      })
    },
    [handleStorage]
  )

  const removeHistory = useCallback(
    (idx: number) => {
      handleStorage((prev) => {
        return {
          ...prev,
          history: (prev.history ?? []).filter((_, n) => n !== idx),
        }
      })
    },
    [handleStorage]
  )

  return (
    <StorageContext.Provider
      value={{
        storage,
        setBookmark,
        clearBookmark,
        setFavorite,
        clearFavorite,
        addNote,
        clearNote,
        pushHistory,
        removeHistory,
      }}
    >
      {children}
    </StorageContext.Provider>
  )
}

export const useStorageContext = () => {
  const value = useContext(StorageContext)
  if (!value) {
    throw new Error("Called useStorage outside of context")
  }
  return value
}

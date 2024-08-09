import React, { useCallback, useContext, useState } from "react"

const STORAGE_KEY = "SPINOZA_IO_STORAGE"

type Storage = {
  bookmark: string | null
  favorites: { [k: string]: 1 }
  notes: { [k: string]: string[] }
}

const initStorage: Storage = {
  bookmark: null,
  favorites: {},
  notes: {},
}

const StorageContext = React.createContext<{
  storage: Storage
  setBookmark: (n: string) => void
  clearBookmark: () => void
  setFavorite: (n: string) => void
  clearFavorite: (n: string) => void
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

  const handleStorage = useCallback((update: (data: Storage) => Storage) => {
    let prev: Storage
    _setStorage((data) => {
      prev = data
      return update(data)
    })
    // @ts-ignore
    if (!prev) {
      throw new Error("Something went wrong during storage updates")
    }
    saveStorage(update(prev))
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
        return { ...prev }
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

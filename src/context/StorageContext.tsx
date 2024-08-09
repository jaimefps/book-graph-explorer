import React, { useCallback, useContext, useState } from "react"

const key = "SPINOZA_IO_STORAGE"

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

class StorageController {
  load(): Storage {
    const serial = window.localStorage.getItem(key)
    if (serial) {
      return JSON.parse(serial)
    } else {
      // If first time visiting app,
      // set the data for them:
      this.save(initStorage)
      return initStorage
    }
  }
  save(payload: Storage) {
    const data = JSON.stringify(payload)
    window.localStorage.setItem(key, data)
  }
}

export const StorageProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [controller] = useState(new StorageController())
  const [storage, _setStorage] = useState(controller.load)

  const handleStorage = useCallback(
    (update: (data: Storage) => Storage) => {
      let prev: Storage
      _setStorage((data) => {
        prev = data
        return update(data)
      })
      // @ts-ignore
      if (!prev) {
        throw new Error("Something went wrong during storage updates")
      }
      controller.save(update(prev))
    },
    [controller]
  )

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

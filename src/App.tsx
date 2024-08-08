import "./App.css"
import { AppBar } from "./AppBar"
import { BookModal } from "./BookModal"
import { Outlet } from "react-router-dom"
import { ExploreProvider } from "./context/ExploreContext"
import { StorageProvider } from "./context/StorateContext"

export const App = () => {
  return (
    <StorageProvider>
      <ExploreProvider>
        <div className="app-container">
          <AppBar />
          <Outlet />
          <BookModal />
        </div>
      </ExploreProvider>
    </StorageProvider>
  )
}

import { ExploreProvider } from "./context/ExploreContext"
import { Outlet } from "react-router-dom"
import { BookModal } from "./BookModal"
import { AppBar } from "./AppBar"
import "./App.css"

export const App = () => {
  return (
    <ExploreProvider>
      <div className="app-container">
        <AppBar />
        <Outlet />
        <BookModal />
      </div>
    </ExploreProvider>
  )
}

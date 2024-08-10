import "./App.css"
import { AppBar } from "./AppBar"
import { BookModal } from "./BookModal"
import { Outlet } from "react-router-dom"
import { ExploreProvider } from "./context/ExploreContext"
import { StorageProvider } from "./context/StorageContext"
import { DemoProvider } from "./context/DemoContext"
import { DemoSteps } from "./DemoSteps"

const Root = () => {
  return (
    <div className="app-container">
      <AppBar />
      <Outlet />
      <BookModal />
      <DemoSteps />
    </div>
  )
}

export const App = () => {
  return (
    <StorageProvider>
      <ExploreProvider>
        <DemoProvider>
          <Root />
        </DemoProvider>
      </ExploreProvider>
    </StorageProvider>
  )
}

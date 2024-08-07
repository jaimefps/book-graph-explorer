import { Outlet } from "react-router-dom"
import { AppBar } from "./AppBar"
import "./App.css"

export const App = () => {
  return (
    <div className="app-container">
      <AppBar />
      <Outlet />
    </div>
  )
}

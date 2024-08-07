import {
  Outlet,
  useNavigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom"
import { useEffect, useState } from "react"
import { GraphPage } from "./GraphPage"
import { Home } from "./Home"
import { App } from "./App"

const NoMatchRedirect = () => {
  const navigate = useNavigate()
  const [counter, setCounter] = useState(0)

  const limit = 5
  const diff = limit - counter

  useEffect(() => {
    const t = setInterval(() => {
      setCounter((n) => n + 1)
    }, 1000)
    return () => {
      clearInterval(t)
    }
  }, [])

  useEffect(() => {
    if (diff === 0) {
      navigate("/")
    }
  }, [counter, diff, navigate])

  if (diff === 0) {
    return null
  }

  return (
    <p className="invalid-url">
      This seems to be an invalid url... <br /> We'll redirect you back home in{" "}
      {diff} secs
    </p>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoMatchRedirect />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/graph",
        element: <GraphPage />,
      },
      {
        path: "/about",
        element: (
          <div>
            <div className="about-header">about</div>
            <div className="about-controls">controls</div>
            <Outlet />
          </div>
        ),
        children: [
          {
            path: "/about/author",
            element: <div>author</div>,
          },
        ],
      },
    ],
  },
  // {
  //   path: "/sandbox",
  //   element: (
  //     <div
  //       style={{
  //         background: "red",
  //         height: "100%",
  //       }}
  //     ></div>
  //   ),
  // },
])

export const Router = () => <RouterProvider router={router} />

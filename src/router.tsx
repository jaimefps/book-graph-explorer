import {
  useNavigate,
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom"
import { useEffect, useState } from "react"
import { GraphPage } from "./GraphPage"
import { HomePage } from "./HomePage"
import { App } from "./App"
import { AboutPage, Bio, Credits, Notation } from "./AboutPage"

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
        element: <HomePage />,
      },
      {
        path: "/explore",
        element: <GraphPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
        children: [
          {
            index: true,
            element: <Navigate to="/about/spinoza" />,
          },
          {
            path: "/about/spinoza",
            element: <Bio />,
          },
          {
            path: "/about/notation",
            element: <Notation />,
          },
          {
            path: "/about/credits",
            element: <Credits />,
          },
        ],
      },
    ],
  },
])

export const Router = () => <RouterProvider router={router} />

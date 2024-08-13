import "./alerting"
import ReactDOM from "react-dom/client"
// import reportWebVitals from "./reportWebVitals"
import { ErrorBoundary } from "react-error-boundary"
import WarningAmberIcon from "@mui/icons-material/WarningAmber"
import * as Sentry from "@sentry/browser"
import { Button } from "@mui/material"
import { Router } from "./router"
import "intro.js/introjs.css"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <ErrorBoundary
    fallbackRender={({ error, resetErrorBoundary }) => {
      Sentry.captureException(error, {
        tags: {
          source: "error-boundary",
          type: "full-crash",
        },
      })
      return (
        <div role="alert" className="error-fallback-container">
          <div className="error-fallback-icons">
            <WarningAmberIcon
              sx={{
                fontSize: "5rem",
              }}
            />
          </div>
          <p className="error-fallback-text">
            Oops! You found a bug. The owner has been notified. Please try
            refreshing the app. If the issue persists, the owner should have it
            fixed within the next 24hrs. Apologies for any inconvenience.
          </p>
          <Button
            size="small"
            variant="contained"
            onClick={() => window.location.reload()}
            sx={{
              textTransform: "none",
              fontSize: "1.2rem",
              padding: "0.2rem 1.2rem",
            }}
          >
            refresh
          </Button>
        </div>
      )
    }}
  >
    <Router />
  </ErrorBoundary>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()

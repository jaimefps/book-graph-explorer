import "./HomePage.css"
import { Page } from "./Page"
import { logAnalytics } from "./lib/analytics"
import { useNavigate } from "react-router-dom"
import { useDemoContext } from "./context/DemoContext"
import Button from "@mui/material/Button"

export const HomePage = () => {
  const { setEnabled } = useDemoContext()
  const navigate = useNavigate()

  return (
    <Page>
      <div className="home-container">
        <div className="home-foreground">
          <div className="home-brand-title">
            spinoza<span className="home-brand-io">.io</span>
          </div>
          <div className="home-brand-subtitle">a philosophy app</div>
          <div className="home-controls">
            <Button
              size="large"
              variant="outlined"
              onClick={() => {
                logAnalytics("tour-init")
                setEnabled(true)
              }}
              sx={{
                width: 200,
                fontWeight: "bold",
                textTransform: "none",
                borderColor: "darkseagreen",
                color: "darkseagreen",
                ":focus": {
                  borderColor: "darkseagreen",
                },
                ":hover": {
                  borderColor: "darkseagreen",
                },
              }}
            >
              walkthrough
            </Button>
            <Button
              size="large"
              variant="contained"
              onClick={() => {
                logAnalytics("explore-init")
                navigate("/explore")
              }}
              sx={{
                width: 200,
                fontWeight: "bold",
                textTransform: "none",
                background: "darkseagreen",
                color: "darkslategray",
                ":focus": { background: "darkseagreen" },
                ":hover": { background: "darkseagreen" },
              }}
            >
              get started
            </Button>
          </div>
        </div>
        <div className="home-background" />
      </div>
    </Page>
  )
}

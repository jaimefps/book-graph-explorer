import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"
import { useDemo } from "./context/DemoContext"
import { Page } from "./Page"
import "./HomePage.css"

export const HomePage = () => {
  const { setEnabled } = useDemo()
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
              Demo
            </Button>
            <Button
              size="large"
              variant="contained"
              onClick={() => {
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
              Get started
            </Button>
          </div>
        </div>
        <div className="home-background" />
      </div>
    </Page>
  )
}

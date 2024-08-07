import "./AppBar.css"
import { AppLink } from "./AppLink"
import Button from "@mui/material/Button"
import GitHubIcon from "@mui/icons-material/GitHub"
import { useMatch } from "react-router-dom"

const LinkButton: React.FC<{
  href: string
  icon: React.ReactNode
  children: React.ReactNode
}> = ({ children, icon, href }) => {
  return (
    <Button
      href={href}
      rel="noreferrer"
      target="_blank"
      startIcon={icon}
      className="app-bar-link"
      sx={{
        ":hover": {
          opacity: "0.6 !important",
        },
      }}
      // todo: move to css file?
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "none",
        background: "beige",
        color: "darkslategray",
        padding: "0 1rem",
        height: "2rem",
        opacity: 0.8,
      }}
    >
      <span className="appbar-link-text-large">{children}</span>
      <span className="appbar-link-text-small">&gt;</span>
    </Button>
  )
}

export const AppBar = () => {
  const onabout = useMatch("/about/*")
  const ongraph = useMatch("/graph/*")

  return (
    <div className="appbar-container">
      <div className="appbar-col">
        <div className="appbar-logo">
          <AppLink to="/">
            spinoza<span className="appbar-logo-io">.io</span>
          </AppLink>
        </div>
        <div className="appbar-graph">
          <AppLink
            to="/graph"
            style={{ fontWeight: ongraph ? "bold" : undefined }}
          >
            graph
          </AppLink>
        </div>
        <div className="appbar-about">
          <AppLink
            to="/about"
            style={{ fontWeight: onabout ? "bold" : undefined }}
          >
            about
          </AppLink>
        </div>
      </div>

      <div className="appbar-col">
        <div className="appbar-github">
          <LinkButton
            href="https://github.com/jaimefps/ethics-data"
            icon={<GitHubIcon fontSize="small" />}
          >
            book data
          </LinkButton>
        </div>
        <div className="appbar-support">
          <LinkButton
            href="https://buymeacoffee.com/jaimefps"
            icon={
              <img
                src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                alt="Buy me a coffee"
                style={{
                  height: "1rem",
                  boxShadow: "none",
                  border: "none",
                  verticalAlign: "middle",
                }}
              />
            }
          >
            buy me coffee
          </LinkButton>
        </div>
      </div>
    </div>
  )
}

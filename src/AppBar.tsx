import "./AppBar.css"
import { AppLink } from "./AppLink"
import Button from "@mui/material/Button"
import { useMatch } from "react-router-dom"
import AutoStoriesIcon from "@mui/icons-material/AutoStories"

const LinkExternal: React.FC<{
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
          opacity: "0.7 !important",
        },
      }}
      style={{
        background: "beige",
        textTransform: "none",
        color: "darkslategray",
        padding: "0 1rem",
        height: "2rem",
      }}
    >
      <span className="appbar-link-text-large">{children}</span>
      <span className="appbar-link-text-small">{icon}</span>
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
        <LinkExternal
          href="https://www.patreon.com/jaimefps"
          icon={
            <div className="appbar-patreon-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 436 476">
                <title>Patreon logo</title>
                <path
                  d="M436 143c-.084-60.778-47.57-110.591-103.285-128.565C263.528-7.884 172.279-4.649 106.214 26.424 26.142 64.089.988 146.596.051 228.883c-.77 67.653 6.004 245.841 106.83 247.11 74.917.948 86.072-95.279 120.737-141.623 24.662-32.972 56.417-42.285 95.507-51.929C390.309 265.865 436.097 213.011 436 143Z"
                  fill="red"
                ></path>
              </svg>
            </div>
          }
        >
          patreon
        </LinkExternal>
        <LinkExternal
          href="https://buymeacoffee.com/jaimefps"
          icon={
            <img
              className="bmc-icon"
              alt="Buy me a coffee"
              src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            />
          }
        >
          buy me coffee
        </LinkExternal>
        <LinkExternal
          href="https://github.com/jaimefps/ethics-data"
          icon={
            <AutoStoriesIcon fontSize="small" className="appbar-book-fix" />
          }
        >
          book data
        </LinkExternal>
      </div>
    </div>
  )
}

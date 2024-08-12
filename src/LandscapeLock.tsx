import "./LandscapeLock.css"
import ScreenLockLandscapeIcon from "@mui/icons-material/ScreenLockLandscape"
import StayCurrentLandscapeIcon from "@mui/icons-material/StayCurrentLandscape"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useDemoContext } from "./context/DemoContext"
import { useEffect } from "react"

export const LandscapeLock = () => {
  const { setEnabled } = useDemoContext()
  useEffect(() => setEnabled(false), [setEnabled])

  return (
    <div className="landscape-container-alert">
      <div className="landscape-container-alert-icons">
        <ScreenLockLandscapeIcon
          style={{
            fontSize: "6rem",
          }}
        />
        <ArrowForwardIcon
          style={{
            fontSize: "6rem",
          }}
        />
        <StayCurrentLandscapeIcon
          style={{
            fontSize: "6rem",
            transform: "rotate(90deg)",
            marginLeft: -16,
          }}
        />
      </div>
      <div>
        This app does not support landscape mode. To continue, please orient
        your device to portrait mode.
      </div>
    </div>
  )
}

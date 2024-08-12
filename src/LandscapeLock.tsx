import "./LandscapeLock.css"
import ScreenLockLandscapeIcon from "@mui/icons-material/ScreenLockLandscape"
import StayCurrentLandscapeIcon from "@mui/icons-material/StayCurrentLandscape"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useDemoContext } from "./context/DemoContext"
import { useEffect, useState } from "react"
import { isMobile } from "react-device-detect"

const useOrientation = () => {
  const [isLandscape, setIsLandscape] = useState(
    window.innerWidth > window.innerHeight
  )
  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return isLandscape && isMobile
}

export const LandscapeLock = () => {
  const { tourRef } = useDemoContext()
  const isLandscape = useOrientation()
  useEffect(() => {
    if (isLandscape) {
      tourRef.current?.introJs?.exit()
    }
  }, [tourRef, isLandscape])

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

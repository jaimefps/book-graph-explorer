import "./Page.css"
import ScreenLockLandscapeIcon from "@mui/icons-material/ScreenLockLandscape"
import StayCurrentLandscapeIcon from "@mui/icons-material/StayCurrentLandscape"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const Alert = () => {
  return (
    <div className="page-container-alert">
      <div className="page-container-alert-icons">
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
        This app does not work in landscape mode. To continue, please orient
        your device to portrait mode.
      </div>
    </div>
  )
}

export const Page: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div className="page-container">
      {children}
      <Alert />
    </div>
  )
}

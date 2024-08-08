import "./Page.css"
import ScreenLockLandscapeIcon from "@mui/icons-material/ScreenLockLandscape"
import StayCurrentLandscapeIcon from "@mui/icons-material/StayCurrentLandscape"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

export const Page: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div className="page-container">
      <div className="page-container-landscape">
        <p>
          This app does not work in landscape mode. To continue, please orient
          your device to portrait mode.
        </p>
        <div className="page-container-landscape-icons">
          <ScreenLockLandscapeIcon
            style={{
              fontSize: "5rem",
            }}
          />
          <ArrowForwardIcon
            style={{
              fontSize: "5rem",
            }}
          />
          <StayCurrentLandscapeIcon
            style={{
              fontSize: "5rem",
              transform: "rotate(90deg)",
            }}
          />
        </div>
      </div>
      {children}
    </div>
  )
}

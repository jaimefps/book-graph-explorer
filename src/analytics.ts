import { initializeApp } from "firebase/app"
import { getAnalytics, logEvent } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyAV3mstrd2fFqePNw9RKvCP3d-M5U2_dFk",
  authDomain: "deckbuilder-io.firebaseapp.com",
  projectId: "deckbuilder-io",
  storageBucket: "deckbuilder-io.appspot.com",
  messagingSenderId: "129183493208",
  appId: "1:129183493208:web:13c7beb00116adb677ee2d",
  measurementId: "G-L484JMLEY4",
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export function logAnalytics(event: string, memberId?: number) {
  if (process.env.NODE_ENV === "development") {
    return
  }
  logEvent(analytics, event, {
    page_path: window.location.pathname,
    memberId,
  })
}

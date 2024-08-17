import { initializeApp } from "firebase/app"
import { getAnalytics, logEvent } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyAOe62FSR6GEtVVEGPOercViAw3F76M8Ng",
  authDomain: "ethics-io.firebaseapp.com",
  projectId: "ethics-io",
  storageBucket: "ethics-io.appspot.com",
  messagingSenderId: "226845767166",
  appId: "1:226845767166:web:c70ed90f1454c6e54c3caf",
  measurementId: "G-PY8MVB11H9",
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

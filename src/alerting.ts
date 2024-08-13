import * as Sentry from "@sentry/react"

const env = process.env.NODE_ENV

Sentry.init({
  environment: env,
  enabled: env !== "development",
  dsn: "https://0deb014b6f4507ec4e82708b5e2d02c3@o4506995512246272.ingest.us.sentry.io/4507768386682880",
  integrations: [Sentry.browserTracingIntegration()],
  release: new Date().toDateString(),
  tracesSampleRate: 1.0,
  sampleRate: 1,
})

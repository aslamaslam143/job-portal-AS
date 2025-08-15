
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://510474056f5c3de9915edd9aac8183a6@o4509486265532416.ingest.us.sentry.io/4509489418862592",

  integrations: [Sentry.mongooseIntegration()],

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});
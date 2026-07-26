/**
 * PostHog project settings for oleafly.com.
 *
 * A `phc_…` project API key is public by design: it ships inside every client
 * bundle and only grants permission to write events. So it lives in the repo
 * and CI needs no extra secret. Set `PUBLIC_POSTHOG_KEY` in `.env` to override
 * it in a fork or a preview build; leave it empty to switch analytics off.
 */
export const POSTHOG_KEY =
  import.meta.env.PUBLIC_POSTHOG_KEY || "phc_nncfVG9fLxXLVVavQchvirTc9uVehJ3e7vcxugQFd3D7";

/** Event ingestion endpoint (PostHog Cloud US). */
export const POSTHOG_HOST = import.meta.env.PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

/** Dashboard origin. Only used so the PostHog toolbar links to the right app. */
export const POSTHOG_UI_HOST = "https://us.posthog.com";

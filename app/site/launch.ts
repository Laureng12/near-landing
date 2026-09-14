/* Whether Near is actually on the App Store.
   ------------------------------------------------------------------
   Apple has not approved the listing yet, so apps.apple.com returns a
   404 for our ID and the iTunes lookup API returns no result. Every
   download button on the site pointed at that dead page.

   While this is false, each CTA collects an email instead. Flip it to
   true the moment the listing goes live and every button on every page
   becomes a real App Store link again - this constant is the only
   place the decision is made. */
export const APP_IS_LIVE = false

export const APP_STORE_URL = "https://apps.apple.com/app/id6759834610"

/* Any CTA anywhere can raise this; the dialog in the nav listens for it. */
export const NOTIFY_EVENT = "near:notify"

export function openNotify(source: string) {
  window.dispatchEvent(new CustomEvent(NOTIFY_EVENT, { detail: { source } }))
}

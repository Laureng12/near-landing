/* Whether BoopThere is actually on the App Store.
   ------------------------------------------------------------------
   The listing is not public yet, so apps.apple.com returns a 404 for
   our ID and the iTunes lookup API returns no result. Every download
   button on the site pointed at that dead page.

   The site does not say why - visitors are told BoopThere is almost here
   and offered the list. It just never claims to be downloadable when
   it is not.

   While this is false, each CTA collects an email instead. Flip it to
   true the moment the listing goes live and every button on every page
   becomes a real App Store link again - this constant is the only
   place the decision is made. */
export const APP_IS_LIVE = false

// LINK-001 — BoopThere ships on the Heyo ASC spot (app 6821711186). The old
// 6759834610 was the original Near listing; the binary (com.risex.heyo) is on
// 6821711186, so every launch CTA + Smart App Banner must point here.
export const APP_STORE_URL = "https://apps.apple.com/app/id6821711186"

/* Any CTA anywhere can raise this; the dialog in the nav listens for it. */
export const NOTIFY_EVENT = "near:notify"

export function openNotify(source: string) {
  window.dispatchEvent(new CustomEvent(NOTIFY_EVENT, { detail: { source } }))
}

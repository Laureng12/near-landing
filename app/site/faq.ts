/* The homepage FAQ, in one place.
   ------------------------------------------------------------------
   It used to live twice: once in app/page.tsx for the FAQPage JSON-LD
   and once in app/HomePageClient.tsx for the accordion people read.
   They drifted - the rendered answer was corrected and the structured
   one kept telling search engines the old thing. Same failure as the
   App Store URL that lived in five files.

   Both now import this. */

export type FaqItem = { q: string; a: string }

export const faqItems: readonly FaqItem[] = [
  {
    q: "What is a location-based reminder?",
    a: "A task that waits at a place instead of a time. Near holds it quietly until you arrive at the store, the pharmacy, or your own front door, then shows it on your Lock Screen.",
  },
  {
    q: "How does Near know when I arrive somewhere?",
    a: "iPhone location services tell Near you have reached a place you saved. The geofence is handled by iOS on the device; Near simply surfaces what belongs there.",
  },
  {
    /* "Whoever is closest" was wrong. Near does not rank the household by
       proximity. routes/arrivals.ts counts pending tasks for the place
       household-wide, on the arriving member's own request, so the reminder
       fires for whoever actually gets there. */
    q: "Can Near share grocery lists with family members?",
    a: "Yes. A household shares one list, and anyone can add to it. Whoever reaches the store gets the reminder there, and when they check something off, everyone sees it.",
  },
  {
    q: "Does Near track my location?",
    a: "Near uses location to surface a task at the moment it matters, and never for advertising. Arrival detection runs on your iPhone. Saved places, tasks, and arrival events sync so reminders and household sharing work, and you can delete all of it at any time.",
  },
]

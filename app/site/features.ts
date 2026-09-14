/* The canonical feature matrix.
   ------------------------------------------------------------------
   Everything the site claims about what Near does, and who gets it,
   comes from this file. Change a plan here and both /pricing and
   /features change.

   Sourced from the product itself on 14 Sept 2026, not from what the
   site used to say. The site had been selling a middle tier that does
   not exist, pricing it wrong, and putting free capabilities behind
   Pro - voice capture and the whole Kroger engine among them.

   `availability` is the honest state, not the hopeful one:
     live        - shipping and sellable today
     dark        - built, but behind a flag that is off, so the site
                   must not advertise it
     unsellable  - built, but nobody can buy it yet

   Only `live` rows are ever rendered. */

export type Plan = "free" | "pro" | "together"
export type Availability = "live" | "dark" | "unsellable"

export type Capability = {
  id: string
  /* The exact words the site uses, so the pages cannot paraphrase apart. */
  name: string
  plan: Plan
  availability: Availability
  /* How we know. Written for whoever edits this next. */
  evidence: string
  /* Whether this is one of the bullets a pricing tier lists. Capabilities
     the site describes elsewhere are real rows without being bullets. */
  onPricing?: boolean
}

export const PLAN_LABEL: Record<Plan, string> = {
  free: "Free",
  pro: "Near Pro",
  together: "Near Together",
}

export const capabilities: Capability[] = [
  /* ── Free: the whole location, coordination and grocery engine ── */
  {
    id: "place-reminders",
    name: "Reminders that wait at the place",
    plan: "free",
    availability: "live",
    onPricing: true,
    evidence: "Core engine, free. Arrival rows in production; the `arrivals` remote flag is on.",
  },
  {
    id: "lock-screen",
    name: "Lock Screen alerts the moment you arrive",
    plan: "free",
    availability: "live",
    onPricing: true,
    evidence: "LiveActivityPushToken and LiveActivityStartToken hold rows.",
  },
  {
    id: "unlimited-everything",
    name: "Unlimited tasks, places and goals",
    plan: "free",
    availability: "live",
    onPricing: true,
    evidence: "No cap on the free tier.",
  },
  {
    id: "household-sharing",
    name: "Household sharing, and one grocery list",
    plan: "free",
    availability: "live",
    onPricing: true,
    evidence: "Household sharing and the consolidated grocery list are both free. Seat limits belong to Near Together, which is not sellable.",
  },
  {
    id: "kroger",
    name: "Kroger prices, aisle order, and one-tap cart",
    plan: "free",
    availability: "live",
    onPricing: true,
    evidence: "Account connect, aisles, prices, cart send, aisle sorting and price compare are all free. KrogerProductCache holds rows.",
  },
  {
    id: "voice-capture",
    name: "Add anything by voice",
    plan: "free",
    availability: "live",
    onPricing: true,
    evidence: "Free and uncapped, with recipe parse, capture and onboarding AI. Not a Pro AI path. VoiceCapture rows in production.",
  },
  {
    id: "meal-plan-free",
    name: "Three AI meal plans a month",
    plan: "free",
    availability: "live",
    onPricing: true,
    evidence: "Free tier gets 3/month. The cap is only enforced when AI_CAPS_ENFORCED is true; it otherwise fails open.",
  },
  {
    id: "activity-feed",
    name: "See what your household got done",
    plan: "free",
    availability: "live",
    onPricing: true,
    evidence: "24h partner activity feed is free. The rich feed belongs to Near Together.",
  },

  /* ── Pro: the AI brain and the prediction ───────────────────── */
  {
    id: "meal-plan-unlimited",
    name: "Unlimited AI meal plans and recipes",
    plan: "pro",
    availability: "live",
    onPricing: true,
    evidence: "Removes the 3/month cap. The metered Pro AI paths include meal-plan, weekly-plan, suggest-recipe and recipe-from-ingredients.",
  },
  {
    id: "predictive-restock",
    name: "Learns what you buy, and when you run out",
    plan: "pro",
    availability: "live",
    onPricing: true,
    evidence: "Predictive restocks. GroceryPattern and HouseholdObservationState hold rows.",
  },
  {
    id: "goal-breakdown",
    name: "Breaks a goal into the steps it actually takes",
    plan: "pro",
    availability: "live",
    onPricing: true,
    evidence: "Goal AI breakdown; breakdown-goal and breakdown-task are metered Pro AI paths.",
  },
  {
    id: "spending-insights",
    name: "Spending insights and receipts",
    plan: "pro",
    availability: "dark",
    evidence: "Built, but spendingInsightsEnabled = false. The in-app paywall correctly hides it, and so must the site - never advertise this until the flag is on.",
  },

  /* ── Near Together: built, nobody can buy it ────────────────── */
  {
    id: "together-seats",
    name: "Up to five household members",
    plan: "together",
    availability: "unsellable",
    evidence: "nearTogetherSeatsEnabled = false. The column is hidden in the live paywall and is kept off the site entirely.",
  },
  {
    id: "game-plan",
    name: "Multi-user game plan routing",
    plan: "together",
    availability: "unsellable",
    evidence: "Near Together feature, not purchasable. GamePlanAssignment exists with a full delegation lifecycle but holds zero rows. This is why the hero mock's 'Game plan - Optimal route for 3 stops' card is not rendered.",
  },
  {
    id: "household-equity",
    name: "Household equity dashboard",
    plan: "together",
    availability: "unsellable",
    evidence: "Near Together feature, not purchasable.",
  },

  /* ── Described on /features, not a pricing bullet ───────────── */
  {
    id: "passing-by",
    name: "Passing-place reminders",
    plan: "free",
    availability: "live",
    evidence: "Departure and VisitSignal rows.",
  },
]

const byId = new Map(capabilities.map((c) => [c.id, c]))

export function capability(id: string): Capability {
  const found = byId.get(id)
  if (!found) throw new Error(`Unknown capability: ${id}`)
  return found
}

/* The plan pill /features shows. Free needs no pill - it is the default,
   and most of Near is free. */
export function planPill(id: string): string | null {
  const c = capability(id)
  return c.plan === "free" ? null : PLAN_LABEL[c.plan]
}

export function isLive(id: string): boolean {
  return capability(id).availability === "live"
}

/* What /pricing lists under a tier. Only live rows: a flag that is off and a
   tier nobody can buy are both things the site must not sell. */
export function featuresFor(plan: Plan): string[] {
  return capabilities
    .filter((c) => c.plan === plan && c.onPricing && c.availability === "live")
    .map((c) => c.name)
}

/* Built but unsellable, for whoever picks this up next. Rendered nowhere. */
export function notSellable(): Capability[] {
  return capabilities.filter((c) => c.availability !== "live")
}

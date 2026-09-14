/* The canonical feature matrix.
   ------------------------------------------------------------------
   /features and /pricing used to describe different products: voice
   capture was the headline way in on one page and a Pro feature on the
   other, Meal Plan sat unlabelled in the main story, and the household
   section implied whole-house sharing where Free allows one person.

   Everything the site claims about what Near does, and who gets it,
   comes from this file. Change a plan here and both pages change.

   `availability` is the honest state, not the hopeful one:
     live        - confirmed working, with the evidence noted
     unconfirmed - the site has claimed it, but nobody has verified it
                   against the shipping app

   Anything marked `unconfirmed` is kept out of the hero product mock,
   because the mock is the site's proof and proof has to be real. */

export type Plan = "free" | "pro" | "pro-plus"
export type Availability = "live" | "unconfirmed"

export type Capability = {
  id: string
  /* The exact words the site uses, so the pages cannot paraphrase apart. */
  name: string
  plan: Plan
  availability: Availability
  /* How we know. Written for whoever edits this next. */
  evidence: string
  /* Whether this is one of the bullets a pricing tier lists. Capabilities the
     site describes elsewhere (passing-by reminders, the game plan) are real
     rows here but are not tier bullets. */
  onPricing?: boolean
}

export const PLAN_LABEL: Record<Plan, string> = {
  free: "Free",
  pro: "Near Pro",
  "pro-plus": "Near Pro+",
}

export const capabilities: Capability[] = [
  /* ── Free ────────────────────────────────────────────────── */
  {
    id: "place-reminders",
    name: "Reminders that wait at the place",
    plan: "free",
    availability: "live",
    evidence: "Arrival rows in production; the `arrivals` remote flag is on.",
    onPricing: true,
  },
  {
    id: "lock-screen",
    name: "Lock Screen alerts when you arrive",
    plan: "free",
    availability: "live",
    evidence: "LiveActivityPushToken and LiveActivityStartToken both hold rows.",
    onPricing: true,
  },
  {
    id: "grocery-departments",
    name: "Grocery lists grouped by department",
    plan: "free",
    availability: "live",
    evidence: "GroceryTrip rows in production.",
    onPricing: true,
  },
  {
    id: "text-capture",
    name: "Add anything by text",
    plan: "free",
    availability: "live",
    evidence: "Task rows in production.",
    onPricing: true,
  },
  {
    id: "share-one",
    name: "Share with one person",
    plan: "free",
    availability: "live",
    evidence: "HouseholdMember and HouseholdInvite rows. Free is one person; the house is Pro.",
    onPricing: true,
  },

  /* ── Pro ─────────────────────────────────────────────────── */
  {
    id: "meal-plan",
    name: "Meal plans built from what you actually cook",
    plan: "pro",
    availability: "live",
    evidence: "HouseholdMealPlan and HouseholdRecipe rows.",
    onPricing: true,
  },
  {
    id: "recipe-to-list",
    name: "Recipes that fill the grocery list for you",
    plan: "pro",
    availability: "live",
    evidence: "HouseholdRecipe rows alongside GroceryTrip.",
    onPricing: true,
  },
  {
    id: "routines",
    name: "Learns the routines you repeat",
    plan: "pro",
    availability: "live",
    evidence: "GroceryPattern and HouseholdObservationState rows.",
    onPricing: true,
  },
  {
    id: "voice-capture",
    name: "Add anything by voice",
    plan: "pro",
    availability: "live",
    evidence: "VoiceCapture rows in production.",
    onPricing: true,
  },
  {
    id: "household-unlimited",
    name: "Unlimited household sharing",
    plan: "pro",
    availability: "live",
    evidence: "Household and HouseholdMember rows; the limit is the plan, not the code.",
    onPricing: true,
  },

  /* ── Pro+ ────────────────────────────────────────────────── */
  {
    id: "aisle-order",
    name: "Grocery lists in aisle order",
    plan: "pro-plus",
    availability: "unconfirmed",
    evidence: "No table backs aisle ordering. Confirm against the app before promoting it further.",
    onPricing: true,
  },
  {
    id: "price-check",
    name: "Price check before you reach the register",
    plan: "pro-plus",
    availability: "live",
    evidence: "KrogerProductCache and BrandOffer rows.",
    onPricing: true,
  },
  {
    id: "pantry",
    name: "A pantry that stays current",
    plan: "pro-plus",
    availability: "live",
    evidence: "HouseholdPantryItem rows.",
    onPricing: true,
  },
  {
    id: "shared-pantry",
    name: "Shared household pantry",
    plan: "pro-plus",
    availability: "live",
    evidence: "HouseholdPantryItem is household-scoped.",
    onPricing: true,
  },
  {
    id: "priority-support",
    name: "Priority support",
    plan: "pro-plus",
    availability: "live",
    evidence: "An operational promise, not a code path.",
    onPricing: true,
  },

  /* ── Claimed on /features or in the hero mock ────────────── */
  {
    id: "passing-by",
    name: "Passing-place reminders",
    plan: "free",
    availability: "live",
    evidence: "Departure and VisitSignal rows.",
  },
  {
    id: "game-plan",
    name: "Game plan, and an optimal route across stops",
    plan: "free",
    availability: "unconfirmed",
    evidence:
      "GamePlanAssignment exists with a full delegation lifecycle but holds zero rows, and no table backs route optimisation at all. Shown in the hero mock until Sept 2026, when it was pulled pending confirmation. Set this to live and it comes back.",
  },
]

const byId = new Map(capabilities.map((c) => [c.id, c]))

export function capability(id: string): Capability {
  const found = byId.get(id)
  if (!found) throw new Error(`Unknown capability: ${id}`)
  return found
}

/* The plan pill /features shows. Free needs no pill - it is the default. */
export function planPill(id: string): string | null {
  const c = capability(id)
  return c.plan === "free" ? null : PLAN_LABEL[c.plan]
}

export function isLive(id: string): boolean {
  return capability(id).availability === "live"
}

/* What /pricing lists under a tier, in the order given above.

   This deliberately does NOT filter on availability. "unconfirmed" means
   nobody has checked it against the app yet, not that it is absent - quietly
   dropping a paid feature from the pricing page on that basis would be its
   own kind of dishonesty. Resolve the row instead. */
export function featuresFor(plan: Plan): string[] {
  return capabilities.filter((c) => c.plan === plan && c.onPricing).map((c) => c.name)
}

/* Anything the site has claimed but nobody has verified. Worth reading before
   the next marketing push. */
export function unconfirmed(): Capability[] {
  return capabilities.filter((c) => c.availability === "unconfirmed")
}

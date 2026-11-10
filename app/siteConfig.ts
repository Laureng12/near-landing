// Canonical marketing origin for metadata / robots / sitemap. Mirrors
// next.config.ts's BOOPSIE_CANONICAL gate so SEO stays in sync with the redirect
// canonical during the boopsie.app migration (audit B09). Flip by setting
// BOOPSIE_CANONICAL=1 in Vercel + redeploying; default = boopthere.com (no-op).
export const SITE_URL =
  process.env.BOOPSIE_CANONICAL === "1"
    ? "https://www.boopsie.app"
    : "https://www.boopthere.com";

import type { Model } from "./types";

export const models: Model[] = [
  {
    slug: "zero-to-one",
    index: "01",
    title: "Zero to One Dynamics",
    tagline: "Building non-consensus monopolies",
    philosophy:
      "Create new value instead of competing in crowded markets. The strongest businesses are the ones nobody else believes in yet — built on a secret, defended against competition, and engineered to capture most of the value they create.",
    core: [
      "Monopolies as the goal",
      "Non-consensus truths and secrets",
      "Proprietary technology and defensibility",
      "Creation over competition",
    ],
    keyFrameworks: [
      "Competition is for Losers",
      "Hard Tech First Principles",
      "Infrastructure Monopolies",
    ],
    epitomeFounders: [
      "peter-thiel",
      "palmer-luckey",
      "patrick-collison"
    ],
    color: "gold",
  },
  {
    slug: "product-intuition",
    index: "02",
    title: "Product & Design Intuition",
    tagline: "Working backwards from desire",
    philosophy:
      "Radical focus: eliminate options until only the obvious one remains. Start from what a customer genuinely wants, then design the whole experience end-to-end — saying no to everything that dilutes it.",
    core: [
      "Working backwards from the user",
      "The power of saying no",
      "End-to-end control of the experience",
      "Taste as a defensible asset",
    ],
    keyFrameworks: [
      "Working Backwards from UX",
      "Designing End-to-End Control",
      "The Power of Saying No",
    ],
    epitomeFounders: [
      "steve-jobs",
      "brian-chesky",
      "jony-ive"
    ],
    color: "gold",
  },
  {
    slug: "operational-moats",
    index: "03",
    title: "Operational Moats & Flywheels",
    tagline: "Compounding efficiency and long-term posture",
    philosophy:
      "Scale economics, relentless long-term thinking, and compound efficiency over short-term profits. The moat is not a single advantage — it is a flywheel of reinforcing loops that gets stronger every year you refuse to take the shortcut.",
    core: [
      "Flywheels and reinforcing loops",
      "Inversion and multi-disciplinary thinking",
      "Scale economics",
      "Long-term over short-term profit",
    ],
    keyFrameworks: [
      "The Day 1 Operating Posture",
      "Inversion & Multi-disciplinary Thinking",
      "Platform Moats & Acceleration",
    ],
    epitomeFounders: [
      "jeff-bezos",
      "charlie-munger",
      "jensen-huang"
    ],
    color: "gold",
  },
  {
    slug: "distribution",
    index: "04",
    title: "Frictionless Distribution & Scale",
    tagline: "Survival mechanics and network effects",
    philosophy:
      "Early businesses die from distribution, not vision. Recruit your first customers by hand, compress the distance between product and user, then let network effects and blitzscaling do the heavy lifting.",
    core: [
      "Do things that don't scale",
      "Product-market fit primacy",
      "Network effects",
      "Blitzscaling discipline",
    ],
    keyFrameworks: [
      "Do Things That Don't Scale",
      "Product-Market Fit Primacy",
      "Blitzscaling & Network Effects",
    ],
    epitomeFounders: [
      "paul-graham",
      "marc-andreessen",
      "reid-hoffman"
    ],
    color: "gold",
  },
  {
    slug: "bootstrapping",
    index: "05",
    title: "Bootstrapping & Organic Brand",
    tagline: "Capital efficiency and radical authenticity",
    philosophy:
      "Own your equity, keep the business small enough to stay fast, and let constraints become the brand. When you cannot outspend competitors, you out-imagine them — turning authenticity into an unfair advantage.",
    core: [
      "Capital efficiency",
      "Owning 100% of the upside",
      "Unconventional guerilla marketing",
      "Radical brand authenticity",
    ],
    keyFrameworks: [
      "Zero-VC Capital Efficiency",
      "Unconventional Guerilla Marketing",
      "Radical Brand Authenticity",
    ],
    epitomeFounders: [
      "sara-blakely",
      "yvon-chouinard",
      "ben-silbermann"
    ],
    color: "gold",
  },
  {
    slug: "paradigm-pivots",
    index: "06",
    title: "Paradigm Pivots & Resilience",
    tagline: "Surviving existential change",
    philosophy:
      "Markets do not care about your legacy. The paranoid survive because they treat success as a crisis in waiting — and when the paradigm shifts, they bet the company on the new world before the old one collapses.",
    core: [
      "Only the paranoid survive",
      "Bet-the-company hardware pivots",
      "Platform and paradigm transitions",
      "Turning failure into foundation",
    ],
    keyFrameworks: [
      "Only the Paranoid Survive",
      "Bet-the-Company Hardware Pivots",
      "SaaS / Cloud Paradigm Shifts",
    ],
    epitomeFounders: [
      "andy-grove",
      "jensen-huang",
      "marc-benioff"
    ],
    color: "gold",
  },
];

export const getModel = (slug: string): Model => {
  const m = models.find((x) => x.slug === slug);
  if (!m) throw new Error("Unknown model: " + slug);
  return m;
};

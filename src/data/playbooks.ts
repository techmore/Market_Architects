import type { Playbook } from "./types";

export const playbooks: Playbook[] = [
  {
    slug: "price-against-incumbents",
    title: "How to price against incumbents",
    problem:
      "You're smaller, newer, and cheaper-labelled than the established players. Every pricing instinct — undercut, match, discount — is a competitive move that hands the game to them.",
    models: ["zero-to-one", "operational-moats"],
    summary:
      "Stop pricing against competitors entirely. Price against a category the incumbents can't or won't serve, and use your smaller size to make quality the argument instead of price.",
    steps: [
      {
        title: "Stop benchmarking your price",
        body: "If your pricing starts with 'what do they charge', you're already competing. Start instead with what your best customer would pay to have their specific problem solved today.",
      },
      {
        title: "Find the niche incumbents ignore",
        body: "Incumbents are optimized for the mainstream. Pick the segment they serve badly (a neighborhood, a trade, a use-case) and make it your whole market. Thiel: own the small market first.",
        lecture: "thiel-competition",
      },
      {
        title: "Reframe price as the argument for quality",
        body: "If your price is at or above theirs, you must win on delivery. Pick one quality dimension (speed, guarantee, communication) and make it contractually better than the incumbent — then charge accordingly.",
        lecture: "jobs-iphone",
      },
      {
        title: "Build the 'apply this model' proof",
        body: "Write a one-paragraph comparison for each prospect: what they get from you that the incumbent structurally cannot offer. Hand it to them. You're selling the niche, not the price.",
      },
    ],
  },
  {
    slug: "focus-vs-diversify",
    title: "When to focus vs. diversify",
    problem:
      "Should you double down on your one good service, or add the second revenue stream everyone keeps suggesting? The wrong answer on either side can stall the business for a year.",
    models: ["product-intuition", "operational-moats"],
    summary:
      "Default to focus. Diversify only when the core is provably at capacity and the new offering shares the same flywheel — otherwise you're multiplying mediocrity instead of compounding depth.",
    steps: [
      {
        title: "Audit the core honestly",
        body: "Run the 1-to-10 star audit on your main offer's delivery. If any step scores below 6, you haven't earned diversification — fix the core first.",
        lecture: "chesky-design",
      },
      {
        title: "Define 'at capacity' before you diversify",
        body: "Write the number: revenue, bookings, or hours that mean the core is genuinely full. Diversify only past that threshold — otherwise you're diversifying to escape, not to grow.",
      },
      {
        title: "Only diversify into the same flywheel",
        body: "Ask: does the new service reuse your customers, your process, or your network? If it shares none of the three, it's a second startup you're funding with core profits.",
        lecture: "bezos-lex",
      },
      {
        title: "Say no to one category for a quarter",
        body: "Formally decline one 'obvious' expansion for 90 days and reinvest that attention in depth. Saying no is the decision, not a plan to say yes later.",
        lecture: "ive-lessons",
      },
    ],
  },
  {
    slug: "survive-cash-flow-crunch",
    title: "How to survive early cash-flow crunches",
    problem:
      "The orders come in, but the cash doesn't keep up — invoices at 60 days, payroll on Friday, and a runway measured in weeks. This is the phase that kills most small businesses.",
    models: ["bootstrapping", "distribution"],
    summary:
      "Cash-flow survival is a set of mechanics, not a mood: invoice faster, get paid upfront, cut every non-essential cost, and treat each customer as the manual source of the next dollar. Persistence, not brilliance, gets you through.",
    steps: [
      {
        title: "Compress the collection cycle",
        body: "Move to upfront deposits or milestone billing today. Every day of float you remove is a day of runway you add. Incentivize prompt payment and be aggressive on late payers.",
        lecture: "graham-dont-scale",
      },
      {
        title: "Cut the wrong costs first",
        body: "Kill subscriptions, software, and conveniences before touching service quality or marketing. Chouinard's rule: constraints are assets — a leaner business is a faster one.",
        lecture: "chouinard-sustainable",
      },
      {
        title: "Do the manual revenue work yourself",
        body: "This is the 'do things that don't scale' phase by definition: personally call every past customer, chase every invoice, and deliver work by hand. The founder doing the work is the cheapest growth engine.",
        lecture: "graham-dont-scale",
      },
      {
        title: "Pre-commit a survival plan",
        body: "Write the three actions you'll take if cash falls below one month of runway (cut, collect, convert). Pre-committing removes the panic decision when it happens.",
        lecture: "grove-interview",
      },
    ],
  },
  {
    slug: "when-your-market-shifts",
    title: "When your market shifts under you",
    problem:
      "A technology, regulation, or customer behavior change is quietly making your core offer obsolete. Denial is the default response — and the most expensive one.",
    models: ["paradigm-pivots", "operational-moats"],
    summary:
      "Treat every market shift as a strategic inflection point. Name the threat early, pre-commit to a kill threshold, and shift a piece of the business to the new paradigm before you feel the pain.",
    steps: [
      {
        title: "Name the inflection point in writing",
        body: "List the 10x forces that could change your market: automation, AI, regulation, a new competitor format, a customer generational shift. One sentence each. This list is your strategy.",
        lecture: "grove-interview",
      },
      {
        title: "Set a kill threshold in advance",
        body: "Pre-commit: if your core offer's new-client acquisition drops X% for two quarters, the model changes. Deciding now beats denying later.",
      },
      {
        title: "Bet a small slice on the new paradigm",
        body: "Shift one offering, one channel, or one pricing model to the new reality — Benioff's 'no software' move at small scale. Let the slice prove the pivot before you bet the company.",
        lecture: "benioff-cloud",
      },
      {
        title: "Build the resilience to survive the transition",
        body: "Huang's lesson: expect the pain, fund the runway, and keep the team aligned on survival. Suffering is the price of staying relevant.",
        lecture: "huang-resilience",
      },
    ],
  },
];

export const getPlaybook = (slug: string): Playbook => {
  const p = playbooks.find((x) => x.slug === slug);
  if (!p) throw new Error("Unknown playbook: " + slug);
  return p;
};

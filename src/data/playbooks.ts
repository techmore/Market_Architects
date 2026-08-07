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
        book: "zero-to-one",
      },
      {
        title: "Find the niche incumbents ignore",
        body: "Incumbents are optimized for the mainstream. Pick the segment they serve badly (a neighborhood, a trade, a use-case) and make it your whole market. Thiel: own the small market first.",
        book: "competitive-strategy",
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
        book: "good-to-great",
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
        book: "profit-first",
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
        book: "shoe-dog",
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
        book: "only-the-paranoid-survive",
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
  {
    slug: "hire-your-first-employee",
    title: "Hire your first employee",
    problem:
      "You're the bottleneck: every hour of your day is tied to doing the work, so you can't grow. But hiring wrong — or too early — can sink a business faster than staying small.",
    models: ["purpose-leadership", "operational-moats"],
    summary:
      "Hire only when the work is proven and repeatable, hire for the compounding skill not the role, and build the system around them so the business works without you in it.",
    steps: [
      {
        title: "Prove the work is repeatable first",
        body: "Before hiring, write the role's core process as if a stranger will do it. If you can't document it in a page, you're hiring to paper over a system gap — fix the system first.",
        book: "e-myth-revisited",
        lecture: "gerber-emyth",
      },
      {
        title: "Hire for the compounding skill",
        body: "Define the one ability that compounds over five years — craft, reliability, or taste — and filter strictly on it. A slow, excellent hire beats a fast, mediocre one every time.",
        lecture: "collison-blitzscaling",
      },
      {
        title: "Spend your first 90 days delegating, not supervising",
        body: "Drucker's discipline: give them a complete outcome and let them own it. The goal is to move yourself out of the role — not to supervise the role you kept.",
        lecture: "drucker-interview",
      },
      {
        title: "Build trust before you build headcount",
        body: "Lencioni's pyramid starts with trust. Run the vulnerability exercise and 'disagree and commit' from day one — a two-person team that can't argue honestly will fail at five.",
        lecture: "lencioni-dysfunctions",
      },
    ],
  },
  {
    slug: "retain-your-clients",
    title: "Retain clients so they don't churn",
    problem:
      "Every client you lose costs more than the one you gain — but most businesses spend their marketing budget on acquisition while churn silently eats the foundation.",
    models: ["operational-moats", "product-intuition"],
    summary:
      "Retention is a flywheel: make the experience remarkable, align incentives so the relationship compounds, and measure the scoreboard that catches churn before it happens.",
    steps: [
      {
        title: "Audit the experience to 10 stars",
        body: "Map the full journey — first call to renewal — and score each step 1-10. Fix every step below 6 before adding anything new. Chesky's ladder applies to service as much as software.",
        lecture: "chesky-design",
      },
      {
        title: "Align your incentives with their outcome",
        body: "Munger's prime mover: check that how you get paid rewards long-term client health, not short-term billing. If your pricing punishes retention, the churn is designed in.",
        lecture: "munger-misjudgment",
      },
      {
        title: "Put the scoreboard on the wall",
        body: "Pick the two retention metrics that matter (repeat rate, net revenue retention) and review them monthly, team-wide. Inattention to results dies when the results are visible.",
        lecture: "lencioni-dysfunctions",
      },
      {
        title: "Design the relationship to compound",
        body: "Bezos's flywheel for retention: better service → deeper trust → referrals → more capacity to serve. Find the loop that makes every year with a client cheaper and better.",
        lecture: "bezos-lex",
      },
    ],
  },
  {
    slug: "build-a-sales-process",
    title: "Turn sales into a process, not a personality",
    problem:
      "You close deals when you're on form and lose them when you're not. Gut-driven selling caps your growth at your own mood and makes the business impossible to scale.",
    models: ["distribution", "product-intuition"],
    summary:
      "A sales process is positioning plus a repeatable conversation: know exactly who you serve and what you refuse, then show — don't tell — so customers recognize themselves in your offer.",
    steps: [
      {
        title: "Define the trade-off you refuse",
        body: "Porter's test: write what you deliberately won't do or chase. A sales process needs a positioning spine — and 'we serve everyone' is the fastest way to close no one.",
        lecture: "porter-strategy",
      },
      {
        title: "Show, don't ask",
        body: "Gladwell's spaghetti-sauce lesson: customers can't tell you what they want, but they react honestly to options. Present 2-3 concrete offers and let them choose — the choice is the sales pitch.",
        lecture: "gladwell-spaghetti",
      },
      {
        title: "Mirror and label through the objection",
        body: "Voss's negotiation tools: repeat their last words, name the emotion, and use calibrated questions. Objections are information, not rejection — process them like data.",
        book: "never-split-the-difference",
      },
      {
        title: "Serve the smallest viable audience first",
        body: "Your best prospect is the narrow group that would miss you if you vanished. Go deep there before broad: deep wins in a niche beat shallow wins everywhere.",
        lecture: "godin-ideas-spread",
      },
    ],
  },
  {
    slug: "get-discovered-locally",
    title: "Get discovered in your local market",
    problem:
      "You do great work, but the phone doesn't ring — big competitors own the search results, the reviews, and the mindshare, and you're invisible by comparison.",
    models: ["distribution", "bootstrapping"],
    summary:
      "Local discovery is a manual, remarkable-first game: win the niche audience through word-of-mouth, gather proof aggressively, and let the slow organic curve compound into a reputation the big guys can't buy.",
    steps: [
      {
        title: "Do the manual recruiting yourself",
        body: "Graham's law applied locally: personally reach your first 20 customers, over-serve them, and ask each one 'what almost made you not hire us?' That feedback is your local product strategy.",
        lecture: "graham-dont-scale",
      },
      {
        title: "Make one thing worth remarking about",
        body: "Godin's purple cow: pick one detail — a guarantee, a response time, a process — that a customer would literally tell a neighbor about. Remarkable spreads; average doesn't.",
        book: "this-is-marketing",
        lecture: "godin-ideas-spread",
      },
      {
        title: "Engineer the proof engine",
        body: "Reviews are social proof — Cialdini's most powerful lever. Ask every happy customer for a review at the peak of their satisfaction, and put the best three on everything you publish.",
        book: "influence",
        lecture: "silbermann-pinterest",
      },
      {
        title: "Out-patience the paid competition",
        body: "You can't outspend them, so out-last them: a steady drip of genuine local content and referrals compounds while their ad budget runs out. Blakely won attention with persistence and story, not budget.",
        lecture: "blakely-origin",
      },
    ],
  },
];

export const getPlaybook = (slug: string): Playbook => {
  const p = playbooks.find((x) => x.slug === slug);
  if (!p) throw new Error("Unknown playbook: " + slug);
  return p;
};

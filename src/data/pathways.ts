import type { Pathway } from "./types";

export const pathways: Pathway[] = [
  {
    slug: "founder-journey",
    entry: "founders",
    title: "The Founder's Journey",
    audience: "Hear from great founders",
    estimated: "7 lectures · ~3 hours",
    intro:
      "The arc every great company actually takes — told by the founders who lived it. Start at the moment of conviction and walk to the day the flywheel starts turning. This is the 'hear from great founders' route: seven stops, each built around one iconic talk, in the order the story actually happens.",
    outcome:
      "You'll finish with the mental arc of how companies really get built — and an honest check of where yours sits on that arc.",
    steps: [
      {
        station: "Stop 01",
        title: "The moment of conviction",
        narrative:
          "Every great company begins with a problem someone refuses to ignore. Sara Blakely had $5,000, no credibility, and a pair of cut pantyhose — the conviction came first, the business followed. Before anything else, you need this.",
        lecture: "blakely-origin",
        book: "shoe-dog",
        model: "bootstrapping",
      },
      {
        station: "Stop 02",
        title: "Do what doesn't scale",
        narrative:
          "The first users never come from the funnel. Paul Graham's law: get your first twenty customers by hand, one at a time, and let that manual phase teach you what to automate. This is the founder's real market research.",
        lecture: "graham-dont-scale",
        model: "distribution",
      },
      {
        station: "Stop 03",
        title: "Design the thing they'll love",
        narrative:
          "With a few believers, turn the experience into the product. Brian Chesky's 10-star framework: design the whole journey, not the page. The gap between a 5-star and a 10-star experience is where your moat gets built.",
        lecture: "chesky-design",
        model: "product-intuition",
      },
      {
        station: "Stop 04",
        title: "Fall in love with the problem",
        narrative:
          "The founders who endure are the ones who love the problem more than the plan. Jobs's Stanford address is the reminder that setbacks (even being fired from your own company) are the setup for the next act — if you keep trusting the work.",
        lecture: "jobs-stanford",
        model: "product-intuition",
      },
      {
        station: "Stop 05",
        title: "The quarter everything breaks",
        narrative:
          "Every founder hits the quarter where the market shifts or the cash runs low. Grove built a company on surviving exactly this; Huang built NVIDIA by expecting it. Paranoia and resilience are not moods — they're strategy.",
        lecture: "grove-interview",
        model: "paradigm-pivots",
      },
      {
        station: "Stop 06",
        title: "Build the flywheel",
        narrative:
          "Survival turns into advantage when you find the compounding loop. Bezos drew Amazon's flywheel on a napkin: lower prices → more customers → more sellers → lower costs → repeat. Find your loop and run it for a decade.",
        lecture: "bezos-lex",
        model: "operational-moats",
      },
      {
        station: "Stop 07",
        title: "Keep the soul",
        narrative:
          "The last chapter is the hardest: keep the company's soul as it grows. Chouinard built a billion-dollar brand on purpose and constraint, and gave it away rather than sell out. The businesses that last are the ones that know what they're for.",
        lecture: "chouinard-sustainable",
        model: "bootstrapping",
      },
    ],
  },
  {
    slug: "ideas-explorer",
    entry: "ideas",
    title: "The Idea Explorer",
    audience: "Looking for new ideas",
    estimated: "9 lectures · ~4 hours",
    intro:
      "A guided tour of all 8 mental models in the order they build on each other — from competition to distribution, from the moat to the mindset. This is the 'looking for new ideas' route: each stop adds one framework you can steal for your own business, and by the end you'll have a complete mental map.",
    outcome:
      "A mental map of all 8 models — and at least one new idea you can apply this week.",
    steps: [
      {
        station: "Stop 01",
        title: "Competition is the loser's game",
        narrative:
          "The tour starts where every strategy should: with the decision to stop competing. Thiel's monopoly doctrine — own a niche completely before expanding — is the frame for everything that follows.",
        lecture: "thiel-competition",
        book: "zero-to-one",
        model: "zero-to-one",
      },
      {
        station: "Stop 02",
        title: "The cheap idea your rivals ignore",
        narrative:
          "Why do strong companies miss the future? Because the disruptive offer starts out cheap and ugly, serving a niche the incumbents dismiss. Christensen explains the process — and why the boring niche is often the smartest bet.",
        lecture: "christensen-measure-life",
        book: "innovators-dilemma",
        model: "zero-to-one",
      },
      {
        station: "Stop 03",
        title: "Distribution before perfection",
        narrative:
          "A great product nobody reaches is a hobby. Graham's rule: the early business is a distribution problem, solved by hand. Recruit users manually and let the manual phase teach you what to automate.",
        lecture: "graham-dont-scale",
        model: "distribution",
      },
      {
        station: "Stop 04",
        title: "There is no perfect product",
        narrative:
          "Gladwell's spaghetti-sauce lesson: markets are made of distinct tastes, and the winner offers plurality, not the average. Segmentation isn't a compromise — it's the path to sales and happiness.",
        lecture: "gladwell-spaghetti",
        book: "tipping-point",
        model: "distribution",
      },
      {
        station: "Stop 05",
        title: "The moat is a loop",
        narrative:
          "Now that you have customers, make them compound. Bezos's flywheel and Day 1 posture: build a loop where each rotation lowers the cost of the next. The moat is the loop itself.",
        lecture: "bezos-day1",
        model: "operational-moats",
      },
      {
        station: "Stop 06",
        title: "The moat is a mindset",
        narrative:
          "Bezos's loop runs on decisions — and decisions run on your brain. Munger's misjudgment checklist is the cognitive half of the moat: invert, fix incentives, and design against your own biases.",
        lecture: "munger-misjudgment",
        book: "thinking-fast-slow",
        model: "strategy-decision",
      },
      {
        station: "Stop 07",
        title: "Think clearly before you act",
        narrative:
          "The science behind Munger's checklists: Kahneman's two systems and the biases that own you. This stop is where the moat stops being strategy and becomes the ability to see reality straight.",
        lecture: "kahneman-fast-slow",
        model: "strategy-decision",
      },
      {
        station: "Stop 08",
        title: "Focus is the new scale",
        narrative:
          "Most businesses die of distraction, not competition. Newport's deep work: the scarce resource in the attention economy is unbroken concentration — and it's capped at about four hours a day. Protect yours.",
        lecture: "newport-deep-work",
        book: "deep-work",
        model: "execution-habits",
      },
      {
        station: "Stop 09",
        title: "The infinite game",
        narrative:
          "The tour ends where purpose begins. Sinek's why-first leadership is the frame that makes everything before it durable: the businesses that last are the ones people believe in. That belief is the real moat.",
        lecture: "sinek-start-with-why",
        book: "start-with-why",
        model: "purpose-leadership",
      },
    ],
  },
  {
    slug: "leadership-lab",
    entry: "founders",
    title: "The Leadership Lab",
    audience: "Hear from great founders",
    estimated: "5 lectures · ~2 hours",
    intro:
      "When your business outgrows just you, the bottleneck stops being the product and becomes the people. This route is a focused lab on leadership — five talks that build from purpose to trust to leading through the crash.",
    outcome:
      "Five leadership frameworks you can run with your team this month — trust, purpose, and crisis.",
    steps: [
      {
        station: "Stop 01",
        title: "Start with why",
        narrative:
          "Leadership begins with the reason people would follow you beyond the paycheck. Sinek's Golden Circle is the fastest way to check whether your business has a belief worth following.",
        lecture: "sinek-start-with-why",
        book: "start-with-why",
        model: "purpose-leadership",
      },
      {
        station: "Stop 02",
        title: "Courage to be seen",
        narrative:
          "Trust is built by leaders willing to be vulnerable — to show up without knowing the outcome. Brown's research is the evidence base for why armor (perfectionism, cynicism) is the real leadership cost.",
        lecture: "brown-vulnerability",
        book: "dare-to-lead",
        model: "purpose-leadership",
      },
      {
        station: "Stop 03",
        title: "The trust pyramid",
        narrative:
          "With courage modeled, build the team's operating system. Lencioni's pyramid: trust → productive conflict → commitment → accountability → results. Fix the base and everything above unlocks.",
        lecture: "lencioni-dysfunctions",
        book: "five-dysfunctions",
        model: "purpose-leadership",
      },
      {
        station: "Stop 04",
        title: "Habits of the leader",
        narrative:
          "Leadership is also personal effectiveness. Covey's first habit — be proactive — is where the leader's own behavior becomes the team's standard. The space between stimulus and response is where you lead from.",
        lecture: "covey-be-proactive",
        book: "seven-habits",
        model: "purpose-leadership",
      },
      {
        station: "Stop 05",
        title: "Lead through the crash",
        narrative:
          "The lab's exam: leading when it all breaks. Grove's paranoia is the anti-complacency operating system — the leader's job at the inflection point is to confront reality before the market does.",
        lecture: "grove-interview",
        model: "paradigm-pivots",
      },
    ],
  },
  {
    slug: "survival-path",
    entry: "ideas",
    title: "The Small Business Survival Path",
    audience: "Looking for new ideas",
    estimated: "5 stops · problem-driven",
    intro:
      "The most useful route in the library if you have a problem and not a philosophy. Four real small-business problems, each wired to the playbook that solves it and the lectures that give it teeth. Start with whichever problem is keeping you up tonight.",
    outcome:
      "Four problem-based playbooks, wired to the lectures that solve them — applied to your specific business.",
    steps: [
      {
        station: "Problem 01",
        title: "Price against the giants",
        narrative:
          "You're smaller and cheaper-labelled — but pricing against incumbents is a game you lose. Own a niche they ignore, and let quality be the argument. The playbook walks it, Thiel supplies the theory.",
        lecture: "thiel-competition",
        playbook: "price-against-incumbents",
        model: "zero-to-one",
      },
      {
        station: "Problem 02",
        title: "Cash is the king",
        narrative:
          "Orders come in, cash doesn't keep up. The cash-flow crunch is a mechanics problem, not a mood: invoice faster, get paid upfront, and do the manual revenue work yourself. Graham is the founder for this stop.",
        lecture: "graham-dont-scale",
        playbook: "survive-cash-flow-crunch",
        model: "bootstrapping",
      },
      {
        station: "Problem 03",
        title: "Focus or diversify?",
        narrative:
          "Double down on the one thing, or add the second revenue stream? Default to focus — and only diversify when the core is at capacity and the new line shares the flywheel. Chesky's 10-star audit is the decision tool.",
        lecture: "chesky-design",
        playbook: "focus-vs-diversify",
        model: "product-intuition",
      },
      {
        station: "Problem 04",
        title: "The market just shifted",
        narrative:
          "A technology, regulation, or customer change is quietly making your core offer obsolete. Denial is the expensive default. Name the inflection, pre-commit a kill threshold, and bet a small slice on the new world.",
        lecture: "grove-interview",
        playbook: "when-your-market-shifts",
        model: "paradigm-pivots",
      },
      {
        station: "Problem 05",
        title: "Marketing that actually spreads",
        narrative:
          "When the survival basics are handled, growth comes from remarkable, not loud. Godin's smallest viable audience is the final piece: find the tribe, serve them impossibly well, and let them spread it.",
        lecture: "godin-ideas-spread",
        book: "this-is-marketing",
        model: "distribution",
      },
    ],
  },
];

export const getPathway = (slug: string): Pathway => {
  const p = pathways.find((x) => x.slug === slug);
  if (!p) throw new Error("Unknown pathway: " + slug);
  return p;
};

export const pathwaysByEntry = (entry: "ideas" | "founders"): Pathway[] =>
  pathways.filter((p) => p.entry === entry);

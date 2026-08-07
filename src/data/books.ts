import type { Book } from "./types";

export const books: Book[] = [
  {
    slug: "zero-to-one",
    title: "Zero to One",
    author: "Peter Thiel with Blake Masters",
    year: 2014,
    model: "zero-to-one",
    rating: 4.5,
    cover: "gold",
    blurb: "How to build the future by creating new things rather than copying what works.",
    review:
      "The cleanest modern statement of the monopoly doctrine. Thiel argues that a startup's job is to create a small, defensible monopoly and that most business success comes not from market size but from escaping competition. Chapters on secrets, technology, and the value of contrarian thinking make it the most re-readable strategy book of the decade — not because every chapter applies to a local service business, but because its core question — 'what valuable company is nobody building?' — is the right first question for any founder.",
    takeaways: [
      "Competition destroys value; monopoly captures it. Aim to be the only one who can do what you do.",
      "A great company starts with a secret — a truth few people agree with.",
      "Own your niche completely before expanding. Small market, then scale.",
    ],
    whyItMatters:
      "Read it before you price, position, or pick a market. It will force you to stop benchmarking against competitors and start defending a position only you can hold.",
  },
  {
    slug: "poor-charlies-almanack",
    title: "Poor Charlie's Almanack",
    author: "Charles T. Munger",
    year: 2005,
    model: "operational-moats",
    rating: 5,
    cover: "clay",
    blurb: "The wit and wisdom of the man who taught Warren Buffett to think in mental models.",
    review:
      "Munger's collected talks are the best single volume on how to think about business without fooling yourself. The centerpiece, 'The Psychology of Human Misjudgment', walks through two dozen biases and, crucially, what to do about them — invert, use checklists, and fix incentives first. It is dense and eccentric, and it is the most durable thinking-operating-system in this library.",
    takeaways: [
      "Invert: assume you'll fail and reason backwards to the causes, then design them out.",
      "Incentives are the prime mover of behavior — change the incentive, not the person.",
      "Build a latticework of mental models across disciplines, not just your own.",
    ],
    whyItMatters:
      "For a solo operator with no CFO and no board, Munger is the anti-mistake machine. Read it to build the checklists that keep small businesses from making the obvious, fatal errors.",
  },
  {
    slug: "only-the-paranoid-survive",
    title: "Only the Paranoid Survive",
    author: "Andrew S. Grove",
    year: 1996,
    model: "paradigm-pivots",
    rating: 4.5,
    cover: "ink",
    blurb: "How to recognize and survive the strategic inflection points that kill companies.",
    review:
      "Grove wrote the definitive book on corporate crisis, distilled from Intel's bet-the-company exit from memory chips. The framing — strategic inflection points, the '10x' forces, and the CEO's job of confronting reality before the market does — applies with eerie precision to small businesses facing AI, regulation, or a category shift. The writing is plain and honest, and the paranoia is not pessimism: it is the discipline of planning for the version of the future you don't want.",
    takeaways: [
      "When the rules change, the best company under the old rules dies first — unless it pivots.",
      "Name your likely inflection points in advance and argue the data against consensus.",
      "A CEO's highest-value act is confronting uncomfortable reality early.",
    ],
    whyItMatters:
      "The one book in this library about survival. If your industry feels like it's shifting, read it before you feel the pain — that is exactly the point.",
  },
  {
    slug: "lean-startup",
    title: "The Lean Startup",
    author: "Eric Ries",
    year: 2011,
    model: "distribution",
    rating: 4,
    cover: "green",
    blurb: "Build-measure-learn and the science of getting a product to market cheaply.",
    review:
      "Ries systematized what Graham preached: run your company as a series of cheap experiments. The build-measure-learn loop and the MVP are now so standard they've been absorbed into the language, but the discipline — writing down your hypothesis before you build, and letting the data kill it — remains the most reliable antidote to founder optimism for any sized business.",
    takeaways: [
      "Treat every new offer as a testable hypothesis, not a decision made.",
      "Ship the smallest thing that teaches you something real, then iterate.",
      "Focus on validated learning: measure what customers actually do, not what they say.",
    ],
    whyItMatters:
      "A local service or indie product can't afford a wrong big bet. The Lean Startup is the budget-friendly method for de-risking new offerings.",
  },
  {
    slug: "blitzscaling",
    title: "Blitzscaling",
    author: "Reid Hoffman & Chris Yeh",
    year: 2018,
    model: "distribution",
    rating: 4,
    cover: "blue",
    blurb: "The lightning-fast path to massive scale — and when to deliberately take it.",
    review:
      "Hoffman's case for prioritizing speed over efficiency, with the honest caveat that it's only right for winner-take-all markets. The frameworks — the five stages of growth, the 'ugly growth' trade-offs, and knowing when to stop — are genuinely useful, and the book's self-awareness (it warns against its own advice) keeps it from being a hype vehicle. For most small businesses the answer is 'don't blitzscale'; reading it teaches you why, and how to tell when you should.",
    takeaways: [
      "Speed beats efficiency when the market is a network-effect race.",
      "Blitzscaling is a calculated risk: define your stop condition before you start.",
      "Not every market is a speed game — choosing wrongly is fatal.",
    ],
    whyItMatters:
      "The definitive 'should I grow as fast as possible?' manual, with the counter-case built in.",
  },
  {
    slug: "let-my-people-go-surfing",
    title: "Let My People Go Surfing",
    author: "Yvon Chouinard",
    year: 2005,
    model: "bootstrapping",
    rating: 4.5,
    cover: "green",
    blurb: "The education of a reluctant businessman and the company built on purpose.",
    review:
      "Part memoir, part manifesto, entirely unorthodox. Chouinard built a billion-dollar company while refusing most of the conventions of one — no debt, no marketing department, no growth target — and the book makes the case that constraints are a creative engine. It's the gentlest volume in this library and one of the most radical: it asks whether the point of a business is to grow, or to do something well for a long time.",
    takeaways: [
      "Quality and durability create loyalty no ad budget can buy.",
      "Refuse the compromises your industry accepts; make the refusal your identity.",
      "Own your growth — debt and outside capital buy you speed but sell you control.",
    ],
    whyItMatters:
      "The antidote to growth-at-all-costs. Read it when you feel pressure to scale or raise, or when you're not sure what your company is actually for.",
  },
  {
    slug: "creative-selection",
    title: "Creative Selection",
    author: "Ken Kocienda",
    year: 2018,
    model: "product-intuition",
    rating: 4.5,
    cover: "ink",
    blurb: "Inside Apple's design process during the original iPhone.",
    review:
      "An engineer's insider account of how the iPhone keyboard, autocorrect, and Safari were actually made — and the clearest available window into Apple's method: demo early and often, throw away your favorites, and let taste, not committee, make the final call. Kocienda distills the 'creative selection' loop into a transferable process any team can run, without a design celebrity in the room.",
    takeaways: [
      "Get working demos in front of people constantly; feel the reaction, then revise.",
      "Be willing to delete your best work if a better alternative appears.",
      "Great software comes from small teams with taste and the time to iterate.",
    ],
    whyItMatters:
      "The most practical 'how do I actually do product craft' book here — a real process you can copy on Monday.",
  },
  {
    slug: "hard-thing-about-hard-things",
    title: "The Hard Thing About Hard Things",
    author: "Ben Horowitz",
    year: 2014,
    model: "paradigm-pivots",
    rating: 4.5,
    cover: "clay",
    blurb: "Building a business when there are no easy answers.",
    review:
      "The most honest book in the library about the actually-existing life of a founder: layoffs, cash crunches, demotivated teams, decisions where every option is bad. Horowitz writes from experience rather than theory, and his guidance — take the best available option, tell the truth, and keep the company alive long enough to win — reads as blunt counsel from someone who's been through it. It is the operational companion to the grander strategy books.",
    takeaways: [
      "When every option is bad, take the best available one and move — leadership is action under uncertainty.",
      "Telling the hard truth (to team, customers, yourself) is a competitive advantage.",
      "The 'struggle' is normal: the goal is survival and learning, not a clean path.",
    ],
    whyItMatters:
      "Read it in the quarters that feel like they're going wrong. It's the closest thing to having a battle-tested operator on call.",
  },
  {
    slug: "seven-powers",
    title: "7 Powers",
    author: "Hamilton Helmer",
    year: 2016,
    model: "operational-moats",
    rating: 4.5,
    cover: "gold",
    blurb: "The foundations of business strategy — the seven structural sources of advantage.",
    review:
      "Helmer gives the fuzzy concept of the 'moat' an actual taxonomy: scale economies, network economies, counter-positioning, switching costs, branding, cornered resources, and process power. The value of the book is diagnostic — it gives you a language to ask which of the seven your business actually has, and which it could plausibly build. Dense and framework-heavy, but it rewards the second read with real clarity on why some small businesses compound and others stall.",
    takeaways: [
      "A power is an advantage so structural that it persists even without heroic effort.",
      "Counter-positioning: the new player's model is impossible for the incumbent to copy without cannibalizing.",
      "Build at least one power deliberately; most businesses have none and don't know it.",
    ],
    whyItMatters:
      "The tool for answering 'what's actually defensible here?' — the question every small-business owner should be able to answer in one sentence.",
  },
  {
    slug: "shoe-dog",
    title: "Shoe Dog",
    author: "Phil Knight",
    year: 2016,
    model: "bootstrapping",
    rating: 5,
    cover: "clay",
    blurb: "The memoir of the founder of Nike and the long, ugly grind before the success.",
    review:
      "Knight's memoir is the best-written book in this library and the best counterweight to the 'overnight unicorn' mythology. Blue Ribbon was a shoebox company for a decade — cash crunches, failed banks, near-bankruptcy, shipped-by-hand shoes — and the lesson is that survival is the strategy. The war stories of financing rounds and factory disasters are precisely the 'early cash-flow crunch' material small businesses live.",
    takeaways: [
      "Most great companies look hopeless for years; persistence is a moat.",
      "Cash-flow survival skills — grinding invoices, juggling vendors — are founder core competencies.",
      "Belief in the product carries you through the periods where the numbers don't.",
    ],
    whyItMatters:
      "The morale book. When your cash-flow crunch feels unique, read how the most iconic brand on earth spent a decade one bad loan away from death.",
  },
];

export const getBook = (slug: string): Book => {
  const b = books.find((x) => x.slug === slug);
  if (!b) throw new Error("Unknown book: " + slug);
  return b;
};

export const booksByModel = (modelSlug: string): Book[] => books.filter((b) => b.model === modelSlug);

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
    model: "strategy-decision",
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
  {
    slug: "start-with-why",
    title: "Start With Why",
    author: "Simon Sinek",
    year: 2009,
    model: "purpose-leadership",
    rating: 4,
    cover: "gold",
    blurb: "How great leaders inspire everyone to take action — by starting with the why, not the what.",
    review:
      "Sinek's thesis in book form: most organizations lead with what they do, but the ones that endure lead with why they exist. The Golden Circle (why, how, what) is simple enough to use and deep enough to change how you write your marketing, hire your team, and name your positioning. Its weakness is the famous one — it can drift into corporate poetry — but for a small business that has lost its story, it is the fastest way back.",
    takeaways: [
      "Communicate from the inside out: why, then how, then what.",
      "Belief attracts believers — customers and employees who buy your why, not your spec.",
      "The 'law of diffusion' means your first adopters are believers; the majority follows later.",
    ],
    whyItMatters:
      "The one-sentence why is the cheapest positioning tool in existence — and most small businesses can't write theirs. Start here before you touch pricing or branding.",
  },
  {
    slug: "dare-to-lead",
    title: "Dare to Lead",
    author: "Brené Brown",
    year: 2018,
    model: "purpose-leadership",
    rating: 4,
    cover: "clay",
    blurb: "Brave work, tough conversations, whole hearts — the research on leading with courage.",
    review:
      "Brown's fieldwork with real leaders — the armored and the daring — produces the most evidence-backed case for soft-skill leadership available. The four skill sets (rumble with vulnerability, live into values, braving trust, learn to rise) are practical rather than inspirational, and the 'braving' framework gives you a checklist for diagnosing exactly why a team doesn't trust you. For owners who run everything themselves, this is the book that makes delegation possible.",
    takeaways: [
      "Armor (perfectionism, cynicism, numbing) is the enemy of leadership — vulnerability is the courage to show up anyway.",
      "Trust is built in small, repeated moments: boundaries, reliability, accountability, vault, integrity, non-judgment, generosity.",
      "Values need to be defined behaviorally — 'what does courage look like on Tuesday?' — or they're decoration.",
    ],
    whyItMatters:
      "The leadership book for small businesses that never had a culture budget: trust is a set of behaviors you can install, and this is the manual.",
  },
  {
    slug: "seven-habits",
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    year: 1989,
    model: "purpose-leadership",
    rating: 4.5,
    cover: "green",
    blurb: "The character-based classic of personal and professional effectiveness.",
    review:
      "Forty million readers later, Covey's architecture still holds: private victory (be proactive, begin with the end in mind, first things first) before public victory (think win-win, seek first to understand, synergize), then sharpen the saw. It is the rare business book that is really a book about character, and its insistence that effectiveness is a habit rather than a technique has aged better than almost anything else from the 1980s.",
    takeaways: [
      "Between stimulus and response lies your power to choose — be proactive.",
      "Begin with the end in mind: define the mission before the plan.",
      "Sharpen the saw — renewal is not a luxury, it's the fourth dimension of effectiveness.",
    ],
    whyItMatters:
      "The foundation book. Every habit-based system since (including Atomic Habits) assumes the personal effectiveness this one builds.",
  },
  {
    slug: "five-dysfunctions",
    title: "The Five Dysfunctions of a Team",
    author: "Patrick Lencioni",
    year: 2002,
    model: "purpose-leadership",
    rating: 4.5,
    cover: "blue",
    blurb: "The fable of a team that learned why smart people fail together.",
    review:
      "Lencioni delivers his diagnostic through a novel, which makes the pyramid unforgettable: absence of trust, fear of conflict, lack of commitment, avoidance of accountability, inattention to results. The model's value is that it's a pyramid — fix trust and everything above it unlocks. The fable format is quick and the assessment in the appendix is genuinely usable in your next off-site.",
    takeaways: [
      "Vulnerability-based trust is the foundation — without it, nothing above works.",
      "Productive conflict is required: teams that don't argue about ideas ship bad decisions.",
      "Inattention to results is the top dysfunction — the team fails when ego beats the scoreboard.",
    ],
    whyItMatters:
      "The fastest diagnostic for a small team that's underperforming despite talent — run the pyramid at your next meeting.",
  },
  {
    slug: "good-to-great",
    title: "Good to Great",
    author: "Jim Collins",
    year: 2001,
    model: "operational-moats",
    rating: 4.5,
    cover: "gold",
    blurb: "Why some companies make the leap and others don't — a five-year study of the difference.",
    review:
      "Collins's research design — companies that beat the market for 15 straight years — produced the defining concepts: Level 5 leadership, the hedgehog concept, and the flywheel. The finding that humility plus will, not charisma, marks the great companies is still the least-imitated lesson in business. Dense in places and occasionally self-congratulatory, it remains the most rigorous single-volume answer to 'what separates good from great.'",
    takeaways: [
      "Good is the enemy of great — comfort is the quiet killer of ambition.",
      "The hedgehog concept: passionate, best-in-the-world, and economically driven — all three, in the overlap.",
      "Greatness is a flywheel of consistent pushes, not a single breakthrough.",
    ],
    whyItMatters:
      "The research-backed case for why 'fine' is not a strategy — and the vocabulary (hedgehog, flywheel) you'll use in every planning meeting.",
  },
  {
    slug: "effective-executive",
    title: "The Effective Executive",
    author: "Peter F. Drucker",
    year: 1967,
    model: "strategy-decision",
    rating: 4.5,
    cover: "ink",
    blurb: "The definitive guide to the executive's real job: being effective, not busy.",
    review:
      "Drucker's shortest and sharpest book, and the one every founder should read first. His five practices — manage time, focus on contribution, build on strengths, concentrate on the few things that matter, and make effective decisions — read as a direct indictment of the modern busy owner. It's from 1967 and it's more relevant now, because the ambient distraction of the internet makes concentration a greater competitive edge than ever.",
    takeaways: [
      "Effectiveness is a discipline you can learn: manage time, focus on contribution, build on strengths.",
      "Concentration is the secret: do the few things that matter and refuse the rest.",
      "Ask 'what needs to be done?' before 'what do I want to do?'",
    ],
    whyItMatters:
      "The anti-busywork manual. If you read one book about being the boss, it should be this one.",
  },
  {
    slug: "competitive-strategy",
    title: "Competitive Strategy",
    author: "Michael E. Porter",
    year: 1980,
    model: "strategy-decision",
    rating: 4,
    cover: "clay",
    blurb: "The Five Forces and the foundational framework of business strategy.",
    review:
      "The book that made strategy a discipline. Porter's Five Forces — rivalry, new entrants, substitutes, supplier power, buyer power — plus the three generic strategies (cost, differentiation, focus) give any owner a rigorous lens on why their industry is profitable or not. It's academic and dated in examples, but the framework is not optional reading for anyone who wants to understand why they're competing so hard for so little.",
    takeaways: [
      "Industry structure (five forces) determines average profitability — know yours before you fight in it.",
      "Strategy is choice: cost, differentiation, or focus — trying all three means mastering none.",
      "The essence of strategy is choosing what not to do.",
    ],
    whyItMatters:
      "The map of the battlefield. Before you price against anyone, run the Five Forces on your own niche.",
  },
  {
    slug: "thinking-fast-slow",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    year: 2011,
    model: "strategy-decision",
    rating: 5,
    cover: "green",
    blurb: "The two systems that drive your judgments — and the biases that own you.",
    review:
      "The definitive book on why your brain is not the rational calculator you think it is. Kahneman walks through System 1 and System 2, anchoring, loss aversion, availability, overconfidence, and the planning fallacy with decades of experiments behind each. It is long and occasionally slow, and it is the most important decision-making book a founder will ever read — because nearly every business failure it describes is a failure of judgment, not effort.",
    takeaways: [
      "System 1 is fast and biased; System 2 is slow and lazy — most decisions never reach System 2.",
      "Losses hurt about twice as much as gains please — check your pricing and keep-vs-cut choices for this asymmetry.",
      "The planning fallacy is universal: use reference-class forecasting (how long did similar things take) not your own estimate.",
    ],
    whyItMatters:
      "The scientific source code for Munger's checklists and Dalio's radical transparency — and the best defense against your own optimism.",
  },
  {
    slug: "principles",
    title: "Principles",
    author: "Ray Dalio",
    year: 2017,
    model: "strategy-decision",
    rating: 4,
    cover: "ink",
    blurb: "Life and work principles from the founder of Bridgewater Associates.",
    review:
      "Half autobiography, half operating system. Dalio's core claim — that pain + reflection = progress, and that you should encode lessons as principles and let the best idea win — is supported by his own career, including the near-death of Bridgewater in 1982. The work half reads as a blueprint for radical transparency and idea meritocracy that most small teams could never stomach fully but should steal from selectively.",
    takeaways: [
      "Pain + reflection = progress — treat painful mistakes as the tuition for a lesson you keep.",
      "Radical truth and radical transparency: share what you really think, and expect others to.",
      "Weight decisions by credibility and evidence, not title — let the best idea win.",
    ],
    whyItMatters:
      "The playbook for building a decision machine out of your company — useful even at two employees.",
  },
  {
    slug: "innovators-dilemma",
    title: "The Innovator's Dilemma",
    author: "Clayton M. Christensen",
    year: 1997,
    model: "zero-to-one",
    rating: 5,
    cover: "gold",
    blurb: "When new technologies cause great firms to fail — and why good management is the culprit.",
    review:
      "The most important business theory of the last 30 years, presented with rigorous case studies of disk drives, excavators, and steel mills. Christensen's finding — that great companies fail precisely because they listen to their best customers — reframes disruption as a process that attacks from below. For any small business, it's the best argument for why the 'cheap, ugly, niche' offer is often the smartest bet.",
    takeaways: [
      "Disruption arrives from below: cheap, 'good enough' products that incumbents ignore.",
      "Good management is the culprit — listening to your best customers can blind you to the future.",
      "Jobs to be Done: customers 'hire' products to do jobs — find the job, don't chase the demographic.",
    ],
    whyItMatters:
      "The theory of why incumbents are beatable — and the strategic license to start small and ugly in a niche they won't defend.",
  },
  {
    slug: "almanack-naval",
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    year: 2020,
    model: "zero-to-one",
    rating: 4.5,
    cover: "blue",
    blurb: "A guide to wealth and happiness from the most-quoted philosopher of the startup world.",
    review:
      "A crowd-sourced compendium of Naval's essays, tweets, and talks, organized by Jorgenson into a coherent doctrine: specific knowledge, leverage, accountability, and compounding are the engine of wealth; solitude, reading, and acceptance are the engine of peace. It's aphoristic by construction, which makes it excellent for rereading and terrible for linear argument — but no other book compresses 'how to think about building wealth' into such portable form.",
    takeaways: [
      "Seek wealth, not money: assets that earn while you sleep.",
      "Specific knowledge is found through obsession, not training — and it's almost impossible to outsource.",
      "Play iterated games, add accountability, and use code and media as permissionless leverage.",
    ],
    whyItMatters:
      "The compressible summary of non-consensus wealth thinking — keep it on your desk for the quarterly 'what am I actually building?' check.",
  },
  {
    slug: "originals",
    title: "Originals",
    author: "Adam Grant",
    year: 2016,
    model: "zero-to-one",
    rating: 4,
    cover: "green",
    blurb: "How non-conformists move the world — and the psychology of those who champion new ideas.",
    review:
      "Grant dismantles the myth of the confident, risk-taker innovator. Originals doubt their own ideas, procrastinate strategically, and generate mountains of work so a fraction can be great. The research is delivered with Grant's trademark liveliness, and the practical chapters — on when to speak up, how to sell risky ideas, and how to build cultures that welcome dissent — translate directly to a small business that wants better ideas from its team.",
    takeaways: [
      "Originality is a volume game: generate many ideas, most of them bad, to get the rare great one.",
      "Strategic procrastination breeds originality — start early but finish late.",
      "Build a culture that rewards dissent: ask for the problem, not the solution.",
    ],
    whyItMatters:
      "The evidence-backed rebuttal to 'we need to be more innovative' — with the actual mechanisms of how original work gets made and sold.",
  },
  {
    slug: "this-is-marketing",
    title: "This Is Marketing",
    author: "Seth Godin",
    year: 2018,
    model: "distribution",
    rating: 4.5,
    cover: "gold",
    blurb: "The definitive modern statement of marketing as making change — for the smallest viable audience.",
    review:
      "Godin's masterwork on the topic he's spent decades on. The core moves — find the smallest viable audience, earn trust, make change happen, tell a story, and ship — are laid out simply and practically. His central claim, that marketing is not manipulation but the generous act of solving a specific person's problem, makes this the rare marketing book that improves both your results and your conscience. It's the one book on marketing a small business actually needs.",
    takeaways: [
      "Marketing is making a change for a specific group of people — not reaching everyone.",
      "Find the smallest viable audience and serve them so well they tell the next person.",
      "The best marketing is the product itself: remarkable beats loud.",
    ],
    whyItMatters:
      "The single best modern marketing manual for the attention economy — reads fast, applies immediately.",
  },
  {
    slug: "tipping-point",
    title: "The Tipping Point",
    author: "Malcolm Gladwell",
    year: 2000,
    model: "distribution",
    rating: 4,
    cover: "blue",
    blurb: "How little things can make a big difference — the law of epidemics applied to ideas.",
    review:
      "The book that made viral concepts mainstream. Gladwell's recipe for when an idea tips — the law of the few (connectors, mavens, salesmen), the stickiness factor, and the power of context — is a genuinely useful frame for why some word-of-mouth takes off and most doesn't. Its sociology is sometimes loose, but as a way of thinking about the mechanics of spread, it has no equal for accessibility.",
    takeaways: [
      "Ideas tip through the few: connectors, mavens, and salesmen spread them.",
      "Stickiness matters more than volume — a slightly stickier message outperforms a louder one.",
      "Context is the nudge: small environmental changes produce big behavioral shifts.",
    ],
    whyItMatters:
      "The vocabulary for how word-of-mouth actually works — read it when you want your referral engine to tip.",
  },
  {
    slug: "grit",
    title: "Grit",
    author: "Angela Duckworth",
    year: 2016,
    model: "paradigm-pivots",
    rating: 4,
    cover: "clay",
    blurb: "The power of passion and perseverance — and how to grow it in yourself and your team.",
    review:
      "Duckworth's research and stories — from West Point to the National Spelling Bee — make the case that effort counts twice: talent times effort equals skill, and skill times effort equals achievement. The practical value is in the 'how': finding your passion through interest, practice, purpose, and hope, and building a culture that makes perseverance the norm. It's the most useful resilience book for founders who keep getting knocked down.",
    takeaways: [
      "Grit is passion plus perseverance for very long-term goals — stamina, not intensity.",
      "Effort counts twice: talent × effort = skill, skill × effort = achievement.",
      "Culture is how you grow grit in a team: make finishing hard things the standard.",
    ],
    whyItMatters:
      "The research that tells you whether your business failure was a verdict or a lesson — and how to build the team that keeps going.",
  },
  {
    slug: "obstacle-is-the-way",
    title: "The Obstacle Is the Way",
    author: "Ryan Holiday",
    year: 2014,
    model: "paradigm-pivots",
    rating: 4,
    cover: "ink",
    blurb: "The timeless art of turning trials into triumph — Stoic practice for the modern founder.",
    review:
      "Holiday's accessibly modern take on Marcus Aurelius: perception, action, and will are the three disciplines that turn obstacles into advantages. The case studies — from Lincoln to the Apollo 13 engineers — make the philosophy concrete, and the chapter structure means you can open it at the exact chapter your current crisis needs. It's the resilience book for people who hate self-help.",
    takeaways: [
      "The obstacle is the way: what stands in your path is your path.",
      "Perception: see the problem straight, without the drama.",
      "Action: the fix is the next right thing, done — will: endure what you can't change.",
    ],
    whyItMatters:
      "The pocket philosophy for the quarter that goes sideways — and the reframe that turns every setback into training.",
  },
  {
    slug: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    model: "execution-habits",
    rating: 4.5,
    cover: "green",
    blurb: "An easy and proven way to build good habits and break bad ones — 1% at a time.",
    review:
      "The definitive modern book on behavior change, and the best-structured business-adjacent book of the decade. Clear's four laws — make it obvious, attractive, easy, and satisfying — turn habit formation into engineering rather than willpower, and his identity-based framing ('I'm the kind of person who…') explains why goals fail. For a small business, the same system that builds personal habits builds the daily processes that become the moat.",
    takeaways: [
      "You don't rise to your goals; you fall to your systems.",
      "The four laws: make it obvious, attractive, easy, satisfying — invert them to break habits.",
      "Identity-based habits: every action is a vote for the person you want to become.",
    ],
    whyItMatters:
      "The how-to for every 'should' in this library — from prospecting to invoicing — engineered into a system that actually sticks.",
  },
  {
    slug: "deep-work",
    title: "Deep Work",
    author: "Cal Newport",
    year: 2016,
    model: "execution-habits",
    rating: 4.5,
    cover: "ink",
    blurb: "Rules for focused success in a distracted world.",
    review:
      "Newport's case that concentration is the new scarcity is now prophetic. The book's value is in the rules: work deeply (the four-hour daily ceiling), embrace boredom, quit social media, and drain the shallows. For an owner whose entire week disappears into email and meetings, the schedule-design chapters alone are worth the price. It's the productivity book for people who believe attention is the real asset.",
    takeaways: [
      "Deep work is the ability to focus without distraction — and it's becoming rarer and more valuable.",
      "The sustainable daily maximum is roughly three to four hours of true depth.",
      "Schedule the shallow, but never let the shallow schedule the deep.",
    ],
    whyItMatters:
      "The operating manual for the owner drowning in busywork — block the deep, and watch the business move.",
  },
  {
    slug: "steve-jobs",
    title: "Steve Jobs",
    author: "Walter Isaacson",
    year: 2011,
    model: "product-intuition",
    rating: 5,
    cover: "ink",
    blurb: "The authorized biography of the man who made design a strategic weapon.",
    review:
      "The definitive portrait of a product-obsessed founder. Isaacson was given unprecedented access — interviews with Jobs, his family, his enemies — and the result reads like a case study in the product-intuition model: the reality-distortion field, the cruelty of 'saying no', the return to Apple, and the iPhone. It's long, and Jobs is frequently unlikable, which is exactly why it's so useful: you see the full cost of that intensity, not just the rewards.",
    takeaways: [
      "Focus is the ability to say no — Jobs killed 70% of Apple's products on his return.",
      "Design is not decoration; it's how the thing works end to end.",
      "The reality distortion field works only if you also deliver — belief must be backed by shipping.",
    ],
    whyItMatters:
      "The best single study of product intuition ever published — read it to understand what 'design-led' actually costs and earns.",
  },
  {
    slug: "invented-and-wander",
    title: "Invent and Wander",
    author: "Jeff Bezos",
    year: 2020,
    model: "operational-moats",
    rating: 4,
    cover: "clay",
    blurb: "The collected writings of Jeff Bezos — the shareholder letters that became the Amazon operating manual.",
    review:
      "A collection of Bezos's annual shareholder letters plus recent essays, which together are the closest thing to a first-person account of the flywheel philosophy. The letters show the same frameworks he repeats on stage — Day 1, customer obsession, long-term thinking, high-velocity decisions — applied year after year. The letters are short and readable; the value is watching the same principles recur across two decades, which is itself the lesson about compounding.",
    takeaways: [
      "The 1997 letter is the flywheel in prose: customer obsession, long-term, bold bets.",
      "Day 1 thinking is a discipline to be practiced, not a slogan to be printed.",
      "The most important decisions are 'one-way doors' — slow them down; make the rest fast.",
    ],
    whyItMatters:
      "The primary source for the Day 1 / flywheel doctrine — read it straight from the founder instead of through summaries.",
  },
  {
    slug: "nvidia-way",
    title: "The Nvidia Way",
    author: "Tae Kim",
    year: 2024,
    model: "operational-moats",
    rating: 4,
    cover: "green",
    blurb: "Jensen Huang and the making of a culture that bet the company on CUDA, then on AI.",
    review:
      "A reporter's account of how NVIDIA survived its near-death pivots and built a moat that now underpins the AI economy. The book's core is culture: the 'tough love', the expectation that 'we're always one step from going out of business', and the full-stack bet that made CUDA a platform. It's the clearest non-NVIDIA-approved look at Huang's operational philosophy — the paranoia and the 10-year bets working together.",
    takeaways: [
      "A platform moat is built by betting the company before the market agrees.",
      "Culture of 'we're about to die' keeps a giant company acting like a startup.",
      "Full-stack control — hardware, software, ecosystem — compounds into pricing power.",
    ],
    whyItMatters:
      "The modern case study of paradigm-pivot survival and platform moats — the closest thing to a written Huang playbook.",
  },
  {
    slug: "hackers-and-painters",
    title: "Hackers and Painters",
    author: "Paul Graham",
    year: 2004,
    model: "distribution",
    rating: 4,
    cover: "blue",
    blurb: "Big ideas from the computer age — the essays that became YC's philosophy.",
    review:
      "Graham's early essays, including the argument that hackers are like painters (both make things from nothing, and both learn by making). This is where 'do things that don't scale' and 'make something people want' gestate — the mindset behind Y Combinator. It's less operational than his later essays but more foundational: it's about the disposition of the maker, which is exactly what a founder needs to survive the distribution problem.",
    takeaways: [
      "The maker's disposition: build ugly versions early and iterate from what exists.",
      "Wealth is what people want made — the maker creates value, not just money.",
      "Good ideas start out looking like bad ideas; taste is built by making.",
    ],
    whyItMatters:
      "The origin text of YC's philosophy — read it to absorb the maker mindset before the growth tactics.",
  },
  {
    slug: "behind-the-cloud",
    title: "Behind the Cloud",
    author: "Marc Benioff",
    year: 2009,
    model: "paradigm-pivots",
    rating: 3.5,
    cover: "blue",
    blurb: "The untold story of how Salesforce went from idea to a revolution — and the 111 lessons inside.",
    review:
      "Part memoir, part playbook, written at the peak of Salesforce's first decade. Benioff lays out the 111 numbered lessons that built the company — from 'the no software message' to the creation of a partner ecosystem. It's corporate in tone and dated in parts, but the paradigm-pivot strategy is fully visible: name the old model dead, preach the new one, and build the category around yourself.",
    takeaways: [
      "Kill the category, don't just join it: 'no software' was the position.",
      "The message matters as much as the product — repeat it everywhere.",
      "Build an ecosystem; the moat is the network of people selling for you.",
    ],
    whyItMatters:
      "A first-person account of how to bet on a paradigm shift — useful for anyone facing a category change.",
  },
  {
    slug: "five-levels-of-leadership",
    title: "The 5 Levels of Leadership",
    author: "John C. Maxwell",
    year: 2011,
    model: "purpose-leadership",
    rating: 4,
    cover: "gold",
    blurb: "The proven steps to maximize your influence — from position to pinnacle.",
    review:
      "Maxwell's complete ladder book, expanding the talk into a full leadership system. Each level gets its own rules, its own failure modes, and its own 'law of the lid' — the idea that your leadership level caps what the business can achieve. It's the most practical single volume on leadership-as-a-skill, and its insistence that you can't skip the trust level is the lesson most owner-operators need.",
    takeaways: [
      "Position gets you compliance; permission gets you commitment — never skip level 2.",
      "The law of the lid: your team's ceiling is your leadership level.",
      "Developing leaders (level 4) is how you multiply instead of just produce.",
    ],
    whyItMatters:
      "The complete version of the 5-levels talk — the framework for owners whose business has outgrown their leadership.",
  },
  {
    slug: "art-of-exceptional-living",
    title: "The Art of Exceptional Living",
    author: "Jim Rohn",
    year: 2003,
    model: "execution-habits",
    rating: 4,
    cover: "green",
    blurb: "The seminar that trained a generation — philosophy, discipline, and the compounding of daily habits.",
    review:
      "The book form of Rohn's legendary seminar. The message is the same as the talk: income rarely exceeds personal development, discipline is the bridge between goals and accomplishment, and your life is the sum of your daily habits. It's earnest and occasionally dated, but the core is unimpeachable — and for the execution model it's the philosophical foundation beneath Atomic Habits.",
    takeaways: [
      "Become more to earn more — personal development is the highest-return investment.",
      "Discipline is doing what needs doing when it needs doing, whether you feel like it or not.",
      "The quality of your life equals the quality of your daily routine.",
    ],
    whyItMatters:
      "The philosophy layer of the execution model — pair it with Atomic Habits for the 'why' and the 'how'.",
  },
  {
    slug: "never-split-the-difference",
    title: "Never Split the Difference",
    author: "Chris Voss",
    year: 2016,
    model: "distribution",
    rating: 4.5,
    cover: "clay",
    blurb: "Negotiating as if your life depended on it — by the FBI's lead international kidnapping negotiator.",
    review:
      "Voss turns hostage negotiation into a business skill set, and it's the most immediately useful sales/negotiation book in this library. The tools — tactical empathy, mirroring, labeling, calibrated questions, the 'no' question — are taught through real kidnapping cases and instantly transferable to pricing, collecting, and hiring. It's the negotiation book for owners who hate negotiating.",
    takeaways: [
      "Mirror and label to build rapport: repeat the last few words, name the emotion.",
      "Make it safe to say no — 'no' is the start of negotiation, not the end.",
      "Use calibrated questions ('how am I supposed to do that?') to get the other side to solve your problem.",
    ],
    whyItMatters:
      "The practical edge for every conversation that matters — pricing, collections, and disputes — with tactics you can use today.",
  },
  {
    slug: "e-myth-revisited",
    title: "The E-Myth Revisited",
    author: "Michael E. Gerber",
    year: 1995,
    model: "execution-habits",
    rating: 4.5,
    cover: "gold",
    blurb: "Why most small businesses don't work and what to do about it — build the business, not just the work.",
    review:
      "The foundational small-business book. Gerber's diagnosis: most owners are technicians suffering from an entrepreneurial seizure — they work IN the business instead of ON it. The cure is building the franchise prototype: documented systems, an org chart that exists even at one person, and an 'employee who isn't there yet' way of working. It's the single most relevant book in this library for a service-business owner.",
    takeaways: [
      "Work on the business, not in it — you're the builder, not just the best technician.",
      "Build the franchise prototype: write down every process as if a franchisee will run it.",
      "The purpose of the business is to create a customer — systems are how you do it repeatedly.",
    ],
    whyItMatters:
      "The book that converts a 'job with a better title' into a business — required reading for solo operators and technicians.",
  },
  {
    slug: "profit-first",
    title: "Profit First",
    author: "Mike Michalowicz",
    year: 2014,
    model: "bootstrapping",
    rating: 4,
    cover: "green",
    blurb: "Transform your business from a cash-eating monster to a money-making machine — profit first, expenses last.",
    review:
      "Michalowicz inverts the accounting formula: instead of sales minus expenses equals profit, it's sales minus profit equals expenses. By taking profit out first into a separate account, owners are forced to spend what remains — a behavioral fix for the cash-flow problem the cash-flow playbook addresses. It's simple, contrarian, and exactly the kind of constraint-based thinking the bootstrapping model celebrates.",
    takeaways: [
      "Pay yourself first: sales minus profit equals expenses — flip the formula.",
      "Use separate bank accounts so the money you never see can't be spent.",
      "Small percentages (1–2%) taken regularly compound into real profitability.",
    ],
    whyItMatters:
      "The most practical cash-flow book for SMBs — pair it with the 'survive early cash-flow crunches' playbook.",
  },
  {
    slug: "getting-things-done",
    title: "Getting Things Done",
    author: "David Allen",
    year: 2001,
    model: "execution-habits",
    rating: 4,
    cover: "ink",
    blurb: "The art of stress-free productivity — capture, clarify, organize, reflect, engage.",
    review:
      "The productivity system that still defines the genre. Allen's insight: your brain is for having ideas, not holding them — so capture everything, clarify what it means, organize it, review it, and act. For an owner drowning in loose ends, the 'capture habit' alone is transformative, and the weekly review is a built-in executive function the business was missing.",
    takeaways: [
      "Your mind is for having ideas, not holding them — capture everything out of your head.",
      "Clarify each item: is it actionable? If yes, what's the next physical action?",
      "The weekly review is the engine — 90 minutes that keeps the whole system honest.",
    ],
    whyItMatters:
      "The operating system for the 'execution' model — the capture-and-clarify loop is how a busy owner gets out of their own head.",
  },
  {
    slug: "influence",
    title: "Influence: The Psychology of Persuasion",
    author: "Robert B. Cialdini",
    year: 1984,
    model: "distribution",
    rating: 4.5,
    cover: "blue",
    blurb: "The classic on the six principles that drive human decisions — and how they show up in every sale.",
    review:
      "The most cited book on persuasion ever written, and the scientific foundation for 'people buy stories, not features.' Cialdini's six weapons — reciprocity, commitment/consistency, social proof, authority, liking, and scarcity — explain both why customers buy and why competitors keep winning them. It's a must-read for the distribution model: it's the psychology under every marketing tactic the site's thinkers recommend.",
    takeaways: [
      "Reciprocity: give first — a sample, a favor, genuine value — and people feel bound to return it.",
      "Social proof beats features: what others do is the strongest signal most customers use.",
      "Scarcity and commitment/consistency are levers you can use ethically — or be used by.",
    ],
    whyItMatters:
      "The persuasion layer under all of marketing — understand the six principles so you can use them and see when they're being used on you.",
  },
  {
    slug: "company-of-one",
    title: "Company of One",
    author: "Paul Jarvis",
    year: 2019,
    model: "bootstrapping",
    rating: 4,
    cover: "green",
    blurb: "Why staying small is the next big thing for business — growth is a choice, not a mandate.",
    review:
      "The manifesto for the deliberate small business. Jarvis's argument — that growth is not the only definition of success and that staying small can be a strategic advantage — is the modern expression of the bootstrapping model. It's a relief to read for owners who feel the pressure to scale when they don't want to, and its practical chapters on simplicity, autonomy, and slow growth give that choice teeth.",
    takeaways: [
      "Growth is optional — define success on your own terms, not the venture playbook's.",
      "Small is fast: fewer people, fewer systems, more autonomy and agility.",
      "Optimize for resilience and simplicity, not maximum size.",
    ],
    whyItMatters:
      "The permission slip for owners who don't want to blitzscale — and the strategic case for why small can win.",
  },
  {
    slug: "the-snowball",
    title: "The Snowball",
    author: "Alice Schroeder",
    year: 2008,
    model: "operational-moats",
    rating: 4.5,
    cover: "ink",
    blurb: "Warren Buffett and the business of life — the definitive biography of the world's greatest investor.",
    review:
      "Schroeder was given unprecedented access to Buffett — including his letters and long interviews — and produced the definitive biography. The value for a business owner is the raw material: how a compounding machine like Berkshire was assembled one durable business at a time, and the temperament (circle of competence, patience, 'the snowball' of reputation) that made it possible. Long, but every chapter contains an operating lesson.",
    takeaways: [
      "Reputation and trust are the ultimate compounding asset — 'it takes 20 years to build a reputation and 5 minutes to ruin it.'",
      "The circle of competence: know what you know and stay inside it.",
      "Hold good businesses; resist the urge to act just to act.",
    ],
    whyItMatters:
      "The primary source on the operational-moats mindset — read it to see moats, compounding, and temperament assembled over a lifetime.",
  },
  {
    slug: "what-i-know-for-sure",
    title: "What I Know For Sure",
    author: "Oprah Winfrey",
    year: 2014,
    model: "bootstrapping",
    rating: 3.5,
    cover: "clay",
    blurb: "Oprah's lessons on gratitude, intention, and the inner work behind an authentic brand.",
    review:
      "A collection of Oprah's monthly column essays, framed as the personal philosophy behind the empire. It's less a business book and more the operating manual for the person behind the brand — gratitude, intention, resilience, and the discipline of the inner life. For owners whose brand is themselves (which is most service businesses), it's a reminder that the person is the product and needs maintenance.",
    takeaways: [
      "Gratitude practiced daily is a leadership tool — it keeps the founder's morale, and morale is contagious.",
      "Intention beats reaction: decide what your day is for before the day decides for you.",
      "The inner work is the brand work when you are the brand.",
    ],
    whyItMatters:
      "The maintenance manual for the founder-as-brand — read it when the person behind the business needs restoring.",
  },
  {
    slug: "pour-your-heart-into-it",
    title: "Pour Your Heart Into It",
    author: "Howard Schultz",
    year: 1997,
    model: "bootstrapping",
    rating: 4,
    cover: "gold",
    blurb: "How Starbucks built a company one cup at a time — the story of scaling with a soul.",
    review:
      "Schultz's origin story: the Italian coffee bar that changed his life, the 11-store company he bought, and the decade-long fight to scale it without selling out the experience. The book's value is the tension it holds — growth and soul, profit and people — and how Schultz resolved it by putting the employee (health insurance, equity) before the transaction. It's the founding text of the 'scale with feeling' school.",
    takeaways: [
      "Sell an experience, not a product — the 'third place' was the positioning.",
      "Treat employees as partners before customers; the culture shows in the cup.",
      "Persistence through rejection: Schultz was told 'no' hundreds of times.",
    ],
    whyItMatters:
      "The manual for scaling a local, experience-led business without losing what made it local.",
  },
  {
    slug: "screw-it-lets-do-it",
    title: "Screw It, Let's Do It",
    author: "Richard Branson",
    year: 2006,
    model: "distribution",
    rating: 3.5,
    cover: "clay",
    blurb: "Lessons in life and business from the man who built the Virgin brand.",
    review:
      "Branson's manifesto of action: don't wait for permission, embrace risk as a learning tool, and build a brand people trust enough to follow into any new category. It's breezy and occasionally self-congratulatory, but the core lesson is real — Virgin's distribution moat is the brand itself, extended again and again. The chapter on the 'brand as promise' is worth the price.",
    takeaways: [
      "The brand is the promise — protect it and it can travel to new categories.",
      "Fail fast and own the failure; risk is how you learn at speed.",
      "Delegate by design: build teams around what you can't (or won't) do.",
    ],
    whyItMatters:
      "The case for brand-led expansion and the courage to act — read it before the decision you keep postponing.",
  },
  {
    slug: "made-in-america",
    title: "Sam Walton: Made in America",
    author: "Sam Walton",
    year: 1992,
    model: "operational-moats",
    rating: 4.5,
    cover: "gold",
    blurb: "My story — the founder of Walmart on the operational discipline that built the world's largest retailer.",
    review:
      "Walton's own account of the Walmart build — town by town, on obsessively controlled costs and a logistics machine nobody else had. The book is plain-spoken and the lessons are operational: the 10 rules of building a business (commit to the business, share profits, communicate, appreciate, celebrate) are timeless, and his fanaticism about the back end (distribution, cost control) is the real story. The most honest 'how it actually got built' book in this library.",
    takeaways: [
      "Operational fanaticism beats cleverness — control the back end and the front end wins.",
      "Win the small town first; expand only from a position you fully own.",
      "The 10 rules: commitment, profit-sharing, communication, appreciation — the culture of the machine.",
    ],
    whyItMatters:
      "The primary source on scale economics and logistics as a moat — the back-end playbook for any owner who wants margin, not just revenue.",
  },
  {
    slug: "delivering-happiness",
    title: "Delivering Happiness",
    author: "Tony Hsieh",
    year: 2010,
    model: "purpose-leadership",
    rating: 4,
    cover: "green",
    blurb: "A path to profits, passion, and purpose — the Zappos story of culture as the business.",
    review:
      "Hsieh's memoir-cum-manifesto of the culture experiment at Zappos: how he sold his first company, bought a shoe retailer, and turned it into a customer-service benchmark by making culture priority one. The famous mechanics are here — the $3,000 'quit now' offer, values-based hiring, the open culture book. It's earnest and occasionally scattered, but as a first-person account of leading with purpose it has no equal.",
    takeaways: [
      "Culture is the business: get it right and the service, and the profits, follow.",
      "The 'take the money and leave' offer is a genuine values filter.",
      "Deliver more than promised — happiness (for employees and customers) is the product.",
    ],
    whyItMatters:
      "The definitive case study of purpose-led leadership — read it to see culture engineered as deliberately as any product.",
  },
  {
    slug: "my-life-in-full",
    title: "My Life in Full",
    author: "Indra Nooyi",
    year: 2021,
    model: "operational-moats",
    rating: 4.5,
    cover: "blue",
    blurb: "Work, family, and our future — the memoir of the CEO who ran PepsiCo with performance and purpose.",
    review:
      "Nooyi's memoir is both a career story and a leadership operating manual. The PepsiCo rebalancing — shifting a global portfolio toward healthier products over a decade, against short-term pressure — is the clearest published case of long-horizon strategy executed patiently. The chapters on decision-making, talent, and 'performance with purpose' are directly transferable to any owner thinking in years instead of quarters.",
    takeaways: [
      "A long-horizon portfolio is the moat: take the short-term hit to build the future business.",
      "Purpose is an operating system, not a slogan — it filters every decision.",
      "Talent development and honest feedback are the real multipliers.",
    ],
    whyItMatters:
      "The modern executive's answer to 'how do you think long-term when the numbers are due now' — one of the best strategy memoirs available.",
  },
  {
    slug: "thrive",
    title: "Thrive",
    author: "Arianna Huffington",
    year: 2014,
    model: "purpose-leadership",
    rating: 3.5,
    cover: "green",
    blurb: "The third metric — redefining success and creating a life of well-being, wisdom, and wonder.",
    review:
      "Huffington's response to her own burnout, built on research about sleep, stress, and performance. The core argument — that wellbeing is an input to high performance, not a reward for it — is now mainstream, and this is the book that made it so. It's earnest and occasionally repetitive, but the reframe is genuinely important for any founder whose company culture runs on overwork.",
    takeaways: [
      "Burnout is not a badge; it's a failure mode of the operating system.",
      "Sleep and renewal are performance inputs — schedule them like meetings.",
      "The third metric: beyond money and power, measure wellbeing, wisdom, and wonder.",
    ],
    whyItMatters:
      "The founder's case for why rest is structural, not soft — read it before your burnout becomes the company's culture.",
  },
  {
    slug: "grinding-it-out",
    title: "Grinding It Out",
    author: "Ray Kroc",
    year: 1977,
    model: "operational-moats",
    rating: 4,
    cover: "clay",
    blurb: "The making of McDonald's — the founder of the franchise machine tells how he built the system.",
    review:
      "Kroc's plain-spoken memoir of turning a single California burger stand into the world's largest restaurant chain. The value is operational: the discipline of standardization, the alignment of franchisee incentives, and the fanatical attention to the system over the single store. It's dated and unpolished, which is exactly why it reads as a real operator's account rather than a business-school case.",
    takeaways: [
      "The system is the product — standardize until any store runs to the same standard.",
      "Align incentives so the franchisee wins only when the customer wins.",
      "Put the customer first and love the work; the money follows the machine.",
    ],
    whyItMatters:
      "The primary source on building an operational moat through systems and franchising — the 'document everything' playbook in its original form.",
  },
  {
    slug: "walt-disney-gabler",
    title: "Walt Disney: The Triumph of the American Imagination",
    author: "Neal Gabler",
    year: 2006,
    model: "product-intuition",
    rating: 4.5,
    cover: "ink",
    blurb: "The definitive biography of the man who turned imagination into an industry.",
    review:
      "The exhaustive, definitive biography of Walt Disney. Gabler shows how Disney built an empire on a single obsession — controlling the experience end to end — and the product intuition that made Snow White, Disneyland, and the theme-park category possible. It's long, and it's the best study of how a brand becomes a moat through craft and vision.",
    takeaways: [
      "Product intuition is control: Disney insisted on owning every stage of the experience.",
      "Craft is the brand — the willingness to do the expensive, careful version is what made Disney feel inevitable.",
      "Imagination plus organization: the visionary also built the machinery.",
    ],
    whyItMatters:
      "The deepest available study of product intuition as a business model — read it to see how a feeling became a fortress.",
  },
  {
    slug: "elon-musk-isaacson",
    title: "Elon Musk",
    author: "Walter Isaacson",
    year: 2023,
    model: "zero-to-one",
    rating: 4,
    cover: "ink",
    blurb: "The authorized biography of the first-principles builder who re-founded five industries.",
    review:
      "Isaacson shadowed Musk for two years and produced the closest thing to a primary source on his method: the 'algorithm' of questioning and deleting requirements, the tolerance for risk and drama, and the repeated pattern of betting the company on a non-consensus truth. It's a portrait of extreme zero-to-one thinking — including its full human cost. For strategy reading, extract the method; for sanity, take the cautionary tales.",
    takeaways: [
      "The Algorithm: question every requirement, delete the part, simplify, optimize, automate — in that order.",
      "First principles over benchmarking is how you find the non-consensus truth.",
      "Importance beats probability — take the important bet even when the odds are bad.",
    ],
    whyItMatters:
      "The most complete look at first-principles method in action — and the honest cost of running a company that way.",
  },
  {
    slug: "lean-in",
    title: "Lean In",
    author: "Sheryl Sandberg",
    year: 2013,
    model: "purpose-leadership",
    rating: 4,
    cover: "clay",
    blurb: "Women, work, and the will to lead — the book that put ambition back on the table.",
    review:
      "Sandberg's argument is deceptively simple: the ambition gap between men and women is socialized, not natural, and closing it starts with individuals claiming their seat and leaders building cultures that keep them there. It's half memoir, half manifesto, and its practical chapters — negotiate for yourself, make your partner a partner, lean into your strengths — apply to any owner building a team where everyone contributes fully.",
    takeaways: [
      "Ambition is a leadership skill; under-claiming it costs teams their best capacity.",
      "Sit at the table — believe you belong before you're invited.",
      "Make the home a 50/50 partnership; burnout is a team failure, not a badge.",
    ],
    whyItMatters:
      "The framework for building a workplace where everyone — regardless of who they are — actually contributes. Read it before your next promotion or hiring decision.",
  },
  {
    slug: "my-life-and-work",
    title: "My Life and Work",
    author: "Henry Ford",
    year: 1922,
    model: "operational-moats",
    rating: 4,
    cover: "ink",
    blurb: "Ford's own account of the assembly line, mass production, and the philosophy of the machine.",
    review:
      "Ford's original manifesto on mass production — part autobiography, part operating doctrine. His insistence that the process is the product, that waste is the enemy, and that paying workers well creates the market for what they build is startlingly modern. It's a century old and reads like a lean-manufacturing bible; the assembly-line and $5-day chapters are worth the price alone.",
    takeaways: [
      "The process is the product — standardize until the work flows like a machine.",
      "Collapse cost hard enough and you open a market competitors can't reach.",
      "Wages are a flywheel input, not just an expense — the $5 day created the buyers.",
    ],
    whyItMatters:
      "The primary source of the operational-moats mindset — read it to see scale economics and process thinking from the founder who invented them.",
  },
  {
    slug: "jack-straight-from-the-gut",
    title: "Jack: Straight from the Gut",
    author: "Jack Welch",
    year: 2001,
    model: "operational-moats",
    rating: 4,
    cover: "blue",
    blurb: "The memoir of the manager who ran GE for 20 years — candor, talent, and the Welch Way.",
    review:
      "Welch's no-nonsense account of two decades at GE. The chapters on candor, the rank-and-yank talent system, and the 'be #1 or #2' portfolio discipline read like a management masterclass from the operating room — brutal, direct, and effective. It's self-justifying in places, but the management doctrine is the real content, and it transfers directly to any business with more than a few employees.",
    takeaways: [
      "Candor is the most powerful management principle — say what's true, early.",
      "Differentiate your talent and invest visibly in the top.",
      "Fix, sell, or close any business that can't be first or second in its market.",
    ],
    whyItMatters:
      "The executive's operating manual — read it when you need to run your business with more intensity and honesty.",
  },
  {
    slug: "iwoz",
    title: "iWoz",
    author: "Steve Wozniak",
    year: 2006,
    model: "product-intuition",
    rating: 4,
    cover: "green",
    blurb: "The maker's memoir — how a kid who loved engineering built the personal computer.",
    review:
      "Wozniak's charming account of building the Apple I and II — a story about craft, curiosity, and building for the joy of it. It's the anti-marketing origin story: no grand strategy, just an engineer who wanted a computer he'd love, whose product became a category. For anyone who runs a business on taste and craft rather than process, it's both validation and a warning about what happens when the brand takes over.",
    takeaways: [
      "Build the thing you yourself would love; craft is its own market research.",
      "Elegance is subtraction — fewer chips, fewer steps, more delight.",
      "The builder and the brander are a partnership, not a competition.",
    ],
    whyItMatters:
      "The maker's mind in their own words — read it to remember why product intuition beats feature lists.",
  },
];

export const getBook = (slug: string): Book => {
  const b = books.find((x) => x.slug === slug);
  if (!b) throw new Error("Unknown book: " + slug);
  return b;
};

export const booksByModel = (modelSlug: string): Book[] => books.filter((b) => b.model === modelSlug);

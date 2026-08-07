import type { Lecture } from "./types";

export const lectures: Lecture[] = [
  {
    slug: "thiel-competition",
    title: "Competition is for Losers",
    founder: "peter-thiel",
    model: "zero-to-one",
    youtubeId: "NoGa48GPIas",
    channel: "Stanford / EconFinAiMl",
    year: 2014,
    length: "40 min",
    source: "Stanford lecture course on startups (recorded for Zero to One)",
    featured: true,
    summary:
      "Thiel's opening salvo: competition destroys value, monopoly captures it. He shows that every successful company hides a monopoly from the world while pretending to compete — and that your goal is to be the only company that can do what you do.",
    coreArgument:
      "A competitive market looks healthy but delivers zero profits to anyone in it; a monopoly quietly creates and keeps the value it generates. The entrepreneur's job is to find a non-consensus truth, build proprietary technology, and dominate a niche before expanding — not to join the fight everyone else is already in.",
    timestamps: [
      {
        time: "02:20",
        seconds: 140,
        title: "Perfect competition vs. monopoly",
        annotation:
          "In perfect competition, profits are competed away to zero. Monopolies, in disguise, earn durable profits because they answer a question no one else can.",
      },
      {
        time: "09:10",
        seconds: 550,
        title: "Every monopoly lies about itself",
        annotation:
          "Monopolists claim to face ferocious competition to avoid regulation and scrutiny. Competitors claim to be monopolists to attract investors. Read between the lines of what companies say.",
      },
      {
        time: "18:30",
        seconds: 1110,
        title: "Characteristics of a great monopoly",
        annotation:
          "Proprietary technology, network effects, economies of scale, and brand. You need at least one, ideally all four — and a small initial market to dominate.",
      },
      {
        time: "30:05",
        seconds: 1805,
        title: "What matters is the size of the niche",
        annotation:
          "Start with a tiny market you can completely own, then expand outward. Facebook started with one university; the 'great' market everyone chases is usually already taken.",
      },
    ],
    applyThisModel: [
      {
        title: "Narrow your market until you own it",
        body: "Stop pitching 'everyone'. Define the smallest group you can serve completely — a suburb, a trade, a single niche use-case — and make yourself the only obvious option there before expanding.",
      },
      {
        title: "Stop optimizing for the competition",
        body: "If your pricing, positioning, or product roadmap is mostly 'what our competitor does, but cheaper', you are in a zero-sum game. Find one thing you can do that your competitors structurally cannot.",
      },
      {
        title: "Find the secret your market ignores",
        body: "Write down one belief about your customers that is true but that everyone in your industry treats as settled. That unexamined assumption is usually where a defensible niche lives.",
      },
    ],
    crossReferences: [
      {
        founder: "jeff-bezos",
        take: "complementary",
        tone: "complementary",
        note: "Bezos wins by obsessing over customers rather than rivals. 'The competitor is not the boss; the customer is.' Two different routes to the same monopoly conclusion.",
      },
      {
        founder: "charlie-munger",
        take: "opposing",
        tone: "opposing",
        note: "Munger distrusts novelty and glamour; he'd rather buy a boring, proven moat at a fair price than chase a non-consensus truth. Contrast the builder's secret with the investor's checklists.",
      },
    ],
    keywords: ["monopoly", "competition", "secrets", "non-consensus", "zero to one", "niche", "defensibility"],
  },
  {
    slug: "jobs-stanford",
    title: "Stanford Commencement Address (2005)",
    founder: "steve-jobs",
    model: "product-intuition",
    youtubeId: "UF8uR6Z6KLc",
    channel: "Stanford",
    year: 2005,
    length: "15 min",
    source: "Stanford University Commencement",
    featured: true,
    summary:
      "Three stories: connecting the dots, love and loss, and death. Jobs uses his own arc — dropping out, getting fired from Apple, and facing cancer — to argue that trusting the work you love is the only strategy that compounds.",
    coreArgument:
      "You cannot connect the dots looking forward, only backward, so the present is the only place you get to decide. Losing what you loved — a job, a company, a category — is not a detour; it is often the entrance to the next act. And mortality is the best focus tool ever invented.",
    timestamps: [
      {
        time: "00:30",
        seconds: 30,
        title: "Connecting the dots backward",
        annotation:
          "The calligraphy class that seemed useless in 1972 gave the Mac its typography in 1984. Trust that the work you choose will eventually connect — you cannot verify it in advance.",
      },
      {
        time: "05:20",
        seconds: 320,
        title: "Getting fired from Apple",
        annotation:
          "The public failure was the pressure that let Jobs start NeXT and Pixar. 'The heaviness of being successful was replaced by the lightness of being a beginner again.'",
      },
      {
        time: "10:10",
        seconds: 610,
        title: "Remembering you will die",
        annotation:
          "Death is the ultimate filter: ask yourself every morning if today were your last, would you still do this? 'Your time is limited, so don't waste it living someone else's life.'",
      },
    ],
    applyThisModel: [
      {
        title: "Do the work that would survive your own failure",
        body: "Before committing a quarter to a new offering, ask: would I still want to do this if my current business vanished tomorrow? The answer marks the difference between a career and a portfolio.",
      },
      {
        title: "Use an end-date to focus your roadmap",
        body: "Say the company had five years, not fifty. Which product, hire, or process would you cut first? That cut is almost certainly waste disguised as diligence today.",
      },
      {
        title: "Re-stage a failure as a reset",
        body: "When a launch fails or a big client leaves, deliberately set aside what you 'were'. Reframe it as the beginning of a smaller, beginner's mind version of the business — then decide what to re-add.",
      },
    ],
    crossReferences: [
      {
        founder: "andy-grove",
        take: "complementary",
        tone: "complementary",
        note: "Grove's 'only the paranoid survive' and Jobs's 'losing everything is the setup' both treat crisis as the operating condition of a healthy company, not its exception.",
      },
      {
        founder: "jeff-bezos",
        take: "complementary",
        tone: "complementary",
        note: "Bezos's Day 1 posture is the institutional version of Jobs's mortality focus — a mechanism to keep a company behaving like a beginner long after it became a giant.",
      },
    ],
    keywords: ["focus", "resilience", "career", "mortality", "connecting dots", "failure", "love your work"],
  },
  {
    slug: "jobs-iphone",
    title: "Introducing the iPhone (2007)",
    founder: "steve-jobs",
    model: "product-intuition",
    youtubeId: "MnrJzXM7a6o",
    channel: "John Schroter",
    year: 2007,
    length: "10 min",
    source: "Macworld Keynote",
    featured: false,
    summary:
      "The segment where Jobs re-invented the phone market by refusing to compete with phones. The reveal frames every existing device as a compromise — then shows one product that removes the keyboard, the stylus, and the compromise.",
    coreArgument:
      "Don't enter a category to be better at it — enter it to make the category's assumptions obsolete. Jobs's three-product framing (phone + iPod + internet) was a way of saying the incumbent's core beliefs, not just its features, were the enemy.",
    timestamps: [
      {
        time: "00:40",
        seconds: 40,
        title: "Three separate devices",
        annotation:
          "Jobs restates the problem in one sentence — you carry three devices because none of them is good enough — then proposes that one product can replace all three.",
      },
      {
        time: "02:10",
        seconds: 130,
        title: "Why every existing smartphone was a compromise",
        annotation:
          "The stylus, the mini-keyboard, the tiny screen: incumbents were optimizing the wrong interface. Jobs names the category's core assumption — 'you need hardware buttons' — and discards it.",
      },
      {
        time: "05:00",
        seconds: 300,
        title: "Software takes the wheel",
        annotation:
          "'We're going to use the best pointing device in the world — our fingers.' The whole product strategy pivots on one product decision: the interface, not the hardware, is the moat.",
      },
    ],
    applyThisModel: [
      {
        title: "Restate the problem before the solution",
        body: "In your next pitch or product doc, write the customer's problem in one sentence the way your customers actually feel it. If your solution doesn't obviously answer that sentence, the problem statement is the bug, not the product.",
      },
      {
        title: "Name the compromise you refuse to make",
        body: "Every category has a compromise incumbents accept (fees, wait times, quality). Pick the one your business will never compromise on, and make it the headline of your positioning.",
      },
      {
        title: "Kill a feature to change the interface",
        body: "The single biggest lever is often subtraction. Remove the thing customers 'expect' (like buttons) and put the value in the thing you control — for a service business, that's usually a better process or a better interface to it.",
      },
    ],
    crossReferences: [
      {
        founder: "brian-chesky",
        take: "complementary",
        tone: "complementary",
        note: "Chesky's 10-star experience framework is the same 'refuse the category's compromise' move applied to hospitality: design the experience as a whole, not the listing as a page.",
      },
      {
        founder: "marc-andreessen",
        take: "opposing",
        tone: "opposing",
        note: "Andreessen's 'It's Time to Build' argues the bottleneck is supply and building, not taste. For him, execution beats curation — a fair counterweight to design-first narratives.",
      },
    ],
    keywords: ["product", "design", "category creation", "interface", "subtraction", "focus", "re-invention"],
  },
  {
    slug: "bezos-day1",
    title: "It's Always Day 1",
    founder: "jeff-bezos",
    model: "operational-moats",
    youtubeId: "r0PIxtUnbac",
    channel: "Success Rundown",
    year: 2018,
    length: "5 min",
    source: "Jeff Bezos remarks, curated interview",
    featured: false,
    summary:
      "Bezos's compact statement of the Day 1 operating posture: stay in the beginner's mindset, treat the customer as the only reliable focus, and treat 'Day 2' — stasis — as the thing to avoid at all costs.",
    coreArgument:
      "Day 2 is stasis, irrelevance, and death, so a company must install mechanisms that force it to keep acting like a startup. The four counters to Day 2 are true customer obsession, resisting proxies, embracing external trends, and making high-velocity decisions.",
    timestamps: [
      {
        time: "00:10",
        seconds: 10,
        title: "Day 2 is death",
        annotation:
          "Bezos defines the enemy: stasis, then irrelevance, then decline. The whole philosophy rests on refusing to consider anything a finished state.",
      },
      {
        time: "00:50",
        seconds: 50,
        title: "Customer obsession beats competitor obsession",
        annotation:
          "'When you're on the inside of the company, it's very easy to pay attention to your competitors.' The cure is a list of features customers asked for — not features rivals shipped.",
      },
      {
        time: "03:20",
        seconds: 200,
        title: "High-velocity decisions",
        annotation:
          "Two-way-door decisions are cheap to reverse, so make them fast and at lower levels. One-way doors get careful treatment. Speed is itself a flywheel input.",
      },
    ],
    applyThisModel: [
      {
        title: "Run a 'customer asked for this' ledger",
        body: "Keep a public list of the top ten concrete things customers have requested. If your roadmap has items that appear in no customer's words, cut them — those are proxy optimizations.",
      },
      {
        title: "Sort decisions into two doors",
        body: "Label every upcoming decision reversible (two-way) or irreversible (one-way). Schedule the two-way ones weekly at the lowest possible level; spend real process only on the one-way ones.",
      },
      {
        title: "Make velocity a number",
        body: "Measure decision speed — days from request to shipped action. Pick one recurring decision (pricing a job, approving a change) and cut its cycle time in half this quarter.",
      },
    ],
    crossReferences: [
      {
        founder: "peter-thiel",
        take: "opposing",
        tone: "opposing",
        note: "Thiel says win by avoiding competition; Bezos says win by out-observing customers. Both arrive at the same place — the customer, not the rival, is the boss — but the framing differs completely.",
      },
      {
        founder: "paul-graham",
        take: "complementary",
        tone: "complementary",
        note: "Graham's 'do things that don't scale' is Day 1 at startup scale: recruit users by hand, treat each customer relationship as a feature.",
      },
    ],
    keywords: ["day 1", "customer obsession", "flywheel", "velocity", "long-term", "process", "avoiding proxies"],
  },
  {
    slug: "bezos-lex",
    title: "Jeff Bezos: Amazon and Blue Origin (Lex Fridman #405)",
    founder: "jeff-bezos",
    model: "operational-moats",
    youtubeId: "DcWqzZ3I2cY",
    channel: "Lex Fridman",
    year: 2023,
    length: "2h 39m",
    source: "Lex Fridman Podcast",
    featured: false,
    summary:
      "A long-form look at Bezos's mental machinery: two-way-door decisions, the regret-minimization framework that launched Amazon, and the distinction between 'high judgement, high speed' and careless speed.",
    coreArgument:
      "Decision-making structure is the moat. Bezos walks through his core frameworks — regret minimization, the flywheel, 'disagree and commit', and long-run thinking as a competitive weapon — as a practical operating system rather than corporate philosophy.",
    timestamps: [
      {
        time: "07:40",
        seconds: 460,
        title: "Regret minimization framework",
        annotation:
          "'What will I regret when I'm 80?' was the test that justified leaving a safe job for a garage. Regret over inaction is the only regret that compounds.",
      },
      {
        time: "24:15",
        seconds: 1455,
        title: "The flywheel explained",
        annotation:
          "Lower prices attract more customers, which attracts sellers, which improves selection, which lowers costs further. Each loop makes the next loop cheaper — the moat is the loop itself.",
      },
      {
        time: "51:00",
        seconds: 3060,
        title: "High-speed decisions and disagree and commit",
        annotation:
          "Speed of decision is itself a competitive advantage, and 'disagree and commit' lets a team move forward without consensus paralysis.",
      },
    ],
    applyThisModel: [
      {
        title: "Write your regret-minimization memo",
        body: "Draft the paragraph you'd write at 80 about the business decision in front of you — the one you'd regret not making. Let that be the tiebreaker for the big call.",
      },
      {
        title: "Draw your business flywheel",
        body: "Draw the loop: what input feeds what output, and what cost drops each rotation. If you can't close the loop in three sentences, you don't yet have a compounding engine — you have a pipeline.",
      },
      {
        title: "Institutionalize 'disagree and commit'",
        body: "For your next contentious decision, agree upfront that whoever owns the call gets to proceed even if others remain unconvinced — but that skeptics must commit to helping, not sabotaging.",
      },
    ],
    crossReferences: [
      {
        founder: "charlie-munger",
        take: "complementary",
        tone: "complementary",
        note: "Munger's mental models and Bezos's decision frameworks are cousins: both treat better reasoning machinery as the durable advantage, not any single lucky bet.",
      },
      {
        founder: "reid-hoffman",
        take: "opposing",
        tone: "opposing",
        note: "Hoffman blitzscales — speed over deliberation, launch before you're ready. Bezos argues for structure and judgement at speed. The tension is exactly where most founders get stuck.",
      },
    ],
    keywords: ["decision making", "regret minimization", "flywheel", "long-term thinking", "leadership", "amazon"],
  },
  {
    slug: "munger-misjudgment",
    title: "The Psychology of Human Misjudgment",
    founder: "charlie-munger",
    model: "operational-moats",
    youtubeId: "pqzcCfUglws",
    channel: "BuffettMungerWisdom",
    year: 1995,
    length: "1h 20m",
    source: "Harvard speech (1995), revised version",
    featured: true,
    summary:
      "Munger's magnum opus on the 25+ psychological tendencies that cause smart people to make bad decisions — reward-punishment bias, social proof, incentive-caused bias, and the rest — framed as an engineering problem: design the system so the bias doesn't matter.",
    coreArgument:
      "Wisdom is not IQ; it is the ability to notice and neutralize systematic misjudgment in yourself and others. Because incentives drive behavior, the way to change outcomes is to change the incentive structure — 'Never, ever, think about something else when you should be thinking about the power of incentives.'",
    timestamps: [
      {
        time: "03:15",
        seconds: 195,
        title: "Incentives are the prime mover",
        annotation:
          "Munger opens with the Federal Express night-shift story: you change behavior by changing the pay scheme, not by asking nicer. 'I've been in the top 5% of my age cohort all my life. The ability to destroy your ideas is rare.'",
      },
      {
        time: "18:40",
        seconds: 1120,
        title: "Reward and punishment superresponse",
        annotation:
          "The human tendency to overreact to incentives — including perverse incentives that reward bad behavior. Sales commissions, billing structures, and quotas all quietly program your company.",
      },
      {
        time: "42:00",
        seconds: 2520,
        title: "Social proof and envy",
        annotation:
          "We copy the tribe even when the tribe is wrong. Munger: if you can't see a competent decision, following the crowd is how most industries stay mediocre for decades.",
      },
      {
        time: "01:06:00",
        seconds: 3960,
        title: "Designing against your own biases",
        annotation:
          "The conclusion: checklists, inversion, and 'psychological denial' awareness. Actively design processes that make the standard errors hard to commit.",
      },
    ],
    applyThisModel: [
      {
        title: "Audit your incentive structure",
        body: "List every compensation, commission, or bonus your business uses and ask what behavior it literally pays for. If the incentive and the goal disagree, the incentive wins — redesign it.",
      },
      {
        title: "Run a pre-mortem on your next big bet",
        body: "Before committing to a hire, vendor, or launch, assume in writing that it failed in 12 months and list the top three likely reasons. That inverted checklist surfaces the biases optimism hides.",
      },
      {
        title: "Install an 'envy and social proof' gate",
        body: "For every 'everyone is doing it' decision (new tool, new market, price match), write down whether the evidence is independent or just social proof. Independent evidence only.",
      },
    ],
    crossReferences: [
      {
        founder: "peter-thiel",
        take: "complementary",
        tone: "complementary",
        note: "Munger's social-proof bias is the psychological mechanism behind Thiel's 'everyone believes it is probably wrong'. Both distrust consensus — one economically, one psychologically.",
      },
      {
        founder: "jensen-huang",
        take: "opposing",
        tone: "opposing",
        note: "Huang embraces paranoia and speed as a defense mechanism; Munger would call that a bias-prone strategy unless backed by structural checklists. Two different answers to the same 'smart people, bad decisions' problem.",
      },
    ],
    keywords: ["mental models", "bias", "incentives", "inversion", "checklists", "decision making", "psychology"],
  },
  {
    slug: "graham-dont-scale",
    title: "Do Things That Don't Scale",
    founder: "paul-graham",
    model: "distribution",
    youtubeId: "5-TgqZ8nado",
    channel: "Y Combinator",
    year: 2013,
    length: "6 min",
    source: "Y Combinator lecture / essay reading",
    featured: true,
    summary:
      "The canonical argument that early growth is manual: recruit users by hand, make every interaction feel like a personal favor, and only build scalable mechanics after the core experience is proven on a few users.",
    coreArgument:
      "Most startups die of distribution, not product. The founders of Airbnb, Stripe, and DoorDash got their first customers by physically going out and getting them — and that manual phase is where you learn what to automate. Speed, contrarianism, and focus compound only if a product has already been wanted hard by someone.",
    timestamps: [
      {
        time: "00:20",
        seconds: 20,
        title: "Recruit users by hand",
        annotation:
          "YC's principle: the founders themselves must get the first users. Airbnb flew to New York to photograph listings and re-photograph apartments; Stripe went table to table in cafés.",
      },
      {
        time: "02:00",
        seconds: 120,
        title: "The common mistake",
        annotation:
          "Founders build an automated solution for a problem no one has proven they have. Manual work first proves demand cheaply — before you spend engineering dollars.",
      },
      {
        time: "04:15",
        seconds: 255,
        title: "Manual as the pre-scale interface",
        annotation:
          "Talking to every early user one-on-one gives product feedback you could not buy. The uncomfortable, unscalable work is an information advantage disguised as labor.",
      },
    ],
    applyThisModel: [
      {
        title: "Manually recruit your first 20 customers",
        body: "Ignore marketing channels for now. Personally call, visit, or email your first 20 customers and do the work for them yourself. That experience, not a funnel dashboard, is your real market research.",
      },
      {
        title: "Do the service by hand before automating it",
        body: "Before building any software or process, deliver the outcome manually for 3 paying customers. The automation you write afterwards will automate reality instead of assumptions.",
      },
      {
        title: "Treat every early customer as a feature request engine",
        body: "Ask each of the first 20 customers one question: what almost made you not buy? Cluster the answers — that cluster is your first product roadmap.",
      },
    ],
    crossReferences: [
      {
        founder: "jeff-bezos",
        take: "complementary",
        tone: "complementary",
        note: "Bezos's customer obsession and Graham's manual phase are the same discipline at different scales: both insist the customer experience is built by hand before it is scaled by machine.",
      },
      {
        founder: "marc-andreessen",
        take: "opposing",
        tone: "opposing",
        note: "Andreessen's 'It's Time to Build' warns against talking about building rather than building — a counterweight if 'do things that don't scale' becomes an excuse for perpetual smallness.",
      },
    ],
    keywords: ["distribution", "growth", "product-market fit", "manual", "YC", "early customers", "do things that don't scale"],
  },
  {
    slug: "luckey-anduril",
    title: "Palmer Luckey on AI, War, and Anduril",
    founder: "palmer-luckey",
    model: "zero-to-one",
    youtubeId: "AZdSLJkzN0I",
    channel: "Axios",
    year: 2025,
    length: "28 min",
    source: "The Axios Show, full interview",
    featured: false,
    summary:
      "Luckey on why he left VR for defense and how he runs a hard-tech company on conviction: contrarian bets, long development cycles, and an absolute refusal to let consensus set his priorities.",
    coreArgument:
      "The biggest opportunities are the ones everyone else has written off — and the people who write them off are often the people who have never tried. Luckey's method is to identify a 'crazy' mission, fund it from his own conviction, and let product performance, not permission, do the arguing.",
    timestamps: [
      {
        time: "02:10",
        seconds: 130,
        title: "Why defense, after VR",
        annotation:
          "Luckey explains Anduril's thesis: defense was a market where software had barely arrived, so the competitive set was decades behind — an open door for non-consensus builders.",
      },
      {
        time: "11:30",
        seconds: 690,
        title: "Funding conviction with your own money",
        annotation:
          "He describes self-funding and moving fast when no institutional investor would touch the thesis. Ownership of the bet is what lets you hold it long enough to win.",
      },
      {
        time: "21:00",
        seconds: 1260,
        title: "Hardware as software's next home",
        annotation:
          "The argument that the next leap in computing value is physical — drones, factories, ships — where software-defined products can out-iterate slow incumbent manufacturers.",
      },
    ],
    applyThisModel: [
      {
        title: "Look at the market everyone stopped watching",
        body: "List the industries in your region that are decades behind on basic digital practice — that lag is the non-consensus opportunity. Boring laggards beat crowded frontiers.",
      },
      {
        title: "Be willing to be wrong on your own timeline",
        body: "For the bet you believe in most, set a private 3-year success metric and stop checking weekly sentiment. Conviction compounds only when it isn't liquidated by noise.",
      },
      {
        title: "Let the product argue, not the pitch",
        body: "Instead of more marketing, build the most obvious demonstration of your advantage and put it in front of the five skeptics who matter. Performance is the least-contestable persuasion.",
      },
    ],
    crossReferences: [
      {
        founder: "peter-thiel",
        take: "complementary",
        tone: "complementary",
        note: "Luckey is Thiel's philosophy in hardware: monopoly niches, contrarian conviction, and infrastructure-level ambitions. The Oculus-to-Anduril arc is a live Zero to One case study.",
      },
      {
        founder: "yvon-chouinard",
        take: "opposing",
        tone: "opposing",
        note: "Chouinard proves you can build category-defining physical products with the opposite temperament — patience, sustainability, and anti-scale — a useful counterpoint to Luckey's urgency.",
      },
    ],
    keywords: ["hard tech", "conviction", "defense", "contrarian", "hardware", "self-funding", "anduril"],
  },
  {
    slug: "collison-blitzscaling",
    title: "Patrick Collison: Hiring at Stripe and the Role of a Product-Focused CEO",
    founder: "patrick-collison",
    model: "zero-to-one",
    youtubeId: "qrDZhAxpKrQ",
    channel: "Greylock",
    year: 2015,
    length: "56 min",
    source: "Stanford GSB Blitzscaling series (Greylock)",
    featured: false,
    summary:
      "Collison on building Stripe as an infrastructure company: obsessive product quality, hiring as the company's real strategy, and why boring, reliable infrastructure beats flashy consumer features as a business model.",
    coreArgument:
      "An infrastructure business wins by being so good it becomes invisible — trusted plumbing nobody wants to replace. That requires obsessive product focus, extremely selective hiring, and a willingness to build the 'boring' layer of the economy that investors underrate.",
    timestamps: [
      {
        time: "04:20",
        seconds: 260,
        title: "Why Stripe chose the boring layer",
        annotation:
          "Payments is unglamorous but universal: a small improvement to the plumbing of the economy compounds across every merchant who uses it. Pick markets where quality has an outsized multiplier.",
      },
      {
        time: "18:00",
        seconds: 1080,
        title: "Hiring as the product strategy",
        annotation:
          "For a product-focused CEO, every hire is a product decision. Stripe's insistence on selective, high-standards hiring is what lets a small team ship infrastructure at large-company reliability.",
      },
      {
        time: "36:40",
        seconds: 2200,
        title: "Infrastructure economics",
        annotation:
          "Revenue is small per merchant but recurring and compounding across millions of them. The moat is cumulative trust — the more you handle, the better you get at handling it.",
      },
    ],
    applyThisModel: [
      {
        title: "Pick a market where quality multiplies",
        body: "Choose your niche by asking: where does being 10x more reliable or 10x simpler multiply the value for every customer? Trade businesses, compliance, logistics, and ops are classic 'boring' multipliers.",
      },
      {
        title: "Hire for the compounding skill, not the role",
        body: "For your next hire, define the one ability that compounds over 5 years — craft, reliability, taste — and filter strictly on it even if it means hiring slower.",
      },
      {
        title: "Make your business the invisible default",
        body: "Ask existing customers: what would it cost to switch away from you? If the answer is low, build switching costs through integrations, history, and trust — not lock-in.",
      },
    ],
    crossReferences: [
      {
        founder: "peter-thiel",
        take: "complementary",
        tone: "complementary",
        note: "Collison is Thiel's 'infrastructure monopoly' thesis in the flesh — a payment network that behaves like a monopoly because it's simply the best option.",
      },
      {
        founder: "sara-blakely",
        take: "opposing",
        tone: "opposing",
        note: "Blakely bootstrapped on raw enthusiasm with $5,000; Collison raised heavily and scaled fast. Same destination — category ownership — radically different capital paths.",
      },
    ],
    keywords: ["infrastructure", "quality", "hiring", "product focus", "stripe", "reliability", "compounding"],
  },
  {
    slug: "collison-altman",
    title: "Sam Altman in conversation with Patrick Collison",
    founder: "patrick-collison",
    model: "zero-to-one",
    youtubeId: "5eouRdDYM2c",
    channel: "Stripe",
    year: 2023,
    length: "1h 9m",
    source: "Stripe Sessions conversation",
    featured: false,
    summary:
      "A wide-ranging conversation between two of the defining infrastructure builders of their generation: what 'the hardest problems' means, the value of very long time horizons, and how to keep a company ambitious without losing focus.",
    coreArgument:
      "Ambition is a choice you make repeatedly: pick problems that are disproportionately important, hold them for decades, and resist the gravitational pull of whatever is easiest or most fashionable. Companies, like science, compound when they optimize for importance rather than comfort.",
    timestamps: [
      {
        time: "06:30",
        seconds: 390,
        title: "Choosing problems by importance, not ease",
        annotation:
          "Collison: 'Most people choose problems they can solve.' The scarce skill is choosing problems that matter more than they look, then working on them long enough to matter.",
      },
      {
        time: "27:10",
        seconds: 1630,
        title: "Decadal time horizons",
        annotation:
          "Both argue the deepest advantages come from institutions willing to think in decades — the compounding of trust, research, and infrastructure that impatient competitors forgo.",
      },
      {
        time: "49:00",
        seconds: 2940,
        title: "Reversing the direction of your ambition",
        annotation:
          "They discuss building a company that treats difficulty as a selection filter: hard problems attract the people you want, easy problems attract everyone.",
      },
    ],
    applyThisModel: [
      {
        title: "Grade your pipeline by importance, not size",
        body: "Score every opportunity on one axis: if I nail this, how much does the world shift for my customer? Drop anything that's 'fine' but unimportant — those are comfort problems.",
      },
      {
        title: "Pick a 10-year number",
        body: "Define the single metric your business should be famous for in 10 years (e.g., 'every trade invoice paid in 24h'). Route all short-term choices through whether they move that number.",
      },
      {
        title: "Make the hard thing your filter",
        body: "Position around the hard problem you solve for customers. It will be harder to win the first deal — and dramatically easier to win every deal after.",
      },
    ],
    crossReferences: [
      {
        founder: "andy-grove",
        take: "complementary",
        tone: "complementary",
        note: "Grove's strategic inflection points are what happens when a long time-horizon company faces a paradigm break — Collison's decadal patience is the stance that makes such pivots survivable.",
      },
      {
        founder: "paul-graham",
        take: "opposing",
        tone: "opposing",
        note: "Graham says most startups should focus on tiny near-term distribution problems, not grand ones. Collison's 'importance-first' framing works only once survival is secured — order matters.",
      },
    ],
    keywords: ["ambition", "time horizon", "importance", "long-term", "stripe", "problems", "focus"],
  },
  {
    slug: "chesky-design",
    title: "Brian Chesky: Designing a 10-star Experience",
    founder: "brian-chesky",
    model: "product-intuition",
    youtubeId: "V6h_EDcj12k",
    channel: "Stanford Graduate School of Business",
    year: 2018,
    length: "1h 15m",
    source: "Stanford GSB View From The Top",
    featured: true,
    summary:
      "Chesky's signature framework for treating a company as a designed experience: from the 1-star 'worst hotel' to the 10-star 'impossible' experience, and how that ladder forces teams to invent rather than optimize.",
    coreArgument:
      "Design is not a department; it is the way you make decisions about the whole customer journey. By imagining the 10-star experience — the one you can't yet deliver — you reveal which gaps are worth your scarcest resource: attention. The job of a leader is to be the chief designer of the entire experience.",
    timestamps: [
      {
        time: "05:30",
        seconds: 330,
        title: "A company is a designed experience",
        annotation:
          "Chesky defines design as decisions about the entire journey — not just pixels. Airbnb's leadership is fundamentally a design problem, from listing to check-in to review.",
      },
      {
        time: "21:00",
        seconds: 1260,
        title: "The 1-to-10 star ladder",
        annotation:
          "A 5-star experience is 'as advertised'. A 10-star experience is 'they arranged a guitar for me in a city I'd never visited'. The gap between 5 and 10 is where invention lives.",
      },
      {
        time: "44:30",
        seconds: 2670,
        title: "Saying no to 90% of it",
        annotation:
          "Chesky on the brutal clarity of scope: Airbnb said no to most travel categories for a decade. Focus is what lets the yeses be excellent.",
      },
    ],
    applyThisModel: [
      {
        title: "Run your own 1-to-10 star audit",
        body: "Map the full journey of your customer — from first hearing about you to paying you again. Score each step 1-10 honestly. Fix the steps scored below 6 before adding anything new.",
      },
      {
        title: "Design the 10-star version on paper",
        body: "Write one sentence describing an experience you cannot yet deliver. Then pick the single infrastructure change that would let you deliver it. That change is your roadmap.",
      },
      {
        title: "Say no to a whole category this quarter",
        body: "Chesky's discipline applied locally: explicitly decline one obvious growth opportunity (a segment, a product line) for the next 90 days and reinvest that attention in depth.",
      },
    ],
    crossReferences: [
      {
        founder: "steve-jobs",
        take: "complementary",
        tone: "complementary",
        note: "Chesky studied Jobs obsessively and runs Airbnb as a design studio. The 10-star ladder is a formalization of Jobs's 'make it insanely great' instinct.",
      },
      {
        founder: "reid-hoffman",
        take: "opposing",
        tone: "opposing",
        note: "Hoffman's blitzscaling says ship first, perfect later; Chesky's design-first says the experience is the moat. The tension between taste and speed is the modern scaling debate.",
      },
    ],
    keywords: ["design", "experience", "customer journey", "focus", "airbnb", "saying no", "10-star"],
  },
  {
    slug: "ive-lessons",
    title: "Jony Ive: The Lessons He Learned From Steve Jobs",
    founder: "jony-ive",
    model: "product-intuition",
    youtubeId: "2oksetv3i90",
    channel: "Vanity Fair",
    year: 2023,
    length: "22 min",
    source: "Vanity Fair interview",
    featured: false,
    summary:
      "Ive on craft, focus, and the discipline of removing: why the most important design decision is usually the one to delete something, and how he learned to protect the integrity of an idea against the seduction of feature creep.",
    coreArgument:
      "The essence of design is not addition but ruthless subtraction, and the leader's real job is to protect the core idea. When you strip away everything that is not the idea, what remains is both simpler and more defensible than anything a feature list can build.",
    timestamps: [
      {
        time: "02:30",
        seconds: 150,
        title: "Design is a verb, not a job title",
        annotation:
          "Ive resists 'designer' as a role; making decisions about what a thing is — its essence — is a practice that belongs at the top of every company.",
      },
      {
        time: "09:40",
        seconds: 580,
        title: "Learning to say no to 95% of ideas",
        annotation:
          "The most repeated discipline of his career with Jobs: a great product is defined by the ideas you reject. Feature creep is the death of clarity.",
      },
      {
        time: "17:15",
        seconds: 1035,
        title: "Protecting the integrity of the idea",
        annotation:
          "When pressures pull a product toward compromise, the leader's role is to keep the original insight intact. Compromise at the core is how mediocre products are made.",
      },
    ],
    applyThisModel: [
      {
        title: "Delete one feature per quarter",
        body: "Pick a feature, service, or SKU that adds less value than the attention it consumes, and remove it entirely. Measure whether customer happiness moves. It rarely drops.",
      },
      {
        title: "Write the essence of your offer in one sentence",
        body: "If you can't say what your product fundamentally is in one sentence, every design decision will drift. Publish that sentence; hold all changes against it.",
      },
      {
        title: "Put craft at the top, not the bottom",
        body: "Make the most senior person accountable for the small, visible details customers touch first (your invoice, your site, your packaging). Leadership attention is the raw material of craft.",
      },
    ],
    crossReferences: [
      {
        founder: "brian-chesky",
        take: "complementary",
        tone: "complementary",
        note: "Ive's subtraction and Chesky's focus are the same muscle: the courage to say no. Both built moats on taste.",
      },
      {
        founder: "jensen-huang",
        take: "opposing",
        tone: "opposing",
        note: "Huang's full-stack acceleration adds capability aggressively across hardware, software, and ecosystems. Design purity vs. platform sprawl — two valid ways to compound.",
      },
    ],
    keywords: ["design", "craft", "subtraction", "focus", "taste", "jony ive", "saying no", "apple"],
  },
  {
    slug: "huang-resilience",
    title: "Jensen Huang: 'People with really high expectations have very low resilience'",
    founder: "jensen-huang",
    model: "paradigm-pivots",
    youtubeId: "LtXoB-YxJhM",
    channel: "Mikael Godal (Stanford GSB View From The Top)",
    year: 2024,
    length: "12 min",
    source: "Stanford GSB View From The Top (uncut segment)",
    featured: true,
    summary:
      "The clip that went viral: Huang explaining why he tells NVIDIA employees that great suffering is the price of doing something great — and why companies that survive long enough to pivot are the ones with low expectations of comfort.",
    coreArgument:
      "Success requires pain, and the founders who build enduring companies are the ones who embrace suffering rather than optimize it away. NVIDIA's repeated near-death pivots succeeded because Huang's team expected hardship — so when the paradigm shifted, they had the resilience to bet everything on the new world.",
    timestamps: [
      {
        time: "00:30",
        seconds: 30,
        title: "Great suffering is the price of great achievement",
        annotation:
          "Huang: 'We just don't feel bad for you.' The companies that survive are the ones that treat difficulty as the cost of entry, not an anomaly.",
      },
      {
        time: "04:20",
        seconds: 260,
        title: "High expectations, low resilience",
        annotation:
          "People who expect everything to be smooth shatter at the first setback. Lowering the expectation of comfort is a resilience strategy, not pessimism.",
      },
      {
        time: "08:50",
        seconds: 530,
        title: "Suffering as a selection filter",
        annotation:
          "The willingness to endure hard problems is what filters both employees and opportunities — and it is exactly why hard things get done by few companies.",
      },
    ],
    applyThisModel: [
      {
        title: "Reframe setbacks as tuition, not tragedy",
        body: "The next time a big deal collapses, log the one lesson and its dollar 'tuition' cost. Companies that treat failures as fees keep trying; companies that treat them as verdicts stop.",
      },
      {
        title: "Say the hard truth in hiring and pricing",
        body: "Be explicit with customers and hires about what is genuinely hard about working with you. Filtering for people who accept the difficulty builds an unusually committed base.",
      },
      {
        title: "Stress-test your business annually",
        body: "Once a year, write the 3 risks that would actually kill you — not the ones you're good at managing. Put one fix on the roadmap. Paranoia, scheduled.",
      },
    ],
    crossReferences: [
      {
        founder: "andy-grove",
        take: "complementary",
        tone: "complementary",
        note: "Huang's resilience talk is Grove's 'only the paranoid survive' updated for the AI era: the survivable company is the one that expected the crisis.",
      },
      {
        founder: "charlie-munger",
        take: "opposing",
        tone: "opposing",
        note: "Munger would agree suffering is inevitable but argue you should structure incentives to avoid creating it; Huang treats the suffering itself as the filter. Temperament vs. mechanism.",
      },
    ],
    keywords: ["resilience", "suffering", "expectations", "nvidia", "survival", "paradigm shift", "paranoia"],
  },
  {
    slug: "andreessen-build",
    title: "It's Time to Build",
    founder: "marc-andreessen",
    model: "distribution",
    youtubeId: "M9VKnPMs6Rw",
    channel: "a16z",
    year: 2020,
    length: "26 min",
    source: "a16z talk based on the essay",
    featured: false,
    summary:
      "Andreessen's argument that the world's shortage is not ideas or capital but building: institutions talk, incumbents stall, and the advantage goes to whoever converts energy into shipped reality fastest.",
    coreArgument:
      "Every sector's biggest problems — housing, health, education, defense — are supply problems disguised as policy problems. The companies and countries that thrive are the ones that build physical and digital infrastructure with the same hunger as the best startups. Distribution wins go to builders.",
    timestamps: [
      {
        time: "01:50",
        seconds: 110,
        title: "The shortage is building, not ideas",
        annotation:
          "We don't lack plans; we lack the ability and appetite to execute them. Almost every stalled industry is stalled on supply, not demand.",
      },
      {
        time: "10:20",
        seconds: 620,
        title: "Incumbent advantage is a myth in practice",
        annotation:
          "Big companies are slow, and slowness is death when the paradigm shifts. Speed of building is the single most underrated competitive advantage.",
      },
      {
        time: "19:00",
        seconds: 1140,
        title: "Build the infrastructure others avoid",
        annotation:
          "The boring supply-side layers — logistics, physical plant, regulatory plumbing — are where the durable value will accrue. Distribution rewards the rare builder.",
      },
    ],
    applyThisModel: [
      {
        title: "Measure your build velocity",
        body: "Track the time from decision to shipped outcome for your top three recurring projects. If it's over two weeks, the bottleneck is process, not effort — cut the process.",
      },
      {
        title: "Pick the supply problem in your market",
        body: "Every trade has one (backlogs, availability, trust). If you can't increase supply of the scarce thing in your market, you're competing for demand share — the harder game.",
      },
      {
        title: "Ship the ugly first version publicly",
        body: "Set a 2-week deadline for the worst complete version of your next offer and publish it. Public ships force reality, and reality corrects faster than plans.",
      },
    ],
    crossReferences: [
      {
        founder: "paul-graham",
        take: "complementary",
        tone: "complementary",
        note: "Graham's 'do things that don't scale' is the early-phase version of building; Andreessen's essay is the same ethos scaled to entire industries.",
      },
      {
        founder: "steve-jobs",
        take: "opposing",
        tone: "opposing",
        note: "Jobs would insist quality and taste govern what you build; Andreessen warns that hesitation is a more common failure than ugliness. Build ugly is a strategy, not an excuse.",
      },
    ],
    keywords: ["building", "supply", "speed", "infrastructure", "incumbents", "execution", "a16z"],
  },
  {
    slug: "hoffman-blitzscaling",
    title: "Reid Hoffman: The Secrets of Blitzscaling",
    founder: "reid-hoffman",
    model: "distribution",
    youtubeId: "J-4J9gP1pIo",
    channel: "Commonwealth Club World Affairs",
    year: 2018,
    length: "1h 1m",
    source: "Commonwealth Club talk on Blitzscaling",
    featured: false,
    summary:
      "Hoffman's thesis that when speed is the only way to win, you deliberately trade efficiency and even product polish for market leadership — and why the rules of normal management don't apply at that speed.",
    coreArgument:
      "Blitzscaling is the strategy of prioritizing speed over efficiency when the market is a winner-take-all race. It requires embracing 'ugly' growth — temporary chaos, less-than-perfect product — because in a network-effect market, whoever reaches critical mass first keeps it.",
    timestamps: [
      {
        time: "03:00",
        seconds: 180,
        title: "Speed over efficiency",
        annotation:
          "Normal businesses optimize efficiency; blitzscalers optimize speed to market. The two disciplines are opposites, and choosing wrong for the situation is fatal.",
      },
      {
        time: "18:30",
        seconds: 1110,
        title: "The network-effect winner-take-most dynamic",
        annotation:
          "For marketplace and network businesses, the first player to critical mass can lock in the advantage structurally — late movers face a tax they can rarely repay.",
      },
      {
        time: "38:00",
        seconds: 2280,
        title: "The dangers of blitzscaling",
        annotation:
          "Hoffman is candid: over-hiring, culture collapse, and product degradation are real. Blitzscaling is a calculated risk, not a badge — you need to know when to stop.",
      },
    ],
    applyThisModel: [
      {
        title: "Decide if you're in a speed game",
        body: "Ask: does first-mover scale give me a structural edge (bookings, volume, network, local dominance)? If yes, spend on speed. If no, spend on quality. Most small businesses should NOT blitzscale.",
      },
      {
        title: "Concentrate on one distribution channel",
        body: "Pick the single channel that compounds (referrals, local density, a platform) and push it to the edge of discomfort before adding a second. Depth beats breadth early.",
      },
      {
        title: "Define your stop condition",
        body: "Write the two signals that mean 'slow down' — e.g., churn up, cash runway under 6 months. Blitzscalers who lack a stop condition are just gamblers.",
      },
    ],
    crossReferences: [
      {
        founder: "brian-chesky",
        take: "complementary",
        tone: "complementary",
        note: "Chesky's Airbnb scaled through Hoffman's playbook — but only after designing a 10-star experience. Design first, then blitz: the synthesis most people miss.",
      },
      {
        founder: "charlie-munger",
        take: "opposing",
        tone: "opposing",
        note: "Munger's circle-of-competence and patience are the anti-blitzscaling stance: he'd rather be right slowly than fast and wrong. Two philosophies for two kinds of game.",
      },
    ],
    keywords: ["blitzscaling", "speed", "network effects", "scale", "marketplaces", "distribution", "reid hoffman"],
  },
  {
    slug: "blakely-origin",
    title: "Sara Blakely: The Origin Story of Spanx",
    founder: "sara-blakely",
    model: "bootstrapping",
    youtubeId: "3hCtukSt_e0",
    channel: "ForbesWomen",
    year: 2023,
    length: "8 min",
    source: "Forbes interview",
    featured: false,
    summary:
      "Blakely on the $5,000, zero-credibility, zero-ad-budget origin of Spanx: cutting the feet off pantyhose, cold-calling factories, and doing guerrilla PR with nothing but enthusiasm and a story.",
    coreArgument:
      "You don't need money or permission to start — you need a clear problem, a prototype, and the stamina to sell it by hand. Blakely's edge was that she had no money to waste on the wrong things: her constraints forced her to buy attention with creativity instead of cash.",
    timestamps: [
      {
        time: "00:30",
        seconds: 30,
        title: "The problem nobody was solving",
        annotation:
          "A frustrated consumer with a solution — cut the feet off pantyhose. Blakely's founding insight was a felt problem, not a market report.",
      },
      {
        time: "03:10",
        seconds: 190,
        title: "Cold-calling the factory",
        annotation:
          "She called hosiery mills cold, was rejected repeatedly, and finally got a yes by showing up in person with the prototype and her own money. Permission is rented, not granted.",
      },
      {
        time: "05:40",
        seconds: 340,
        title: "Guerrilla PR with zero budget",
        annotation:
          "Blakely sent samples to Oprah's producers for years with handwritten notes. The distribution was personal, persistent, and free — she out-marketed competitors by out-patience.",
      },
    ],
    applyThisModel: [
      {
        title: "Fund from a felt problem, not a forecast",
        body: "Before spending anything, write the specific, annoying problem you yourself (or a customer) feel weekly. If you can't write it in one sentence, you don't have a business yet.",
      },
      {
        title: "Get the first 'yes' in person",
        body: "The first supplier, first store, first partner — knock on the door. One in-person yes unlocks a hundred emails that never would have been answered.",
      },
      {
        title: "Win attention with patience and story",
        body: "Pick the one media figure, platform, or event your customer trusts and approach it personally, repeatedly, with a story instead of an ad. Repetition plus story beats budget.",
      },
    ],
    crossReferences: [
      {
        founder: "yvon-chouinard",
        take: "complementary",
        tone: "complementary",
        note: "Both prove capital efficiency plus radical authenticity beats funded marketing. Blakely and Chouinard are the two poles of the bootstrapped brand — one hustle-driven, one values-driven.",
      },
      {
        founder: "patrick-collison",
        take: "opposing",
        tone: "opposing",
        note: "Collison raised early and built infrastructure at scale; Blakely stayed 100% hers and grew organically. The trade-off: control and equity vs. speed and optionality.",
      },
    ],
    keywords: ["bootstrapping", "spanx", "guerrilla marketing", "capital efficiency", "prototype", "fear of failure", "sara blakely"],
  },
  {
    slug: "chouinard-sustainable",
    title: "Yvon Chouinard: Patagonia — Growing the Sustainable Company",
    founder: "yvon-chouinard",
    model: "bootstrapping",
    youtubeId: "Bu13DzVkNNo",
    channel: "The Green Interview",
    year: 2012,
    length: "35 min",
    source: "The Green Interview",
    featured: false,
    summary:
      "Chouinard on building Patagonia as an anti-corporate corporation: slow growth on purpose, products designed to last a generation, and a company whose real purpose is not profit but protecting the planet.",
    coreArgument:
      "A business can be a vehicle for values, and constraints are the source of its advantage. Patagonia grew slowly because Chouinard refused debt and refused to cheapen the product — and that refusal created a brand loyalty no advertising budget could buy.",
    timestamps: [
      {
        time: "01:40",
        seconds: 100,
        title: "The piton lesson",
        annotation:
          "Chouinard's first company accidentally destroyed the crags it loved, so he switched to reusable pitons. A values problem became a product innovation — doing right became a moat.",
      },
      {
        time: "12:30",
        seconds: 750,
        title: "Growth on your own terms",
        annotation:
          "'We could have grown much faster and much bigger, but we didn't want to.' Controlled, self-funded growth is how Patagonia kept control of its values and quality.",
      },
      {
        time: "26:00",
        seconds: 1560,
        title: "Products that last, and the business that follows",
        annotation:
          "Designing for durability and repairability trades short-term repurchase for a generation of loyalty. The sustainable choice is also the compounding brand choice.",
      },
    ],
    applyThisModel: [
      {
        title: "Turn a values objection into a product",
        body: "What ethical or quality compromise does your industry accept that you refuse? Make that refusal your signature offering, not a footnote.",
      },
      {
        title: "Choose customers over growth pace",
        body: "Publicly define the customer you will never chase and the quality you will never trade. Discipline at the edges is what lets the core stay excellent.",
      },
      {
        title: "Design the repurchase cycle, not the repurchase",
        body: "For a service business, that means documenting the repeatable quality of your work so customers return on merit, not momentum — and can tell others why.",
      },
    ],
    crossReferences: [
      {
        founder: "sara-blakely",
        take: "complementary",
        tone: "complementary",
        note: "Two bootstrapped originals: Blakely's hustle and Chouinard's values both produced category-defining brands without investor capital or conventional marketing.",
      },
      {
        founder: "reid-hoffman",
        take: "opposing",
        tone: "opposing",
        note: "Hoffman says scale fast or lose; Chouinard deliberately caps growth to protect purpose. The deepest philosophical split in this library — and both are right in their domain.",
      },
    ],
    keywords: ["bootstrapping", "patagonia", "sustainability", "values", "slow growth", "durability", "yvon chouinard"],
  },
  {
    slug: "silbermann-pinterest",
    title: "Ben Silbermann: Pinterest Co-Founder and CEO",
    founder: "ben-silbermann",
    model: "bootstrapping",
    youtubeId: "KwligC0QUA0",
    channel: "Pinterest",
    year: 2015,
    length: "44 min",
    source: "Pinterest / Stanford talk",
    featured: false,
    summary:
      "Silbermann on the two years Pinterest spent nearly dead — 2,000 users, skeptics everywhere — and why building slowly for people who truly loved the product beat chasing the mainstream early.",
    coreArgument:
      "When you can't win on speed, scale, or capital, you win on taste and patience: make something so specifically right for a small group that they evangelize it for you. The mainstream arrives late, but it arrives — if the core is genuinely loved.",
    timestamps: [
      {
        time: "04:10",
        seconds: 250,
        title: "The product everyone initially disliked",
        annotation:
          "For two years Pinterest was a curiosity. Silbermann kept building for the narrow audience who got it, ignoring the 'why would anyone use this' chorus.",
      },
      {
        time: "18:20",
        seconds: 1100,
        title: "Patience as the competitive weapon",
        annotation:
          "Pinterest couldn't outspend or out-hype competitors, so it out-lasted them. A slow-burn adoption curve protected the culture from growth-induced dilution.",
      },
      {
        time: "33:00",
        seconds: 1980,
        title: "When the mainstream finally came",
        annotation:
          "The core-loved product eventually spread by genuine word-of-mouth — because the enthusiasts were real, the growth was defensible and cheap.",
      },
    ],
    applyThisModel: [
      {
        title: "Serve the obsessed minority first",
        body: "Identify the 100 people for whom your product is a must-have. Build exclusively for them for 6 months. Their evangelism is the cheapest, most durable marketing channel.",
      },
      {
        title: "Ignore the chorus for a full quarter",
        body: "Pick one opinion you keep hearing from non-customers (you're too niche, too expensive, too slow) and formally set it aside for 90 days while you serve paying users. Re-evaluate with data.",
      },
      {
        title: "Let organic growth set your pace",
        body: "If you're getting customers by referral faster than you can handle, resist the urge to spend on ads to accelerate. Depth of loyalty now is worth more than speed later.",
      },
    ],
    crossReferences: [
      {
        founder: "jeff-bezos",
        take: "complementary",
        tone: "complementary",
        note: "Bezos's 'resist proxies' is Silbermann's patience institutionalized — both refuse to optimize the metric (growth) at the expense of the thing (loyal users).",
      },
      {
        founder: "marc-andreessen",
        take: "opposing",
        tone: "opposing",
        note: "Andreessen's build-fast bias would have pushed Pinterest toward faster shipping; Silbermann's counter is that in taste-driven products, the slow path is the build path.",
      },
    ],
    keywords: ["pinterest", "taste", "patience", "organic growth", "niche", "loyalty", "ben silbermann"],
  },
  {
    slug: "grove-interview",
    title: "Andy Grove, Co-founder of Intel: 1999 Interview",
    founder: "andy-grove",
    model: "paradigm-pivots",
    youtubeId: "fvSDUdJHo6k",
    channel: "Silicon Valley Historical Association",
    year: 1999,
    length: "30 min",
    source: "Silicon Valley Historical Association",
    featured: false,
    summary:
      "The man who fired himself out of memory chips and into microprocessors on the nature of strategic inflection points, the meaning of paranoia, and why the CEO's most valuable act is confronting reality before the market does.",
    coreArgument:
      "Strategic inflection points are points where the old rules stop working and the company that doesn't change dies — regardless of how good it was before. Survival requires recognizing the inflection early, arguing the data against consensus, and having the courage to bet the company on the new direction.",
    timestamps: [
      {
        time: "02:40",
        seconds: 160,
        title: "What is a strategic inflection point?",
        annotation:
          "A change so fundamental that the existing ways of competing stop working — often visible as a sudden shift in a '10x' factor: technology, competition, regulation, or customer behavior.",
      },
      {
        time: "15:10",
        seconds: 910,
        title: "The microprocessor bet",
        annotation:
          "Intel left a business it had defined for 15 years because the data said the old model was dying. 'The last thing you want to do is outlive the company you used to have.'",
      },
      {
        time: "24:30",
        seconds: 1470,
        title: "Paranoia as a management style",
        annotation:
          "Grove's famous line in practice: treat every success as temporary, every competitor as a potential ambush, every process as one that will break. Survival is the only reliable metric.",
      },
    ],
    applyThisModel: [
      {
        title: "Name your potential inflection points",
        body: "Write down the three 10x changes that could make your current business model obsolete (AI, regulation, a new competitor format, a customer shift). Review quarterly — the paranoid list IS the strategy doc.",
      },
      {
        title: "Set a kill threshold for your core product",
        body: "Pre-commit: if your signature offering's revenue share drops below X% or new-client acquisition falls Y% for two quarters, you will change the model. Pre-commitment beats denial in the moment.",
      },
      {
        title: "Do the post-mortem on the company you are now",
        body: "Write the honest reasons your current business could fail in 24 months, from the perspective of its competitor. Then build the plan to not be that company.",
      },
    ],
    crossReferences: [
      {
        founder: "jensen-huang",
        take: "complementary",
        tone: "complementary",
        note: "Huang is Grove's successor: NVIDIA executed a bet-the-company pivot from graphics to CUDA to AI, exactly the Grove playbook, and says paranoia is why he still runs the company.",
      },
      {
        founder: "marc-benioff",
        take: "complementary",
        tone: "complementary",
        note: "Benioff bet the paradigm shift from installed software to cloud before the incumbents felt it — the SaaS version of Grove's microprocessor call.",
      },
    ],
    keywords: ["andy grove", "intel", "strategic inflection point", "paranoia", "pivot", "10x change", "survival"],
  },
  {
    slug: "benioff-cloud",
    title: "Marc Benioff: Cloud Futures at Google Atmosphere",
    founder: "marc-benioff",
    model: "paradigm-pivots",
    youtubeId: "QMzKTeiKGnQ",
    channel: "Google Workspace",
    year: 2008,
    length: "26 min",
    source: "Google Atmosphere Session 8",
    featured: false,
    summary:
      "Benioff, two years after Salesforce showed the world that software could be rented not installed, explaining the mechanics of the cloud paradigm: why subscription economics, always-on updates, and the 'no software' message were unstoppable.",
    coreArgument:
      "A paradigm shift in your market is not an opportunity to compete better — it is a mandate to change your business model. Salesforce didn't out-feature Siebel; it out-modeled it. When the paradigm moves, the winners are the ones who embrace the new model before their existing revenue feels the pain.",
    timestamps: [
      {
        time: "01:30",
        seconds: 90,
        title: "The 'no software' thesis",
        annotation:
          "Benioff's message was deliberately anti-category: not 'better CRM' but 'the end of installed software'. Naming the old paradigm as dead is part of the strategy.",
      },
      {
        time: "11:20",
        seconds: 680,
        title: "Subscription economics change everything",
        annotation:
          "Renting software flipped cash flow, pricing, and incentives: the vendor now wins only if customers keep paying. That alignment, not features, was the durable advantage.",
      },
      {
        time: "20:40",
        seconds: 1240,
        title: "Always-on as the new normal",
        annotation:
          "Cloud is not hosting; it's a continuous relationship with the customer. Continuous improvement replaced the annual upgrade cycle — and made incumbents look static.",
      },
    ],
    applyThisModel: [
      {
        title: "Find the model shift, not just the feature gap",
        body: "Ask what your industry charges for that technology is about to make free or automatic (e.g., scheduling, reporting, booking). Whoever prices the new reality first wins it.",
      },
      {
        title: "Shift at least one revenue stream to recurring",
        body: "Convert one offering from project-based to subscription or retainer. It smooths cash flow and — more importantly — forces you to stay good at it every month, which compounds.",
      },
      {
        title: "Preach the paradigm before it's obvious",
        body: "Publicly commit your business to the new model (website, pricing, process). Deciding early makes you the 'no software' voice of your niche and makes competitors look like incumbents.",
      },
    ],
    crossReferences: [
      {
        founder: "andy-grove",
        take: "complementary",
        tone: "complementary",
        note: "Benioff executed Grove's inflection-point playbook in software: recognized the 10x shift early, named the old model dead, and bet the company on the new one.",
      },
      {
        founder: "charlie-munger",
        take: "opposing",
        tone: "opposing",
        note: "Munger avoided tech because he couldn't predict its paradigm shifts — a deliberate, honest circle-of-competence choice. Benioff's entire career is the opposite bet.",
      },
    ],
    keywords: ["salesforce", "cloud", "paradigm shift", "subscription", "marc benioff", "software", "business model"],
  },
];

export const getLecture = (slug: string): Lecture => {
  const l = lectures.find((x) => x.slug === slug);
  if (!l) throw new Error("Unknown lecture: " + slug);
  return l;
};

export const lecturesByFounder = (founderSlug: string): Lecture[] =>
  lectures.filter((l) => l.founder === founderSlug);

export const lecturesByModel = (modelSlug: string): Lecture[] =>
  lectures.filter((l) => l.model === modelSlug);

export const featuredLectures = (): Lecture[] => lectures.filter((l) => l.featured);

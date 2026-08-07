import type { Lecture } from "./types";
import { lectures } from "./lectures";

export interface SkillNode {
  title: string;
  lecture: string;
  unlock: string;
}

export interface SkillWorksheet {
  title: string;
  intro: string;
  exercises: string[];
}

export interface SkillTier {
  level: number;
  title: string;
  subtitle: string;
  nodes: SkillNode[];
  worksheet: SkillWorksheet;
}

export const skillTree: SkillTier[] = [
  {
    level: 0,
    title: "Think First",
    subtitle: "Before you build, wire your brain. These are the prerequisites every later tier leans on.",
    nodes: [
      { title: "The bias checklist", lecture: "munger-misjudgment", unlock: "Know how your own brain will fool you before you make any big call." },
      { title: "Two systems, one brain", lecture: "kahneman-fast-slow", unlock: "See the fast, biased judgments underneath your 'reasoned' decisions." },
      { title: "Radical truth", lecture: "dalio-principles", unlock: "Build the habit of saying what's actually true, to yourself and your team." },
      { title: "The effective executive", lecture: "drucker-interview", unlock: "Learn the concentration and time discipline every later tier depends on." },
      { title: "Protect your attention", lecture: "newport-deep-work", unlock: "Deep focus is the raw input for everything that follows." },
    ],
    worksheet: {
      title: "Worksheet: Think First",
      intro: 'Wire your brain before you build anything.',
      exercises: [
        'Invert your biggest risk: write the reasons your business could fail in 24 months, then one fix for each.',
        'Audit your incentives: list every commission or bonus and the behavior it literally pays for. Fix the misaligned ones.',
        "Time-audit a week: log every 30-minute block, then reclaim the half that's shallow.",
        'Block the deep: reserve the same 3-4 morning hours for the one hard thing, every day.',
        "Principle one-liner: after your last mistake, write the one-line rule you'll follow next time.",
      ],
    }
  },
  {
    level: 1,
    title: "Create",
    subtitle: "Make something new. Monopoly thinking, product craft, and the conviction to build what you love.",
    nodes: [
      { title: "The monopoly doctrine", lecture: "thiel-competition", unlock: "Own a niche completely before expanding anywhere." },
      { title: "Disruption comes from below", lecture: "christensen-measure-life", unlock: "Find the cheap, ugly offer incumbents dismiss — that's your opening." },
      { title: "Wealth and leverage", lecture: "naval-get-rich", unlock: "Understand specific knowledge and leverage before you commit the years." },
      { title: "Originals", lecture: "grant-original-thinkers", unlock: "Generate volume and doubt your own ideas — originality is a process." },
      { title: "Make the hard thing invisible", lecture: "perkins-vivatech", unlock: "The simplest version wins when the user isn't an expert." },
      { title: "Build what you love", lecture: "wozniak-real", unlock: "Craft for the user who is you, then find the others." },
      { title: "Refuse the category's compromise", lecture: "jobs-iphone", unlock: "Don't enter a category to be better at it — make its assumptions obsolete." },
      { title: "Design the 10-star experience", lecture: "chesky-design", unlock: "The journey, not the page, is the product." },
    ],
    worksheet: {
      title: "Worksheet: Create",
      intro: 'Make something new — a monopoly position, not a copy.',
      exercises: [
        'The niche test: name the smallest market you could own completely.',
        "The secret: one belief about your customers that's true but your industry treats as settled.",
        'The compromise you refuse: which category assumption will your product make obsolete?',
        'The 10-star audit: score your full customer journey 1-10; fix every step below 6.',
        "The delete list: write the one feature or offer you'll cut this quarter.",
      ],
    }
  },
  {
    level: 2,
    title: "Enter & Spread",
    subtitle: "Distribution before perfection. Hand-serve the first believers, then let the tribe spread it.",
    nodes: [
      { title: "Do what doesn't scale", lecture: "graham-dont-scale", unlock: "Get your first 20 customers by hand before you automate anything." },
      { title: "The smallest viable audience", lecture: "godin-ideas-spread", unlock: "Serve the narrow tribe that would miss you — remarkable spreads." },
      { title: "Segment, don't average", lecture: "gladwell-spaghetti", unlock: "There is no perfect product; offer plurality to distinct tastes." },
      { title: "The six weapons of persuasion", lecture: "cialdini-persuasion", unlock: "Understand why people say yes before you try to sell." },
      { title: "Tactical empathy", lecture: "voss-negotiation", unlock: "Win the price, the collection, and the deal with empathy as a tool." },
      { title: "The guerilla story", lecture: "blakely-origin", unlock: "Out-market competitors with persistence and story, not budget." },
      { title: "The 'Tory flat'", lecture: "burch-empire", unlock: "One remarkable product that people repeat by name." },
      { title: "Value-led growth", lecture: "herd-bumble", unlock: "A difference people join becomes a distribution engine." },
      { title: "The third place", lecture: "schultz-in-depth", unlock: "Define the feeling you sell and systematize it as you scale." },
      { title: "The slow organic curve", lecture: "silbermann-pinterest", unlock: "Out-last the hype; the mainstream arrives if the core is loved." },
    ],
    worksheet: {
      title: "Worksheet: Enter & Spread",
      intro: 'Distribution before perfection — recruit believers by hand.',
      exercises: [
        "The manual 20: name the 20 customers you'll personally recruit this month.",
        'The smallest viable audience: the narrowest group that would miss you if you vanished.',
        'The purple cow: one detail so remarkable a customer would tell a neighbor by name.',
        'The proof engine: ask 5 happy customers for a review at the peak of their satisfaction.',
        "The mirror: at the next objection, repeat the customer's last 3 words and label the emotion.",
      ],
    }
  },
  {
    level: 3,
    title: "Operate",
    subtitle: "You have customers — now make the machine perfect. Moats, systems, cash flow, and quality.",
    nodes: [
      { title: "Day 1 and the flywheel", lecture: "bezos-day1", unlock: "Build the loop that lowers its own costs every rotation." },
      { title: "The moat", lecture: "buffett-investing", unlock: "Know your circle of competence and hold the good business." },
      { title: "Logistics as the weapon", lecture: "walton-walmart", unlock: "Win the town completely, then optimize the back end." },
      { title: "The assembly line", lecture: "ford-assembly", unlock: "Standardize the process and collapse the cost." },
      { title: "The franchise machine", lecture: "kroc-1978", unlock: "Document every process so a stranger can run it perfectly." },
      { title: "Cash flow first", lecture: "michalowicz-profit-first", unlock: "Take profit out first; make the business live on what remains." },
      { title: "Systems, not heroics", lecture: "gerber-emyth", unlock: "Work on the business, not in it — build the franchise prototype." },
      { title: "Capture and clarify", lecture: "allen-gtd", unlock: "Empty your head into a trusted system so the operation runs clear." },
      { title: "Statistical process control", lecture: "deming-quality", unlock: "Fix the process, not the person — most defects are designed in." },
      { title: "Lean and the seven wastes", lecture: "ohno-tps", unlock: "Shrink the buffer so the hidden problems surface to be fixed." },
      { title: "Zero defects / poka-yoke", lecture: "shingo-zero-quality", unlock: "Make the mistake impossible, not just caught." },
      { title: "The bottleneck", lecture: "goldratt-toc", unlock: "Improve the one constraint, and the whole system improves." },
    ],
    worksheet: {
      title: "Worksheet: Operate",
      intro: 'Perfect the machine — moats, systems, cash flow, and quality.',
      exercises: [
        'Document one process: write the one-page version a stranger could run perfectly.',
        "Find the bottleneck: where does work pile up? Protect that step's time this week.",
        "Cut a waste: pick one of Ohno's seven wastes and eliminate it this week.",
        'Poka-yoke one error: the mistake you keep catching — make it physically impossible.',
        'Cash flow: open a profit account and move 2% of every deposit in before spending.',
      ],
    }
  },
  {
    level: 4,
    title: "Lead & Reward",
    subtitle: "You have a team — now lead people, not just processes. Purpose, trust, and real motivation.",
    nodes: [
      { title: "Start with why", lecture: "sinek-start-with-why", unlock: "Give people a belief to follow before a task to do." },
      { title: "Courage to be seen", lecture: "brown-vulnerability", unlock: "Trust is built by leaders willing to show up without certainty." },
      { title: "The trust pyramid", lecture: "lencioni-dysfunctions", unlock: "Fix the base — trust, conflict, commitment — and results follow." },
      { title: "The habit of proactivity", lecture: "covey-be-proactive", unlock: "Lead from the space between stimulus and response." },
      { title: "The leadership ladder", lecture: "maxwell-5-levels", unlock: "You can't skip permission (trust) on the way to production." },
      { title: "Culture is priority one", lecture: "hsieh-culture", unlock: "Hire for values and make service the marketing." },
      { title: "Theory X vs Theory Y", lecture: "mcgregor-theory-y", unlock: "Your assumption about people creates the behavior you get." },
      { title: "Motivators vs hygiene", lecture: "herzberg-kita", unlock: "Pay prevents dissatisfaction; only the work itself motivates." },
      { title: "Autonomy, mastery, purpose", lecture: "pink-motivation", unlock: "For judgment work, design for intrinsic motivation — not carrots." },
      { title: "Renewal is structural", lecture: "huffington-thrive", unlock: "The leader's recovery is the team's capacity." },
      { title: "Sit at the table", lecture: "sandberg-lean-in", unlock: "Claim ambition and build a workplace where everyone does." },
    ],
    worksheet: {
      title: "Worksheet: Lead & Reward",
      intro: 'Lead the people — purpose, trust, and real motivation.',
      exercises: [
        'The assumption audit: which control system are you running on? Test one Theory Y experiment for 30 days.',
        "The hygiene floor: fix one pay, policy, or condition that's creating quiet dissatisfaction.",
        'The motivator: give someone a whole outcome to own — their method, their result.',
        'The trust exercise: one strength and one weakness, around the room, at your next meeting.',
        'The why: write the one-sentence belief people would follow beyond the paycheck.',
      ],
    }
  },
  {
    level: 5,
    title: "Endure & Renew",
    subtitle: "The market will shift. The paranoid survive — grit, stoicism, and bet-the-company pivots.",
    nodes: [
      { title: "Only the paranoid survive", lecture: "grove-interview", unlock: "Treat success as a crisis in waiting; name the inflection early." },
      { title: "Low expectations, high resilience", lecture: "huang-resilience", unlock: "Expect the suffering — it's the price of doing something great." },
      { title: "Grit", lecture: "duckworth-grit", unlock: "Passion plus perseverance is the survival trait under everything." },
      { title: "The obstacle is the way", lecture: "holiday-obstacle", unlock: "Reframe the crisis as training — perception, action, will." },
      { title: "Lead through the crash", lecture: "barra-crisis", unlock: "Own the mistake, change the culture, bet on the future." },
      { title: "Bet on the paradigm", lecture: "musk-dealbook", unlock: "First principles: question everything, then take the important bet." },
      { title: "The paradigm shift", lecture: "benioff-cloud", unlock: "When the model moves, name the old one dead and shift early." },
      { title: "Connect the dots backward", lecture: "jobs-stanford", unlock: "Trust the work you chose — it compounds even through the setbacks." },
    ],
    worksheet: {
      title: "Worksheet: Endure & Renew",
      intro: 'Survive the shift — the paranoid plan for the future.',
      exercises: [
        'The paranoid list: three 10x forces that could make your model obsolete.',
        'The kill threshold: pre-commit — if metric X drops Y% for two quarters, the model changes.',
        'The obstacle: strip the drama from your current crisis into three objective sentences.',
        'The transition bet: shift one slice of the business to the new paradigm now.',
        "The reframe: log the setback you'd be glad you faced, in hindsight.",
      ],
    }
  },
];

export function getLectureForNode(node: SkillNode): Lecture {
  const l = lectures.find((x) => x.slug === node.lecture);
  if (!l) throw new Error("Unknown skill-tree lecture: " + node.lecture);
  return l;
}

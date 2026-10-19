import type { Archetype } from "./types";

export const archetypes: Archetype[] = [
  {
    slug: "steward",
    name: "The Steward",
    tagline: "Grow on your own terms — values over pace",
    philosophy:
      "The Steward treats the business as something borrowed from the future, not a thing to be extracted. Growth is accepted only when it can be done without betraying the founding values; when the two conflict, growth loses. Decisions are filtered through a single question — 'would we be proud of this if everyone knew?' — and constraints (small size, limited growth, hard stances) are treated as brand assets rather than handicaps. The Steward's moat is coherence: customers and employees trust that the company will not sell out, because it has proven, repeatedly, that it won't.",
    values: [
      { dimension: "Competition", belief: "Compete only on values you'd defend in public. Let mission, not price, be the differentiator — and cede the races you can't win without compromise." },
      { dimension: "Hiring", belief: "Hire people who already live the values. A culture fit who grows into the skill beats a star who erodes the mission." },
      { dimension: "Training", belief: "Apprenticeship over onboarding. Grow people slowly into masters of the craft, because the craft is the product." },
      { dimension: "Promotion", belief: "Promote those who protect the mission, not those who climb fastest. Seniority follows stewardship, not tenure." },
      { dimension: "Scaling", belief: "Scale only on your own terms. Say no to growth that would break the values — a smaller business done right beats a bigger one done wrong." },
    ],
    marketFit:
      "Mission-driven, premium, and low-competition niches — markets where customers will pay more to buy from a company whose values they share, and where reputation compounds slowly over decades.",
    model: "bootstrapping",
    founders: ["yvon-chouinard"],
    books: ["let-my-people-go-surfing", "company-of-one"],
    lecture: "chouinard-sustainable",
  },
  {
    slug: "operator",
    name: "The Operator",
    tagline: "Systems, flywheels, and a permanent Day 1",
    philosophy:
      "The Operator believes advantage is engineered, not inspired — built from repeatable systems that get cheaper and better with every turn of the flywheel. The job of the leader is to remove friction, standardize excellence, and make high-velocity decisions so the organization can run without heroics. Customer obsession beats competitor obsession; the scoreboard is the system, not the speech. The Operator scales by turning what one person did well into what everyone does reliably, and defends the culture by promoting owners of outcomes.",
    values: [
      { dimension: "Competition", belief: "Customer obsession beats competitor obsession. Let the flywheel — lower cost, better service, more capacity — win the long game, not head-to-head feature fights." },
      { dimension: "Hiring", belief: "Hire builders and high-velocity decision-makers. Look for people who make the system better, not just those who execute it." },
      { dimension: "Training", belief: "Train to the system, not the hero. Document the standard, then develop people into owners of the process." },
      { dimension: "Promotion", belief: "Promote owners of outcomes. Advancement follows measurable contribution and the willingness to decide, not seniority." },
      { dimension: "Scaling", belief: "Scale the system, not the chaos. Hold a permanent Day 1 posture — standardize, automate, and compound efficiency as you grow." },
    ],
    marketFit:
      "Large, efficiency-rewarding, repeat-purchase markets — retail, logistics, and platforms where scale economics and standardization create a durable cost and service advantage.",
    model: "operational-moats",
    founders: ["jeff-bezos", "sam-walton", "ray-kroc"],
    books: ["made-in-america", "the-goal"],
    lecture: "bezos-day1",
  },
  {
    slug: "monopolist",
    name: "The Monopolist",
    tagline: "Own a niche, escape the fight",
    philosophy:
      "The Monopolist starts from Thiel's first question — 'what valuable company is nobody building?' — and refuses to enter any market where winning means out-fighting rivals. The goal is a small, defensible monopoly built on a secret the mainstream dismisses, expanded outward only after the niche is owned completely. Teams stay small and elite because the work is frontier work with no playbook; promotion rewards the person who finds the next secret. Scaling is the careful expansion of a position only you can hold, never a land grab into someone else's turf.",
    values: [
      { dimension: "Competition", belief: "Escape competition entirely. Find a non-consensus truth and own a small market completely before expanding — never join a fight you can't uniquely win." },
      { dimension: "Hiring", belief: "Hire for the rare skill that compounds. Small, elite teams of people who can operate without a playbook beat large teams executing one." },
      { dimension: "Training", belief: "Learn by doing on the frontier. There is no manual for a secret market, so develop judgment through direct, high-ownership work." },
      { dimension: "Promotion", belief: "Promote the person who discovers the next secret — the one who sees the niche no one else believes in yet." },
      { dimension: "Scaling", belief: "Expand from the owned niche outward. Grow only into adjacent markets where the defensible position carries, never into open competition." },
    ],
    marketFit:
      "Winner-take-most, tech-enabled, and non-consensus markets — places where a proprietary technology, network effect, or secret creates a position rivals cannot replicate.",
    model: "zero-to-one",
    founders: ["peter-thiel", "naval-ravikant"],
    books: ["zero-to-one", "almanack-naval"],
    lecture: "thiel-competition",
  },
  {
    slug: "missionary",
    name: "The Missionary",
    tagline: "Belief-led, people-first",
    philosophy:
      "The Missionary leads from a clear why and treats the business as a community built around a shared belief. People don't buy what you do, they buy why you do it — and the same is true of the team. Trust and psychological safety come first, because only safe teams tell the truth, argue productively, and commit. The Missionary hires believers, develops the whole person, promotes those who grow others, and scales the cause while protecting the why. Profit follows purpose; the purpose is never bent to chase the profit.",
    values: [
      { dimension: "Competition", belief: "Win on belief. Customers and employees rally to a cause they believe in, so lead with why — not with feature comparisons." },
      { dimension: "Hiring", belief: "Hire believers, not just workers. Someone who shares the mission will out-contribute a more skilled skeptic every time." },
      { dimension: "Training", belief: "Develop the whole person. Build trust and safety first, then grow judgment, courage, and capability — not just tasks." },
      { dimension: "Promotion", belief: "Promote those who grow others. Leadership is measured by the people it develops, not the results it posts alone." },
      { dimension: "Scaling", belief: "Scale the cause, protect the why. Grow only in ways that keep the belief intact and the community strong." },
    ],
    marketFit:
      "People-centric, service, and cause-driven markets — hospitality, care, community brands, and any business where trust and belonging are the primary purchase.",
    model: "purpose-leadership",
    founders: ["simon-sinek", "brene-brown", "howard-schultz", "tony-hsieh"],
    books: ["start-with-why", "dare-to-lead", "pour-your-heart-into-it", "delivering-happiness"],
    lecture: "sinek-start-with-why",
  },
  {
    slug: "craftsman",
    name: "The Craftsman",
    tagline: "Taste is the moat; say no to the rest",
    philosophy:
      "The Craftsman believes the product is the argument, and that taste — the disciplined refusal of everything that dilutes it — is a defensible asset. Quality is non-negotiable and compromise is named out loud rather than hidden. The team is kept small and obsessive, hired for taste over résumé, and trained under masters who protect the integrity of the idea. Promotion goes to whoever protects quality; scaling happens by going deeper, not wider, because breadth without taste is just more mediocrity.",
    values: [
      { dimension: "Competition", belief: "Refuse the compromise. Taste is the moat — win on design and integrity, not by meeting the category's lowest common denominator." },
      { dimension: "Hiring", belief: "Hire for taste and obsession. Say no to 95% of candidates; one person who protects quality is worth a room of generalists." },
      { dimension: "Training", belief: "Apprentice under masters. Protect the integrity of the idea by developing craft through close, demanding mentorship." },
      { dimension: "Promotion", belief: "Promote the person who protects quality. The standard-setters rise; those who trade craft for speed do not." },
      { dimension: "Scaling", belief: "Scale by saying no. Go deeper into excellence rather than broader into compromise — depth compounds, dilution doesn't." },
    ],
    marketFit:
      "Design-led, premium, quality-differentiated markets — hardware, fashion, software, and any category where customers pay a premium to avoid the compromise everyone else accepts.",
    model: "product-intuition",
    founders: ["steve-jobs", "jony-ive"],
    books: ["steve-jobs", "creative-selection"],
    lecture: "ive-lessons",
  },
  {
    slug: "allocator",
    name: "The Allocator",
    tagline: "Capital discipline and first who, then what",
    philosophy:
      "The Allocator treats the business as a portfolio of decisions and believes the scarce resource is judgment, not effort. Get the right people on the bus first ('first who, then what'), then allocate capital only to what compounds and kill what doesn't with dispassionate honesty. Incentives are audited before strategies, because how people are paid determines what they do. Promotion follows contribution and sound judgment, never tenure or likeability. Scaling is disciplined capital allocation — grow the positions that earn it, starve the ones that don't.",
    values: [
      { dimension: "Competition", belief: "Pick the right game before playing it well. Allocate to where you have a durable edge, and ignore the battles that don't move the portfolio." },
      { dimension: "Hiring", belief: "Get the right people on the bus first. Judgment and character outweigh energy — 'first who, then what.'" },
      { dimension: "Training", belief: "Build leaders, not followers. The executive's job is to develop others' judgment so decisions multiply." },
      { dimension: "Promotion", belief: "Promote on contribution and judgment, not tenure or likeability. Honest assessment beats political comfort." },
      { dimension: "Scaling", belief: "Scale by capital discipline. Fund only what compounds; starve and kill what doesn't, without sentiment." },
    ],
    marketFit:
      "Capital-intensive, portfolio, and conglomerate markets — holding companies, diversified operators, and any business where how capital and attention are allocated decides survival.",
    model: "strategy-decision",
    founders: ["warren-buffett", "jim-collins", "charlie-munger", "peter-drucker"],
    books: ["the-snowball", "good-to-great", "poor-charlies-almanack", "effective-executive"],
    lecture: "collison-altman",
  },
];

export const getArchetype = (slug: string): Archetype => {
  const a = archetypes.find((x) => x.slug === slug);
  if (!a) throw new Error("Unknown archetype: " + slug);
  return a;
};

export const archetypesByModel = (modelSlug: string): Archetype[] =>
  archetypes.filter((a) => a.model === modelSlug);

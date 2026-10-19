export interface Model {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  philosophy: string;
  core: string[];
  keyFrameworks: string[];
  epitomeFounders: string[];
  color: string;
}

export interface Founder {
  slug: string;
  name: string;
  company: string;
  role: string;
  years: string;
  kind: "builder" | "thinker";
  models: string[];
  books?: string[];
  quote: string;
  bio: string;
  knownFor: string[];
}

export interface Timestamp {
  time: string;
  seconds: number;
  title: string;
  annotation: string;
}

export interface ApplyItem {
  title: string;
  body: string;
}

export interface CrossReference {
  founder: string;
  take: string;
  tone: "complementary" | "opposing";
  note: string;
}

export interface Lecture {
  slug: string;
  title: string;
  founder: string;
  model: string;
  youtubeId: string | null;
  channel: string;
  year: number;
  length: string;
  source: string;
  featured: boolean;
  summary: string;
  coreArgument: string;
  timestamps: Timestamp[];
  applyThisModel: ApplyItem[];
  crossReferences: CrossReference[];
  keywords: string[];
}

export interface Book {
  slug: string;
  title: string;
  author: string;
  year: number;
  model: string;
  rating: number;
  cover: string;
  blurb: string;
  review: string;
  takeaways: string[];
  whyItMatters: string;
}

export interface Playbook {
  slug: string;
  title: string;
  problem: string;
  models: string[];
  steps: PlaybookStep[];
  summary: string;
}

export interface PlaybookStep {
  title: string;
  body: string;
  lecture?: string;
  book?: string;
}

export interface PathwayStep {
  station: string;
  title: string;
  narrative: string;
  lecture?: string;
  book?: string;
  playbook?: string;
  model?: string;
}

export interface Pathway {
  slug: string;
  entry: "ideas" | "founders";
  title: string;
  audience: string;
  intro: string;
  outcome: string;
  steps: PathwayStep[];
  estimated: string;
}

export interface ArchetypeValue {
  dimension: "Competition" | "Hiring" | "Training" | "Promotion" | "Scaling";
  belief: string;
}

export interface Archetype {
  slug: string;
  name: string;
  tagline: string;
  philosophy: string;
  values: ArchetypeValue[];
  marketFit: string;
  model: string;
  founders: string[];
  books: string[];
  lecture?: string;
}

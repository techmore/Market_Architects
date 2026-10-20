import { archetypes } from "./archetypes";
import { books } from "./books";
import { founders } from "./founders";
import { lectures } from "./lectures";
import { models } from "./models";
import { pathways } from "./pathways";
import { playbooks } from "./playbooks";
import { skillTree } from "./skilltree";
import { allTags } from "./tags";

/**
 * Single source of truth for the numbers quoted in copy ("73 lectures", "10 models", ...).
 * Derive from the data so the site never drifts from its own content.
 */
export const stats = {
  models: models.length,
  leaders: founders.length,
  builders: founders.filter((f) => f.kind === "builder").length,
  thinkers: founders.filter((f) => f.kind === "thinker").length,
  lectures: lectures.length,
  books: books.length,
  playbooks: playbooks.length,
  pathways: pathways.length,
  archetypes: archetypes.length,
  tags: allTags().length,
  tiers: skillTree.length,
  lessons: skillTree.reduce((n, tier) => n + tier.nodes.length, 0),
} as const;

export type Stats = typeof stats;

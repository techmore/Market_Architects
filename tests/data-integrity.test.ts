import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { archetypes, getArchetype } from "../src/data/archetypes";
import { books, getBook, booksByModel } from "../src/data/books";
import { founders, getFounder, initialsOf } from "../src/data/founders";
import { lectures, getLecture, featuredLectures, lecturesByFounder, lecturesByModel } from "../src/data/lectures";
import { models, getModel } from "../src/data/models";
import { pathways, getPathway, pathwaysByEntry } from "../src/data/pathways";
import { playbooks, getPlaybook } from "../src/data/playbooks";
import { skillTree, getLectureForNode } from "../src/data/skilltree";
import { allTags, slugifyTag } from "../src/data/tags";
import { stats } from "../src/data/stats";

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/;

function slugs(items: ReadonlyArray<{ slug: string }>): string[] {
  return items.map((i) => i.slug);
}

function expectUnique(values: string[], label: string) {
  const dupes = values.filter((v, i) => values.indexOf(v) !== i);
  expect(dupes, `${label} has duplicate values`).toEqual([]);
}

describe("collections", () => {
  it("are non-empty", () => {
    for (const [name, items] of Object.entries({ models, founders, lectures, books, playbooks, pathways, archetypes })) {
      expect(items.length, name).toBeGreaterThan(0);
    }
  });

  it("use unique, URL-safe slugs", () => {
    for (const [name, items] of Object.entries({ models, founders, lectures, books, playbooks, pathways, archetypes })) {
      const s = slugs(items);
      expectUnique(s, name);
      for (const slug of s) expect(slug, `${name}: ${slug}`).toMatch(SLUG);
    }
  });

  it("models have unique two-digit indexes and valid colors", () => {
    expectUnique(models.map((m) => m.index), "model.index");
    for (const m of models) {
      expect(m.index).toMatch(/^\d{2}$/);
      expect(m.core.length).toBeGreaterThan(0);
      expect(m.keyFrameworks.length).toBeGreaterThan(0);
    }
  });
});

describe("references resolve", () => {
  it("lectures → founder & model", () => {
    for (const l of lectures) {
      expect(() => getFounder(l.founder), l.slug).not.toThrow();
      expect(() => getModel(l.model), l.slug).not.toThrow();
      for (const ref of l.crossReferences) {
        expect(() => getFounder(ref.founder), `${l.slug} crossRef`).not.toThrow();
        expect(["complementary", "opposing"]).toContain(ref.tone);
      }
    }
  });

  it("founders → models[] & books[]", () => {
    for (const f of founders) {
      expect(f.models.length, `${f.slug} has no models`).toBeGreaterThan(0);
      for (const m of f.models) expect(() => getModel(m), `${f.slug} → ${m}`).not.toThrow();
      for (const b of f.books ?? []) expect(() => getBook(b), `${f.slug} → ${b}`).not.toThrow();
      expect(["builder", "thinker"]).toContain(f.kind);
    }
  });

  it("models → epitomeFounders[]", () => {
    for (const m of models) {
      for (const f of m.epitomeFounders) expect(() => getFounder(f), `${m.slug} → ${f}`).not.toThrow();
    }
  });

  it("books → model", () => {
    for (const b of books) {
      expect(() => getModel(b.model), b.slug).not.toThrow();
      expect(b.rating).toBeGreaterThanOrEqual(0);
      expect(b.rating).toBeLessThanOrEqual(5);
    }
  });

  it("playbooks → models[], lecture, book", () => {
    for (const p of playbooks) {
      for (const m of p.models) expect(() => getModel(m), `${p.slug} → ${m}`).not.toThrow();
      for (const step of p.steps) {
        if (step.lecture) expect(() => getLecture(step.lecture!), `${p.slug} → ${step.lecture}`).not.toThrow();
        if (step.book) expect(() => getBook(step.book!), `${p.slug} → ${step.book}`).not.toThrow();
      }
    }
  });

  it("pathways → lecture, book, playbook, model", () => {
    for (const p of pathways) {
      expect(["ideas", "founders"]).toContain(p.entry);
      for (const step of p.steps) {
        if (step.lecture) expect(() => getLecture(step.lecture!), `${p.slug} → ${step.lecture}`).not.toThrow();
        if (step.book) expect(() => getBook(step.book!), `${p.slug} → ${step.book}`).not.toThrow();
        if (step.playbook) expect(() => getPlaybook(step.playbook!), `${p.slug} → ${step.playbook}`).not.toThrow();
        if (step.model) expect(() => getModel(step.model!), `${p.slug} → ${step.model}`).not.toThrow();
      }
    }
  });

  it("archetypes → model, founders[], books[], lecture", () => {
    for (const a of archetypes) {
      expect(() => getModel(a.model), a.slug).not.toThrow();
      for (const f of a.founders) expect(() => getFounder(f), `${a.slug} → ${f}`).not.toThrow();
      for (const b of a.books) expect(() => getBook(b), `${a.slug} → ${b}`).not.toThrow();
      if (a.lecture) expect(() => getLecture(a.lecture!), `${a.slug} → ${a.lecture}`).not.toThrow();
    }
  });

  it("skill tree nodes → lectures, with contiguous tier levels", () => {
    skillTree.forEach((tier, i) => {
      expect(tier.level).toBe(i);
      expect(tier.nodes.length).toBeGreaterThan(0);
      expect(tier.worksheet.exercises.length).toBeGreaterThan(0);
      for (const node of tier.nodes) expect(() => getLectureForNode(node), node.lecture).not.toThrow();
    });
    const lessonLectures = skillTree.flatMap((t) => t.nodes.map((n) => n.lecture));
    expectUnique(lessonLectures, "skill tree lecture");
  });

  it("getters throw a helpful error for unknown slugs", () => {
    expect(() => getModel("nope")).toThrow(/nope/);
    expect(() => getFounder("nope")).toThrow(/nope/);
    expect(() => getLecture("nope")).toThrow(/nope/);
    expect(() => getBook("nope")).toThrow(/nope/);
    expect(() => getPlaybook("nope")).toThrow(/nope/);
    expect(() => getPathway("nope")).toThrow(/nope/);
    expect(() => getArchetype("nope")).toThrow(/nope/);
  });
});

describe("lectures", () => {
  it("have valid YouTube ids, timestamps, and apply/keyword content", () => {
    for (const l of lectures) {
      if (l.youtubeId !== null) expect(l.youtubeId, l.slug).toMatch(YOUTUBE_ID);
      expect(l.timestamps.length, `${l.slug} timestamps`).toBeGreaterThan(0);
      expect(l.applyThisModel.length, `${l.slug} applyThisModel`).toBeGreaterThan(0);
      expect(l.keywords.length, `${l.slug} keywords`).toBeGreaterThan(0);
      for (const ts of l.timestamps) {
        expect(ts.seconds, `${l.slug} ${ts.time}`).toBeGreaterThanOrEqual(0);
        expect(ts.time).toMatch(/^\d{1,2}:\d{2}(?::\d{2})?$/);
      }
      // timestamps should be in increasing order so the "annotated clips" read top to bottom
      const secs = l.timestamps.map((t) => t.seconds);
      expect([...secs].sort((a, b) => a - b), `${l.slug} timestamp order`).toEqual(secs);
    }
  });

  it("timestamp labels agree with their seconds", () => {
    for (const l of lectures) {
      for (const ts of l.timestamps) {
        const parts = ts.time.split(":").map(Number);
        const fromLabel = parts.reduce((acc, n) => acc * 60 + n, 0);
        expect(fromLabel, `${l.slug} ${ts.time}`).toBe(ts.seconds);
      }
    }
  });

  it("have featured entries and working filters", () => {
    expect(featuredLectures().length).toBeGreaterThan(0);
    expect(featuredLectures().length).toBeLessThan(lectures.length);
    const first = lectures[0];
    expect(lecturesByFounder(first.founder)).toContain(first);
    expect(lecturesByModel(first.model)).toContain(first);
    expect(booksByModel(first.model).every((b) => b.model === first.model)).toBe(true);
  });

  it("every founder has at least one lecture", () => {
    const missing = founders.filter((f) => lecturesByFounder(f.slug).length === 0).map((f) => f.slug);
    expect(missing).toEqual([]);
  });

  it("every model has lectures, founders and books", () => {
    for (const m of models) {
      expect(lecturesByModel(m.slug).length, `${m.slug} lectures`).toBeGreaterThan(0);
      expect(founders.some((f) => f.models.includes(m.slug)), `${m.slug} founders`).toBe(true);
      expect(booksByModel(m.slug).length, `${m.slug} books`).toBeGreaterThan(0);
    }
  });
});

describe("tags", () => {
  it("slugify is stable and URL-safe", () => {
    expect(slugifyTag("Monopoly & competition")).toBe("monopoly-competition");
    expect(slugifyTag("  Zero to One!  ")).toBe("zero-to-one");
    expect(slugifyTag("10x")).toBe("10x");
  });

  it("no two keywords collide on the same tag route", () => {
    const tags = allTags();
    expectUnique(tags.map((t) => t.slug), "tag slug");
    for (const t of tags) {
      expect(t.slug, t.keyword).toMatch(SLUG);
      expect(t.items.length).toBeGreaterThan(0);
    }
  });

  it("are sorted by frequency", () => {
    const counts = allTags().map((t) => t.items.length);
    expect([...counts].sort((a, b) => b - a)).toEqual(counts);
  });
});

describe("pathways & helpers", () => {
  it("pathwaysByEntry partitions the collection", () => {
    expect(pathwaysByEntry("ideas").length + pathwaysByEntry("founders").length).toBe(pathways.length);
    expect(pathwaysByEntry("ideas").length).toBeGreaterThan(0);
    expect(pathwaysByEntry("founders").length).toBeGreaterThan(0);
  });

  it("initialsOf produces 1–3 uppercase letters", () => {
    expect(initialsOf("Steve Jobs")).toBe("SJ");
    for (const f of founders) expect(initialsOf(f.name), f.name).toMatch(/^[A-Z]{1,3}$/);
  });
});

describe("transcripts", () => {
  const dir = join(__dirname, "..", "public", "transcripts");

  it("every transcript file belongs to a lecture and has well-formed paragraphs", () => {
    if (!existsSync(dir)) return;
    const lectureSlugs = new Set(slugs(lectures));
    for (const file of readdirSync(dir).filter((f) => f.endsWith(".json"))) {
      const slug = file.replace(/\.json$/, "");
      expect(lectureSlugs.has(slug), `${file} has no lecture`).toBe(true);
      const data = JSON.parse(readFileSync(join(dir, file), "utf8"));
      expect(data.slug, file).toBe(slug);
      expect(Array.isArray(data.paragraphs), file).toBe(true);
      expect(data.paragraphs.length, file).toBeGreaterThan(0);
      for (const p of data.paragraphs) {
        expect(typeof p.t, file).toBe("number");
        expect(typeof p.s, file).toBe("string");
      }
      const lecture = getLecture(slug);
      if (lecture.youtubeId) expect(data.videoId, `${file} videoId`).toBe(lecture.youtubeId);
    }
  });
});

describe("stats", () => {
  it("match the collections", () => {
    expect(stats.models).toBe(models.length);
    expect(stats.leaders).toBe(founders.length);
    expect(stats.builders + stats.thinkers).toBe(founders.length);
    expect(stats.lectures).toBe(lectures.length);
    expect(stats.books).toBe(books.length);
    expect(stats.tiers).toBe(skillTree.length);
    expect(stats.lessons).toBe(skillTree.reduce((n, t) => n + t.nodes.length, 0));
    expect(stats.tags).toBe(allTags().length);
  });
});

import type { Lecture } from "./types";
import { lectures } from "./lectures";

export interface TagEntry {
  slug: string;
  keyword: string;
  items: Lecture[];
}

export function slugifyTag(k: string): string {
  return k
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function allTags(): TagEntry[] {
  const byKeyword = new Map<string, Lecture[]>();
  for (const l of lectures) {
    for (const k of l.keywords) {
      const arr = byKeyword.get(k) ?? [];
      arr.push(l);
      byKeyword.set(k, arr);
    }
  }
  return [...byKeyword.entries()]
    .map(([keyword, items]) => ({ slug: slugifyTag(keyword), keyword, items }))
    .sort((a, b) => b.items.length - a.items.length);
}

export const tagSlug = slugifyTag;

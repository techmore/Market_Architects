"""Fast, dependency-free integrity checks for the static content graph."""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src" / "data"


def text(name: str) -> str:
    return (DATA / name).read_text(encoding="utf-8")


def values(name: str, key: str = "slug") -> set[str]:
    return set(re.findall(rf"\b{key}:\s*[\"']([^\"']+)[\"']", text(name)))


def refs(name: str, key: str) -> list[str]:
    return re.findall(rf"\b{key}:\s*[\"']([^\"']+)[\"']", text(name))


errors: list[str] = []

collections = {
    "lectures": values("lectures.ts"),
    "books": values("books.ts"),
    "founders": values("founders.ts"),
    "models": values("models.ts"),
    "playbooks": values("playbooks.ts"),
    "pathways": values("pathways.ts"),
    "archetypes": values("archetypes.ts") if (DATA / "archetypes.ts").exists() else set(),
}

for label, items in collections.items():
    if not items:
        errors.append(f"{label}: no slugs found")

for file_name in ("lectures.ts", "books.ts", "founders.ts", "models.ts", "playbooks.ts", "pathways.ts", "archetypes.ts"):
    path = DATA / file_name
    if not path.exists():
        continue
    source = path.read_text(encoding="utf-8")
    for key in ("slug",):
        found = re.findall(rf"\b{key}:\s*[\"']([^\"']+)[\"']", source)
        duplicates = sorted({value for value in found if found.count(value) > 1})
        if duplicates:
            errors.append(f"{file_name}: duplicate {key} values: {', '.join(duplicates)}")

def check_refs(source_name: str, key: str, target: str) -> None:
    for value in refs(source_name, key):
        if value not in collections[target]:
            errors.append(f"{source_name}: {key} '{value}' does not resolve in {target}")


check_refs("lectures.ts", "founder", "founders")
check_refs("lectures.ts", "model", "models")
check_refs("books.ts", "model", "models")
check_refs("founders.ts", "model", "models")
check_refs("founders.ts", "book", "books")
check_refs("playbooks.ts", "model", "models")
check_refs("playbooks.ts", "lecture", "lectures")
check_refs("playbooks.ts", "book", "books")
check_refs("pathways.ts", "lecture", "lectures")
check_refs("pathways.ts", "book", "books")
check_refs("pathways.ts", "playbook", "playbooks")
check_refs("pathways.ts", "model", "models")
check_refs("archetypes.ts", "model", "models")
check_refs("archetypes.ts", "founder", "founders")
check_refs("archetypes.ts", "book", "books")
check_refs("archetypes.ts", "lecture", "lectures")

lecture_source = text("lectures.ts")
for youtube_id in re.findall(r"youtubeId:\s*['\"]([^'\"]+)['\"]", lecture_source):
    if not re.fullmatch(r"[A-Za-z0-9_-]{11}", youtube_id):
        errors.append(f"lectures.ts: invalid YouTube ID '{youtube_id}'")

transcripts = ROOT / "public" / "transcripts"
for slug in collections["lectures"]:
    transcript = transcripts / f"{slug}.json"
    if transcript.exists():
        try:
            json.loads(transcript.read_text(encoding="utf-8"))
        except json.JSONDecodeError as exc:
            errors.append(f"{transcript.relative_to(ROOT)}: invalid JSON ({exc.msg})")

if errors:
    print("Content validation failed:")
    print("\n".join(f"- {error}" for error in errors))
    sys.exit(1)

print("Content validation passed: collections, references, YouTube IDs, and transcript JSON are valid.")

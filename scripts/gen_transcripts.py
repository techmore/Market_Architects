import re
import json
import os
import sys
import time

from youtube_transcript_api import YouTubeTranscriptApi

SRC = "src/data/lectures.ts"
OUT = "public/transcripts"

NOISE = re.compile(
    r"\[(?:Music|Applause|Laughter|Cheering|Sfx|__\s*|.*?music.*?|.*?applause.*?)\]|\(applause\)|\(music\)|^\s*♪|♪\s*$|\[.*?music.*?\]",
    re.IGNORECASE,
)
HEADER = re.compile(r"^(transcriber|reviewer|speaker|thanks for watching)\b", re.IGNORECASE)

PARA_SEGS = 5
MAX_PARA_CHARS = 420


def clean(text: str) -> str:
    t = NOISE.sub("", text)
    t = re.sub(r"\s+", " ", t).strip()
    return t


def main():
    src = open(SRC, encoding="utf-8").read()
    lectures = re.findall(
        r'slug: "([a-z0-9-]+)",\n\s+title: "[^"]+",\n\s+founder: "[a-z0-9-]+",\n\s+model: "[a-z0-9-]+",\n\s+youtubeId: "([A-Za-z0-9_-]{11})"',
        src,
    )
    print(f"found {len(lectures)} lectures")
    api = YouTubeTranscriptApi()
    ok = fail = skip = 0
    failures = []
    for idx, (slug, vid) in enumerate(lectures):
        out_path = os.path.join(OUT, f"{slug}.json")
        if os.path.exists(out_path):
            skip += 1
            continue
        last_err = None
        for attempt in range(3):
            try:
                tr = api.fetch(vid)
                segs = []
                for s in tr.snippets:
                    text = clean(s.text)
                    if not text or HEADER.search(text):
                        continue
                    segs.append((s.start, text))
                paras = []
                for i in range(0, len(segs), PARA_SEGS):
                    chunk = segs[i : i + PARA_SEGS]
                    start = chunk[0][0]
                    text = " ".join(t for _, t in chunk)
                    if len(text) > MAX_PARA_CHARS:
                        mid = len(chunk) // 2
                        text = " ".join(t for _, t in chunk[:mid])
                        paras.append({"t": int(chunk[0][0]), "s": text})
                        paras.append({"t": int(chunk[mid][0]), "s": " ".join(t for _, t in chunk[mid:])})
                    else:
                        paras.append({"t": int(start), "s": text})
                payload = {
                    "videoId": vid,
                    "slug": slug,
                    "paragraphs": paras,
                    "source": "YouTube transcript (auto/community generated)",
                }
                with open(out_path, "w", encoding="utf-8") as f:
                    json.dump(payload, f, ensure_ascii=False)
                ok += 1
                break
            except Exception as e:
                last_err = e
                time.sleep(4 * (attempt + 1))
        if not os.path.exists(out_path):
            fail += 1
            failures.append((slug, vid, type(last_err).__name__, str(last_err)[:120]))
        time.sleep(1.5)
    print(f"OK: {ok}  FAIL: {fail}  SKIP(existing): {skip}")
    for f in failures:
        print("  FAIL", f)
    if failures:
        sys.exit(1)


if __name__ == "__main__":
    main()

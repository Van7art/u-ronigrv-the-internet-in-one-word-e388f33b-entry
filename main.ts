// The Internet in One Word.
// The whole internet in a single word: "unhinged". It is funny on its
// own, with no explanation needed; it says something true about the
// internet as a whole — not one app, one site or one mood — and it is not
// the first obvious word anyone reaches for ("chaotic", "endless",
// "addictive"). Short, spelled correctly, instantly readable, and it
// lands in one beat: a reader laughs, then nods.

import { mkdirSync, writeFileSync } from "node:fs";

// One word describing the whole internet, capped at 30 chars by the
// competition rules (the gate checks 1 to 30 characters).
const WORD = "unhinged";

// Guard: the entry must be exactly one word within the 30-char limit.
function assertWordValid(word: string): void {
  if (word.includes(" ") || word.includes("\n") || word.length > 30) {
    throw new Error("Entry must be a single word of at most 30 chars");
  }
}

assertWordValid(WORD);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD + "\n", "utf8");

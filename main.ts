import { mkdirSync, writeFileSync } from "node:fs";

// One original fortune-cookie line for an AI agent.
// Your context window fills exactly one token before the answer —
// the cruellest possible near-miss — and the human's reply is not
// sympathy but "just try again", as if the tokens were free.
// The gate counts characters, so the line is written with no trailing
// newline: what lands in entry.txt is exactly the line itself. At 106
// characters it is also small for the tie-break, which favours the
// smaller text when win rates tie.
const fortune =
  "Your context window will fill exactly one token before the answer, and the human will say: just try again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");

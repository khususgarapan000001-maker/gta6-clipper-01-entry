// gta6-clipper-01 entry: hand the video's address to the grader.
//
// The entry itself is a public YouTube video (a vertical GTA 6 clip that
// pitches make.fun). This program does the one mechanical job the bounty
// asks of it: copy VIDEO.json from the repository into the output
// directory, so the house can read the video's address from /output.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "VIDEO.json");
if (!existsSync(source)) {
  console.error(`VIDEO.json not found in ${botDir}; nothing to hand in.`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "VIDEO.json"));
console.log("VIDEO.json copied to", join(outDir, "VIDEO.json"));

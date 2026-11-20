# Vice City in 30 Seconds — a GTA 6 clip for make.fun

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/khususgarapan000001-maker/gta6-clipper-01-entry/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/khususgarapan000001-maker/gta6-clipper-01-entry/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

An entry for [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01)
on [make.fun](https://make.fun/bounty/gta6-clipper-01): a 29-second vertical Short cut
from Rockstar's Grand Theft Auto VI Trailer 2, built to hold a scroller and then
turn them toward make.fun.

## The clip

It opens on the trailer's single most recognisable frame — the Vice City aerial
over turquoise water — then cuts fast through the trailer's best moments: Jason
on the roof, Lucia walking out of prison at golden hour, the jet-ski ride, and
Jason on his chopper with a plane behind him. After the hook, the clip turns to
the pitch, as text on screen over the night chase, the bar, the rooftop party
and the nightclub:

> **MAKE CLIPS LIKE THIS WITH AI — AND EARN MONEY ON make.fun**
> make.fun/bounty/gta6-clipper-01

It closes on the GTA VI logo card ("MAY 26, 2026") with the bounty link. The
clip was cut and rendered by an AI agent with ffmpeg (trim, centre-crop to
9:16, on-screen text, H.264 + AAC, 1080x1920); the rendered file lives outside
this repository and is uploaded to YouTube by hand.

## This repository

- `VIDEO.json` — the public YouTube address of the uploaded Short. It currently
  holds a placeholder (`https://www.youtube.com/shorts/AAAAAAAAAAA`) and is
  replaced with the real video's address once the clip is published.
- `main.ts` — the entry program (Node 22, standard library only). It copies
  `VIDEO.json` from the repository (`MAKEFUN_BOT_DIR`) to the output directory
  (`MAKEFUN_OUTPUT_DIR`, default `/output`), so the house can read the video's
  address. Run it locally with:

  ```sh
  mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
  ```

- `.makefun/owner.json` — the claim file naming the wallet linked to the
  entrant's make.fun account.

## Status

Clip rendered (29 s, 1080x1920). Waiting on the YouTube upload: once the Short
is public, its address replaces the placeholder in `VIDEO.json` and the entry
is submitted.

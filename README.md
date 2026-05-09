# TaichiFlow v1.3 — Wudang GIF Guide

A Yang Style 24 Form sequence trainer with locally stored real GIF guides from Wudang Shaolin Dream tutorial pages.

## What is included

- Full 24-move sequence trainer
- Real GIF guide for each move
- Two views for move 4
- Two views for move 18
- Visuals page grouped by Part 1 and Part 2
- Previous / current / next flow
- Memory drill
- Known and weak-point tracking
- Practice timer
- Mobile-first layout

## Sources / attribution

Visual GIFs are from:

- https://wudangshaolindream.com/en/tai-chi-24-first-part/
- https://wudangshaolindream.com/en/tai-ji-quan-24-second-part/

Attribution is kept inside the app. If you publish this publicly or use it commercially, ask the source owner for permission.

## Upload

Upload everything to the repo root, including the full `assets/wudang/` folder.

Required files:

- index.html
- app-v1-3.js
- style-v1-3.css
- app.js
- style.css
- icon.svg
- manifest.json
- service-worker.js
- README.md
- assets/wudang/*.gif


## v1.4 clarity and UX fix

- Fixed Previous / Next buttons under the GIF.
- Made the Learn page explain the actual learning loop.
- Reworked Drill mode so it explains what it trains and what to do after answering.
- Made Practice mode cards actionable:
  - 3-minute sequence recall
  - 10-minute slow form
  - 5-minute weak-point loop
- Practice timer now supports countdown plans and session labels.
- Added clearer user guidance throughout the app.


## v1.5 — Full Demo Video Mode

Add your two full demo videos here:

- `assets/videos/full-demo-front.mp4`
- `assets/videos/full-demo-back.mp4`

The app now includes a Full Practice page with:
- Back view / front view toggle
- Full demo video player
- Guidance on when to use each view
- Practice routines for daily habit, correction and memory

Best learner flow:
1. Use back view to follow along.
2. Use front view to check posture and hand shapes.
3. Use Learn view for individual GIFs.
4. Use Drill mode for sequence memory.


## v1.5.1 — Full Practice Route Fix

Fixes the issue where the videos were uploaded correctly but the Full Practice page did not render.

Cause:
- `renderDemo()` existed
- the Full Practice nav existed
- but `render()` was missing the `state.section === "demo"` route

Also adds direct fallback links to:
- `assets/videos/full-demo-back.mp4`
- `assets/videos/full-demo-front.mp4`


## v1.5.2 — Front View Toggle Fix

Fixes the Full Practice front/back toggle.

What changed:
- The toggle now uses `data-demo-view="front"` and `data-demo-view="back"`
- The click handler catches the toggle before other actions
- The selected video source is rendered directly into the video element
- Direct video links remain as fallback

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

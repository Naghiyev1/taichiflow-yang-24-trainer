# TaichiFlow v1.0 — Yang 24 Sequence Trainer

Mobile-first Tai Chi memory trainer for the simplified Yang Style 24 Form.

## Included

- Full Yang 24 sequence
- Chinese names and pinyin
- One-move learning view
- Previous / current / next flow
- Body cues, breath cues, transition cues
- “What comes next?” memory drill
- Known / weak-point tracking
- Practice timer and session history
- Static PWA-style app

## Upload

Upload all files to your repo root:

- index.html
- style-v1-0.css
- app-v1-0.js
- style.css
- app.js
- README.md
- icon.svg
- manifest.json
- service-worker.js


## New in v1.1 visual guidance pack

- Simplified full-form animated GIF
- Simplified individual move GIF for all 24 moves
- GIF shown on the Learn page for the current move
- GIF thumbnails shown on the Sequence page
- Clear note that GIFs are rhythm/shape guides, not a substitute for live instruction


## v1.1.1 Visual Cache Fix

Important: upload the entire `assets` folder to the repo root.

The visuals will not appear unless these files exist online:

- `assets/yang24-full-form.gif`
- `assets/move-01.gif`
- ...
- `assets/move-24.gif`

Also upload:

- `app-v1-1-1.js`
- `style-v1-1-1.css`
- updated `index.html`
- updated `service-worker.js`

If the old app still appears, clear site data or unregister the old service worker.

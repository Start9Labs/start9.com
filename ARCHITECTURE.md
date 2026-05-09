# Architecture

Static marketing site for [start9.com](https://start9.com).

## Stack

- [Eleventy](https://www.11ty.dev) 1.x as the static site generator.
- [Slinkity](https://slinkity.dev) 0.8.x layered on top (unmaintained; see `CLAUDE.md`).
- Node 22 in CI.
- No tests.

## Layout

- `src/` — Eleventy input. Pages (`*.njk`, `design.html`), `_includes/`, `_data/`, and `assets/` (images + `proxy.pac`).
- `public/` — passthrough-copied with contents flattened to the site root. Holds favicons, `manifest.webmanifest`, `404.html`, the JS `libs/`, and the public install scripts under `start-tunnel/` and `start-cli/`.
- `.eleventy.js` — Eleventy config (passthroughs, plugins, filters, dev-server 404 middleware).
- `_site/` — build output (gitignored).

## Build

`npm run build` invokes `slinkity`. The build is known-flaky: CI runs `npm run build || true`, then asserts `_site/index.html` exists and manually copies `src/assets/proxy.pac` and `src/assets/images/` into `_site/assets/` (Slinkity drops these passthroughs).

## Deploy

`.github/workflows/deploy.yml` runs on push to `master`:

1. `npm ci` on Node 22.
2. Build (with the `|| true` + existence check + manual asset copy described above).
3. `rsync -az --delete _site/` to the production VPS over SSH using `DOCS_DEPLOY_KEY`.

No staging environment. `master` is production.

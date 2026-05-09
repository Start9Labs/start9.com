# Contributing

Thanks for your interest in contributing to the Start9 website.

## Documentation

This repo's docs split across:

- `README.md` — what this is
- `ARCHITECTURE.md` — how it's built
- `CONTRIBUTING.md` — this file; how to contribute
- `CLAUDE.md` — AI-developer operating rules

**These docs must be kept up to date.** When you change project structure, conventions, build process, or product context, update the relevant file(s) in the same change — do not defer.

## Prerequisites

- Node 22 (matches CI).

## Setup

1. Clone the repository.
2. `npm install`
3. `npm start` — runs Slinkity dev server with incremental builds.
4. Open <http://localhost:8080>.

`npm run build` produces `_site/`. Note that the build can exit non-zero even on success; see `ARCHITECTURE.md` and `CLAUDE.md`.

## Branch and commit style

- Default branch: `master`.
- Commit messages: lowercase, imperative, terse (e.g. `fix margin`, `update design file`, `OG`).

## Pull requests

Maintainers push directly to `master`; CI deploys automatically. External contributors should fork and open a PR against `master`.

## License

MIT. See `LICENSE`.

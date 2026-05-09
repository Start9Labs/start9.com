# CLAUDE.md

For AI developers (Claude Code, Copilot, etc.). See `CONTRIBUTING.md` for the doc map and contribution workflow.

## Operating rules

- Slinkity (0.8.x) is unmaintained and the build is intentionally lossy. CI runs `npm run build || true`, asserts `_site/index.html` exists, then manually copies `src/assets/proxy.pac` and `src/assets/images/` into `_site/assets/`. Don't try to "fix" the non-zero exit or remove the manual copy steps.
- `addPassthroughCopy("public")` flattens `public/`'s contents to `_site/` root, not `_site/public/`. Verified empirically — favicons, `manifest.webmanifest`, install scripts, etc. land at `/`. Don't restructure thinking it's broken.
- `public/start-tunnel/install.sh` and `public/start-cli/install.sh` are user-facing endpoints (`https://start9.com/start-tunnel/install.sh`, `https://start9.com/start-cli/install.sh`) that replaced the deleted `Start9Labs/start-tunnel` and `Start9Labs/start-cli` GitHub Pages repos. Don't delete or relocate without coordinating with docs.start9.com and any other consumers.

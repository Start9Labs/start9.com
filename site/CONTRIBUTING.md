# Contributing

## Tech Stack

- **[Vendure](https://vendure.io/) 3.5** — headless e-commerce backend (NestJS, TypeScript, GraphQL)
- **Angular 21** with zoneless change detection and standalone components
- **TypeScript 5.9** in strict mode
- **[Taiga UI v5](https://taiga-ui.dev/next)** component library
- **Apollo Angular 13** — GraphQL client for the Vendure Shop API
- **Signal-based state management** (no external store library)
- **SCSS** for styling, using Taiga CSS variables for theming

## Getting Started

```bash
cd site
npm ci                    # Install all workspace dependencies
npm run server:dev        # Start Vendure server (localhost:3000)
npm run web:dev           # Start Angular dev server (localhost:4200)
```

Vendure dashboard: http://localhost:3000/dashboard (superadmin / superadmin)

Shop GraphQL API: http://localhost:3000/shop-api

## Architecture & Patterns

See [CLAUDE.md](CLAUDE.md) for detailed architecture documentation, project structure, code patterns, and conventions.

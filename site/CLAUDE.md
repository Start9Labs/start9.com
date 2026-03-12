# Site — Start9 Marketing & E-Commerce

Combined marketing website and e-commerce store for [start9.com](https://start9.com). Vendure 3.5 headless backend + Angular 21 frontend with [Taiga UI v5](https://taiga-ui.dev/next). npm workspaces monorepo. Zoneless change detection, standalone components, signal-based state. No NgModules anywhere.

## Commands

```bash
cd site
npm ci                    # Install all workspace dependencies
npm run server:dev        # Start Vendure server (localhost:3000)
npm run web:dev           # Start Angular dev server (localhost:4200)
npm run web:build         # Production build of Angular frontend
npm run server:build      # Build Vendure server
npm run check             # Type-check Angular frontend without emitting
```

**Vendure dashboard:** http://localhost:3000/dashboard (superadmin / superadmin)

**Shop GraphQL API:** http://localhost:3000/shop-api — the API the Angular frontend uses.

**GraphQL codegen** (requires server running):

```bash
npm run codegen -w @start9/web
```

## Golden Rules

1. **Taiga-first.** Use Taiga components, directives, and APIs whenever possible. Avoid hand-rolled HTML/CSS unless nothing in Taiga fits.

2. **Pattern-match.** Search for existing patterns before writing new code. Copy the conventions used in neighboring components.

3. **When unsure about Taiga, look it up.** See [Taiga UI Reference](#taiga-ui-reference) below.

4. **Standalone only.** No NgModules. Every component uses `imports: [...]` directly.

5. **Signals, not observables.** Use Angular signals for state. Use `toSignal()` to convert RxJS observables. No NgRx or other external state libraries.

6. **OnPush always.** Every component gets `changeDetection: ChangeDetectionStrategy.OnPush`.

## Taiga UI Reference

### llms-full.txt (~2200 lines, all components with code examples)

```
WebFetch url=https://taiga-ui.dev/llms-full.txt prompt="How to use TuiTextfield with a select dropdown"
```

### MCP server (beta) — `taiga-family/taiga-ui-mcp`

Two tools: `get_list_components` (fuzzy search) and `get_component_example` (docs + code for a specific component). Config:

```json
{
  "mcpServers": {
    "taiga-ui": {
      "command": "npx",
      "args": [
        "-y",
        "@anthropic-ai/mcp-remote@latest",
        "https://taiga-ui.dev/next/api/mcp/sse"
      ]
    }
  }
}
```

## Project Structure

```
site/
├── package.json              # Root: npm workspaces, prettier, husky, scripts
├── docker-compose.yml        # Postgres for production
├── .husky/pre-commit         # Prettier on staged files
│
├── server/                   # Vendure backend (@start9/server)
│   ├── src/
│   │   ├── index.ts          # Server entry point
│   │   ├── index-worker.ts   # Worker process entry
│   │   ├── vendure-config.ts # Central Vendure configuration
│   │   ├── environment.d.ts  # Env var type declarations
│   │   └── plugins/          # Custom Vendure plugins
│   ├── static/
│   │   ├── email/            # Email templates
│   │   └── assets/           # Uploaded product images
│   ├── package.json
│   └── tsconfig.json
│
├── web/                      # Angular frontend (@start9/web)
│   ├── src/
│   │   ├── main.ts           # Bootstrap
│   │   ├── index.html        # HTML shell
│   │   ├── styles.scss       # Global styles (Taiga CSS vars)
│   │   └── app/
│   │       ├── app.ts        # Root component (TuiRoot host)
│   │       ├── app.config.ts # Providers: Taiga, Apollo, routing, HTTP
│   │       ├── app.routes.ts # Top-level routes
│   │       └── routes/       # Page components (lazy-loaded)
│   │           └── home/     # Landing page
│   ├── angular.json          # Angular CLI config
│   ├── tsconfig.json         # Strict TS config
│   ├── tsconfig.app.json     # App-specific TS config
│   ├── codegen.ts            # GraphQL code generator config
│   └── package.json
│
├── CLAUDE.md                 # This file
├── CONTRIBUTING.md           # Human-oriented quickstart
└── README.md                 # Project overview
```

## Vendure Backend

### Configuration

All Vendure config lives in `server/src/vendure-config.ts`. Key sections:

- **apiOptions** — port, API paths (`/admin-api`, `/shop-api`)
- **authOptions** — token method, superadmin credentials (from `.env`)
- **dbConnectionOptions** — SQLite for dev, Postgres for production
- **plugins** — asset server, email, dashboard, search, scheduler

### Plugins

Custom plugins go in `server/src/plugins/`. Each plugin is a NestJS module that can extend the GraphQL schema, add entities, react to events, etc. Use `npx vendure add` to scaffold new plugins.

### Migrations

Database schema changes require migrations. After modifying entities or custom fields:

```bash
cd server
npx vendure migrate
```

### GraphQL APIs

- **Shop API** (`/shop-api`) — used by the Angular frontend. Products, collections, cart, checkout, customer accounts.
- **Admin API** (`/admin-api`) — used by the Vendure dashboard. Order management, inventory, settings.

## Angular Frontend

### Component patterns

All components follow these conventions (matching start-wrt):

- **Standalone** — `imports: [...]` on the component, no NgModules
- **OnPush** — `changeDetection: ChangeDetectionStrategy.OnPush`
- **Inline templates and styles** — no separate `.html` / `.css` files
- **Lazy-loaded routes** — `loadComponent: () => import('./routes/my-page')`
- **Default export** — route page components use `export default class`

### GraphQL queries

Use `graphql-code-generator` for type-safe queries. Define queries in `*.graphql.ts` files:

```typescript
import { graphql } from '../gql'

export const GET_PRODUCTS = graphql(`
  query GetProducts {
    products {
      items {
        id
        name
        slug
        featuredAsset {
          preview
        }
      }
    }
  }
`)
```

Then use Apollo Angular to execute them:

```typescript
import { inject } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { GET_PRODUCTS } from './products.graphql'

const apollo = inject(Apollo)
const result = apollo.watchQuery({ query: GET_PRODUCTS }).valueChanges
```

### Apollo configuration

Apollo is configured in `app.config.ts` with `provideApollo()`. The Shop API endpoint defaults to `/shop-api` (proxied to Vendure in dev).

## Styling Conventions

**No Tailwind.** Styling uses Taiga CSS variables and global utility classes from `styles.scss`.

| Class    | Purpose                                  |
| -------- | ---------------------------------------- |
| `g-page` | Page layout container (flex column, gap) |

All colors use `--tui-*` CSS variables. Component styles are inline in the `@Component` decorator using SCSS. Keep them minimal — lean on Taiga's built-in styling.

## Common Pitfalls

- **Don't use NgModules.** Everything is standalone with `imports: [...]` on the component.
- **Don't use zone.js.** Zoneless change detection is enabled. Use signals and `OnPush`.
- **Don't create separate `.html` / `.css` files.** Templates and styles are inline.
- **Don't import `FormBuilder`.** Use `NonNullableFormBuilder` for strict typing.
- **Don't forget `changeDetection: ChangeDetectionStrategy.OnPush`** on every component.
- **Don't hand-roll API calls.** Use Apollo Angular with typed GraphQL documents.
- **GraphQL codegen requires the Vendure server running** to introspect the schema.

## Future Work

- **SSR** — Angular SSR (`@angular/ssr`) for SEO on marketing pages. Not yet configured.
- **Production database** — Switch from SQLite to Postgres via `docker-compose.yml` and env vars.
- **Custom Vendure plugins** — Payment gateway integration, custom shipping logic, etc.
- **CI/CD pipeline** — Automated builds and deployment.

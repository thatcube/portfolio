# brandonmoore.design

My personal portfolio. Astro, Tailwind, and a small amount of vanilla JS for
the motion work — no UI framework.

**Live:** [brandonmoore.design](https://brandonmoore.design)

The previous version of this site (Gatsby + Sanity) still runs at
[old.brandonmoore.design](https://old.brandonmoore.design) from a separate repo.

## Stack

| | |
| :-- | :-- |
| Framework | [Astro 6](https://astro.build) — static output, no client framework |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite` (CSS-first, no `tailwind.config`) |
| Content | Astro content collections — case studies authored in MDX |
| Icons | [`astro-icon`](https://github.com/natemoo-re/astro-icon) with [Phosphor](https://phosphoricons.com) |
| Fonts | Inter + JetBrains Mono, self-hosted via Fontsource |
| Images | `sharp`, through Astro's built-in `<Image />` pipeline |
| Hosting | Cloudflare Workers (static assets), deployed by GitHub Actions |

Requires Node >= 22.12.

## Commands

```sh
npm ci        # install (see note below — prefer ci over install)
npm run dev   # dev server at localhost:4321
npm run build # production build to ./dist/
npm run preview
```

## Structure

```text
src/
├── components/        # Header, Footer, ProjectCard, LiquidLogo, …
├── content/
│   └── projects/      # case studies (.mdx) — one file per project
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── [slug].astro   # project detail, from the projects collection
│   └── 404.astro
├── styles/global.css  # Tailwind entry + design tokens
└── content.config.ts  # projects collection schema
```

### Adding a project

Drop a new `.mdx` file in `src/content/projects/`. The frontmatter schema lives
in `src/content.config.ts` — `title`, `shortDesc`, `heroImage`, `thumbnail`, and
`publishedAt` are required; `featured` and `order` control placement on the home
page. The route is generated from the filename by `src/pages/[slug].astro`.

Old project URLs (`/projects/<name>`) are redirected to the current short paths
in `astro.config.mjs`; leave those in place.

## Deploying

Pushing to `main` triggers `.github/workflows/cloudflare-deploy.yml`, which
builds and deploys to Cloudflare Workers. It needs one repo secret,
`CLOUDFLARE_API_TOKEN` (Workers Scripts: Edit).

To deploy by hand:

```sh
npm run build && wrangler deploy
```

Worker config — including the `brandonmoore.design` and `www` custom domains —
is in `wrangler.jsonc`.

> **Note on `wranglerVersion` in CI:** it's pinned deliberately.
> `cloudflare/wrangler-action` still bundles wrangler 3.x, which predates
> assets-only Workers and fails with `Missing entry-point` against this config.

## A note on installing

`npm ci` is the reliable install here. On some networks `npm install <pkg>`
re-resolves the whole tree and can fail on registry mirror gaps — if you hit a
confusing `ETARGET` error for a package you didn't touch, that's why. `npm ci`
uses the lockfile and sidesteps it.

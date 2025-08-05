# Next Sanity Showcase

A monorepo showcasing Next.js frontend with Sanity CMS backend.

## Project Structure

```
├── apps/
│   ├── frontend/          # Next.js application
│   └── sanity/           # Sanity CMS
├── packages/             # Shared packages (if needed)
└── package.json          # Root package.json
```

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start development servers:
   ```bash
   pnpm dev
   ```

This will start both the Next.js frontend and Sanity Studio in development mode.

## Individual Commands

- **Frontend**: `pnpm --filter frontend dev`
- **Sanity**: `pnpm --filter sanity dev`

## Build

To build all projects:

```bash
pnpm build
```

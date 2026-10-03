# Bachani Farms

Next.js (App Router) + React + Tailwind CSS v4.

## Development

```bash
npm install
npm run dev
```

App runs at http://localhost:3000 by default.

## Project Structure

- `src/app/` - Next.js App Router layouts and routes
- `src/app/layout.tsx` - Root layout, global metadata, SiteShell
- `src/app/globals.css` - Tailwind CSS v4 entry and theme tokens
- `src/views/` - Page UI components used by App Router routes
- `src/components/` - Shared UI components
- `src/data/` - Site content and data
- `next.config.ts` - Next.js configuration
- `postcss.config.mjs` - Tailwind PostCSS plugin

## Styling

Tailwind CSS v4 via `@tailwindcss/postcss`. Theme tokens and global styles live in `src/app/globals.css`. Use Tailwind utility classes in JSX.

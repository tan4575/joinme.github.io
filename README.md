# Tan Wei Siang Portfolio

Personal portfolio site for Tan Wei Siang, rebuilt with Next.js, Tailwind CSS, and local shadcn-style UI primitives.

## Tech Stack

- Next.js App Router
- React
- Tailwind CSS
- shadcn-style local UI components
- System-first light/dark theme toggle
- Scroll-reveal timeline interactions
- Static export for GitHub Pages

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev
```

Starts the Next.js development server.

```bash
npm run build:local
```

Builds the site locally without the GitHub Pages base path.

```bash
npm run build
```

Builds a static export into `out/` using `/joinme.github.io` as the production base path.

```bash
npm run lint
```

Runs ESLint across the project.

```bash
npm run deploy
```

Builds and publishes `out/` to GitHub Pages with `gh-pages`.

## Project Structure

```text
src/app/          Next.js app routes and global styles
src/components/   Portfolio sections and layout components
src/components/ui shadcn-style Button, Card, and Badge primitives
src/data/         Portfolio copy, links, timeline, and publication data
src/lib/          Shared utilities
public/           Static images, icons, and the existing 3D model bundle
```

## Editing Content

Most portfolio content lives in `src/data/portfolio.js`. Update that file to change the profile details, navigation, hero slides, experience cards, timeline entries, publication cards, or image credits.

The sidebar uses icon navigation and clickable contact links. Social logos are rendered from `src/components/SocialIcon.jsx`.

The circular theme control in `src/components/ThemeIsland.jsx` starts from the system color preference, then stores the user's manual toggle in `localStorage`.

The 3D modeling section loads the existing generated bundle from `public/assests/output.js`. The spelling of `assests` is preserved because the current generated files reference that folder.

## Deployment Notes

This repository is configured for GitHub Pages at:

```text
https://tan4575.github.io/joinme.github.io/
```

For a different GitHub Pages repository path, update the `NEXT_PUBLIC_BASE_PATH` value in the `build` script in `package.json`.

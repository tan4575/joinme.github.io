# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js App Router portfolio site using Tailwind CSS and local shadcn-style UI primitives.

- `src/app/`: route entry points, metadata, and global styles.
- `src/components/`: page sections such as `Hero.jsx`, `Sidebar.jsx`, `Timeline.jsx`, and `ThemeIsland.jsx`.
- `src/components/ui/`: reusable UI primitives (`button`, `card`, `badge`) following shadcn patterns.
- `src/data/portfolio.js`: profile text, links, timeline entries, publications, and credits.
- `src/lib/utils.js`: shared helpers such as `cn()`.
- `public/`: static images, icons, legacy assets, and the generated 3D model bundle in `public/assests/`.

## Build, Test, and Development Commands

- `npm install`: install dependencies.
- `npm run dev`: start the local Next.js dev server.
- `npm run lint`: run ESLint across the project.
- `npm run build:local`: build locally without the GitHub Pages base path.
- `npm run build`: build the static GitHub Pages export with `/joinme.github.io`.
- `npm run deploy`: publish `out/` using `gh-pages`.

## Coding Style & Naming Conventions

Use JSX components with PascalCase filenames for sections (`Publications.jsx`) and lowercase filenames for UI primitives (`button.jsx`). Keep content edits centralized in `src/data/portfolio.js` when possible. Use Tailwind utility classes and the `cn()` helper for conditional class composition. Prefer shadcn-style primitives from `src/components/ui/` before adding one-off button, card, or badge markup.

Keep sidebar navigation icon-based and accessible: visible labels should remain present, while decorative icons use `aria-hidden="true"`. The theme control should start from system preference and store manual toggles in `localStorage`.

Run `npm run lint` before submitting changes.

## Testing Guidelines

There is no dedicated automated test suite yet. Treat `npm run lint`, `npm run build:local`, and `npm run build` as the required verification checks. For visual changes, manually review the homepage at desktop and mobile widths, including light/dark mode, sidebar hover states, timeline scroll reveal, and the 3D modeling section.

If tests are added later, place them near the component or module they cover and use clear names such as `Hero.test.jsx`.

## Commit & Pull Request Guidelines

Recent history uses short imperative or bracketed messages, for example `add 3d model.` and `[Update] - update to latest job role.` Keep commits concise and action-oriented.

Pull requests should include:

- A short description of the change.
- Verification commands run.
- Screenshots or screen recordings for UI changes.
- Notes for deployment-impacting changes, especially base path, static export, or `public/assests/` updates.

## Security & Configuration Tips

Do not commit `.env` files or generated build folders. The production GitHub Pages base path is configured in the `build` script in `package.json`; update it carefully if the repository path changes.

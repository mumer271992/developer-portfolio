# Muhammad Umer · Portfolio

Personal portfolio built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com). It's a fully static site with dark and light themes.

## Requirements

- Node.js **22.22 or newer** (required by Astro 7)

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
```

Build and preview the production version:

```bash
npm run build      # outputs to dist/
npm run preview
```

## Edit your content

All content lives in `src/data/`, so you rarely need to touch the components.

| File | What it controls |
|---|---|
| `src/data/profile.ts` | Name, role, hero intro, status, email, contact text, LinkedIn/GitHub links, education |
| `src/data/skills.ts` | Skill groups, tags and their logos ([simple-icons](https://simpleicons.org)) |
| `src/data/experience.ts` | Work Experience timeline (newest first) |
| `src/data/projects.ts` | Selected work cards |

**Adding a project screenshot:** put the image in `public/projects/` (for example `public/projects/openroom.png`), then add `image: '/projects/openroom.png'` to that project in `projects.ts`. The card shows the screenshot instead of the mockup and zooms in slightly on hover. Add `href: 'https://...'` to link the project title.

**Hero code snippet:** edit `src/components/Hero.astro`.

## Theme colors

All colors are CSS variables in `src/styles/global.css`:

- `:root` holds the dark theme (default)
- the `prefers-color-scheme: light` block and `:root[data-theme="light"]` hold the light theme (keep these two in sync)

They're exposed to Tailwind as utilities like `bg-panel`, `text-muted`, `border-line`, `text-accent`, `font-display` and `font-mono`.

## Project structure

```
src/
  components/   Nav, Hero, Skills, Experience, Work, Contact, SectionHeading
  data/         Content (profile, skills, experience, projects)
  layouts/      Page shell, fonts, theme script
  pages/        index.astro
  styles/       global.css (tokens, Tailwind setup, animations)
public/         favicon and static files
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub and choose **Add New → Project**.
3. Import the repository. Vercel detects Astro automatically (build command `npm run build`, output directory `dist`), so you can keep the defaults.
4. Click **Deploy**. Every push to the main branch redeploys the site.

After the first deploy, set `site` in `astro.config.mjs` to your real URL (for example `https://muhammadumer.vercel.app`) and push again.

If the build fails because of the Node version, open **Project Settings → Build and Deployment → Node.js Version** in Vercel and choose 22.x or newer.

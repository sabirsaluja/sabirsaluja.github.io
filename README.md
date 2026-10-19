# Sabir Saluja, MD — personal website

Static Astro site deployed to GitHub Pages. See `CLAUDE.md` for the full brief.

```bash
npm install        # install dependencies (Node 22 LTS, see .nvmrc)
npm run dev        # local dev server at http://localhost:4321
npm run build      # type-check and build to ./dist
npm run preview    # preview the production build
```

## Editing content

- **Publications:** add a Markdown file to `src/content/publications/` (copy an existing one).
- **Presentations:** add a Markdown file to `src/content/presentations/`.
- **CV sections (About page):** edit `src/data/cv.ts`.
- **Name, email, profile links:** edit `src/site.ts`. Profile links left empty are hidden.
- **Domain:** `site` in `astro.config.mjs`.

`source-material/` (CV PDF, original headshot) is gitignored because the CV contains a personal phone number.

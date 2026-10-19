# CLAUDE.md — Personal Professional Website

> Fill in every `[BRACKETED]` placeholder before the first Claude Code session.

## Project brief

Goal: rank first for “Sabir Saluja" searches on google.
Audience: program directors, fellowship committees, colleagues, and patients who google me. And anyone else who may google me 
Pages:
-About: Radiology resident (PGY-2) at Montefiore Medical Center.
-Home: photo, one-line identity, short bio
-About/CV: training, education, interests (hospital medicine, radiology, procedures)
Publications and presentations
Contact: sabsaluja@montefiore.org

## Stack

- **Framework:** Astro, with static output only
- **Content:** Markdown/MDX in Astro content collections, under `src/content/`
- **Styling:** Plain CSS with custom properties (design tokens) in `src/styles/global.css`. Don't add Tailwind or a UI library unless I ask.
- **JavaScript:** None shipped by default. Don't add React, Vue, or Svelte unless a feature truly needs it.
- **Hosting:** GitHub Pages, deployed with the official Astro GitHub Actions workflow
- **Domain:** https://sabirsaluja.github.io (GitHub Pages user site, no custom domain), served over HTTPS
- **Requirements:** Node.js LTS and npm. Python is not used in this project.

## Commands

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build to ./dist (must pass with zero errors)
npm run preview    # preview the production build
```

## Site structure

| Page | Path | Content |
|---|---|---|
| Home | `/` | Headshot, name and title, one-line identity, short bio, links to profiles |
| About / CV | `/about` | Training, education, clinical interests, honors |
| Publications | `/publications` | Generated from the `publications` collection |
| Presentations | `/presentations` | Generated from the `presentations` collection (optional) |
| Notes / Blog | `/notes` | Generated from the `notes` collection (optional, add later) |
| Contact | `/contact` | Professional email and profile links. No phone number or home address. |

### Content collections (`src/content/`)

- `publications/`: one `.md` file per item. Frontmatter fields: `title`, `authors`, `journal`, `year`, `doi`, `url`, `type` (article, abstract, or case report).
- `presentations/`: frontmatter fields `title`, `event`, `date`, `location`, `type` (poster or oral).
- `notes/`: frontmatter fields `title`, `date`, `description`, `draft`.

Adding a publication or post should only require adding a Markdown file. Never hard-code lists in page templates.

### Source material

Put real content in `/source-material/`, which is gitignored if it contains anything private. It holds the CV PDF, bio text, headshot, and publication list. Always build pages from this material and don't invent placeholder text. If something is missing, ask me.

## SEO requirements

- A unique `<title>` and meta description on every page that includes "[FULL NAME], MD" and "Radiology Resident".
- JSON-LD `Person` schema on the home page with:
  - `name`, `honorificSuffix: "MD"`, `jobTitle: "Resident Physician, Diagnostic Radiology"`
  - `affiliation`: Montefiore Medical Center
  - `image`, `url`
  - `sameAs`: links to [Doximity], [LinkedIn], [ORCID], [Google Scholar], and [Montefiore profile]
- Open Graph and Twitter card tags, using the headshot as the image.
- `@astrojs/sitemap` integration, plus `robots.txt` pointing to the sitemap.
- Canonical URLs set to the custom domain.
- Descriptive alt text on every image, and semantic HTML (one `<h1>` per page).

## Guardrails (physician-specific; don't skip)

- **Accurate credentials:** Describe me only as "Resident Physician" or "Radiology Resident." Never imply board certification, attending status, fellowship training, or independent licensure.
- **No patient information.** That includes de-identified case anecdotes, unless they come from a published, consented case report I supply.
- **Disclaimer** on the Contact and Notes pages: "This site is for informational purposes and is not medical advice. I cannot provide individual medical consultations."
- **Institution branding:** Don't use the Montefiore logo. Mention the institution in text only.
- **Privacy:** Never put a home address, personal phone number, or date of birth anywhere on the site.

## Build phases

Work one phase at a time. Use plan mode, wait for my approval, then implement. Commit at the end of each phase.

1. **Scaffold:** Minimal Astro project, base layout (`src/layouts/Base.astro`), header and nav, footer, global CSS tokens. Confirm `npm run dev` works.
2. **Design system:** Typography scale, color palette (light and dark), spacing, link and button styles, responsive breakpoints. Perfect the home page before building other pages.
3. **Pages and content:** Build each page from `/source-material/`. Set up the content collections and their schemas.
4. **SEO layer:** Everything in the SEO requirements section above.
5. **Deploy:** Add `.github/workflows/deploy.yml` using the official Astro action. I'll then set Settings → Pages → Source to "GitHub Actions".
6. **Custom domain (skipped for now; site is served at sabirsaluja.github.io):** Add `public/CNAME` containing the domain and set `site` in `astro.config.mjs`. I'll configure DNS myself: A/AAAA records for the apex domain pointing to GitHub Pages, and a CNAME for `www` pointing to sabirsaluja.github.io. Then I'll enforce HTTPS.
7. **Search visibility (done by me):** Verify the domain in Google Search Console, submit the sitemap, and link back to the site from all my profiles.

## Definition of done (check at the end of every phase)

- `npm run build` passes with zero errors and zero warnings.
- Layout works at 375px width with no horizontal scroll.
- Lighthouse scores of 95+ for performance, accessibility, best practices, and SEO.
- No broken internal links, and no images missing alt text.
- All guardrails above are respected.

## Ongoing maintenance prompts

- "Add this publication: [paste citation]"
- "Add a note from this draft: [paste text]"
- "Update the About page with [milestone]"
- "Run the definition-of-done checks and fix anything failing"

---

## One-time setup (done by me, before Claude Code)

1. On github.com, click **+** → **New repository**. Name it `sabirsaluja.github.io` (or any name, if using a custom domain). Make it **Public**, and leave README, .gitignore, and license unchecked.
2. Clone the repo and start Claude Code:
   ```bash
   git clone https://github.com/sabirsaluja/sabirsaluja.github.io.git
   cd sabirsaluja.github.io
   # put this CLAUDE.md in the folder, add /source-material/
   claude
   ```
   Or with GitHub CLI: `gh auth login`, then `gh repo create sabirsaluja.github.io --public --clone`
3. First prompt: **"Read CLAUDE.md. Start Phase 1 in plan mode."**

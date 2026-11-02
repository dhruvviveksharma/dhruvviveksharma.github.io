# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is Dhruv Sharma's personal site, deployed at `https://dhruvviveksharma.github.io` via GitHub Pages. It is a **hand-authored static site** — plain HTML/CSS/JS, no build step, no framework, no Jekyll. The `gh-pages` branch is auto-published by GitHub Actions from `main` — never edit `gh-pages` directly.

## Development

No install, no build step. Just serve the repo root and open it:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

Edit the HTML/CSS/JS files directly and refresh the browser.

`assets/css/styles.css` and `assets/js/script.js` are referenced with a `?v=N` cache-busting query string in all three HTML files (e.g. `styles.css?v=3`). Browsers cache these aggressively; without a version bump, a visitor (or even a local hard-refresh) can end up with stale CSS/JS paired against newer HTML, which has previously caused real breakage (e.g. a layout rule removed from CSS but still assumed stale-cached). **Bump `?v=N` to `N+1` across all three files whenever `styles.css` or `script.js` changes.**

## Architecture

| Path | Purpose |
|------|---------|
| `index.html` | Home page — hero, about, selected work preview, news, contact |
| `projects/index.html` | Projects page — all project write-ups as expandable cards (single page, no per-project URLs) |
| `cv/index.html` | CV page — education, experience, leadership, research & publications, skills |
| `assets/css/styles.css` | The whole design system: color tokens (light/dark), type scale, spacing, components |
| `assets/js/script.js` | Theme toggle, mobile nav toggle, project card expand/collapse |
| `assets/img/` | Images used by the site |
| `assets/pdf/Dhruv_Sharma_Resume.pdf` | Downloadable résumé, linked from the CV page |
| `robots.txt`, `sitemap.xml` | Plain static files |

There are only three pages. Shared chrome (nav, footer, `<head>` boilerplate) is duplicated across the three HTML files rather than templated — intentional, since a build step was explicitly removed in favor of hand-authored pages.

## Design system

Defined entirely in `assets/css/styles.css` via CSS custom properties on `:root` (light) and `:root[data-theme="dark"]` (dark, toggled by `assets/js/script.js`, persisted to `localStorage`). Key tokens: `--ink`/`--ink-2`/`--ink-3` (text), `--bg`/`--bg-soft`/`--card-bg` (backgrounds), `--accent`/`--accent-2` (electric blue / teal), `--line` (hairlines). Fonts: Space Grotesk (display/headings), Inter (body), JetBrains Mono (eyebrow labels, tags, dates) — loaded from Google Fonts.

## Deployment

Push to `main` → `.github/workflows/deploy.yml` copies `index.html`, `projects/`, `cv/`, `assets/`, `robots.txt`, and `sitemap.xml` into a staging folder (so no dev-only files like this one leak into the published site) → pushes that folder to `gh-pages` → GitHub Pages serves it. No manual deploy step needed.

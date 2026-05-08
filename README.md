# GRAINSCO — Documentation

Live: https://keerthanaafp.github.io/grainsco-docs/

## What's here

- `index.html` — landing page (Read Docs / Watch Videos)
- `documentation/index.html` — single-page docs, sidebar grouped by module
- `documentation/assets/style.css` — palette + typography
- `documentation/assets/script.js` — smooth scroll + active-link highlight
- `walkthrough_videos/videos.html` — Loom embeds, one section per module

## Modules

| Module | Status | Sections |
|--------|--------|----------|
| Driver Module | Live | Overview, All Deliveries, Delivery Detail, Create Order, Drivers, Vehicles |
| Module 2 | Coming soon | — |
| Module 3 | Coming soon | — |

## Edit + push

```sh
git add documentation/index.html
git -c commit.gpgsign=false commit -m "docs: <what changed>"
git push
```

GitHub Pages rebuilds in ~30–60 seconds. Verify with:

```sh
~/.local/bin/gh api repos/keerthanaafp/grainsco-docs/pages/builds/latest --jq '.status'
```

## Cache busting

If the browser shows old content after a deploy:

1. Hard refresh: `Cmd+Shift+R` (Chrome/Edge), `Cmd+Option+R` (Safari)
2. Append `?v=<timestamp>` to the URL
3. Try incognito to rule out extensions
4. Curl-check what's actually live: `curl -s <url> | grep <new-text>`

When you change `style.css` or `script.js`, bump the `?v=YYYY-MM-DD` query string on `<link>` and `<script>` tags so visitors get the fresh assets.

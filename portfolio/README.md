# Portfolio Tegar Widi Saputro (The Creative Atlas, v3)
Pure HTML, CSS, and JavaScript. No build step, no CDN, no backend. Site language: English (follows the blueprint).

## Open locally
Double-click `index.html`, or run `python3 -m http.server` in this folder and open http://localhost:8000.

## Edit content
- Text: `index.html` and `projects/*.html`. All content comes from the CV and portfolio PDF; double-check before publishing.
- Images: `assets/images/`. Most were extracted from the portfolio PDF at about 150 ppi; replace with originals when available. `hero.webp` is cropped from `Fantasy_Portfolio_Hero_Landscape.png`.
- Colours: variables at the top of `styles/styles.css`.
- Fonts: the blueprint uses Cormorant Garamond and Inter. They are not bundled (no external requests). To use them, add the font files to `assets/fonts/` and declare `@font-face` in `styles/styles.css`; until then the CSS falls back to system serif and sans-serif fonts.
- Links: search for `mailto:`, `wa.me`, `linktr.ee`, `instagram.com`. No LinkedIn link is included because the URL is not known.
- CV: replace `assets/documents/cv-tegar-widi-saputro.pdf` (placeholder now). Publish a version without the home address.
- Open Graph image: add after the final domain is known (needs an absolute URL).

## Hosting
Upload the whole folder to any static host. All paths are relative. `404.html` is used by hosts that support it.

## Limits
Nothing here needs a server. Project “Results” tabs state that no outcome data is recorded; add only figures you can prove.

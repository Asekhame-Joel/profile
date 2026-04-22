# Asekhame Usifo Joel — Portfolio (Pure HTML + CSS)

Static, multi-page version of the portfolio. No build step, no framework — just open `index.html` in a browser, or upload to any static host (Netlify, GitHub Pages, Vercel, cPanel, S3, etc.).

## Structure

```
.
├── index.html         # Home / Hero
├── about.html
├── skills.html
├── experience.html
├── projects.html
├── education.html
├── contact.html
├── css/
│   └── styles.css     # Single design system (Deep Ocean Teal + gold accent)
├── js/
│   └── main.js        # Mobile nav + contact form toast
└── assets/            # Hero portrait + project images
```

## Run locally

Just double-click `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customize

- **Colors**: edit the `:root` variables at the top of `css/styles.css`.
- **Content**: each page is a standalone HTML file — edit text directly.
- **Nav / footer**: duplicated across each page — update in all 7 files when changing.
- **Contact form**: currently shows a confirmation toast. Wire the `<form>` action to a Laravel/PHP endpoint or any form service to send real emails.

## Fonts

Loaded from Google Fonts (`Inter` + `Space Grotesk`) via `@import` in `styles.css`.

---

© Asekhame Usifo Joel — Benin City, Nigeria

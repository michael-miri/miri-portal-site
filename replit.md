# Miri Technology Client Portal

A single-page static landing page for the Miri Technology client portal, hosted via Python's built-in HTTP server.

## Structure

- `index.html` — The entire site. Self-contained static HTML with embedded CSS and base64-encoded logo assets.
- `client-portal.zip` — Packaged file ready for GitHub Pages deployment.
- `attached_assets/` — Source logo and image assets used during development.

## Running

The site is served by Python's built-in HTTP server on port 5000:

```
python3 -m http.server 5000
```

## Deployment (GitHub Pages)

1. Download `client-portal.zip`
2. Extract and upload `index.html` to a GitHub repository
3. Enable GitHub Pages in the repository settings (root of main branch)

## Design

- Dark theme matching miritechnology.com (`#0A0E1A` background)
- Primary brand blue: `#0645FF`
- Real Miri logo embedded as base64 PNG
- Logo mark watermark in background, rotated -15°, subtle opacity

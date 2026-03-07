# Yuval Site

This folder contains the complete bilingual marketing website for:
- Yuval Vainzof (Hebrew primary + Russian)

## Run locally

From repository root:

```bash
cd yuval-site
python -m http.server 4173
```

Then open:
- http://localhost:4173/

## Deployment

Deploy the **contents of `yuval-site/`** as your website root (`public_html` / static hosting root).

## Structure

- `index.html` + main pages (`about.html`, `services.html`, `blog.html`, `free-pension-check.html`, `contact.html`)
- `assets/` shared CSS/JS/content
- `ru/` Russian pages
- Hebrew SEO URL folders, each with `index.html`

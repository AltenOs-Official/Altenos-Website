# AltenOs — Official website

Marketing site for AltenOs™, an independent technology company focused on
digital development, innovation and interactive experiences.

A single page with no build step and no runtime dependencies: plain HTML, CSS
and JavaScript, served as-is by GitHub Pages.

## Structure

```
index.html                  Single page (hero, services, approach, about, contact)
assets/styles.css           Styles, dark theme, responsive, reveal animations
assets/main.js              Mobile menu, header state, scroll reveals
assets/logo.png             AltenOs wordmark (white on transparent, cropped)
assets/favicon.svg          “A” monogram used as the favicon
.nojekyll                   Disables Jekyll processing on GitHub Pages
LICENSE                     AltenOs™ proprietary licence
```

## Local preview

```bash
python3 -m http.server 3003
```

Then open <http://localhost:3003>.

## Publishing on GitHub Pages

1. Commit the files to the `main` branch.
2. In **Settings → Pages**, source = *Deploy from a branch*, branch `main`,
   folder `/ (root)`.
3. The site is served at <https://altenos-official.github.io/Altenos-Website/>
   after a minute or two.

A custom domain can be added in the same place (GitHub then creates a `CNAME`
file).

## Things to customise

- **Contact**: the contact section points to the GitHub account. To use an email
  address instead, replace the `href` of the primary button in `index.html`
  (`href="https://github.com/AltenOs-Official"`) with a `mailto:` link.
- **Share URLs**: `og:url` in `index.html` points to the GitHub Pages URL.
  Update it if a custom domain is used.
- **Typography**: the site uses Inter, chosen to match the logo’s grotesque
  letterforms, loaded from Google Fonts. To use the original brand font instead,
  drop its `woff2` files in `assets/fonts/`, add `@font-face` rules at the top of
  `assets/styles.css`, point `--font` at it and remove the Google Fonts link
  from `index.html`.
- **Content**: services, approach and about copy live in `index.html`; colours,
  spacing and type scale are CSS variables at the top of `assets/styles.css`.

## Licence

Code and content are proprietary — see [LICENSE](LICENSE). © 2026 AltenOs™.
Inter is licensed under the SIL Open Font License 1.1.

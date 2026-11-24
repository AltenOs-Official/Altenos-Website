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
assets/fonts/               AltenOs Sans (brand typeface, WOFF2 subset)
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

## Typography

The site is set in **AltenOs Sans**, the brand typeface, self-hosted from
`assets/fonts/altenos-sans-regular.woff2`. It is a Latin subset (A–Z, a–z,
digits, punctuation and curly quotes) of the supplied `AltenOs-Sans.ttf`,
converted to WOFF2 and stripped of the private-use alternates.

Two things to know when editing:

- The font ships a **single weight (400)**. Headings use `font-weight: 500`,
  which renders at 400 rather than a synthesized faux bold. Keep it that way, or
  produce a real bold weight and add a second `@font-face` rule.
- It has **no glyph for `&`, `©`, `—` or `™`**, so those characters fall back to
  the system stack. If you need them drawn in the brand face, add them to the
  source font and regenerate the subset.

To regenerate the WOFF2 from a new TTF:

```bash
pip install fonttools brotli
python3 -m fontTools.subset AltenOs-Sans.ttf \
  --unicodes="U+0020-007E,U+00A0,U+00A9,U+00B7,U+2013-2014,U+2018-201D,U+2026,U+2122" \
  --flavor=woff2 --output-file=assets/fonts/altenos-sans-regular.woff2
```

## Things to customise

- **Contact**: the contact section points to the GitHub account. To use an email
  address instead, replace the `href` of the primary button in `index.html`
  (`href="https://github.com/AltenOs-Official"`) with a `mailto:` link.
- **Share URLs**: `og:url` in `index.html` points to the GitHub Pages URL.
  Update it if a custom domain is used.
- **Content**: services, approach and about copy live in `index.html`; colours,
  spacing and type scale are CSS variables at the top of `assets/styles.css`.

## Licence

Code and content are proprietary — see [LICENSE](LICENSE). AltenOs Sans is a
proprietary typeface covered by its own notice in the font’s name table; it may
be used within official AltenOs products. © 2026 AltenOs™.

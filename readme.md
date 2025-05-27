# @sparkstone/css

A minimal CSS framework inspired by [Pico.css](https://picocss.com), rebuilt with `oklch()` color primitives and a powerful, themeable design system using native CSS custom properties.

## ✨ Features

- 💡 Built with `oklch()` for perceptually uniform color scales
- 🌗 Automatic light/dark theming with CSS variables
- 🧱 Minimal class usage (like `card`, `contrast`, `ghost`)
- ⚡ No JS required for core styles
- 🎨 Fully themeable via CSS variables or Sass functions
- 🧩 SCSS mixins for advanced integrations

---

## 🚀 Install

```bash
# pnpm
pnpm add @sparkstone/css
```

```bash
# yarn
yarn add @sparkstone/css
```

```bash
# npm
npm install @sparkstone/css
```

---

## 🌐 Live Demo & Docs

Explore the docs and theme live:

🔗 [https://sparkstonepdx.github.io/css/docs](https://sparkstonepdx.github.io/css/docs)

---

## 📦 Usage

### Import in your project:

```ts
// SCSS (recommended)
import '@sparkstone/css/src/theme.scss';

// Or precompiled CSS
import '@sparkstone/css/theme.css';
```

### Apply base HTML structure:

```html
<article class="card">
  <h2>Hello World</h2>
  <p>This card uses the default theme and layout utilities.</p>
</article>
```

---

## 🎨 Theming

Set custom colors using CSS variables:

```css
:root {
  --color: rebeccapurple;
  --primary-color: blue;
  --accent-color: oklch(from var(--color) l c calc(h + 180));
  --error-color: maroon;
}
```

System-based dark mode is supported by default, but you can override manually:

```html
<html data-color-scheme="light">
  <!-- or -->
  <html data-color-scheme="dark"></html>
</html>
```

---

## 🧑‍🎨 Theme Swatches

Use these CSS variables for consistent contrast:

- `--text-lc-1` ... `--text-lc-9`
- `--surface-lc-1` ... `--surface-lc-9`

They adjust automatically in dark/light mode and derive from `--color`.

You can preview or override them using:

```scss
@use '@sparkstone/css/src/vars.scss' as *;

// Example: generate a color
color: get-color(var(--text-lc-2), var(--accent-color));
border-color: get-border-color();
```

---

## 🧪 Documentation

See it live via GitHub Pages:

- [`forms.html`](https://sparkstonepdx.github.io/css/forms.html) — Styled form elements and validation states
- [`colors.html`](https://sparkstonepdx.github.io/css/colors.html) — Theme-based palette viewer with interactive color picker
- [`containers.html`](https://sparkstonepdx.github.io/css/containers.html) — Articles, cards, and dialogs
- [`index.html`](https://sparkstonepdx.github.io/css/) — Overview & installation

Each page includes copyable code examples and live previews.

---

## 🛠 Dev

```bash
pnpm install
pnpm dev
```

This watches both `src/` and `pages/` for changes. It compiles SCSS to `dist/`, renders Nunjucks templates from `pages/` to `docs/`, and serves with live reload.

To build manually:

```bash
pnpm build
```

---

## 📦 Package Structure

```text
dist/       # Compiled CSS
src/        # Source SCSS (theme, vars, functions)
pages/      # Nunjucks page templates
templates/  # Shared macros and layout
docs/       # Output static site for GitHub Pages
```

---

## 💬 License

MIT © [Sparkstone LLC](https://sparkstonepdx.com)

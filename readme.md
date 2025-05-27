# @sparkstone/css

A minimal CSS framework inspired by [Pico.css](https://picocss.com), featuring a clean utility-light class system and modern OKLCH-based theming.

> This is still a work in progress, and there are likely to be big changes between versions

---

## 📦 Installation

```bash
# With pnpm
pnpm add @sparkstone/css

# With yarn
yarn add @sparkstone/css

# With npm
npm install @sparkstone/css
```

Then import the framework into your project:

### For Sass users

```scss
@import '@sparkstone/css/src/theme.scss';
```

### For plain CSS users

```css
@import '@sparkstone/css/theme.css';
```

---

## ✨ Features

- Minimal, readable class system
- Themeable with OKLCH via CSS custom properties
- Light/dark mode support (system-aware by default)
- Sass-powered with composable color utilities
- Designed for perceptual contrast and smooth customization

---

## 🎨 Default Theme Variables

These are the default design tokens provided by the framework:

```css
:root {
  --color: rebeccapurple;
  --primary-color: blue;
  --accent-color: oklch(from var(--color) l c calc(h + 180));
  --error-color: maroon;

  --border-radius: 0.25rem;
  --padding: 1rem;
  --border-width: 0.1625rem;
  --fallback-color: white;

  --icon-chevron: url('data:image/svg+xml,...');
  --box-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.1);
}
```

Override these in your own styles to customize your look.

---

## 🌗 Light & Dark Mode

By default, `@sparkstone/css` uses the user's **system color scheme** via `prefers-color-scheme`.

To override this manually, set the `data-color-scheme` attribute:

```html
<body data-color-scheme="light">
  <!-- or "dark" -->
</body>
```

All swatches automatically adapt to the selected mode.

---

## 🧩 Using Sass Utilities

To access design tokens and helper functions in your own Sass:

```scss
@use '@sparkstone/css/src/vars.scss' as *;
```

### Functions

```scss
get-color($swatch-lc, $color)
```

Returns an OKLCH color string using a lightness/chroma swatch and a base color.

- `$swatch-lc`: e.g. `var(--text-lc-2)` or `var(--surface-lc-4)`
- `$color`: e.g. `red` or `var(--accent-color)`

```scss
cur-color($swatch-lc)`
```

Uses the current `--color` variable as a base.

```scss
get-border-color()
```

Returns the default border color using `var(--surface-lc-4)`.

---

### 🎛 Swatch Variables

These swatches control perceived lightness across surfaces and text. They **flip automatically** between light and dark mode.

#### Surface Swatches

| Variable         | Light Mode       | Dark Mode        |
| ---------------- | ---------------- | ---------------- |
| `--surface-lc-1` | Lightest surface | Darkest surface  |
| `--surface-lc-9` | Darkest surface  | Lightest surface |

#### Text Swatches

| Variable      | Light Mode         | Dark Mode      |
| ------------- | ------------------ | -------------- |
| `--text-lc-1` | Most readable text | Least readable |
| `--text-lc-9` | Least readable     | Most readable  |

---

## 🛠 Development

To build or watch styles locally:

```bash
pnpm dev   # Watches src/ and outputs to dist/
pnpm build # One-time build to dist/
```

---

## 📄 License

ISC

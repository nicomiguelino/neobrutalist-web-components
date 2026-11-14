---
title: Getting started
description: Install the library and use the custom elements in a bundler or in plain HTML.
---

Neobrutalist custom elements that work in TypeScript and vanilla HTML/CSS/JS apps. Built with [Lit](https://lit.dev) and Vite; Lit is bundled into the build, and also listed as a dependency so TypeScript can resolve its types.

:::note
The library is still a work in progress. Components land one at a time.
:::

## Installation

```sh
npm install @nicomiguelino/neobrutalist-web-components
```

## Usage

Importing the library registers the custom elements. After that, use them like any HTML tag.

### With a bundler (Vite, webpack, etc.)

```js
import '@nicomiguelino/neobrutalist-web-components'
```

### Vanilla HTML with a module script

```html
<script type="module">
  import '@nicomiguelino/neobrutalist-web-components'
</script>

<nb-button>Click me</nb-button>
<nb-button variant="accent">Accent</nb-button>
```

This form needs the package to be resolvable (via a bundler, an import map, or a CDN URL), and it must be served over HTTP. Browsers block module scripts on `file://` pages.

### Vanilla HTML with a classic script (no modules, no bundler)

The UMD build works in a plain `<script>` tag and even from `file://`. It registers the elements and exposes a global named `NeobrutalistWebComponents`:

```html
<script src="./dist/neobrutalist-web-components.umd.js"></script>

<nb-button>Click me</nb-button>

<script>
  console.log(NeobrutalistWebComponents) // { NbButton, define }
</script>
```

Lit is bundled into both builds, so there is nothing else to load.

## Next steps

- Read the [`nb-button` reference](../../reference/nb-button/) for its properties and attributes.
- Customize colors and shadows in [Theming](../theming/).

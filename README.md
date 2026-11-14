# Neobrutalist Web Components

Neobrutalist custom elements that work in TypeScript and vanilla HTML/CSS/JS apps. Built with [Lit](https://lit.dev) and Vite; Lit is bundled into the build, and also listed as a dependency so TypeScript can resolve its types.

> Work in progress — not yet published.

## Usage

Importing the library registers the custom elements. After that, use them like any HTML tag.

### With a bundler (Vite, webpack, etc.)

```js
import '@nicomiguelino/neobrutalist-web-components'
```

### With TypeScript

Types ship with the package, so there is nothing extra to install. Importing the package registers the elements and adds `nb-button` to TypeScript's `HTMLElementTagNameMap`, which types the DOM APIs for you:

```ts
import { NbButton } from '@nicomiguelino/neobrutalist-web-components'

// createElement and querySelector return NbButton, not HTMLElement
const created = document.createElement('nb-button')
const existing = document.querySelector('nb-button')

created.variant = 'accent' // OK: 'primary' | 'accent'
created.variant = 'huge' // Error: not assignable to 'primary' | 'accent'
created.disabled = true

// Use the class for type annotations
function lock(button: NbButton) {
  button.disabled = true
}

// Wait for the render when you need the inner <button>
await created.updateComplete
created.shadowRoot?.querySelector('button')
```

If you only want the side effect of registering the elements, use `import '@nicomiguelino/neobrutalist-web-components'`. With `verbatimModuleSyntax` enabled, use `import type { NbButton } from ...` when you need the type alone.

Your `tsconfig.json` needs `"lib": ["DOM"]` and a `moduleResolution` that reads package `exports` (`"bundler"`, `"node16"` or `"nodenext"`).

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

### Properties and attributes

| Name       | Type                    | Default     | Notes                      |
| ---------- | ----------------------- | ----------- | -------------------------- |
| `variant`  | `'primary' \| 'accent'` | `'primary'` | Reflected to the attribute |
| `disabled` | `boolean`               | `false`     | Reflected to the attribute |

```js
const button = document.querySelector('nb-button')
button.disabled = true
button.variant = 'accent'
```

## Theming

Components read CSS custom properties, which pass through shadow DOM:

```css
:root {
  --nb-color-primary: #8ce99a;
  --nb-shadow-offset: 6px;
}
```

See `src/styles/tokens.ts` for all tokens.

## Development

```sh
npm install
npm run dev     # playground at index.html
npm run build   # type-check, bundle (ES + UMD), emit .d.ts
```

## Adding a component

1. Create `src/components/nb-<name>.ts` (class, `define('nb-<name>', Class)`, `HTMLElementTagNameMap` entry).
2. Export it from `src/index.ts`.
3. Add an example to `index.html`.

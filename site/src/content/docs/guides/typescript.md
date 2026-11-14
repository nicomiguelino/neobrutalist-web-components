---
title: TypeScript
description: Use the typed element classes and DOM typings that ship with the package.
---

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

## Requirements

Your `tsconfig.json` needs `"lib": ["DOM"]` and a `moduleResolution` that reads package `exports` (`"bundler"`, `"node16"` or `"nodenext"`).

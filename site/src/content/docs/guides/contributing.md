---
title: Contributing
description: Run the library locally and add a new component.
---

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

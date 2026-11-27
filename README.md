# Neobrutalist Web Components

Neobrutalist custom elements that work in TypeScript and vanilla HTML/CSS/JS apps. Built with [Lit](https://lit.dev) and Vite; Lit is bundled into the build, and also listed as a dependency so TypeScript can resolve its types.

## Documentation

See [the offical documentation](https://nicomiguelino.github.io/neobrutalist-web-components/) for more details.

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

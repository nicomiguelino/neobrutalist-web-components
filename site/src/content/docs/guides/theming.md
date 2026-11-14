---
title: Theming
description: Customize the components with CSS custom properties.
---

Components read CSS custom properties, which pass through shadow DOM:

```css
:root {
  --nb-color-primary: #8ce99a;
  --nb-shadow-offset: 6px;
}
```

You can set them globally on `:root`, or on a single element to theme just that one.

See [`src/styles/tokens.ts`](https://github.com/nicomiguelino/neobrutalist-web-components/blob/main/src/styles/tokens.ts) for all tokens.

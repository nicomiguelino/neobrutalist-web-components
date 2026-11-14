---
title: nb-button
description: Properties and attributes of the nb-button element.
---

## Properties and attributes

| Name       | Type                    | Default     | Notes                      |
| ---------- | ----------------------- | ----------- | -------------------------- |
| `variant`  | `'primary' \| 'accent'` | `'primary'` | Reflected to the attribute |
| `disabled` | `boolean`               | `false`     | Reflected to the attribute |

```js
const button = document.querySelector('nb-button')
button.disabled = true
button.variant = 'accent'
```

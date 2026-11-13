import { css } from 'lit'

/**
 * Design tokens shared by every component. They are CSS custom properties, so
 * consumers can theme globally (`:root { --nb-color-primary: ... }`) or per
 * element, since custom properties pierce shadow DOM boundaries.
 */
export const tokens = css`
  :host {
    --nb-color-bg: #fffdf5;
    --nb-color-fg: #111111;
    --nb-color-primary: #ffd43b;
    --nb-color-accent: #ff6b9d;
    --nb-border-width: 3px;
    --nb-radius: 0px;
    --nb-shadow-offset: 4px;
    --nb-font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;
  }
`

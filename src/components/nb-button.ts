import { LitElement, html, css } from 'lit'
import { tokens } from '../styles/tokens.ts'
import { define } from '../utils.ts'

export class NbButton extends LitElement {
  static properties = {
    variant: { reflect: true },
    disabled: { type: Boolean, reflect: true }
  }

  static styles = [
    tokens,
    css`
      :host { display: inline-block; }
      button {
        font: 700 1rem/1 var(--nb-font-family);
        color: var(--nb-color-fg);
        background: var(--nb-color-primary);
        border: var(--nb-border-width) solid var(--nb-color-fg);
        border-radius: var(--nb-radius);
        box-shadow: var(--nb-shadow-offset) var(--nb-shadow-offset) 0 var(--nb-color-fg);
        padding: 0.75rem 1.25rem;
        cursor: pointer;
        transition: transform 80ms, box-shadow 80ms;
      }
      button:hover { transform: translate(-2px, -2px); box-shadow: calc(var(--nb-shadow-offset) + 2px) calc(var(--nb-shadow-offset) + 2px) 0 var(--nb-color-fg); }
      button:active { transform: translate(var(--nb-shadow-offset), var(--nb-shadow-offset)); box-shadow: 0 0 0 var(--nb-color-fg); }
      button:focus-visible { outline: var(--nb-border-width) solid var(--nb-color-accent); outline-offset: 3px; }
      button:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: var(--nb-shadow-offset) var(--nb-shadow-offset) 0 var(--nb-color-fg); }
      :host([variant='accent']) button { background: var(--nb-color-accent); }
    `
  ]

  // `declare` keeps these type-only so they don't shadow Lit's generated accessors.
  declare variant: 'primary' | 'accent'
  declare disabled: boolean

  constructor() {
    super()
    this.variant = 'primary'
    this.disabled = false
  }

  render() {
    return html`<button ?disabled=${this.disabled}><slot></slot></button>`
  }
}

define('nb-button', NbButton)

declare global {
  interface HTMLElementTagNameMap {
    'nb-button': NbButton
  }
}

import { LitElement, html, css } from 'lit'
import { tokens } from '../styles/tokens.ts'
import { define } from '../utils.ts'

export class NbCard extends LitElement {
  static properties = {
    variant: { reflect: true },
  }

  static styles = [
    tokens,
    css`
      :host {
        display: block;
      }
      .card {
        font-family: var(--nb-font-family);
        background: var(--nb-color-primary);
        border: var(--nb-border-width) solid var(--nb-color-fg);
        border-radius: var(--nb-radius);
        box-shadow: var(--nb-shadow-offset) var(--nb-shadow-offset) 0 var(--nb-color-fg);
        padding: 0.75rem 1.25rem;
      }
      :host([variant='accent']) .card {
        background: var(--nb-color-accent);
      }
    `,
  ]

  declare variant: 'primary' | 'accent'

  constructor() {
    super()
    this.variant = 'primary'
  }

  render() {
    return html`
      <div class="card">
        <slot></slot>
      </div>
    `
  }
}

define('nb-card', NbCard)

declare global {
  interface HTMLElementTagNameMap {
    'nb-card': NbCard
  }
}

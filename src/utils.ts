/** Register a custom element once; safe to call repeatedly or without a DOM (SSR). */
export function define(tag: string, ctor: CustomElementConstructor): void {
  if (typeof customElements !== 'undefined' && !customElements.get(tag)) {
    customElements.define(tag, ctor)
  }
}

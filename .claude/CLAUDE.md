# Project rules

## Code comments

Do not put comments in code. This applies to every language, markup and data format (TypeScript, CSS, HTML, Astro, YAML, JSON/JSONC, shell, and so on).

Code should be self-documenting: use clear names, small functions, and structure that explains itself. If something needs a comment to be understood, rename or restructure it first.

### Edge cases

Comments are allowed only when the code cannot carry the information itself:

- Directives that tools read, such as `// @ts-check`, `eslint-disable`, `prettier-ignore`, and `# syntax=`.
- Required legal or license headers.
- A non-obvious reason that cannot be expressed in code, such as a workaround for a specific browser or library bug. Keep it to one short line that says why, never what.

When adding a comment under these exceptions, keep it minimal. Do not remove existing comments that fall under these exceptions.

Code samples inside documentation (for example, fenced blocks in Markdown) may contain comments when they teach the reader something.

## Early returns

Return early. Handle invalid input, missing values and edge cases at the top of a function with a guard clause, then let the main logic run unindented. Avoid deep nesting and `else` branches after a `return`.

```ts
function getIconBody(name: string) {
  const entry = icons[name]
  if (!entry) return undefined
  return entry.body
}
```

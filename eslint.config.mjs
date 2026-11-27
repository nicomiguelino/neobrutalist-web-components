import tseslint from 'typescript-eslint'

export default [{ ignores: ['dist/', 'node_modules/', 'site/'] }, ...tseslint.configs.recommended]

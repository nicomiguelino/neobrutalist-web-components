import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'NeobrutalistWebComponents',
      fileName: (format) => `neobrutalist-web-components.${format}.js`,
    },
  },
});

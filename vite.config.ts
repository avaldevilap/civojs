import { resolve } from 'node:path';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'civojs',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['zod', 'tiny-invariant'],
    },
  },
  plugins: [dts({ exclude: ['mocks', 'tests'] })],
});

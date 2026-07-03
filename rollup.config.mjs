import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/lektrico-charger-card.js',
  output: {
    file: 'dist/lektrico-charger-card.js',
    format: 'es',
    sourcemap: false,
  },
  plugins: [resolve(), terser({ format: { comments: false } })],
};

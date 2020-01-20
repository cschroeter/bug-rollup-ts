// import typescript from '@rollup/plugin-typescript'
import ts from '@wessberg/rollup-plugin-ts'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  plugins: [ts({ transpiler: 'typescript' })], // works with babel as transpiler
  output: [{ format: 'esm', file: pkg.module }],
}

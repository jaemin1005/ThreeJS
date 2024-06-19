import { defineConfig } from 'vite';
import { babel } from '@rollup/plugin-babel';
import { visualizer } from 'rollup-plugin-visualizer';
import resolve from '@rollup/plugin-node-resolve'; // 최신 플러그인 사용
import commonjs from '@rollup/plugin-commonjs'; // 최신 플러그인 사용
export default defineConfig({
  server: {
    port: 3000,
  },

  plugins : [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'runtime', // Babel 헬퍼 함수들을 런타임에 사용하도록 설정
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // Babel이 처리할 파일 확장자들
      configFile: './babel.config.json', // Babel 설정 파일 경로
    }),
    visualizer ({open : true})
  ],

  build: {
    target: "es2015",
    outDir: 'vite',
    sourcemap: true,
  },
});
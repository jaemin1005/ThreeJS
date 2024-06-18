import { defineConfig } from 'vite';
import { babel } from '@rollup/plugin-babel';
export default defineConfig({
  server: {
    port: 3000,
  },

  plugins : [
    babel({
      babelHelpers: 'runtime', // Babel 헬퍼 함수들을 런타임에 사용하도록 설정
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // Babel이 처리할 파일 확장자들
      configFile: './babel.config.json', // Babel 설정 파일 경로
    })
  ],

  build: {
    target: "es2015",
    outDir: 'vite',
    sourcemap: true,
  },
});
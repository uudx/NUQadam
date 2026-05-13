import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'
import path from 'path'

export default defineConfig(({ mode }) => {
  return {
    // Егер жеке домен қолдансаң (sally.kz), base '/' болуы керек.
    // Егер тек github.io/NUQadam қолдансаң, '/NUQadam/' болуы керек.
    // Төмендегі жол егер сен "production" үшін жинасаң, '/' орнатады:
    base: mode === 'production' ? '/' : '/', 
    
    // ЕСКЕРТУ: Егер сен әлі де github.io/NUQadam арқылы тексергің келсе, 
    // оны қолмен '/' деп өзгертіп жібер, өйткені sally.kz үшін түбірлік жол керек.

    plugins: [
      vue(),
      tailwindcss(),
      svgLoader(),
    ],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    build: {
      outDir: 'docs', // GitHub Pages үшін дұрыс
      assetsDir: 'assets',
      emptyOutDir: true
    },
  }
})

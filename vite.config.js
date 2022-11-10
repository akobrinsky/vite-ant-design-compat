import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 3
          }
        }
      }
    })
  ],
  resolve: {
    alias: {
      // this compiler works fine but compat does not
      // 'vue': 'vue/dist/vue.esm-bundler.js'
      'vue': '@vue/compat'
    },
  },
});

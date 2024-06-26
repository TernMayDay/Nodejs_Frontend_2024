// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'
import { fileURLToPath } from 'url'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import type { Plugin } from 'vite'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'SportsPass 運動售票',
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  css: ['normalize.css', '@/assets/scss/app.scss'],
  alias: {
    icons: fileURLToPath(new URL('./assets/icons', import.meta.url)),
    images: fileURLToPath(new URL('./assets/images', import.meta.url))
  },
  postcss: {
    plugins: {
      autoprefixer: true
    }
  },
  imports: {
    dirs: ['stores']
  },
  /* 'nuxt-quasar-ui',  */
  modules: ['@pinia/nuxt', 'nuxt-lodash', '@vee-validate/nuxt', 'nuxt-swiper'],
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage'
    }
  },
  experimental: {
    defaults: {
      nuxtLink: {
        activeClass: 'active',
        exactActiveClass: 'active'
      }
    }
  },
  // quasar: {
  //   config: {
  //     // Add Quasar configurations here
  //     notify: {} // This ensures notify is correctly configured
  //   },
  //   // Specify Quasar plugins you want to include
  //   plugins: ['Notify']
  // },
  swiper: {
    styleLang: 'scss'
  },
  vite: {
    define: {
      'process.env': process.env
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/_variables.scss";
          `
        }
      }
    },
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
        symbolId: '[dir]/[name]',
        customDomId: '__svg__icons__dom__'
      }) as Plugin
    ]
  },
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    public: {
      apiBase: ''
    }
  }
})

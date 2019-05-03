import pkg from './package'

export default {
  mode: 'spa',
  head: {
    title: 'Spis Sekcji JBwA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/animate.css@^3.5.2/animate.min.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdn.jsdelivr.net/npm/quasar@^1.0.0-beta.0/dist/quasar.min.css'
      }
    ],
    body: {
      script: [
        {
          src:
            'https://cdn.jsdelivr.net/npm/quasar@^1.0.0-beta.0/dist/quasar.umd.min.js'
        }
      ]
    }
  },
  loading: { color: '#fff' },
  css: [],
  plugins: ['~/plugins/vue-quasar'],
  modules: [],
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

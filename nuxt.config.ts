// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },  
  app: {
      head: {
        title: 'Love Parfum',      // titre de la page
        htmlAttrs: {
          lang: 'en'
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'Love Parfum' },
          { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
          { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
          { rel: 'stylesheet', href: '/css/custom.css' }
        ],
        script: [
          { src: '/js/bootstrap.bundle.min.js', type: 'text/javascript' }
        ]
      }
    },
    components: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
    css: [
      '@fortawesome/fontawesome-free/css/all.css'
    ]
    
})

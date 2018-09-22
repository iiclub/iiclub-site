const pkg = require('./package')

const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "IICLUB - Home",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Innovate for a better future of Humanity" }
    ],
    link: [
      /* { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, */
      { rel: 'icon', type: 'image/x-icon', href: "/otherimages/logo ii.png" },
      { rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ],
    script: [
      { src: '/lib/svg-with-js/js/fontawesome-all.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { 
    /* color: '#3B8070', */
    color: '#536dfe', 
    duration: 5000,
    height  : "5px" 
  },

  /*
  ** Global CSS
  */
  css: [
    'vuetify/src/stylus/main.styl',
    '~/assets/css/style.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
 /*  plugins: [
    '@/plugins/vuetify'
  ], */
  plugins : ['@/plugins/vuetify',{ src: '~/plugins/externalVueCarousal.js', ssr: false }],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    //baseURL : "http://localhost:3000",
    baseURL : "http://iiclub.in",
    credentials : false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  },
  transition : {
    name : "fade",
    mode : "out-in"
  },
  env :{
    backofficePath : "/backoffice/"
  }
}

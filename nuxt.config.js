
export default {
  mode: 'universal',
  head: {
    title: 'maanex.me',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
  ],
  plugins: [
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
  },
  build: {
    extend (_config, _ctx) {
    }
  },
  styleResources: {
    scss: [
      '@/assets/style/all.scss'
    ]
  }
}

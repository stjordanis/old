import theme from '@nuxt/content-theme-docs'

const createSitemapRoutes = async () => {
  const { $content } = require('@nuxt/content')
  const files = await $content('/', { deep: true })
    .only('to')
    .fetch()
  const ignore = ['/settings']
  return files.filter(f => !ignore.includes(f.path)).map(file => file.to)
}

export default {
  ...theme({
    docs: { primaryColor: '#eb4b1a' },
    modules: ['@nuxtjs/sitemap'],
    sitemap: {
      hostname: 'https://docs.datatorch.io',
      gzip: true,
      routes: createSitemapRoutes
    }
  }),
  googleFonts: {
    families: {
      Ubuntu: true,
      // 'DM+Sans': true,
      'DM+Mono': true
    }
  }
}

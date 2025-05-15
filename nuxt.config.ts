export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['shadcn-nuxt', '@nuxtjs/supabase', '@nuxt/icon', '@nuxt/content'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  supabase: {
    redirect: false
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  }
})
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Story doc",
  description: "A simple documentation for STUdio",
  base: '/story-doc/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/init/install' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/init/install' },
          { text: 'Histoires', link: '/init/story' }
        ]
      },
      {
        text: 'FAQ',
        items: [
          { text: 'How to use STUdio?', link: '/faq/how-to-use' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LuckyTheCookie' },
      { icon: 'discord', link: 'https://discord.gg/z3H36AxMUQ' }
    ]
  }
})

module.exports = {
  title: 'userfetch',
  description:
    'super customizable, neofetch inspired tool to display github user stats',
  themeConfig: {
    repo: 'userfetch/userfetch.js',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/', activeMatch: '^/docs/' },
    ],
    sidebar: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/' },
      { text: 'GitHub Actions', link: '/actions/', },
      { text: 'Docker', link: '/docker/' },
      { text: 'Showcase', link: '/showcase/' },
    ],
  },
}

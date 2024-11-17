module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        greenbr: '#0e6a51',
        greengraybr: '#eaf1ee',
        bluebr: '#008bff'
      },
    },
  },
  plugins: [],
  future:{
    hoverOnlyWhenSupported: true
  }
}

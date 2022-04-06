module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'badge': '#3F3F51',
        'body': '#17171F',
        'input': '#2A2A35',
        'input-border': '#565666',
        'nav': '#404053',
        'secondary': '#9191A4',
        'selected-text': '#A3AFF',
        'theme': '#3F3FFF'
      }, //
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
  plugins: [],
}
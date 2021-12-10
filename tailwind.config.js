module.exports = {
  purge: ['./index.html', './src/**/*.vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'skni-blue-500': '#55ACEE',
        'skni-blue-600': '#016fa5',
        'skni-blue-700': '#00699d',
        'skni-blue-800': '#174b82',
        'skni-blue-900': '#2e336f'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

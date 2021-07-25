module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minHeight: {
      '4/5': '80%', 
    },
    maxHeight: {
      '700px': '700px'
    },
  },
  variants: {
    extend: {},
    margin: ['responsive', 'first'],
  },
  plugins: [],
};
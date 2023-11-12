/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#eeeeee',
        'secondary': '#c8c8c8',
        'color-text': '#1d1d1d'
      }
    },
  },
  plugins: [],
}


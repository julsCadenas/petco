/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple2: '#964f99',
        purple3: '#fd2fbc',
        green2: '#9fc10f',
        orange2: '#FF8904',
        pink2: '#FF22BD',
        blue2: '#0FCBF5',
        bgpurple: '#141118'
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}
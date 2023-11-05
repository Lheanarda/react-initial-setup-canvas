/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#04ac4d',
        secondary:'#b1d900'
      },
      fontFamily:{
        monts:['Montserrat','sans-serif']
      },
      fontSize:{
        '2xs' : '0.65rem',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
}

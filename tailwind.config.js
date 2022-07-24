/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Nunito', ...fontFamily.sans],
        highlight: ['Cinzel', ...fontFamily.serif]
      },
      keyframes: {
        slideToBottom: { 
          '0%': {transform: 'translateY(-150px)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'},
        },
      },
      animation: {
        'slidingToBottom': 'slideToBottom .3s forwards'
      }
    },
  },
  plugins: [],
}

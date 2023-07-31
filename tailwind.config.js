/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'red900': '#FF0000',
        'red800': '#FF040D',
        'gray900': '#33303E',
        'gray800': '#4E4B59',
        'gray700': '#5F5C6B',
        'gray600': '#7A7786',
        'gray500': '#8C8A97',
        'gray400': '#ACABB7',
        'gray300': '#C6C5CE',
        'gray200': '#E1E0E7',
        'white': '#FFFFFF',
        'black': '#000000',
        'yellow': '#FFA800',
      },
      container: {
        'width': '100%',
        'maxWidth': '124.6rem',
        'margin': '0 auto',
        'padding': '0rem 1.5rem',
      },
    },
  },
  plugins: [],
}

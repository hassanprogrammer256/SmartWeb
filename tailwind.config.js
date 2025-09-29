/** @type {import('tailwindcss').Config} */
export default {
 content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
       fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
        hammersmith: ['"Hammersmith One"', 'sans-serif'],
        kreon: ['Kreon', 'sans-serif'],
        permanent: ['"Permanent Marker"', 'cursive'],
        pinyon: ['"Pinyon Script"', 'cursive'],
        poppins: ['"Poppins"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
        kanit: ['"Kanit"', 'sans-serif'],
      },
      colors:{
        lemon_green:'#c9f31d'
      }
    },
  },
  plugins: [],
}


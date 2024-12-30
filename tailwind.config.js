/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily:{
      'Bebas-neue': ["Bebas Neue", "serif"],
      'Roboto': ["Roboto Mono", "serif"]
    },
    extend: {},
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// export const content = [
//   "./index.html",
//   "./src/**/*.{js,ts,jsx,tsx, html}",
//   './pages/**/*.{html,js, jsx}',
//   './components/**/*.{html,js, jsx}',
// ];

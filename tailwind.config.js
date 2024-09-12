/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Archivo', 'sans-serif'],
        body: ['Roboto Mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


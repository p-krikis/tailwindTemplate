/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Iceberg: ['Iceberg', 'sans-serif'],
        SairaCondensed: ['Saira Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
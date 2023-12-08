/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
  ],
  theme: {
    extend: {
      colors: {
        linearOrange: "var(--linear-orange-1, linear-gradient(318deg, #F58124 -4.22%, #FFC266 120.23%))",
      }
    },
    screens: {
      xxs: "220px",
      xs: "426px",
    },
  },
  plugins: [],
}

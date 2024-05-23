/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      bgColor: "rgb(var(--color-bg) / <alpha-value>)"
    },
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#1C3041",
        "darkLight": "#324354",
        "main": "#31AFD4",
        "lightMain": "#80CEE5",
        "light": "#D5EFF6",
        "lightest": "#EAF7FB"
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

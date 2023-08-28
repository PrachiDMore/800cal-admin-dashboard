/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "accent": "#0D0D0D",
        "darkGray": "#252525",
        "mediumGray": "#6D6D6D",
        "textGray": "#ADADAD",
        "green": "#00FF66",
        "darkgreen": "#1CC37A",
        "lightgreen": "#4FE38A",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
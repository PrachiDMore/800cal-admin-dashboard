/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
    },
  },
  plugins: [],
}
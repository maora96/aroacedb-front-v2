/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      green: "#B5DE9D",
      lightgreen: "#D7ECD7",
      darkgray: "#3F3F44",
      lightestgray: "#F3F7F3",
      offwhite: "#f6f6f6",
      white: "#FFF",
      aro: "#A7D379",
      ace: "#800080",
      // 'midnight': '#121063',
      // 'metal': '#565584',
      // 'tahiti': '#3ab7bf',
      // 'silver': '#ecebff',
      // 'bubble-gum': '#ff77e9',
      // 'bermuda': '#78dcca',
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

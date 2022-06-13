/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        homeImage: "url('/src/Media/img/home.png')"
      },
      spacing: {
        "8.6": "8.6rem"
      },
      colors: {
        light: "#B0B0B0",
        dark: "#1B2020",
        lightgray: "#353A38",
        darkgray: "#141717",
        brown: "#C57011"
      }
    },
  },
  plugins: [],
}

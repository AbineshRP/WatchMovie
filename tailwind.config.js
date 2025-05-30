/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#f2a30f",
        secondary: "#fff4d3",
        light: {
          100: "#eefbfa",
        },
      },
    },
  },
  plugins: [],
};

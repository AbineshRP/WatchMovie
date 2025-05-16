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
        primary: "#289c8e",
        secondary: "#ceece8",
        light: {
          100: "#eefbfa",
        },
      },
    },
  },
  plugins: [],
};

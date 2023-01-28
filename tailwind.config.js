/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#cdead0",
          200: "#9ad4a1",
          300: "#68bf72",
          400: "#35a943",
          500: "#039414",
          600: "#027610",
          700: "#02590c",
          800: "#013b08",
          900: "#011e04",
        },
        secondary: {
          100: "#fbdeeb",
          200: "#f8bed7",
          300: "#f49dc4",
          400: "#f17db0",
          500: "#ed5c9c",
          600: "#be4a7d",
          700: "#8e375e",
          800: "#5f253e",
          900: "#2f121f",
        },
        accent: {
          100: "#d0ebfc",
          200: "#a2d7fa",
          300: "#73c2f7",
          400: "#45aef5",
          500: "#169af2",
          600: "#127bc2",
          700: "#0d5c91",
          800: "#093e61",
          900: "#041f30",
        },
        light: "#f0f0f0"
      },
    },
  },
  plugins: [],
};

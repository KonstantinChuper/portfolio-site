/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorPrimary: "#55e6a5",
        colorMenu: "#0e1319",
        colorMenuTop: "#151c25",
        colorWhite: "#ffffff",
        colorBlack: "#02050a",
        colorTextSecondary: "#a2a2a2",
      },
      fontFamily: {
        sans: ["Kanit", "sans-serif"],
        handjet: ["Handjet", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/BCG1.png')",
      },
      width: {
        550: "550px",
      },
      scale: {
        250: "2.5",
      },
    },
  },
  plugins: [],
};

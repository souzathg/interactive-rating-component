/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        base: "15px"
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
      colors: {
        primary: {
          orange: "hsl(25, 97%, 53%)",
        },
        secondary: {
          0: "hsl(0, 0%, 100%)",
          200: "hsl(217, 12%, 63%)",
          400: "hsl(216, 12%, 54%)",
          600: "hsl(213, 19%, 18%)",
          800: "hsl(216, 12%, 8%)",
        },
      },
    },
  },
  plugins: [],
};

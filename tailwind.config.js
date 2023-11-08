/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        londrina: ["Londrina Solid", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        quattrocento: ["Quattrocento", "serif"],
        satisfy: ["Satisfy", "serif"],
      },
    },
  },
  plugins: [],
};

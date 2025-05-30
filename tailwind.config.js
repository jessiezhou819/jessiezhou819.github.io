/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0d1321", // 0d1b2a
        secondary: "#edf2f4",
        tertiary: "#1b263b",
        "black-100": "#415a77",
        "black-200": "#090325",
        "white-100": "#f3f3f3", //
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        // "hero-pattern": "url('/src/assets/gray.png')",
      },
    },
  },
  plugins: [],
};

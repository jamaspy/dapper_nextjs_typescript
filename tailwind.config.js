module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        seagreen: "#4bc0c8",
        tangerine: "#feac5e",
        mauve: "#c779d0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

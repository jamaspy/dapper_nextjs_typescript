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
        dark_pink: "#C62467",
        blacked: "#001220",
        nice_black: "#171125",
        salmon: "#D66F70",
        react: "#61DAFB",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-0.5deg)" },
          "50%": { transform: "rotate(0.5deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce", "hover"],
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

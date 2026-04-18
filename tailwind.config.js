/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#111111",
        bone: "#FAFAF7",
        stone: "#E9E6DF",
        clay: "#BFB8A8",
        sage: "#7D8471",
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};

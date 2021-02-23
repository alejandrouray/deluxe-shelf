module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "Nunito"],
    },
    extend: {},
  },
  variants: {
    extend: {
      translate: ["motion-reduce"],
    },
  },
  plugins: [],
};

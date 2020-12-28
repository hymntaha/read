module.exports = {
  purge: ["./src/**/*.tsx", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        70: "17.5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

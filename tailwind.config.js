const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],

  // purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.emerald,
      pink: { ...colors.pink, main: "#6368A7", }, // {
      //   main: "#6368A7",
      // },
      orange: {
        main: "#CF4B2D",
      },
      grey: {
        main: "#AEA8B5",
        low: "#e4e4e4",
      },
    },
    extend: {},
    // colors: {
    //   // pink: {
    //   //   // main: "6368A7",
    //   // },
    // },
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        md: "8rem",
      },
      maxWidth: "none",
    },
  },
  variants: {
    extend: {
      flex: ["hover", "focus"],
    },
  },
  plugins: [],
};

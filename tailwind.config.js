/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Raleway: ["Raleway", "sans-serif"],
      "Open-Sans": ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        VeryDarkBlue: "hsl(243, 87%, 12%)",
        DesaturatedBlue: "hsl(238, 22%, 44%)",
        BrightBlue: "hsl(224, 93%, 58%)",
        ModerateCyan: "hsl(170, 45%, 43%)",
        LightGrayishBlue: "hsl(240, 75%, 98%)",
        LightGray: "hsl(0, 0%, 75%)",
      },
      backgroundImage: {
        "bg-curve-desktop": "url(../images/bg-curve-desktop.svg)",
        "bg-curve-mobile": "url(../images/bg-curve-mobile.svg)",
      },
    },
  },
  plugins: [],
};

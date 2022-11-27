/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default:
          "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
      },
      colors: {
        tatsuBG: "#282a2e",
        tatsuBTN: "#5865f2",
        tatsuBTN2: "#00a3ff",
        primaryBlue: "#0056ff",
        secondaryBlue: "#3378FF",
        thirdGray: "#fffff",
        textGray: "#4e4e4e",
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/images/hero-pattern-1.png')",
        "logo-dark": "url('/LogosForNeutechWeb/betternetTextBW.svg')",
        "logo-white": "url('/LogosForNeutechWeb/betternetText.svg')",
      }),
      backgroundSize: {
        "hero-size": "1100px",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};

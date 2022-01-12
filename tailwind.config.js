module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tatsuBG: "#282a2e",
        tatsuBTN: "#5865f2",
        tatsuBTN2: "#00a3ff",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-pattern-1.png')",
        "hero-pattern-2": "url('/images/hero-pattern-2.png')",
        "hero-pattern-3": "url('/images/hero-pattern-3.png')",
      },
      backgroundSize: {
        "hero-size": "1100px",
        // "hero-size": "100%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        tatsuBG: '#282a2e',
        tatsuBTN: '#5865f2',
        tatsuBTN2: '#00a3ff',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/landing-page-background-pattern.png')",
      },
      backgroundSize: {
        'hero-size': '1100px',
      },
    },
  },
  plugins: [],
};

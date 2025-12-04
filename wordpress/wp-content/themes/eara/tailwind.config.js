module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/blocks/**/*.{js,jsx}",
    "./*.php",
    "./inc/**/*.php"
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#312f86',
        secondaryColor: '#8fbf29',
        earaDark: '#272727',
        earaDarkLighter: '#3a3a3a',
        earaBgLight: '#ededfa',
        earaBgDark: '#e2e2e5',
        earaGrayLight: '#eaeaea',
        backgroundMenu: 'rgba(255, 255, 255, 0.45)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind's reset for better compatibility with Gutenberg
  },
};


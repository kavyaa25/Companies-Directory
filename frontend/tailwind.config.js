/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class', // enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        secondary: '#22d3ee',
      },
    },
  },
  plugins: [],
};

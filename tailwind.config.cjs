/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-text-color': '#64ffda',
        'main-bg-color': '#1e1c49',
        'alternative-bg-color': '#263a7d',
        'alternative-text-color': '#ccd6f6',
        'background-hover-color': '#4c584c',
        'link-color': '#bc73f0',
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  options: {
      safelist: ['dark'],
  },
  darkMode: 'class'
};
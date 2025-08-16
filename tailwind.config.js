// tailwind.config.js
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
    //     options: {
    //   safelist: ['dark'],
    // },
  // ... other configurations
  darkMode: ['selector', '[data-theme="dark"]'], // Or 'class' if you prefer
  daisyui: {
    themes: ['light', 'dark'],
    defaultTheme: 'light', // Optional: Set a default theme
  },
  plugins: [require('daisyui')],
};
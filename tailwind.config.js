/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "white": "#F5F5F5",
      "white-bg": "#F8F8F9",

      "shadow": "#474D5305",

      "gray": "#55595F",
      "gray-dark": "#2E3340",

      "blue-light": "#DBEAFE",
      "blue": "#007AFF",
    },
    extend: {
      boxShadow: {
        'emphasis': "0 -1px 4px 0 #474D5305, 0 1px 4px 0 #474D5305"
      }
    }
  },
  plugins: []
};

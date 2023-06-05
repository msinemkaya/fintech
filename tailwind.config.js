/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-base': '#F5F5F5',
        'primary-dark': '#262833',
        'primary-light': '#C7D7E3',
        'primary-purple': '#6624BC',
        'secondary-light': '#F7F9FA',
        'primary-blue': '#406785',
        'primary-grey': '#8492A0'
      }
    },
  },
  plugins: [],
}


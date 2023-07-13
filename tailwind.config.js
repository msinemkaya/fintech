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
      },
      fontFamily: {
        'poppins': "'Poppins', sans-serif",
      },
      screens: {
        'semi-md': '850px',
        'semi-sm': '675px'
      },
      height: {
        'nav-screen': 'calc(100vh - 4rem)',
        'card': '48rem',
      },
      minHeight: {
        'nav-screen': 'calc(100vh - 4rem)'
      },
      fontSize: {
        '5.5xl': '3.25rem'
      }
    },
  },
  plugins: [],
}


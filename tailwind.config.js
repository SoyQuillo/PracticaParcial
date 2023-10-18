/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'ssm': {'max': '640px'}
      }

    },
  },
  plugins: [],
}


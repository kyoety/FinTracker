/** @type {import('tailwindcss').Config} */
/* Here are Tailwind exports, where we can define the themes for everything */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      minWidth: {
        40: '40%'
      }
    },
  },
  plugins: [],
}

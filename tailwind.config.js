/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        courier: ["Courier Prime", "monospace"],
      }
    },
  },
  plugins: [],
}


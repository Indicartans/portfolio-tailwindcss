/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Quicksand", "sans-serif"],
        courier: ["Courier Prime", "monospace"],
      },
      animation: {
        "blob-1": "blob-float-1 20s ease-in-out infinite",
        "blob-2": "blob-float-2 25s ease-in-out infinite",
        "blob-3": "blob-float-3 18s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "spin-slow-reverse": "spin-slow-reverse 20s linear infinite",
      },
      keyframes: {
        "blob-float-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        "blob-float-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-40px, 30px) scale(1.15)" },
          "66%": { transform: "translate(25px, -40px) scale(0.85)" },
        },
        "blob-float-3": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(20px, 40px) scale(1.05)" },
          "66%": { transform: "translate(-30px, -20px) scale(0.95)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
        "spin-slow-reverse": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};

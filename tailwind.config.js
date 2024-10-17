/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/images/photo1.jpg')",
        'footer-texture': "url('/src/images/photo5.jpg')",
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#C21A1A'
        }
      },
      boxShadow: {
        brand: '0px 0px 10px rgba(137, 142, 150, 0.50);'
      }
    },
  },
  plugins: [],
}


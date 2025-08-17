/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brandYellow: "#F8D66D",
        brandCyan: "#6DD6F8",
        brandPurple: "#B18AE6"
      }
    }
  },
  plugins: []
}

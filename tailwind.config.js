/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif"
      },

      backgroundImage: {
        'hero': "url('/img/bg-hero.svg')"
      },
      colors: {
        brand: {
          siyoxrang: "#0D1E47"
        }
      },
      maxWidth: {
        698: "698px"
      }
    },
  },
  plugins: [],
}

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
          siyoxrang: "#0D1E47",
          ochsariq: "#FDB022",
          ochyashil: "#32D583",
          kulrang: "#475467",
          toqhovo: "#244086",
          graytoq: "#1D2939",
        }
      },
      maxWidth: {
        698: "698px",
        440: "440px",
      }
    },
  },
  plugins: [],
}

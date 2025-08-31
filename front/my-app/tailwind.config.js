/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['"SUIT"', 'sans-sherif'],
            logo: ['TAN-NIMBUS']
        }
    },
  },
  plugins: [require("daisyui")],
}


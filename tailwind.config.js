/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            primary: "#80CEFF",       // primary color (titles)
            secondary: "#CDEAFC",      // secondary color (supporting highlight)
            tertiary: "#F7B2FD",      // buttons accenting color (accenting hovers)
            bg: "1A1919",             // background color      
            txt: "DEEAF2",           // body text color (body text)
          },
          dark: "#0f172a",
          light: "#f1f5f9",
        },
        fontFamily: {
            font1: ['"Poppins"', 'sans-serif'], // primary font
            font2: ['"Bowlby One SC"', 'cursive'], // secondary font
          
        },
      },
    },
    plugins: [],
  }
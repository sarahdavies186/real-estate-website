/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      grey: "#F5F5F5",
    },
    fontFamily: {
      "poppins-bold": ["Poppins Bold"],
      "poppins-regular": ["Poppins Regular"],
      "rubik-semibold": ["Rubik Semi-Bold"]
    },
    extend: {
      scale: {
        "-100": "-1",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
};

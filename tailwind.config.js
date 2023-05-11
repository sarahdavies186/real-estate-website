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

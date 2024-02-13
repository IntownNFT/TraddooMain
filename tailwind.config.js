/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#0F0F0F",
        "dark-grey": "#141414",
        "light-grey": "#252525",
        "blue": "#3671E9",
        "light-blue": "#4C94FF",
        "red": "#EFA411",
        "light-green": "#FFF281",
        "off-white": "#FCFCFC"
      }
    },
  },
  plugins: [],
}


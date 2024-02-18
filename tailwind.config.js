/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
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
      },
      screens: {
        '2xl': '1536px',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      } 
    },
  },
  plugins: [],
})


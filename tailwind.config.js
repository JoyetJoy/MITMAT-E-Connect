/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "xs": "390px",

        "sm": "640px",

        "md": "868px",

        "lg": "1004px",

        "xl": "1138px",

        "2xl": "1536px",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #fdf6f0, #ffffff)',
      },
       backgroundImage: {
        'background-gradient': 'linear-gradient(to bottom, #fdf6f0, #ffffff)'
       },
      colors: {
        'custom-dark': 'rgb(52, 55, 34)', // Adding the custom color
        'customPurple': '#d6b7fd',
      },
      boxShadow: {
        'customShadow': '0px 0px 10px 1px #eaeaea',
      }
    },
  },
  plugins: [
    require('tailwindcss-text-stroke'),
  ],
}


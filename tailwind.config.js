/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ff5773",

          "secondary": "#252841",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#477FFA",

          "success": "#36D399",

          "warning": "#fd3c45",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

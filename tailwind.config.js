/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('/images/hero.jpg')",
        "helmet-background": "url('/images/helmet.jpg')",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        // myTheme: {
        //   primary: "#0d0106",
        //   secondary: "#3626a7",
        //   accent: "#657ed4",
        //   neutral: "#fdf0d5",
        //   "base-100": "#fbfbff",
        //   info: "#0092d8",
        //   success: "#25ff6b",
        //   warning: "#fca200",
        //   error: "#c1121f",
        // },
        myTheme: {
          primary: "#477d33",
          secondary: "#6ab04c",
          accent: "#e0f0d7",
          neutral: "#fdf0d5",
          "base-100": "#fbfbff",
          info: "#0092d8",
          success: "#6ab04c",
          warning: "#fca200",
          error: "#c1121f",
        },
      },
      "light",
    ],
  },
};

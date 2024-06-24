/** @type {import('tailwindcss').Config} */
import fluid, { extract } from "fluid-tailwind";

export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    extract,
  },
  theme: {
    extend: {
      colors: {
        "primary-color": "#e1b7ff",
        "primary-color-dark": "#b44dfe",
        "primary-color-light": "#f2e2fe",
        "secondary-color": "#eaf3f5",
        "light-color": "#fdfdfd",
        "dark-color": "#353535",
      },
    },
  },
  plugins: [fluid],
};

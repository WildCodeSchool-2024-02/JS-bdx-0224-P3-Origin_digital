/** @type {import('tailwindcss').Config} */
import fluid, { extract } from "fluid-tailwind";
import plugin from "tailwindcss/plugin";

export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    extract,
  },
  theme: {
    extend: {
      colors: {
        "primary-color": "#e1b7ff",
        "primary-dark": "#b44dfe",
        "primary-light": "#f2e2fe",
        "secondary-color": "#eaf3f5",
        "light-color": "#fdfdfd",
        "dark-color": "#353535",
      },
      boxShadow: {
        "custom-shadow": "15px 15px 0px 0px var(--primaryColor)",
      },
    },
  },
  plugins: [
    fluid,
    plugin(({ addComponents }) => {
      const components = {
        ".line-burger": {
          "@apply block absolute h-1 w-full rounded-full opacity-100 left-0 transform rotate-0 transition ease-in-out duration-200 bg-gray-600": {},
        },
        "button.active .line-burger:first-child": {
          "@apply transform rotate-45 top-0 left-1.5": {},
        },
        "button.active .line-burger:nth-child(2)": {
          "@apply w-0 opacity-0": {},
        },
        "button.active .line-burger:last-child": {
          "@apply transform -rotate-45 top-8 left-1.5": {},
        },
        ".footer-list": {
          "@apply text-[var(--darkColor)]": {},
        },
        ".img-shadow": {
          "@apply shadow-custom-shadow": {},
        },
        ".containBtnForm": {
          "@apply font-bold h-full m-0 flex-1 flex justify-center items-center": {},
        },
        ".textHoverUnderline":{
          "@apply text-dark-color hover:border-b hover:border-primary-dark hover:text-primary-dark":{},
        }
      };
      addComponents(components);
    }),    
  ],
};
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
          "@apply block absolute h-1 w-full rounded-full opacity-100 left-0 transform rotate-0 transition ease-in-out duration-200 bg-gray-600":
            {},
        },
        "button.active .line-burger:first-child": {
          "@apply transform rotate-45": {},
        },
        "button.active .line-burger:nth-child(2)": {
          "@apply w-0 opacity-0": {},
        },
        "button.active .line-burger:last-child": {
          "@apply transform -rotate-45 top-[1.9rem]": {},
        },
        ".footer-list": {
          "@apply text-[var(--darkColor)] hover:text-primary-dark": {},
        },
        ".img-shadow": {
          "@apply shadow-custom-shadow": {},
        },
        ".containBtnForm": {
          "@apply font-bold h-full m-0 flex-1 flex justify-center items-center":
            {},
        },
        ".tagsViewing": {
          "@apply mx-1 py-1 px-6 text-sm lg:text-base bg-primary-color border-2 border-dark-color rounded-full text-dark-color font-bold capitalize hover:text-light-color hover:border-light-color hover:bg-primary-dark hover:ring-2 hover:ring-primary-dark":
            {},
        },
        ".inputContact": {
          "@apply rounded-lg m-2 p-4": {},
        },
        ".labelContact": {
          "@apply rounded-lg m-2 p-4 h-7 justify-self-center text-base": {},
        },
        ".buttonForLink": {
          "@apply rounded-md  bg-primary-color h-9 px-4 py-2 font-semibold transition-all duration-300 ease-linear cursor-pointer flex justify-center items-center hover:text-light-color hover:bg-primary-dark":
            {},
        },
        ".gridMyAccount": {
          "@apply col-start-1 col-end-2": {},
        },
        ".bg-gradient-light": {
          "@apply bg-gradient-to-t from-dark-color/95 to-dark-color/20": {},
        },
        ".bg-gradient-dark": {
          "@apply bg-gradient-to-t from-dark-color/95 to-dark-color/20": {},
        },
      };
      addComponents(components);
    }),
  ],
};

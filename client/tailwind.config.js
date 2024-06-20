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
        'pc':'#e1b7ff',
        'pcd':'#b44dfe',
        'pcl':'#f2e2fe',
        'sc':'#eaf3f5',
        'lc':'#fdfdfd',
        'dc':'#353535',
      }
    },
  },
  plugins: [fluid],
};

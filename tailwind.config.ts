import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/theme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/modal.js",
  ],
  theme: {
    extend: {
      colors: {
        darkcyan: "#0E8784",
        darkgreyblue: "#333D4B",
        paleorange: "#FDD6BA",
        lightcream: "#FEFCF7",
        grey: "#83888F",
      },
    },
  },
  plugins: [nextui()],
};

export default config;

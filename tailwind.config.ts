import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        blueCustom: "#00AEEF",
        redCustom: "#EB1820",
      },
      listStyleType: {
        roman: "upper-roman",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;

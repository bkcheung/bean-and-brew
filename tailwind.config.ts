import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": "#59935F",
        "light-green": "#A0BFA3",
        "light-grey": "#EFF3EC",
      },
    },
  },
  plugins: [],
};
export default config;

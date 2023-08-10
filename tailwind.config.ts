import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#57A4FF",
      },
      keyframes: {
        burgerOpen: {
          "0%": { left: "100%" },
          "100%": { left: "0%" },
        },
      },
      animation: {
        burgerOpen: "burgerOpen 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;

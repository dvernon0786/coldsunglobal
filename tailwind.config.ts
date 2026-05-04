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
        navy: { DEFAULT: "#04365f", deep: "#02243f", mid: "#0a4a7a" },
        orange: { DEFAULT: "#f68900", dark: "#d57700" },
        blue: { DEFAULT: "#0061af", light: "#cadeef" },
      },
    },
  },
  plugins: [],
};
export default config;

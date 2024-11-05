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
        primary: "#4B44E3",
        secondary: '#221F66',
        super: '#5049E3',
        duper: '#959DF6',
        warning:'#D8315B',
        completed:"#2D6CFF",
        checked:"#22FF00",
        testing:"#FF9100"
      },
    },
  },
  plugins: [],
};
export default config;

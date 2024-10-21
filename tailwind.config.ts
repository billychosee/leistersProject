import { Reem_Kufi_Fun } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {  
        darkBlue: '#0F4FA1', 
        lightGray: '#D9D9D9'
      },
      fontFamily: {  
        deutschlander: ['Deutschlander', 'sans-serif'],
        'reem-kufi': ['Reem Kufi Fun', 'sans-serif'],
        chillax: ['Chillax', 'sans-serif'],
      }, 
      boxShadow: {  
        'custom': '0px 0px 10px 10px rgba(0, 0, 0, 0.20)',  
      },
      fontSize: {
        'xs-custom': '8.7px',
      },
    },
  },
  plugins: [],
};
export default config;

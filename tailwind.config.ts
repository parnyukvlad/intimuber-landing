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
        'bg-dark': '#0D0D1A',
        'text-light': '#F5EFFF',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(180deg, #224BDA 0%, #E93AB8 100%)',
        'secondary-gradient': 'linear-gradient(180deg, #C77DFF 0%, #9D4EDD 100%)',
      },
    },
  },
  plugins: [],
};

export default config;

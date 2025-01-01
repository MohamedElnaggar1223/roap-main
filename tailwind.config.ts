import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F441F',
        secondary: '#C4DA59',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        monument: ['var(--font-monument)'],
        impala: ['var(--font-impala)'],
      },
      backgroundImage: {
        'hero': "url('/images/hero.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;

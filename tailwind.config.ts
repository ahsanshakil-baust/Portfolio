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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        cursive: ["Edu AU VIC WA NT Arrows", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        parkinsans: ["Parkinsans", "sans-serif"],
      },
      width: {
        common: "1200px",
      },
      screens: {
        xs: "485px",
        xxs: "420px",
        xxxs: "380px",
      },
    },
  },
  plugins: [],
} satisfies Config;

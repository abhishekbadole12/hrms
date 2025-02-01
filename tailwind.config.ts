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
        primary: "rgb(18,18,18)",
        secondary: "rgb(99,115,129)",
        third: "rgba(99,115,129,0.3)",
        ["nav-label"]: "#1C252E",
      },
    },
  },
  plugins: [],
} satisfies Config;

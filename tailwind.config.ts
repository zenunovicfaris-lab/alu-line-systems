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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Refined architectural palette: graphite, warm paper, steel-blue accent.
        alu: {
          blue: "#143c5f", // restrained steel-blue accent
          dark: "#15181d", // graphite (warmer, less blue-black)
          gray: "#f3f1ec", // warm off-white / paper (was cold slate)
          light: "#1e5a8a", // hover on accent
          text: "#5b6b78", // muted body / captions
          steel: "#8a949c", // aluminium mid-gray
          line: "#e3e0d8", // hairline on paper
          glow: "#143c5f33",
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      borderRadius: {
        // Tightened, architectural radius scale. Nothing rounder than ~6px.
        lg: "0.375rem",
        xl: "0.375rem",
        "2xl": "0.5rem",
        "3xl": "0.5rem",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;

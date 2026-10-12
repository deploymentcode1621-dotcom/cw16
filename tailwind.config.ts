import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0E7490",
          dark: "#0B5A70",
          light: "#E0F2F4",
        },
        secondary: {
          DEFAULT: "#1E3A8A",
          light: "#EEF2FB",
        },
        accent: {
          DEFAULT: "#14B8A6",
          light: "#E7FBF8",
        },
        gold: {
          DEFAULT: "#C2761C",
          light: "#FBF1E4",
        },
        bg: {
          DEFAULT: "#F8FAFC",
        },
        ink: {
          DEFAULT: "#0F2536",
          soft: "#4B6274",
        },
      },
      fontFamily: {
        display: ["var(--font-poppins)", "var(--font-noto-dev)", "sans-serif"],
        body: ["var(--font-inter)", "var(--font-noto-dev)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        soft: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,37,54,0.04), 0 8px 24px rgba(15,37,54,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;

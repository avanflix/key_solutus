import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        mist: "#F5F9FC",
        sky: "#E7F0F8",
        haze: "#EFF4F9",
        blue: {
          DEFAULT: "#3E6E99",
          soft: "#4E82AC",
          deep: "#2A5378",
          pale: "#DCEAF5",
        },
        gray: {
          line: "#E2E7EC",
          mid: "#8B96A3",
        },
        ink: "#1A2530",
        slate: "#54606C",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(42, 83, 120, 0.18)",
        card: "0 10px 40px -12px rgba(26, 37, 48, 0.12)",
        glass: "0 8px 32px 0 rgba(62, 110, 153, 0.14)",
      },
      backgroundImage: {
        "grid-blueprint":
          "linear-gradient(rgba(62,110,153,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(62,110,153,0.08) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-line": {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "pulse-line": "pulse-line 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: "#120E1F",
          soft: "#1A1430",
          deep: "#0B0815",
        },
        plum: {
          DEFAULT: "#231A3D",
          light: "#2E2350",
        },
        turmeric: {
          DEFAULT: "#F2A93B",
          soft: "#F6C173",
          dim: "#B87E23",
        },
        chili: {
          DEFAULT: "#E85D3D",
          soft: "#F08064",
        },
        cream: {
          DEFAULT: "#F5EFE6",
          dim: "#D9D2C7",
        },
        lavender: {
          DEFAULT: "#A79BC4",
          dim: "#6E6489",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      backgroundImage: {
        "night-gradient":
          "radial-gradient(120% 120% at 10% 0%, #2E2350 0%, #1A1430 45%, #0B0815 100%)",
        "day-gradient":
          "radial-gradient(120% 120% at 10% 0%, #FFF6E9 0%, #FDECD3 45%, #FBDFC0 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-light": "0 8px 32px 0 rgba(120, 90, 40, 0.15)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(20px, -30px) scale(1.08)" },
        },
        driftSlow: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(-25px, 20px) scale(1.05)" },
        },
        steam: {
          "0%": { transform: "translateY(0) scaleX(1)", opacity: "0.35" },
          "100%": { transform: "translateY(-40px) scaleX(1.3)", opacity: "0" },
        },
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        driftSlow: "driftSlow 18s ease-in-out infinite",
        steam: "steam 3.2s ease-in infinite",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ethereal Cyber palette
        "cosmic-dark": "#0c1227",
        "cosmic-darker": "#050810",
        "deep-pink": "#ff71ce",
        "neon-pink": "#ff00ff",
        "cyan-accent": "#00f0ff",
        "purple-accent": "#8338ec",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      borderRadius: {
        glass: "8px",
      },
      backdropBlur: {
        glass: "10px",
      },
      boxShadow: {
        "glow-pink": "0 0 20px rgba(255, 113, 206, 0.5)",
        "glow-cyan": "0 0 20px rgba(0, 240, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;

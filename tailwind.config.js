/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#FFDE00",
        "nb-cyan": "#00E5FF",
        "nb-coral": "#FF5E5B",
        "nb-lime": "#B8FF00",
        "nb-violet": "#C490FF",
        paper: "#FFFDF5",
        surface: "#F4F0E8",
        ink: "#000000",
        dark: "#FFFDF5",
        darker: "#F4F0E8",
        card: "#FFFFFF",
        border: "#000000",
        muted: "#3F3F46",
        light: "#000000",
      },
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "sans-serif"],
        display: ["Archivo Black", "Space Grotesk", "sans-serif"],
        mono: ["Space Mono", "monospace"],
        nav: ["Space Mono", "monospace"],
        logo: ["Archivo Black", "sans-serif"],
      },
      boxShadow: {
        nb: "4px 4px 0px 0px #000000",
        "nb-md": "6px 6px 0px 0px #000000",
        "nb-lg": "8px 8px 0px 0px #000000",
        "nb-sm": "2px 2px 0px 0px #000000",
        "nb-accent": "6px 6px 0px 0px #FFDE00",
        "nb-cyan": "6px 6px 0px 0px #00E5FF",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

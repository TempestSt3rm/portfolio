export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#34FDDF" },
        secondary: { DEFAULT: "#02ABD1" },
        thirdColor: { DEFAULT: "#004860" },
        overlay: { DEFAULT: "#020713" },
      },
      animation: { "glow-left-right": "glowLeftRight 5s infinite" },
      keyframes: {
        glowLeftRight: {
          "0%":   { textShadow: "0 0 10px #02ABD1, 0 0 11px #02ABD1" },
          "50%":  { textShadow: "0 0 11px #02ABD1, 0 0 12px #02ABD1" },
          "100%": { textShadow: "0 0 10px #02ABD1, 0 0 11px #02ABD1" },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary:    { DEFAULT: "#34FDDF", },
        secondary:  { DEFAULT: "#02ABD1",},
        third:      { DEFAULT: "#004860",},
        background: { DEFAULT: "#04060aff",},
        text: { DEFAULT: "#ECFDFE",},
      },
      backgroundImage: {
        'radial-spot':
          'radial-gradient(ellipse at center, rgba(52,253,223,0.16) 0%, rgba(4,6,10,0.85) 20%, #04060a 100%)',
      },
      animation: {
        'glow-left-right': 'glowLeftRight 5s infinite',
      },
      keyframes: {
        glowLeftRight: {
          '0%': {
            textShadow: '0 0 10px #02ABD1, 0 0 11px #02ABD1', 
          },
          '50%': {
            textShadow: '0 0 11px #02ABD1, 0 0 12px #02ABD1',
          },
          '100%': {
            textShadow: '0 0 10px #02ABD1, 0 0 11px #02ABD1', 
          },
        },
      },
    },
  },
  plugins: [],
};

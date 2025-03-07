module.exports = {
  content: [    
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/Blonde/layouts/**/*.html",
    "./themes/Blonde/assets/css/*.css"
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      'sans': ['Saira', 'sans-serif'],
      'saira': ['Saira', 'sans-serif'],
    },
    extend: {
      colors: {
        warmgray: {
          700: "#2f3335",
          800: "#1e2022",
          900: "#181a1b",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};

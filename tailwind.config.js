module.exports = {
  content: [
    "./themes/Blonde/**/*.{html,js}",
    "./layouts/**/*.{html,js}",
    "./content/**/*.{html,md}",
    "./data/**/*.{json,yaml}"
  ],
  safelist: [
    'text-white',
    'text-red',
    'bg-neutral-800',
    'hover:text-gray-400',
    'transition',
    'duration-200',
    'text-3xl'
  ],
  theme: {
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
  plugins: [require("@tailwindcss/typography")],
} 
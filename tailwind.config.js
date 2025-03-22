/** @type {import('tailwindcss').Config} */
export default {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  // Make sure important is set to true if needed
  important: true,
};

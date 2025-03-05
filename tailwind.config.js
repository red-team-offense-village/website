module.exports = {
  content: [
    './layouts/**/*.html',
    './themes/**/layouts/**/*.html',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#991b1b', // red-800
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  // Make sure important is set to true if needed
  important: true,
}
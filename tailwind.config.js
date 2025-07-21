module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ Ensure all components are covered
    "./public/index.html"
  ],
  theme: {
  extend: {
    animation: {
      scrollStars: 'scrollStars 100s linear infinite',
    },
    keyframes: {
      scrollStars: {
        '0%': { transform: 'translate(0, 0)' },
        '100%': { transform: 'translate(-50%, -50%)' },
      },
    },
  },
},

  plugins: [],
};

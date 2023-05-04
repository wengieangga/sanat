/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      screens: {
        smallPhone: {
          min: "280px",
          max: "320px",
        },
      },
      keyframes: {
        easeIn: {
          from: {
            opacity: "0.8",
            transform: "translate3d(0, 15%, 0)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        tabAnimation: {
          from: {
            opacity: "0.8",
            transform: "translate3d(0, -10%, 0)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        easeIn: "easeIn 0.5s",
        tabAnimation: "tabAnimation 0.7s",
      },
    },
  },
  plugins: [],
};

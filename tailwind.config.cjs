/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        a4: "1 / 1.414",
      },
      fontSize: {
        "c-smaller": "2cqw",
        "c-small": "3cqw",
        "c-normal": "5cqw",
        "c-big": "7cqw",
        "c-bigger": "9cqw",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};

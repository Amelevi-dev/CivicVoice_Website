// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003C64",
        secondary: "#32E9CD",
        accent: "#FF844B",
        light: "#FFFFFF",
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
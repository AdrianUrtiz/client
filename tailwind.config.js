module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#1B396A",
        pageBg: "#F7F9FB",
      },
      maxWidth: {
        "8xl": "120rem",
      },
      fontFamily: {
        "sans": ["Montserrat", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#171717",
        accent: "#d4d4d4",
        gradient1: "#1a1a1a",
        gradient2: "#0d0d0d",
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(145deg, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

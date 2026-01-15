/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
  },
  plugins: [],
}

theme: {
  extend: {
    colors: {
      terminal: "#0D0D0D",
        accent: "#FF3E3E", // High-contrast Red from your reference
          glass: "rgba(255, 255, 255, 0.03)",
    },
    backgroundImage: {
      'grid-pattern': "linear-gradient(to right, #121212 1px, transparent 1px), linear-gradient(to bottom, #121212 1px, transparent 1px)",
    }
  }
}
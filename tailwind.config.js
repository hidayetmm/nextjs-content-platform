module.exports = {
  // mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bg-color": "#06202A",
      },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover"],
      textColor: ["responsive", "hover", "focus", "active"],
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        default: "5s all",
      },
      colors: {
        primary: "#fff",
        bgPrimary: "#0e0e0e",
        bgSecondary: "#1c1c1c",
        bgTertiary: "#232323",
        effectPrimary: "#6495ED",
        effectSecondary: "#007aff",
      },
    },
  },
  plugins: [],
};

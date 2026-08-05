/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#00152e",
        ink: "#00112b",
        teal: "#10bfd0",
        cyan: "#00d5e7",
        mist: "#eef7fa"
      },
      boxShadow: {
        lift: "0 24px 80px rgba(0, 21, 46, 0.14)"
      }
    }
  },
  plugins: []
};

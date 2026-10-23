/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Tight", "system-ui", "-apple-system", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
        mono: ["ui-monospace", "Menlo", "monospace"],
      },
      colors: {
        paper: "#F4F5F7",
        ink: "#111318",
        muted: "#5A5D66",
        line: "#D9DBE1",
        mist: "#E6E8EE",
        cobalt: {
          DEFAULT: "#2B3FE0",
          soft: "#DCE1FF",
          rule: "#8C98F0",
          code: "#9AA6FF",
        },
      },
      boxShadow: {
        float: "0 1px 2px rgba(17,19,24,0.06), 0 12px 32px rgba(17,19,24,0.08)",
      },
    },
  },
  plugins: [],
};

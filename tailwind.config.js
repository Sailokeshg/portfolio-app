/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        ink: {
          50: "#f7f4ef",
          100: "#ece6dc",
          200: "#d7ccbd",
          300: "#b8ab98",
          400: "#8c8071",
          500: "#62594e",
          600: "#484139",
          700: "#302c27",
          800: "#1c1a17",
          900: "#0d0e10",
          950: "#07080a",
        },
        signal: {
          cyan: "#37f3ff",
          green: "#b7ff5a",
          violet: "#a78bfa",
          amber: "#f7c873",
          rose: "#ff6b8a",
        },
        primary: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        dark: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scan-line": "scanLine 4s ease-in-out infinite",
        "border-flow": "borderFlow 6s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scanLine: {
          "0%, 100%": { transform: "translateY(-20%)", opacity: "0" },
          "20%, 80%": { opacity: "0.55" },
          "50%": { transform: "translateY(120%)" },
        },
        borderFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(55, 243, 255, 0.18)",
        "glow-green": "0 0 36px rgba(183, 255, 90, 0.16)",
        "panel": "0 24px 80px rgba(0, 0, 0, 0.22)",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(rgba(13,14,16,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(13,14,16,0.055) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

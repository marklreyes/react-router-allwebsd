import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#FFC425',
        secondary: '#2F241D',
        darkBg: '#71BEA9',
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      keyframes: {
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-1px)' },
          '50%': { transform: 'translateX(0)' },
          '75%': { transform: 'translateX(1px)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        shake: 'shake 1s ease-in-out infinite'
      }
    },
  },
  plugins: [
		require("@tailwindcss/typography"),
	],
} satisfies Config;

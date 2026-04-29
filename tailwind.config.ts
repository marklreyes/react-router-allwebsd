import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#F6BF31', // marigold (gold)
        secondary: '#D12A72', // fireberry (pink)
        darkBg: '#122231', // obsidian (dark navy)
        accent: '#52B9BE', // aqua (teal)
        orange: '#EE7316', // fireberry (orange)
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

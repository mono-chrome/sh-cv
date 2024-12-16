import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["selector", "[data-mode='dark']"],
  theme: {
    extend: {
      fontSize: {
        "2xs": ["0.7rem", "0.9375rem"],
      },
      fontFamily: {
        sans: ["Geist Mono", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "dark-color": "var(--dark-col)",
      },
      animation: {
        blink: "blink 5s linear infinite",
      },
      keyframes: {
        blink: {
          "2%, 50%": { opacity: "0" },
          "53%, 100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

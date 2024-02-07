/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        // other fallback fonts
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        // other fallback fonts
      ],
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};

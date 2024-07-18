/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#2196f3",
        secondary: "#ff5722",
        danger: "",
        textPrimary: "#233",
      },
    },
    container: {
      screens: {
        sm: "600px",
        md: "728px",
        lg: "728px",
        xl: "728px",
        "2xl": "728px",
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        my_bg_image: "url('../public/bg.webp')",
        about_l_image: "url('../public/about-light.jpg')",
        about_d_image: "url('../public/about-dark.jpg')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

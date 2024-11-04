/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',    // Extra small devices (phones, 480px and up)
        'sm': '640px',    // Small devices (landscape phones, 640px and up)
        'md': '768px',    // Medium devices (tablets, 768px and up)
        'lg': '1024px',   // Large devices (desktops, 1024px and up)
        'xl': '1280px',   // Extra large devices (large desktops, 1280px and up)
        '2xl': '1536px',  // 2x large devices (larger desktops, 1536px and up)
      },
    },
    fontFamily: {
      "calli": ["Calligraffitti", "cursive"]
    }
  },
  plugins: [],
}


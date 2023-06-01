/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins, sans-serif"
      },
      width: {
        contentmax: "max-content",
      },
      height: {
        minusheader: "calc(100vh - 159px - 48px)"
      },
      backgroundColor: {
        opaque: "rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: [],
}


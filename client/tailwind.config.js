/** @type {import('tailwindcss').Config} */
import aspectRatioPlugin from "@tailwindcss/aspect-ratio";
import tailwindcssforms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [aspectRatioPlugin, tailwindcssforms],
};

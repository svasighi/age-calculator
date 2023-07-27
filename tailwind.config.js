const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        desktop: "1.3rem",
      },
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        big: "32px",
      },
      colors: {
        purple: "hsl(259, 100%, 65%)",
        "light-red": "hsl(0, 100%, 67%)",
        "off-white": "hsl(0, 0%, 94%)",
        "light-grey": "hsl(0, 0%, 86%)",
        "smokey-grey": "hsl(0, 1%, 44%)",
        "off-black": "hsl(0, 0%, 8%)",
      },
      screens: {
        desktop: "435px",
      },
    },
  },
  plugins: [],
};

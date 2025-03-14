import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { poppins: ["var(--font-poppins)"], heebo: ["var(--font-heebo)"], inter: ["var(--font-inter)"] },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        loafer: {
          "50": "#f5f7ee",
          "100": "#e9eed9",
          "200": "#d5dfb7",
          "300": "#b8c98d",
          "400": "#9eb368",
          "500": "#80984a",
          "600": "#647838",
          "700": "#4d5d2e",
          "800": "#3f4b29",
          "900": "#374126",
          "950": "#1c2211",
        },

        nandor: {
          "50": "#f6f7f7",
          "100": "#e0e7e2",
          "200": "#c1cec6",
          "300": "#9bada3",
          "400": "#758c80",
          "500": "#5b7165",
          "600": "#485a51",
          "700": "#3c4943",
          "800": "#323d37",
          "900": "#2d3431",
          "950": "#171c1a",
        },

        bismark: {
          "50": "#f4f7f7",
          "100": "#e3e9ea",
          "200": "#cad5d7",
          "300": "#a5b7bb",
          "400": "#789098",
          "500": "#5a7179",
          "600": "#50626a",
          "700": "#455359",
          "800": "#3e474c",
          "900": "#373e42",
          "950": "#171c1a",
        },
      },

      keyframes: {
        "slide-top-bottom": {
          "0%": { transform: "translate(-50%, -100%)", opacity: "0" },
          "100%": { transform: "translate(-50%, 0)", opacity: "1" },
        },
      },

      animation: { "slide-top-bottom": "slide-top-bottom .5s ease-in-out forwards" },
    },
  },
  plugins: [],
} satisfies Config;

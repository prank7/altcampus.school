// tailwind.config.js
module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "769px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        display: ["Gilroy", "sans-serif"],
        body: ["Graphik", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        source: ["Source Sans Pro", "sans-serif"],
        mukta: ["Mukta", "sans-serif"],
      },
      colors: {
        "green-theme": {
          50: "#F3FCF6",
          100: "#E8F9EE",
          200: "#C5EFD4",
          300: "#A1E5BA",
          400: "#5BD286",
          500: "#15BE52",
          600: "#13AB4A",
          700: "#0D7231",
          800: "#095625",
          900: "#063919",
        },
        "royal-blue": {
          50: "#F7F8FE",
          100: "#F4F6FF",
          200: "#D9DCF9",
          300: "#C2C7F5",
          400: "#949CED",
          500: "#6672E5",
          600: "#5C67CE",
          700: "#3D4489",
          800: "#2E3367",
          900: "#1F2245",
        },
        "dark-blue": {
          50: "#F7FAFC",
          100: "#E6EBF1",
          200: "#E9EDF4",
          300: "#6b7c93",
          400: "#525f7f",
          500: "#32325D",
          600: "#21396a",
          700: "#1E1E38",
          800: "#17172A",
          900: "#0F0F1C",
        },
        gold: {
          300: "#E9D496",
          500: "#F2BA0F",
          600: "#888806",
          800: "#AD8A56",
        },
      },
      height: {
        27: "6.75rem"
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ]
};

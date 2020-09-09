// tailwind.config.js
module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'green-theme': {
          50: '#F3FCF6',
          100: '#E8F9EE',
          200: '#C5EFD4',
          300: '#A1E5BA',
          400: '#5BD286',
          500: '#15BE52',
          600: '#13AB4A',
          700: '#0D7231',
          800: '#095625',
          900: '#063919',
        },
        'royal-blue': {
          50: '#F7F8FE',
          100: '#F0F1FC',
          200: '#D9DCF9',
          300: '#C2C7F5',
          400: '#949CED',
          500: '#6672E5',
          600: '#5C67CE',
          700: '#3D4489',
          800: '#2E3367',
          900: '#1F2245',
        },
        'dark-blue': {
          50: '#F5F5F7',
          100: '#EBEBEF',
          200: '#CCCCD7',
          300: '#ADADBE',
          400: '#70708E',
          500: '#32325D',
          600: '#2D2D54',
          700: '#1E1E38',
          800: '#17172A',
          900: '#0F0F1C',
        },
      }
    }
  }
  // ...
};

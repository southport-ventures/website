module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      blue: {
        100: '#F2F5F7',
        200: '#E4EBF0',
        400: '#A7BCCC',
        700: '#143B59',
        900: '#012540',
      },
    },
    fontFamily: {
      sans: ['Cairo', 'sans-serif'],
      serif: ['serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

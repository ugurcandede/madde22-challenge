module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {

        primary: '#50B83C',
        primaryText: "#171717",

        button: "#50B83C",
        buttonText: "#F9FAFB",

        secondaryButton: "#171717",
        secondaryButtonText: "#F9FAFB",
      },
      fontSize: {
        s: '0.813rem'
      },
    },
    fontFamily: {
      "body": ["Poppins"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
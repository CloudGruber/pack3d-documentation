module.exports = {
  purge: [],
  darkMode: 'media',

  theme: {
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    typography: {
      default: {
        css: {
          'code::before': {
            content: '""',
          },
          'code::after': {
            content: '""',
          },
        },
      },
    },
    extend: {},
  },
  variants: {
    aspectRatio: ['responsive'],
    extend: {},
  },
  plugins: [
    require("tailwindcss-responsive-embed"),
    require("tailwindcss-aspect-ratio"),
    require(`@tailwindcss/typography`)
  ]
}

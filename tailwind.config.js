module.exports = {
  content: ['./public/**/*.html', './src/**/*.vue'],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

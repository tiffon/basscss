const USE_NANO = Boolean(process.env.UBASSCSS_MIN);
const USE_IMPORTANT = Boolean(process.env.UBASSCSS_IMPORTANT);

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-media': {},
    'postcss-custom-properties': {},
    'postcss-calc': {},
    'postcss-remove-root': {},
    'autoprefixer': {},
    'postcss-reporter': {},
    'postcss-importantly': USE_IMPORTANT,
    'cssnano': USE_NANO,
  },
}

module.exports = {
  use: [
    'postcss-import',
    'postcss-custom-media',
    'postcss-custom-properties',
    'postcss-calc',
    'postcss-remove-root',
    'autoprefixer',
    'postcss-reporter',
  ],
  input: 'src/*.css',
  dir: 'css'
}

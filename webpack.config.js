/*eslint-env node */
const path = require('path')

module.exports = Object.assign({
  entry: './src',
  output: {
    library: 'VueInsertDirective',
    libraryTarget: 'umd',
    filename: 'vue-insert-directive.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    'vue': 'Vue',
  },
}, require('./webpack.base'))

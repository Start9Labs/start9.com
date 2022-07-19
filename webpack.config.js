const path = require('path');

module.exports = {
  entry: '/src/assets/js/main.js',
  output: {
    path: path.resolve(__dirname, '_site/assets/js'),
    filename: 'main.js'
  }
};
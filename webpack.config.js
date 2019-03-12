const path = require('path');

module.exports = {
  entry: './resources/js/index.js',
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'main.js'
  }
};
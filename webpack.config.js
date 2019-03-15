const path = require('path');

module.exports = {
  mode: 'production',
  entry: './resources/js/index.js',
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'main.js'
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
            presets: ['@babel/preset-env']
        }
      }
    ]
  }
};
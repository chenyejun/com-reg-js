var path = require('path');
const packageInfo = require('./package.json');
module.exports = {
  entry: './index.js',
  output: {
    library: 'comRegJs',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'lib'),
    filename: `index.js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}
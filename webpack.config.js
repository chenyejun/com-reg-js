var path = require('path');
const packageInfo = require('./package.json');
module.exports = {
  entry: './index.js', //入口文件
  output: {
    library: 'comRegJs',
    libraryTarget: 'umd',
    libraryExport: 'default', // 增加这个属性
    path: path.resolve(__dirname, 'lib'),
    filename: `com-reg-js@${packageInfo.version}.js`
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
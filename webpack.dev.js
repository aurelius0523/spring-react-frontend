const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = merge(common, {
  mode: 'development',
  //historyApiFallback makes react-router work properly with / resource
  devServer: {
    contentBase: DIST_DIR,
    historyApiFallback: true
  }
});

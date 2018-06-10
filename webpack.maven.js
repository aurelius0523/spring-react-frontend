const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const packageJSON = require('./package.json');
const MAVEN_WEBJAR_PATH = {
  build: path.join(__dirname, 'target', 'classes', 'META-INF', 'resources')
};

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: MAVEN_WEBJAR_PATH.build,
    filename: 'bundle.js'
  }
});

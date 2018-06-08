const path = require('path');
const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');
const NODE_DIR = path.resolve(__dirname, 'node_modules');

//plugins
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

//for maven-frontend-plugin
const MAVEN_NODE_DIR = path.resolve(__dirname, 'node');
const packageJSON = require('./package.json');
const MAVEN_WEBJAR_PATH = {
  build: path.join(__dirname, 'target', 'classes', 'META-INF', 'resources')
};

module.exports = {
  entry: SRC_DIR + '/index.jsx',
  devServer: {
    contentBase: MAVEN_WEBJAR_PATH.build,
    historyApiFallback: true
  },
  module: {
    //loaders to use for different file types
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        exclude: [NODE_DIR, MAVEN_NODE_DIR],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        include: SRC_DIR,
        exclude: [NODE_DIR, MAVEN_NODE_DIR],
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.md$/,
        include: SRC_DIR,
        exclude: [NODE_DIR, MAVEN_NODE_DIR],
        use: {
          loader: 'raw-loader'
        }
      },
      {
        test: /\.svg$/,
        include: SRC_DIR,
        exclude: [NODE_DIR, MAVEN_NODE_DIR],
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
              svgo: {
                plugins: [{ removeTitle: false }],
                floatPrecision: 2
              }
            }
          }
        ]
      }
    ]
  },
  //output folder for bundled stuffs
  output: {
    path: MAVEN_WEBJAR_PATH.build,
    filename: 'bundle.js'
  },

  resolve: {
    //this allows extensions to be omitted when importing
    extensions: ['.js', '.jsx'],
    //this allows aliased path imports. It should be kept in sync with jsconfig.json
    alias: {
      ['@modules']: path.join(__dirname, 'src', 'modules'),
      ['@containers']: path.join(__dirname, 'src', 'containers'),
      ['@resources']: path.join(__dirname, 'src', 'resources'),
      ['@routers']: path.join(__dirname, 'src', 'routers'),
      ['@styles']: path.join(__dirname, 'src', 'styles')
    }
  },
  //takes index.html at root and updates them with new hashed dependencies (bundle.js)
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html',
      filename: './index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};

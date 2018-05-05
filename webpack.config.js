const path = require("path");
const SRC_DIR = path.resolve(__dirname, "src");
const DIST_DIR = path.resolve(__dirname, "dist");
const NODE_DIR = path.resolve(__dirname, "node_modules");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: SRC_DIR + "/index.jsx",
  devServer: {
    contentBase: DIST_DIR
  },
  module: {
    //loaders to use for different file types
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        exclude: NODE_DIR,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    path: DIST_DIR,
    filename: "bundle.js"
  },
  //this allows extensions to be omitted when importing
  resolve: {
    extensions: [".js", ".jsx"]
  },
  //takes index.html at root and updates them with new hashed dependencies
  plugins: [
    new HtmlWebPackPlugin({
      template: "index.html",
      filename: "./index.html"
    })
  ]
};

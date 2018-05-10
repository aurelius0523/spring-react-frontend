const path = require("path");
const SRC_DIR = path.resolve(__dirname, "src");
const DIST_DIR = path.resolve(__dirname, "dist");
const NODE_DIR = path.resolve(__dirname, "node_modules");

//plugins
const HtmlWebPackPlugin = require("html-webpack-plugin");

//for maven-frontend-plugin
const MAVEN_NODE_DIR = path.resolve(__dirname, "node");
const packageJSON = require("./package.json");
const MAVEN_WEBJAR_PATH = {
  build: path.join(__dirname, "target", "classes", "META-INF", "resources")
};

module.exports = {
  entry: SRC_DIR + "/index.jsx",
  devServer: {
    contentBase: MAVEN_WEBJAR_PATH.build
  },
  module: {
    //loaders to use for different file types
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        exclude: [NODE_DIR, MAVEN_NODE_DIR],
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    path: MAVEN_WEBJAR_PATH.build,
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

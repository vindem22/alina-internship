const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  mode: 'development',
  devServer: {
    port: 5050,
    watchFiles: [
        './index.html',
        './styles/*.css',
        './index.js',
    ],
    static: {
      directory: path.join(__dirname, 'images'),
      watch: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ]
};

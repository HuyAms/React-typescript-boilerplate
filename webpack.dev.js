const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    contentBase: '../dist',
    port: 8000,
    open: true,
    overlay: true
  },

  output: {
    filename: "bundle.js",
    chunkFilename: '[name].chunk.js',
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[name].css'
    }),

    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
});
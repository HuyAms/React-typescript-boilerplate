const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: '[name].[chunkhash].chunk.js',
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
      template: "./src/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      }
    })
  ]
})
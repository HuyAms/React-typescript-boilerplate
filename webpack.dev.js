const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'source-map',

  devServer: {
    contentBase: '../dist',
    port: 8000,
    open: true,
    overlay: true
  },

  output: {
    filename: "[name].js",
    chunkFilename: '[name].chunk.js',
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.(?:sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[name].css'
    }),

    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),

    new webpack.HotModuleReplacementPlugin()
  ]
});
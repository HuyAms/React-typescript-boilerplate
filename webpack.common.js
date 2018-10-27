const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, "dist")
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        enforce: "pre", test: /\.js$/, loader: "source-map-loader"
      }
    ]
  },

  plugins: [
      new CleanWebpackPlugin(['dist'], {
        root: path.join(__dirname, '..')
      }),
  ]
}
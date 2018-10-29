const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry:["@babel/polyfill", "./src/index.tsx"],

  output: {
    path: path.resolve(__dirname, "dist")
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.(ts|js)x?$/,
        use: {
          loader: 'tslint-loader',
          options: {
            emitErrors: true,
            failOnHint: true
          }
        },
        exclude: /node_modules/
      },
      {
        enforce: "pre", test: /\.js$/, loader: "source-map-loader"
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader'
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                enabled: false,
                // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                // Try enabling it in your environment by switching the config to:
                // enabled: true,
                // progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          }
        ]
      }
    ]
  },

  plugins: [
      new CleanWebpackPlugin(['dist'], {
        root: path.join(__dirname)
      }),
  ]
}
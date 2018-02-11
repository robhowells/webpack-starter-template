const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: paths.baseSrc + '/js/index.js',
  output: {
    path: paths.baseDist,
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}

module.exports = config;

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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'build-utils/template.html'
    })
  ]
}

module.exports = config;

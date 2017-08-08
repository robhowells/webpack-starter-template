const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
	entry: {
		main: './src/js/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/main.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader?sourceMap', 'sass-loader?sourceMap']
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('css/style.css'),
		new WriteFilePlugin(),
		new CopyWebpackPlugin([
				{
					from: './src/**/*.html',
					to: './',
					flatten: true
				}
			])
	],
	devtool: 'source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 8000,
		open: true
	}
}

module.exports = config;
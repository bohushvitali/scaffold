const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, "./src/");

module.exports = {

	entry: path.join(APP_DIR, 'index.ts'),

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				exclude: /node_modules/
			},
			{
				test: /\.(scss|css)$/,

				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},

	output: {
		chunkFilename: '[name].[chunkhash].js',
		filename: '[name].[chunkhash].js'
	},

	mode: 'development'
};

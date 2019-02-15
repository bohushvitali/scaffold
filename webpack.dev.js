const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './src/index.ts',

	module: {
		rules: [
			{
				include: [path.resolve(__dirname, 'src')],
				loader: 'ts-loader',
				test: /\.tsx?$/,
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

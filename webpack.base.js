const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.ts'),

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.(scss|css)$/,

        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.wasm'],
  },

  plugins: [new webpack.EnvironmentPlugin(['NODE_ENV'])],
}

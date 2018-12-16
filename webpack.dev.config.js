const webpack = require('webpack'),
  path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist',
    filename: 'bundle.js',
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: true,
    port: 3000,
    open: true,
    progress: true,
    inline: true,
  },
  mode: 'development',
}

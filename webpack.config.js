const webpack = require('webpack'),
      path = require('path'),
      CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    entry: path.join(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.join(__dirname, 'public', 'bundle'),
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(['public/bundle'])
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '/'),
        compress: true,
        port: 3000
    },
    watch: true
}
var webpack = require('webpack')
var path = require('path');

/** @type {webpack.Configuration} */
var config = {
    entry: './index.ts',
    module: {
        loaders: [{test: /\.ts$/, loader: 'ts-loader'}],
    },
    resolve: {
        extensions: ['.ts']
    },
    output: {
        filename: '[name].js',
        path: 'output',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: true
        })
    ]
}

module.exports = config;
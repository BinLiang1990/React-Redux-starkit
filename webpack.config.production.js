/**
 * Created by EdenLiang on 2016/3/1.
 */
'use strict';
var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: false,
    debug: false,
    stats: {
        colors: true,
        reasons: false
    },
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'DEBUG': false
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    module: {
        preLoaders: [
            {test: [/\.js$/, /\.jsx$/], loader: "eslint-loader", exclude: /node_modules/}
        ],
        loaders: [
            {test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/}
        ]
    }
};


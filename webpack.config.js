/**
 * Created by EdenLiang on 2016/3/1.
 */
'use strict';
var path = require("path");
var webpack = require("webpack");

module.exports = {
    devtool: "eval",
    entry: {
        app: [
            "webpack-dev-server/client?http://192.168.4.110:3001",
            "webpack/hot/dev-server",
            './src/index.js'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    //resolve: {
    //    extensions: ['', '.js', '.jsx']
    //},
    module: {
        //不知道为什么这里用preLoaders不行，但是改成放在loaders中，先加载eslint可以，迷
        //preLoaders: [
        //    {test: [/\.js$/, /\.jsx$/], loader: "eslint-loader", exclude: /node_modules/}
        //],
        loaders: [
            {test: [/\.js$/, /\.jsx$/], loader: "eslint-loader", exclude: /node_modules/},
            {test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/},
            {test: /\.js?$/, loaders: ['react-hot', 'babel'], include: [path.join(__dirname, 'src')]}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'DEBUG': true
            }
        })
    ]
}
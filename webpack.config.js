/**
 * Created by EdenLiang on 2016/3/1.
 */
var path = require("path");
var webpack = require("webpack");

module.exports = {
    devtool: "eval",
    entry: {
        app: [
            './src/app.js'
        ]
    },
    //entry: [
    //    'webpack-dev-server/client?http://192.168.4.110:3001',
    //    'webpack/hot/only-dev-server',
    //    './src/app.js'
    //],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                //'DEBUG': true,
                NODE_ENV: JSON.stringify("production")
            }
        })
    ],
    module: {
        preLoaders: [
            {test: [/\.js$/, /\.jsx$/], loader: "eslint-loader", exclude: /node_modules/}
        ],
        loaders: [
            {test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/},
            {test: /\.js?$/, loaders: ['react-hot', 'babel'], include: [path.join(__dirname, 'src')]}
        ]
    }
}
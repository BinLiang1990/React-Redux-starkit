/**
 * Created by EdenLiang on 2016/3/1.
 */
var path = require("path");
var webpack = require("webpack");

module.exports = {
    devtool: "eval",
    entry: [
        'webpack-dev-server/client?http://192.168.4.110:3001',
        'webpack/hot/only-dev-server',
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'DEBUG': true
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/},
            {test: /\.js?$/, loaders: ['react-hot', 'babel'], include: [path.join(__dirname, 'src')]}
        ]
    }
}
/**
 * Created by EdenLiang on 2016/3/1.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
config.entry.app.unshift("webpack-dev-server/client?http://192.168.4.110:3001", "webpack/hot/dev-server");

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    filename: "app.js",
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    headers: {"X-Custom-Header": "yes"},
    stats: {colors: true}
}).listen(3001, function (err, result) {
    if (err) console.log(err);
    console.log('Listening at localhost:3001');
});
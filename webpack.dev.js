const path = require('path')
const merge = require('webpack-merge')
const commom = require('./webpack.common')

module.exports = merge(commom, {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9090,
        historyApiFallback:true   // 解决刷新浏览器 404 问
    }
})

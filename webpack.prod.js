const path  = require('path')
const merge = require('webpack-merge')
const commom = require('./webpack.common')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyjsWebpackPlugin  = require('uglifyjs-webpack-plugin')

module.exports=merge(commom,{
    mode:'production',
    output:{
        filename:'[name].[chunkhash:8].js',
        path: path.resolve(__dirname,'dist')
    },
    plugins:[
        new CleanWebpackPlugin(['./dist']),
        new UglifyjsWebpackPlugin()
    ]
})
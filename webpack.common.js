const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        index: './app/index.jsx'
    },

    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: 'babel-loader',
                exclude: [
                    path.resolve(__dirname, './node_modules')
                ]
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?modules&localIdentName=[name]_[local]_[hash:4]'] // 顺序不能错，否则报错
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'static/',
                        name: '[path][hash].[ext]'
                    }
                }]
            }, {
                test: /\.svg$/,
                loader: 'url-loader?name=app/images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html'
        })
    ]
}

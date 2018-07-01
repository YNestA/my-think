/**
 * Created by yang on 18-5-31.
 */

const path = require('path');

module.exports={
    entry:{
        router:'./fe/home/router/index.js',
        home_index:'./fe/home/index/index.js',
        home_edit:'./fe/home/edit/edit.js'
    },
    output:{
        filename:'[name].js',
        path: path.resolve(__dirname, 'www/static/js')
    },
    devServer:{
        contentBase:'./fe'
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                include: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react','stage-3'],
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
}

/**
 * Created by yang on 18-5-31.
 */

const path = require('path');

module.exports={
    entry:{
        router:'./fe/home/router/index.js',
        home_index:'./fe/home/index/index.js'
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
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
}

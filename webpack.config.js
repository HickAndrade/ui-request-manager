'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
    context: __dirname,
    entry: [
        path.join(__dirname,'src','index')
    ],
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        port:8070
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                use:'babel-loader'
            },
            {
                test: /\.(css|scss|sass)$/i,
                use: ["style-loader", "css-loader","sass-loader"],
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader'
            }
        ]},
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'index.html'),
                filename: 'index.html'
            }),
            new Dotenv()
        ]
};
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './Scripts/Start'),
    output: {
        path: path.resolve(__dirname, './Scripts'),
        filename: 'bundle.Server.js',
    },
    devServer: {
        inline: true,
        port: 8080,
        historyApiFallback: {
            index: './index.html'
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
              
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
    ,
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
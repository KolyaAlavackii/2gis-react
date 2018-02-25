const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less?$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', 'less', 'css']
    },
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './build',
        hot: true
    },
    devtool: 'cheap-module-eval-source-map',
};
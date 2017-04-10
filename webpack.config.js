var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: path.join(__dirname, 'src/pages/main/main.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }, {
            test: /\.(png|jpg|gif)$/,
            use: 'url-loader?limit=8192&name=./images/[hash].[ext]'
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new ExtractTextPlugin('css/[name].css?[contenthash]'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/pages/main/index.html'),
            filename: 'index.html',
            inject: true,
            hash: true
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        port: 8080,
        historyApiFallback: true,
        hot: true
    }
}

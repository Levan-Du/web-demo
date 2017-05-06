var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        main: path.join(__dirname, 'src/pages/main/main.js'),
        test: path.join(__dirname, 'src/pages/Carousel/Carousel.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.(png|jpg|gif)$/,
            use: 'url-loader?limit=8192&name=./images/[hash].[ext]'
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: 'css-loader!postcss-loader'
                // })
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        // new webpack.ProvidePlugin({
        //     $: 'n-zepto'
        // }),
        // new ExtractTextPlugin('css/[name].css?[contenthash]'),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendors',
        //     minChunks: 2
        // }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/pages/Carousel/Carousel.html'),
            filename: 'index.html',
            inject: true,
            hash: true,
            chunks: ['test']
        }),
        autoprefixer
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        port: 8080
    }
}

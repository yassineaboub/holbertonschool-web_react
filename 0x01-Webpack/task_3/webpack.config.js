const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, disable: true,
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        contentBase: './public',
        compress: true,
        port: 8564,
    },
    devtool: 'inline-source-map',
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: { test: /[\\/]node_modules[\\/]/, name: "common", chunks: "all" }
            }
        },
    },
};

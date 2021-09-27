const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    // plugins: [
    //     // new HtmlWebpackPlugin({
    //     //     title: 'Webpack Output',
    //     // }),
    //     // new CleanWebpackPlugin()
    // ],
    entry: {
        main: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true
    },
    module: {
        rules: [
          { 
            test: /\.css$/, 
            use: ["style-loader", "css-loader"] 
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true, // webpack@1.x
                  disable: true, // webpack@2.x and newer
                },
              },
            ]
          },
          {
            test: /.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              // options: {
              //   presets: ['@babel/preset-env']
              // }
            }
          },
        ]
    },
    devtool: "inline-source-map",
};

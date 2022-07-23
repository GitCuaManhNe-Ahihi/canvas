const path = require('path')
const MinicssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    devtool:'source-map',
    context: path.resolve(__dirname,'src'),
    entry:['./style/index.scss','./index.ts'],
    devServer: {
        port:8000,
        open: {
          target: ['index.html', 'http://localhost:8080/index.html'],
        },
      },
    module:{
        rules:[
            {
            test: /\.s[ac]ss$/i,
            exclude: /node_modules/,
            use:[
                MinicssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                {
                    loader: "sass-loader",
                    options: {
                      // Prefer `dart-sass`
                      implementation: require("sass"),
                    },
                }
            ]
            },
            {
            test: /\.ts$/i,
            use: 'ts-loader',
            exclude: /node_modules/,
            },
            
            ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
    plugins: [
        new MinicssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: '../index.html'
          })
    ]
}

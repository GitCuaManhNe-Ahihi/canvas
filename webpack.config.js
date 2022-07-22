const path = require('path')
const MinicssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: 'development',
    devtool:'source-map',
    context: path.resolve(__dirname,'src'),
    entry:['./style/index.scss','./index.ts'],
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
            }
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
        })
    ]
}

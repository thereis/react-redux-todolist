const webpack           = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry    : './src/index.jsx',
    output   : {
        path    : __dirname + './public',
        filename: './app.js'
    },
    devServer: {
        port       : 8080,
        contentBase: './public'
    },
    resolve  : {
        extensions: ['.js', '.jsx'],
        alias     : {
            modules: __dirname + '/node_modules'
        }
    },
    plugins  : [
        new ExtractTextPlugin('app.css')
    ],
    module   : {
        rules: [
            {
                test: /\.css$/,
                use : ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use     : 'css-loader'
                })// loaders: ['style-loader', 'css-loader']
            },
            {
                test  : /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                loader: 'file-loader'
            },
            {
                test   : /.js[x]?$/,
                loader : 'babel-loader',
                exclude: /node_modules/,
                query  : {
                    presets: ['es2015', 'react'],
                    plugins: ['babel-plugin-transform-object-rest-spread']
                }
            }
        ]
    }
}
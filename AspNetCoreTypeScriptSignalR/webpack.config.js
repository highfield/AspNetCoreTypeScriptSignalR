"use strict";

const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");


module.exports = {
    mode: 'development',
    target: 'web',
    entry: {
        'bundle.js': './Scripts/app.ts'
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        filename: '[name]'
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|jsx)?$/,
                use: 'ts-loader',
                include: [
                    path.resolve(__dirname, 'Scripts'),
                ],
                exclude: [
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['wwwroot/dist/*'])
    ]
};

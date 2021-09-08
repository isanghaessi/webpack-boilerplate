import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = path.resolve();

export default {
    entry: {index: `./source/index.js`},
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    target: ['web', 'es5'],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/env',
                                {
                                    useBuiltIns: 'usage',
                                    targets: '> 0.25%, not dead',
                                    corejs: 3,
                                },
                            ],
                        ],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    devServer: {
        port: 5000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './source/index.html',
        }),
    ],
    devtool: 'source-map',
};

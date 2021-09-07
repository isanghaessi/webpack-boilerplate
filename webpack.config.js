import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = path.resolve();

export default {
    entry: {index: `./source/index.js`},
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: '[name].bundle.js',
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
                        plugins: [
                            [
                                '@babel/plugin-transform-runtime',
                                {
                                    corejs: 3,
                                },
                            ],
                        ],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './source/index.html',
        }),
    ],
    devtool: 'source-map',
};

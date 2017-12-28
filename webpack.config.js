const webpack = require('webpack');
const path = require('path');

const TSLintPlugin = require('tslint-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const plugins = [
    new CleanWebpackPlugin('dist'),
    new webpack.HotModuleReplacementPlugin(),
    new TSLintPlugin({
        files: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.d.ts'],
        project: './tsconfig.json'
    }),
]

module.exports = {
    entry: `${__dirname}/src/index.tsx`,
    plugins,
    devtool: 'eval',
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
                test: /\.tsx?$/, 
                loader: ['awesome-typescript-loader'],
            },
            { 
                test: /\.json?$/,
                loader: ['json-loader'],
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { 
                enforce: 'pre', test: /\.js$/, 
                loader: ['source-map-loader'],
            },
        ]
    },

    plugins,

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist'),
	publicPath: '/static/',
    },
};

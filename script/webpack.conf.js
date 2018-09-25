const webpack = require('webpack')
const path = require('path')

const pkg = require('../package.json')

const rootPath = path.resolve(__dirname, '../')

const config = {
    mode: 'production',
    entry: path.resolve(rootPath, 'src', 'index.ts'),
    output: {
        filename: `${pkg.name}.min.js`,
        path: path.resolve(rootPath, 'min'),
        library: `${pkg.name}`,
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.(js|ts)$/,
            use: ["babel-loader", "ts-loader"]
        }]
    },
    resolve: {
    	extensions: ['.ts', '.tsx', '.js', '.json'],
    },
}

module.exports = config
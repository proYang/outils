const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')

const config = require('./webpack.conf')
const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

let spinner = ora('building...')
spinner.start()

rm(path.resolve(rootPath, 'min', `${pkg.name}.min.js`), err => {
    if (err) throw err
    webpack(config, function (err, stats) {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')
        console.log(chalk.cyan('  Build complete.\n'))
    })
})
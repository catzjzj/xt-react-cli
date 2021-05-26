const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const path = require('path')

/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */
const devServer = {
  port: 3000,
  host: 'localhost',
  contentBase: path.join(__dirname, '../publich'),
  watchContentBase: true,
  publicPath: '/',
  compress: true,
  historyApiFallback: true,
  hot: true,
  clientLogLevel: 'error',
  // open: true,
  watchOptions: {
    ignored: /node_modules/,
  },
}

const devConfig = {
  mode: 'development',
  devServer: devServer,
}

module.exports = webpackMerge.merge(baseConfig, devConfig)

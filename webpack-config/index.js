const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { VueLoaderPlugin } = require('vue-loader')
const CopyPlugin = require('copy-webpack-plugin')
const mergeConfigPc = require('./pc.js')
const mergeConfigMobile = require('./mobile.js')

const NODE_ENV = process.env.NODE_ENV

const config = {
  mode: NODE_ENV,
  entry: null,
  output: {
    path: null,
    filename: `bundle${NODE_ENV === 'development' ? '.[contenthash]' : ''}.js`,
    hashDigestLength: 6,
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
        generator: {
          publicPath: './img/',
          outputPath: './img'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: '之乎者也',
      filename: 'index.html',
      inject: 'body',
      hash: false
    }),
    new MiniCssExtractPlugin({
      filename: `[name]${NODE_ENV === 'development' ? '' : '.[contenthash]'}.css`,
      chunkFilename: `[id]${NODE_ENV === 'development' ? '' : '.[contenthash]'}.css`
    }),
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, '../public/img'), to: './img' }
      ]
    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../public/index.html'),
    },
    compress: false,
    port: 9000,
    open: false
  },
  devtool: NODE_ENV === 'development' ? 'cheap-module-source-map' : 'eval',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  }
}

if (process.env.terminal === 'pc') mergeConfigPc(config)
else mergeConfigMobile(config)

module.exports = config
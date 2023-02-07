const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const mergeConfig = (config) => {
  config.entry = path.resolve(__dirname, '../src/main-mobile.js')
  config.output.path = path.resolve(__dirname, '../build-mobile')
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    exclude: /(node_modules|bower_components)/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'px2rem-loader',
        options: {
          remUnit: 1
        }
      },
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: path.resolve(__dirname, '../src/scss/variable.scss')
        }
      }
    ]
  })
  config.module.rules.push({
    test: /\.css$/i,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'px2rem-loader',
        options: {
          remUnit: 1
        }
      }
    ]
  })
}

module.exports = mergeConfig
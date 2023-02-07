const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const mergeConfig = (config) => {
  config.entry = path.resolve(__dirname, '../src/main-pc.js')
  config.output.path = path.resolve(__dirname, '../build-pc')
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    exclude: /(node_modules|bower_components)/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
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
      'css-loader'
    ]
  })
}

module.exports = mergeConfig
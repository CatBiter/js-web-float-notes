const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')   // 处理css
const HtmlWebpackPlugin = require('html-webpack-plugin')          // 将html跟js关联

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'release'),
    filename: "bundle.js",
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }, {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }, {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'assets/icon',
            name: '[name].[ext]',
            publicPath: '../assets/icon'
          }
        }]
      }

    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}
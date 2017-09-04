var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'cheap-eval-source-map',
  noInfo: true,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './main.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      test: /\.html$/,
      loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
    }]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './',
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080",
        cookieDomainRewrite: "127.0.0.1",
        hostRewrite: "127.0.0.1:3000"
      }
    },
    port: 3000,
  },
}
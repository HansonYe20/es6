const webpack = require('webpack');

module.exports = {
  mode: 'development',
  plugins: [
    // webpack 自带的热更新插件
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist', // webpack服务的基础目录
    hot: true,
  }
}
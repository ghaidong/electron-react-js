const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  mode: 'development',
  entry: {
    //   对应渲染进程的 App.jsx 入口文件
    index: path.resolve(__dirname, '../app/render/App.jsx'),
  },
  output: {
    filename: '[name].[hash].js',//生成不同文件的hash文件,避免文件名冲突
    path: path.resolve(__dirname, '../dist'),
  },
  target: 'web',
  devtool: 'inline-source-map',
  devServer: {
    static:{
      directory: path.join(__dirname, '../dist')
    },
    // contentBase: path.join(__dirname, '../dist'),
    compress: true,
    host: '127.0.0.1', // webpack-dev-server启动时要指定ip，不能直接通过localhost启动，不指定会报错
    port: 7001, // 启动端口为 7001 的服务
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      //   以此文件为模版，自动生成 Html
      template: path.resolve(__dirname, '../app/render/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
      chunks: ['index']
    }),
  ],
};
module.exports = webpackMerge.merge(baseConfig, devConfig);
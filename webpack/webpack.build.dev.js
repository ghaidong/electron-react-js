const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin  = require('clean-webpack-plugin');

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
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin.CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      //   以此文件为模版，自动生成 Html
      title: 'my HHHH',
      template: path.resolve(__dirname, '../app/render/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
      chunks: ['index']
    }),
  ],
};
module.exports = webpackMerge.merge(baseConfig, devConfig);
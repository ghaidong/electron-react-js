const path = require('path');
const baseConfig = require('./webpack.base.js');
const webpackMerge = require('webpack-merge');

const mainConfig = {
  entry: path.resolve(__dirname, '../app/main/main.js'),
  target: 'electron-main',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
    //主进程js打包出口路径以及文件名
  },
  devtool: 'inline-source-map',
  mode: 'development',
};

module.exports = webpackMerge.merge(baseConfig, mainConfig);
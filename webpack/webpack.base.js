const path = require('path');
const overridesConfig = require('./config-overrides')

//所有的基础配置项
module.exports = {
  resolve: {
    extensions: [
      '.js', '.jsx', '.ts', '.tsx',
      '.less'
    ],
    alias: {
      '@src': path.join(__dirname, '../', 'app/render'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'less-loader', // compiles Less to CSS
          options: {
            lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
              modifyVars: overridesConfig,
              javascriptEnabled: true,
            },
          },
        }]
      }
    ]
  }
};
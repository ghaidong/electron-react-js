const path = require('path');

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
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  }
};
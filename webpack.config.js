const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const config = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'Output Managment'
    }),
    new CleanWebpackPlugin(['dist'])
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

module.exports = config;

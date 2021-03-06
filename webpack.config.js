var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    polyfills:'./src/polyfills.js',
    index:'./src/index.js'
  }
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
     rules: [
       {
         test: require.resolve('index.js'),
         use: 'imports-loader?this=>window'
       },
       {
         test: require.resolve('globals.js'),
         use: 'exports-loader?file,parse=helpers.parse'
       }
     ]
   },
  plugins:[
    new webpack.ProvidePlugin({
      joni:['lodash','join']
    })
  ]
};

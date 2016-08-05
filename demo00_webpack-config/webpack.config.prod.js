var webpack = require('webpack');
var config = require('./webpack.config.base');
var merge = require('webpack-merge');

var config_dev = merge(config, {
  output:{
    filename : 'js/[name].[chunkhash:8].js',
    publicPath : ''
  },
  plugins:[
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      },
      __DEBUG__: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
});

module.exports = config_dev;

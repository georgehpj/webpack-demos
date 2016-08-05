var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.base');
var merge = require('webpack-merge');

var config_dev = merge(config, {
  devtool:'source-map',
  devServer:{
    port: 3000,
    hot: true,
    inline: true
  },
  plugin:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      },
      __DEBUG__: true
    })
  ]
});

module.exports = config_dev;
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.[hash].js'
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Webpack-demos',
      filename: './view/index.html'
    }),
    new HtmlwebpackPlugin({
      template: './template/index.html',
      filename: './view/index2.html',
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080/view'
    })
  ]
};

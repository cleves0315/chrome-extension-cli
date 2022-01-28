process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

const Webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

Webpack(webpackConfig, function (err) {
  if (err) throw err;
});

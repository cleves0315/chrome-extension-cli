process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config.js');

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };

webpackConfig.plugins = [new Webpack.HotModuleReplacementPlugin()].concat(
  webpackConfig.plugins || []
);

const server = new WebpackDevServer(devServerOptions, compiler);
const runServer = async () => {
  console.log('Starting server...');
  await server.start();
};

module.exports = {
  runServer,
};

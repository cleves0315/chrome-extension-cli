process.env.PORT = '3000';
process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config.js');

const compiler = Webpack({
  ...webpackConfig,
  devtool: 'cheap-module-source-map',
});

const devServerOptions = {
  https: false,
  hot: false,
  client: false,
  host: 'localhost',
  port: process.env.PORT,
  static: {
    directory: path.join(__dirname, '../dist'),
  },
  devMiddleware: {
    publicPath: `http://localhost:${process.env.PORT}/`,
    writeToDisk: true,
  },
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  allowedHosts: 'all',
  open: true,
};

// webpackConfig.plugins = [new Webpack.HotModuleReplacementPlugin()].concat(
//   webpackConfig.plugins || []
// );

const server = new WebpackDevServer(devServerOptions, compiler);
const runServer = async () => {
  console.log('Starting server...');
  await server.start();
};

runServer();

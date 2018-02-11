const commonConfig = require('./build-utils/webpack.common.js');
const webpackMerge = require('webpack-merge');

const config = (env) => {
  const envConfig = require(`./build-utils/webpack.${env.NODE_ENV}.js`);
  return webpackMerge(commonConfig, envConfig);
}

module.exports = config;

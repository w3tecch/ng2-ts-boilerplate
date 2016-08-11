/**
 * Webpack config for builds
 */
module.exports = require('./webpack.make')({
  CORDOVA: false,
  BUILD: false,
  TEST: true,
  PUBLICPATH: '/'
});

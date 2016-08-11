/**
 * Webpack config for builds
 */
module.exports = require('./webpack.make')({
  CORDOVA: true,
  BUILD: false,
  TEST: false,
  PUBLICPATH: false,
  TARGET: 'www'
});

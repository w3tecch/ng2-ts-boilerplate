"use strict";

/**
 * Webpack Plugins
 */
const webpack = require('webpack');
const path = require('path');

function root(__path) {
  return path.join(__dirname, __path);
}

/**
 * Banner config
 */
const configAngularFix = function () {
  return {
		plugins: [
      new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        root('./src') // location of your src
      )
    ]
	};
};
module.exports = configAngularFix;

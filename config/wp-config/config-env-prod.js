const get = require('@easy-webpack/core').get;
const webpack = require('webpack');

/**
 * @param exclude add paths to packages that have problems with their sourcemaps
 */
module.exports = function production({devtool = 'source-map', dedupe = true} = {}) {
  const WebpackMd5Hash = require('webpack-md5-hash');

  return function production() {
    const config = {
      debug: false,
      devtool,
      /**
       * Options affecting the output of the compilation.
       *
       * See: http://webpack.github.io/docs/configuration.html#output
       */
      output: {
        /**
         * Specifies the name of each output file on disk.
         * IMPORTANT: You must not specify an absolute path here!
         *
         * See: http://webpack.github.io/docs/configuration.html#output-filename
         */
        filename: '[name].[chunkhash].bundle.js',

        /**
         * The filename of the SourceMaps for the JavaScript files.
         * They are inside the output.path directory.
         *
         * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
         */
        sourceMapFilename: '[name].[chunkhash].bundle.map',

        /**
         * The filename of non-entry chunks as relative path
         * inside the output.path directory.
         *
         * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
         */
        chunkFilename: '[id].[chunkhash].chunk.js'
      },

      /**
       * Webpack Development Server configuration
       * Description: The webpack-dev-server is a little node.js Express server.
       * The server emits information about the compilation state to the client,
       * which reacts to those events.
       *
       * See: https://webpack.github.io/docs/webpack-dev-server.html
       */
      devServer: {
        port: this.metadata.port,
        host: this.metadata.host,
        historyApiFallback: true,
        watchOptions: {
          aggregateTimeout: 300,
          poll: 1000
        },
        outputPath: this.output.path
      },

      plugins: [
        /**
         * Plugin: WebpackMd5Hash
         * Description: Plugin to replace a standard webpack chunkhash with md5.
         *
         * See: https://www.npmjs.com/package/webpack-md5-hash
         */
        new WebpackMd5Hash(),

        /**
         * Plugin: LoaderOptionsPlugin
         * Description: Plugin to set loaders intro minimize mode
         */
        new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false
        }),

        /**
         * Plugin: DedupePlugin
         * Description: Prevents the inclusion of duplicate code into your bundle
         * and instead applies a copy of the function at runtime.
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
         * See: https://github.com/webpack/docs/wiki/optimization#deduplication
         */
        // new webpack.optimize.DedupePlugin(),

        new webpack.DefinePlugin({
          '__DEV__': false,
          'ENV': JSON.stringify(this.metadata.ENV),
          'HMR': this.metadata.HMR,
          'process.env': {
            'ENV': JSON.stringify(this.metadata.ENV),
            'NODE_ENV': JSON.stringify(this.metadata.ENV),
            'HMR': this.metadata.HMR,
          }
        })
      ].concat(get(this, 'plugins', [])),

      /**
       * Html loader advanced options
       *
       * See: https://github.com/webpack/html-loader#advanced-options
       */
      htmlLoader: {
        minimize: true,
        removeAttributeQuotes: false,
        caseSensitive: true,
        // customAttrSurround: [
        //   [/#/, /(?:)/],
        //   [/\*/, /(?:)/],
        //   [/\[?\(?/, /(?:)/]
        // ],
        // customAttrAssign: [/\)?\]?=/]
      }
    }

    if (dedupe) {
      /**
       * Plugin: DedupePlugin
       * Description: Prevents the inclusion of duplicate code into your bundle
       * and instead applies a copy of the function at runtime.
       *
       * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
       * See: https://github.com/webpack/docs/wiki/optimization#deduplication
       */
      config.plugins.push(new webpack.optimize.DedupePlugin());
    }

    return config
  }
}
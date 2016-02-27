var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var helpers = require(process.cwd() + '/webpack.helpers.js');

module.exports = {
  entry: {
    'app': './src/boot.ts',
    'vendor': './src/vendor.ts'
  },

  output: {
    path: "./dist",
    filename: "bundle.js"
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  debug: true,
  devtool: 'source-map',

  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src'
  },

  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint'
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      // HTML LOADER
      // Reference: https://github.com/webpack/raw-loader
      // Allow loading html through js
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      // SASS LOADER
      // Reference: https://github.com/jtangelder/sass-loader
      // Allows compiling sass into css
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass')
      },
      // ASSET LOADER
      // Reference: https://github.com/webpack/file-loader
      // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
      // Rename the file using the asset hash
      // Pass along the updated reference to your code
      // You can add here any file extension you want to get copied to your output
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        loader: 'file'
      }
    ],
    noParse: [path.join(__dirname, 'node_modules', 'angular2', 'bundles')]
  },

  devServer: {
    port: helpers.getMetadata().port,
    host: helpers.getMetadata().host,
    // contentBase: 'src/',
    historyApiFallback: true,
    watchOptions: {aggregateTimeout: 300, poll: 1000}
  }
};

var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var path = require('path');
var helpers = require('./helpers');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BuildConfigPlugin = require('./build-config');
//var CopyWebpackPlugin = require('copy-webpack-plugin');

var ENV = process.env.ENV = process.env.NODE_ENV = 'development';

var metadata = {
  title: helpers.getPkg().name,
  baseUrl: '/',
  host: 'localhost',
  port: 3000,
  ENV: ENV
};
/*
 * Config
 */
module.exports = helpers.validate({
  // static data for index.html
  metadata: metadata,
  // for faster builds use 'eval'
  devtool: 'source-map',
  debug: true,

  // our angular app
  entry: {
    app: './src/boot.ts',
    vendor: './src/vendor.ts'
  },

  // Config for our build files
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map'
  },

  resolve: {
    extensions: ['', '.ts', '.js', '.json', '.css', '.html']
  },

  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint'
      }
    ],
    loaders: [
      // Support for .ts files.
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        query: {
          'ignoreDiagnostics': [
            2403, // 2403 -> Subsequent variable declarations
            2300, // 2300 Duplicate identifier
            2374, // 2374 -> Duplicate number index signature
            2375  // 2375 -> Duplicate string index signature
          ]
        },
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      //Support for *.json files.
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      // Allows compiling sass into css
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
        //loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass')
      },
      //
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        loader: 'url-loader?limit=100000'
      },
      // Support for CSS as raw text
      {
        test: /\.css$/,
        loader: 'raw-loader'
      },
      // support for .html as raw text
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
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

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    //new CopyWebpackPlugin([
    //  {from: './src/assets/configs/dev.json', to: 'config.json'}
    //]),
    new BuildConfigPlugin({
      env: helpers.getEnv(),
      from: './src/assets/configs/[env].json',
      to: './src/config.json'
    })
  ],

  postcss: [
    autoprefixer({
      browsers: ['last 2 version']
    })
  ],

  // Other module loader config
  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src'
  },

  // our Webpack Development Server config
  devServer: {
    port: metadata.port,
    host: metadata.host,
    historyApiFallback: true,
    watchOptions: {aggregateTimeout: 300, poll: 1000}
  },
  // we need this due to problems with es6-shim
  node: {global: 'window', progress: false, crypto: 'empty', module: false, clearImmediate: false, setImmediate: false}
});

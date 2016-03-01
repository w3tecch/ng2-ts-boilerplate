var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var path = require('path');
var helpers = require('./helpers');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BuildConfigPlugin = require('./build-config');

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
    extensions: ['', '.ts', '.js']
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
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass')
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
      }

    ],
    noParse: [path.join(__dirname, 'node_modules', 'angular2', 'bundles')]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new BuildConfigPlugin({
      env: helpers.getEnv(),
      from: './src/assets/configs/[env].json',
      to: './src/config.json'
    }),
    new webpack.BannerPlugin(helpers.getBanner()),
    // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
    // Only emit files when there are no errors
    new webpack.NoErrorsPlugin(),

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
    // Dedupe modules in the output
    new webpack.optimize.DedupePlugin(),

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    // Minify all javascript, switch loaders to minimizing mode
    new webpack.optimize.UglifyJsPlugin()
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

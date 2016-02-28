var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var path = require('path');
var helpers = require('./helpers');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var appConfig = require(process.cwd() + '/app.config.js')(helpers.getEnv(), helpers.getPkg());

var ENV = process.env.ENV = process.env.NODE_ENV = 'development';

var metadata = {
  title: 'Angular2 Webpack Starter by @gdi2990 from @AngularClass',
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
  // cache: false,

  // our angular app
  entry: {
    app: './src/boot.ts',
    vendor: './src/vendor.ts'
  },

  // Config for our build files
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
    //    path: './dist',
    //  filename: 'bundle.js'
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
      {test: /\.ts$/, loader: 'ts-loader', exclude: [/\.(spec|e2e)\.ts$/]},

      // Support for *.json files.
      {test: /\.json$/, loader: 'json-loader'},

      // Allows compiling sass into css
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass')
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        loader: 'file'
      },

      // Support for CSS as raw text
      {test: /\.css$/, loader: 'raw-loader'},

      // support for .html as raw text
      {test: /\.html$/, loader: 'raw-loader', exclude: [helpers.root('src/index.html')]}

    ],
    noParse: [path.join(__dirname, 'node_modules', 'angular2', 'bundles')]
  },

  plugins: [
    new webpack.DefinePlugin(appConfig),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    // generating html
    new HtmlWebpackPlugin({template: 'src/index.html', inject: 'body'}),
    // replace
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(metadata.ENV),
        'NODE_ENV': JSON.stringify(metadata.ENV)
      }
    }),
    new ExtractTextPlugin(
      '[name].[hash].css', {
        disable: true
      }
    )
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
    // contentBase: 'src/',
    historyApiFallback: true,
    watchOptions: {aggregateTimeout: 300, poll: 1000}
  },
  // we need this due to problems with es6-shim
  node: {global: 'window', progress: false, crypto: 'empty', module: false, clearImmediate: false, setImmediate: false}
});

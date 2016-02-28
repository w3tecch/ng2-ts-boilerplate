var path = require('path');
var zlib = require('zlib');
var yargs = require('yargs').argv;
var validateWebpackConfig = require('webpack-validator');

// Helper functions

exports.validateWebpackConfig = validateWebpackConfig;
exports.validate = validateWebpackConfig;

function gzipMaxLevel(buffer, callback) {
  return zlib['gzip'](buffer, {level: 9}, callback)
}
exports.gzipMaxLevel = gzipMaxLevel;

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
exports.root = root;

function rootNode(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return root.apply(path, ['node_modules'].concat(args));
}
exports.rootNode = rootNode;

function prependExt(extensions, args) {
  args = args || [];
  if (!Array.isArray(args)) { args = [args] }
  return extensions.reduce(function(memo, val) {
    return memo.concat(val, args.map(function(prefix) {
      return prefix + val
    }));
  }, ['']);
}
exports.prependExt = prependExt;
exports.prepend = prependExt;

function getEnv() {
  return process.env.ENV = process.env.NODE_ENV = yargs.env || 'dev';
}
exports.getEnv = getEnv;

function getPkg() {
  return require(path.join(process.cwd(), 'package.json'));
}
exports.getPkg = getPkg;

function getMetadata() {
  return {
    title: this.get,
    baseUrl: '/',
    host: 'localhost',
    port: 3000,
    ENV: this.getEnv()
  };
}
exports.getMetadata = getMetadata;

function getBanner() {
  return '/**\n' +
    ' * @name           ' + getPkg().name + '\n' +
    ' * @description    ' + getPkg().description + '\n\n' +
    ' * @version        ' + getPkg().version + '\n' +
    ' * @author         ' + getPkg().author + '\n' +
    ' * @license        ' + getPkg().license + '\n' +
    ' */\n';
}
exports.getBanner = getBanner;

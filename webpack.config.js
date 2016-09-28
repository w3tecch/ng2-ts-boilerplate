"use strict";

/**
 * To learn more about how to use Easy Webpack
 * Take a look at the README here: https://github.com/easy-webpack/core
 **/
const webpack = require('webpack');
const easyWebpack = require('@easy-webpack/core');
const generateConfig = easyWebpack.default;
const get = easyWebpack.get;
const path = require('path');
const ENV = process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() || 'development';
const pkg = require(path.join(process.cwd(), 'package.json'));

/**
 * Other libraries
 */
const autoprefixer = require('autoprefixer');

// basic configuration:
const title = pkg.title;
const baseUrl = '/';
const rootDir = path.resolve();
const srcDir = path.resolve('src/app');
const outDir = path.resolve('dist');
let config;

const baseConfig = {
  entry: {
    vendor: './src/vendor.ts',
    app: './src/boot.ts'
  },
  output: {
    path: outDir,
  }
};

/**
 * Metadata
 */
const metadata = {
  title: pkg.title,
  description: pkg.description,
  version: pkg.version,
  author: pkg.author,
  baseUrl: baseUrl,
  root: rootDir
};

// advanced configuration:
switch (ENV) {
  case 'production':
    let banner = {
      title: pkg.title,
      description: pkg.description,
      version: pkg.version,
      author: pkg.author,
      license: pkg.license
    }

    config = generateConfig(
      baseConfig,

      require('@easy-webpack/config-env-production')
        ({ compress: true }),

      require('@easy-webpack/config-typescript')(),
      require('@easy-webpack/config-html')(),

      require('@easy-webpack/config-sass')
        ({ allChunks: true, sourceMap: false }),

      require('./config/wp-config/config-environment.js')
        ({ env: ENV, name: pkg.name, version: pkg.version }),

      require('./config/wp-config/config-angular-fix.js')(),

      require('./config/wp-config/config-notifier.js')
        (metadata.title, { contentImage: path.resolve('src/assets/images/favicon.png') }),

      require('./config/wp-config/config-globals.js')(),
      require('@easy-webpack/config-fonts-and-images')(),
      require('@easy-webpack/config-global-bluebird')(),
      require('@easy-webpack/config-global-jquery')(),
      require('@easy-webpack/config-global-regenerator')(),
      require('@easy-webpack/config-generate-index-html')
        ({
          minify: true, overrideOptions: Object.assign({
            template: './src/index.ejs'
          }, metadata)
        }),
      require('@easy-webpack/config-json')(),

      require('@easy-webpack/config-common-chunks-simple')
        ({ appChunkName: 'boot', firstChunk: 'vendor' }),

      require('./config/wp-config/config-favicon.js')
        (metadata.title,  path.resolve('src/assets/images/favicon.png')),

      /*require('@easy-webpack/config-uglify')
        ({ debug: false }), Can be enabled when https://github.com/easy-webpack/config-uglify/pull/4 is merged*/

      require('./config/wp-config/config-banner')(banner)
    );
    break;

  case 'test':
    config = generateConfig(
      baseConfig,

      require('@easy-webpack/config-env-development')
        ({ devtool: 'inline-source-map' }),

      require('@easy-webpack/config-typescript')
        ({ options: { doTypeCheck: false, compilerOptions: { sourceMap: false, inlineSourceMap: true } } }),

      require('@easy-webpack/config-html')(),
      require('@easy-webpack/config-json')(),

      require('@easy-webpack/config-sass')
        ({ allChunks: true, sourceMap: false }),

      require('./config/wp-config/config-environment.js')
        ({ env: ENV, name: pkg.name, version: pkg.version }),

      require('./config/wp-config/config-angular-fix.js')(),

      require('./config/wp-config/config-notifier.js')
        (metadata.title, { contentImage: path.resolve('src/assets/images/favicon.png') }),

      require('@easy-webpack/config-fonts-and-images')(),
      require('@easy-webpack/config-global-bluebird')(),
      require('@easy-webpack/config-global-jquery')(),
      require('@easy-webpack/config-global-regenerator')(),
      require('@easy-webpack/config-generate-index-html')
        ({
          minify: true, overrideOptions: Object.assign({
            template: './src/index.ejs'
          }, metadata)
        }),

      require('./config/wp-config/config-favicon.js')
        (metadata.title,  path.resolve('src/assets/images/favicon.png'))//,

      //require('@easy-webpack/config-test-coverage-istanbul')() // doesn't work currently with webpack 2'
    );
    break;

  default:
  case 'development':
    process.env.NODE_ENV = 'development';
    config = generateConfig(
      baseConfig,

      require('@easy-webpack/config-env-development')(),

      require('@easy-webpack/config-tslint')(),
      require('@easy-webpack/config-typescript')
        ({ exclude: [/\.(spec|e2e|async)\.ts$/] }),

      require('@easy-webpack/config-html')(),
      require('@easy-webpack/config-json')(),

      require('@easy-webpack/config-sass')
        ({ allChunks: true, sourceMap: false }),

      require('./config/wp-config/config-environment.js')
        ({ env: ENV, name: pkg.name, version: pkg.version }),

      require('./config/wp-config/config-angular-fix.js')(),

      require('./config/wp-config/config-notifier.js')
        (metadata.title, { contentImage: path.resolve('src/assets/images/favicon.png') }),

      require('./config/wp-config/config-globals.js')(),
      require('@easy-webpack/config-fonts-and-images')(),
      require('@easy-webpack/config-global-bluebird')(),
      require('@easy-webpack/config-global-jquery')(),
      require('@easy-webpack/config-global-regenerator')(),
      require('@easy-webpack/config-generate-index-html')
        ({
          minify: false, overrideOptions: Object.assign({
            template: './src/index.ejs'
          }, metadata)
        }),

      require('./config/wp-config/config-favicon.js')
        (metadata.title,  path.resolve('src/assets/images/favicon.png')),

      require('@easy-webpack/config-common-chunks-simple')
        ({ appChunkName: 'boot', firstChunk: 'vendor' }),

      require('./config/wp-config/config-node.js')()
    );
    break;
}

module.exports = config;

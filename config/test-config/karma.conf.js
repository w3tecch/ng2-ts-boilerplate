// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig (config) {
  config.set({

    // base path that will be used to resolve all patterns (e.g. files, exclude)
    basePath: __dirname,

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      // Reference: https://github.com/karma-runner/karma-jasmine
      // Set framework to jasmine
      'jasmine'
    ],

    // list of files to exclude
    exclude: [ ],

    /*
     * test results reporter to use
     *
     * possible values: 'dots', 'progress'
     * available reporters: https://npmjs.org/browse/keyword/karma-reporter
     */
    reporters: [ 'mocha', 'coverage' ], //, 'karma-remap-istanbul' ],

    // list of files / patterns to load in the browser
    // we are building the test environment in ./spec-bundle.js
    files: [ { pattern: 'spec-bundle.js', watched: false } ],

    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      // Convert files with webpack and load sourcemaps
      'spec-bundle.js': ['coverage', 'webpack', 'sourcemap']
    },

    browsers: [
      // Run tests using PhantomJS
      'PhantomJS',
      //'Chrome'
    ],

    autoWatch: true,
    singleRun: true,

    // Configure code coverage reporter
    coverageReporter: {
      reporters: [{
        type: 'json',
        subdir: '.',
        file: 'coverage-final.json'
      }]
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    /*
     * level of logging
     * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
     */
    logLevel: config.LOG_INFO,

    /**
     * Load webpack config
     */
    webpack: require('../../webpack.config'),

    // Webpack please don't spam the console when running in karma!
    webpackServer: { noInfo: true }

  });
};

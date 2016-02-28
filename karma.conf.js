module.exports = function(config) {
  var testWebpackConfig = require('./webpack.test.config.js');

  config.set({

    // base path that will be used to resolve all patterns (e.g. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files to exclude
    exclude: [ ],

    // list of files / patterns to load in the browser
    // we are building the test environment in ./spec-bundle.js
    files: [ { pattern: 'spec-bundle.js', watched: false } ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { 'spec-bundle.js': ['coverage', 'webpack', 'sourcemap'] },

    // Webpack Config at ./webpack.test.config.js
    webpack: testWebpackConfig,

    coverageReporter: {
      dir : 'coverage/',
      reporters: [
        { type: 'text-summary' },
        { type: 'json' },
        { type: 'html' }
      ]
    },

    // Webpack please don't spam the console when running in karma!
    webpackServer: { noInfo: true },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [ 'mocha', 'coverage' ],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      // 'Chrome',
      'PhantomJS'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });

};

//module.exports = function (config) {
//  var testWebpackConfig = require('./webpack.test.config.js');
//
//  config.set({
//
//    // base path that will be used to resolve all patterns (e.g. files, exclude)
//    basePath: 'src/',
//
//    // frameworks to use
//    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
//    frameworks: ['jasmine', 'chai', 'sinon'],
//
//    // list of files to exclude
//    exclude: [],
//
//    // list of files / patterns to load in the browser
//    // we are building the test environment in ./spec-bundle.js
//    files: [{pattern: './spec-bundle.js', watched: false}],
//
//    // preprocess matching files before serving them to the browser
//    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
//    preprocessors: {
//      // Reference: http://webpack.github.io/docs/testing.html
//      // Reference: https://github.com/webpack/karma-webpack
//      // Convert files with webpack and load sourcemaps
//      './spec-bundle.js': ['webpack', 'sourcemap']
//    },
//
//    // Webpack Config at ./webpack.test.config.js
//    webpack: testWebpackConfig,
//
//    //coverageReporter: {
//    //  dir : 'coverage/',
//    //  reporters: [
//    //    { type: 'text-summary' },
//    //    { type: 'json' },
//    //    { type: 'html' }
//    //  ]
//    //},
//    coverageReporter: {
//      type: 'html',
//      dir: 'coverage/'
//    },
//
//    // Webpack please don't spam the console when running in karma!
//    webpackServer: {noInfo: true},
//
//    // test results reporter to use
//    // possible values: 'dots', 'progress'
//    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
//    reporters: ['mocha', 'coverage'],
//
//    // web server port
//    port: 9876,
//
//    // enable / disable colors in the output (reporters and logs)
//    colors: true,
//
//    // level of logging
//    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
//    logLevel: config.LOG_INFO,
//
//    // enable / disable watching file and executing tests whenever any file changes
//    autoWatch: false,
//
//    // start these browsers
//    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
//    browsers: [
//      // 'Chrome',
//      'PhantomJS'
//    ],
//
//    // Continuous Integration mode
//    // if true, Karma captures browsers, runs the tests and exits
//    singleRun: true
//  });
//
//};


//// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
//module.exports = function karmaConfig (config) {
//  config.set({
//
//    // base path that will be used to resolve all patterns (e.g. files, exclude)
//    basePath: '',
//
//    // frameworks to use
//    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
//    frameworks: [
//      // Reference: https://github.com/karma-runner/karma-jasmine
//      // Set framework to jasmine
//      'jasmine'
//      //, 'chai', 'sinon'
//    ],
//
//    // list of files to exclude
//    exclude: [ ],
//
//    reporters: [
//      // Reference: https://github.com/mlex/karma-spec-reporter
//      // Set reporter to print detailed results to console
//      'spec',
//
//      // Reference: https://github.com/karma-runner/karma-coverage
//      // Output code coverage files
//      'coverage'
//    ],
//
//    // list of files / patterns to load in the browser
//    // we are building the test environment in ./spec-bundle.js
//    files: [ { pattern: 'spec-bundle.js', watched: false } ],
//
//    preprocessors: {
//      // Reference: http://webpack.github.io/docs/testing.html
//      // Reference: https://github.com/webpack/karma-webpack
//      // Convert files with webpack and load sourcemaps
//      'spec-bundle.js': ['webpack', 'sourcemap']
//    },
//
//    browsers: [
//      // Run tests using PhantomJS
//      'PhantomJS'
//    ],
//
//    // Continuous Integration mode
//    // if true, Karma captures browsers, runs the tests and exits
//    singleRun: true,
//
//    // Configure code coverage reporter
//    //coverageReporter: {
//    //  dir: 'build/coverage/',
//    //  type: 'html'
//    //},
//    coverageReporter: {
//      dir : 'coverage/',
//      reporters: [
//        { type: 'text-summary' },
//        { type: 'json' },
//        { type: 'html' }
//      ]
//    },
//
//    // Webpack Config at ./webpack.test.config.js
//    webpack: require('./webpack.test'),
//
//    // Webpack please don't spam the console when running in karma!
//    webpackServer: { noInfo: true },
//
//    // web server port
//    port: 9876,
//
//    // enable / disable colors in the output (reporters and logs)
//    colors: true,
//
//  });
//};
//

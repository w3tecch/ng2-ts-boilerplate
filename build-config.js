var fs = require('fs-extra');
var merge = require('lodash.merge');
var chalk = require('chalk');

//var idx = 0;

function BuildConfigPlugin(options) {
  this.options = merge({}, {
    env: 'dev',
    from: './src/assets/configs/[env].json',
    to: './src/config.json'
  }, options);
}

BuildConfigPlugin.prototype = {

  constructor: BuildConfigPlugin,

  apply: function (compiler) {
    var self = this;

    fs.copy(self.options.from.replace('[env]', self.options.env), self.options.to, function (err) {
      if (err) {
        console.warn(chalk.red('build-config: ERROR'));
        console.error(err);
      } else {
        console.log(chalk.green('build-config: [' + self.options.env + '] ' + self.options.from + self.options.to));
      }
      return true;
    });

    //function done(callback) {
    //  idx++;
    //  callback();
    //}
    //
    //compiler.plugin("after-emit", function (compilation, callback) {
    //  if (idx === 0) {
    //    fs.copy(self.options.from.replace('[env]', self.options.env), self.options.to, function (err) {
    //      if (err) {
    //        console.log(chalk.red(' build-config: ERROR'));
    //        console.error(err);
    //        compilation.errors.push(err);
    //      } else {
    //        console.log(chalk.green(' build-config: [' + self.options.env + '] ' + self.options.from + self.options.to));
    //      }
    //      done(callback);
    //    });
    //  } else {
    //    if (idx === 1) {
    //      console.log(chalk.green(' build-config: Using environment ') + chalk.green.bold(self.options.env.toUpperCase()));
    //    }
    //    done(callback);
    //  }
    //});
  }
};

module.exports = BuildConfigPlugin;

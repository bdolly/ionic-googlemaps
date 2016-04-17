'use strict';

var config = require('../config');
var gulp   = require('gulp');
var Server = require('karma').Server;
var fs = require('fs');

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {

  new Server({
    configFile: process.cwd()+config.test.config
  }, done).start();
  
});


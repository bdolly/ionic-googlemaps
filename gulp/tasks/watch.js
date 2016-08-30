'use strict';

var config        = require('../config');
var gulp          = require('gulp');
var shelljs       = require('shelljs/global');

gulp.task('watch',['browserify'],function() {

  // Scripts are automatically watched and rebundled by Watchify inside Browserify task
  // gulp.watch(config.scripts.src, ['browserify']);
  // gulp.watch([config.scripts.src,config.scripts.test ], ['tdd']);
  
  gulp.watch(config.styles.src,  ['styles']);
  // gulp.watch(config.images.src,  ['images']);
  // gulp.watch(config.fonts.src,   ['fonts']);
  // gulp.watch(config.views.watch, ['views']);

});
'use strict';
var pgk = require('../package.json');

module.exports = {

  'browserPort'  : 4000,
  'UIPort'       : 4001,
  'serverPort'   : 4002,

  // 'styles': {
  //   'src' : 'app/scss/**/*.scss',
  //   'dest': 'dist/css',
  //   'prodSourcemap': false,
  //   'sassIncludePaths': []
  // },

  'scripts': {
    'src' : './www/js/**/*.js',
    'dest': './www/js/'
  },


  'dist': {
    'root'  : './www'
  },

  'browserify': {
    'entry'   : './www/js/app.js',
    'bundleName': pgk.name+'.js',
    'prodSourcemap' : false
  },



};

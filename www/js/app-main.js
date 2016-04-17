'use strict';

// angular modules
// require('angular-module-sanitize');
// require('./templates');
require('./controllers/_index');
require('./services/_index');
require('./models/_index');
require('../../bower_components/ng-knob/dist/ng-knob.min');
// require('./components/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ionic',
    'app.controllers',
    'app.services',
    'app.models',
    'ui.router',
    'ui.knob'
    // 'templates',
    // 'ngSanitize',
    // 'app.services',
    // 'app.components'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  angular.module('app').constant('AppSettings', require('./constants.development'));

  angular.module('app').config(require('./on_config'));

  angular.module('app').run(require('./on_run'));

  angular.bootstrap(document, ['app']);

});
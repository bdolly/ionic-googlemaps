'use strict';

require('angular');
require('ionic');

// angular modules
// require('angular-ui-router');
// require('angular-module-sanitize');
// require('./templates');
// require('./controllers/_index');
// require('./services/_index');
// require('./components/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ionic'
    // 'ui.router',
    // 'templates',
    // 'ngSanitize',
    // 'app.controllers',
    // 'app.services',
    // 'app.components'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  // angular.module('app').constant('AppSettings', require('./constants.development'));

  // angular.module('app').config(require('./on_config'));

  // angular.module('app').run(require('./on_run'));

  angular.bootstrap(document, ['app']);

});
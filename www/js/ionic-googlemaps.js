(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Library/WebServer/Documents/ionic-googlemaps/www/js/app-main.js":[function(require,module,exports){
'use strict';

// require('angular');
// require('ionic');

// angular modules
// require('angular-ui-router');
// require('angular-module-sanitize');
// require('./templates');
require('./controllers/_index');
// require('./services/_index');
// require('./components/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ionic',
    'app.controllers',
    'ui.router'
    // 'templates',
    // 'ngSanitize',
    // 'app.services',
    // 'app.components'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  // angular.module('app').constant('AppSettings', require('./constants.development'));

  angular.module('app').config(require('./on_config'));

  angular.module('app').run(require('./on_run'));

  angular.bootstrap(document, ['app']);

});

},{"./controllers/_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js","./on_config":"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_config.js","./on_run":"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_run.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/AppCtrl.js":[function(require,module,exports){
'use strict';

AppCtrl.$inject = ["$scope", "$ionicModal", "$timeout"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function AppCtrl($scope, $ionicModal, $timeout) {
  
// Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

};

controllersModule.controller('AppCtrl', AppCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/PlaylistCtrl.js":[function(require,module,exports){
'use strict';

PlaylistCtrl.$inject = ["$scope"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function PlaylistCtrl($scope) {
  


};

controllersModule.controller('PlaylistCtrl', PlaylistCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/PlaylistsCtrl.js":[function(require,module,exports){
'use strict';

PlaylistsCtrl.$inject = ["$scope"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function PlaylistsCtrl($scope) {
  
 $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

};

controllersModule.controller('PlaylistsCtrl', PlaylistsCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js":[function(require,module,exports){
'use strict';

// var angular = require('angular');


module.exports = angular.module('app.controllers', []);

({"AppCtrl":require("./AppCtrl.js"),"PlaylistCtrl":require("./PlaylistCtrl.js"),"PlaylistsCtrl":require("./PlaylistsCtrl.js")});

},{"./AppCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/AppCtrl.js","./PlaylistCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/PlaylistCtrl.js","./PlaylistsCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/PlaylistsCtrl.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_config.js":[function(require,module,exports){
'use strict';


/**
 * @ngInject
 */
OnConfig.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider", "$provide"];
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $provide) {
  
  //activate LogDecorator
  require('./utils/logging/LogDecorator.js')($provide);

$stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
  
  


}//// OnConfig


module.exports = OnConfig;

},{"./utils/logging/LogDecorator.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/logging/LogDecorator.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_run.js":[function(require,module,exports){
'use strict';

/**
 * @ngInject
 */
OnRun.$inject = ["$ionicPlatform"];
function OnRun($ionicPlatform) {
  $ionicPlatform.ready(function() {
    
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}

module.exports = OnRun;

},{}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/DateTime.js":[function(require,module,exports){
/**
 * @author     Thomas Burleson
 * @author     StackOverflow - Harto, http://stackoverflow.com/questions/2315408/how-do-i-format-a-timestamp-in-javascript-to-display-it-in-graphs-utc-is-fine
 * @description
 *  
 * DateTime utility class that spits out UTC timestamp strings usually used in a reporting, print-capable process.
*/
 

 'use strict';


var buildTimeString = function (date, format)
        {
            format = format || "%h:%m:%s:%z";

            function pad(value, isMilliSeconds)
            {
                if(typeof (isMilliSeconds) === "undefined")
                {
                    isMilliSeconds = false;
                }
                if(isMilliSeconds)
                {
                    if(value < 10)
                    {
                        value = "00" + value;
                    }
                    else if(value < 100)
                    {
                        value = "0" + value;
                    }
                }
                return(value.toString().length < 2) ? "0" + value : value;
            }

            return format.replace(/%([a-zA-Z])/g, function (_, fmtCode)
            {
                switch(fmtCode)
                {
                case "Y":
                    return date.getFullYear();
                case "M":
                    return pad(date.getMonth() + 1);
                case "d":
                    return pad(date.getDate());
                case "h":
                    return pad(date.getHours());
                case "m":
                    return pad(date.getMinutes());
                case "s":
                    return pad(date.getSeconds());
                case "z":
                    return pad(date.getMilliseconds(), true);
                default:
                    throw new Error("Unsupported format code: " + fmtCode);
                }
            });
        };


 // Publish API for DateTime utils
        // return {
        //     formattedNow: function ()
        //     {
        //         return buildTimeString(new Date());
        //     }
        // };
        // 
 module.exports = {
    formattedNow: function () { return buildTimeString(new Date()); }
 };

},{}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/logging/LogDecorator.js":[function(require,module,exports){
'use strict';
/**
 * LogDecorator
 *  @source: http://solutionoptimist.com/2013/10/07/enhance-angularjs-logging-using-decorators/
 */

 var LogDecorator = function( $provide  ){


              // Register our $log decorator with AngularJS $provider
              $provide.decorator( '$log', [ "$delegate", function( $delegate )
              {
               // NOTE: the LogEnchancer module returns a FUNCTION that we named `enchanceLoggerFn`
               //       All the details of how the `enchancement` works is encapsulated in LogEnhancer!

                  require('./LogEnhancer.js')( $delegate );

                  return $delegate;
              }]);
};


module.exports =  LogDecorator;

},{"./LogEnhancer.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/logging/LogEnhancer.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/logging/LogEnhancer.js":[function(require,module,exports){
'use strict';
/**
 * LogEnhancer
 * This adds timestamps and supplant functionality to Angular $log service
 * @source: http://solutionoptimist.com/2013/10/07/enhance-angularjs-logging-using-decorators/
 * @api: public
 * @returns: Object - extended $log service
 */

var enchanceLogger = function( $log ){
  var supplant = require('../supplant.js');
  var DateTime = require('../DateTime.js');


  /**
   * Capture the original $log functions; for use in enhancedLogFn()
   * @api  private 
   */
  
  var _$log = (function( $log ){
      return {
        log   : $log.log,
        info  : $log.info,
        warn  : $log.warn,
        debug : $log.debug,
        // error : $log.error
      };
  })( $log ); 



   /**
    * Partial application to pre-capture a logger function
    * @api:  private 
    * @returns: Function 
    */
    var prepareLogFn = function( logFn, className ){

      /**
       * Invoke the specified `logFn<` with the supplant functionality...
       * @api: private 
       * @example: 
       *   var user = { who:"Thomas Burleson"", email="ThomasBurleson@gmail.com"" };
       *   $log.warn( "A warning message for `{who}` will be sent to `{email}` !", user );   
       *
       * This should output: A warning message for `Thomas Burleson` will be sent to `ThomasBurleson@gmail.com` !
       */
      var enhancedLogFn = function( ){
        var args = Array.prototype.slice.call(arguments),
            now  = DateTime.formattedNow();
            // prepend a timestamp to the original output message
            args[0] = supplant("{0} - {1}{2}", [ now, className, args[0] ]);

        logFn.call( null,  supplant.apply( null, args ) );
      };

      // Special... only needed to support angular-mocks expectations
      enhancedLogFn.logs = [ ];
 
      return enhancedLogFn;
      
    };




    /**
     * Support to generate class-specific logger instance with classname only
     *
     * @param: name
     * @returns: Object wrapper facade to $log
     */
    var getInstance = function( className ){
      className = ( className !== undefined ) ? className + "::" : "";

      return{
         log   : prepareLogFn( _$log.log,    className ),
         info  : prepareLogFn( _$log.info,   className ),
         warn  : prepareLogFn( _$log.warn,   className ),
         debug : prepareLogFn( _$log.debug,  className ),
         // error : prepareLogFn( _$log.error,  className )
      };

    };



    // wrap each log method 
    $log.log   = prepareLogFn( $log.log );
    $log.info  = prepareLogFn( $log.info );
    $log.warn  = prepareLogFn( $log.warn );
    $log.debug = prepareLogFn( $log.debug );
    // $log.error = prepareLogFn( $log.error );

    // Add special method to AngularJS $log
    $log.getInstance = getInstance;
 

    return $log;
};//enchanceLogger



module.exports =  enchanceLogger;

},{"../DateTime.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/DateTime.js","../supplant.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/supplant.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/supplant.js":[function(require,module,exports){
/**
 * @author      Thomas Burleson
 * @date        November, 2013
 * @source:     https://github.com/ThomasBurleson/angularjs-logDecorator/blob/master/src/mindspace/utils/supplant.js
  */
 

 'use strict';

var supplant =  function( template, values, pattern ) {
            pattern = pattern || /\{([^\{\}]*)\}/g;

            return template.replace(pattern, function(a, b) {
                var p = b.split('.'),
                    r = values;

                try {
                    for (var s in p) { r = r[p[s]];  }
                } catch(e){
                    r = a;
                }

                return (typeof r === 'string' || typeof r === 'number') ? r : a;
            });
        };


// supplant() method from Crockfords `Remedial Javascript`
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

String.method("supplant", function( values, pattern ) {
    var self = this;
    return supplant(self, values, pattern);
});




module.exports =  String.supplant = supplant;

},{}]},{},["/Library/WebServer/Documents/ionic-googlemaps/www/js/app-main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2FwcC1tYWluLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9BcHBDdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9QbGF5bGlzdEN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL1BsYXlsaXN0c0N0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL19pbmRleC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvb25fY29uZmlnLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9vbl9ydW4uanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3V0aWxzL0RhdGVUaW1lLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy91dGlscy9sb2dnaW5nL0xvZ0RlY29yYXRvci5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvdXRpbHMvbG9nZ2luZy9Mb2dFbmhhbmNlci5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93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QUFFO2tCQUM3QixNQUFNLEVBQUU7b0JBQ04sSUFBSTs7O2dCQUdSLE9BQU8sQ0FBQyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxJQUFJOzs7Ozs7QUFNOUUsU0FBUyxVQUFVLFNBQVMsVUFBVSxNQUFNLE1BQU07SUFDOUMsS0FBSyxVQUFVLFFBQVE7SUFDdkIsT0FBTzs7O0FBR1gsT0FBTyxPQUFPLFlBQVksVUFBVSxRQUFRLFVBQVU7SUFDbEQsSUFBSSxPQUFPO0lBQ1gsT0FBTyxTQUFTLE1BQU0sUUFBUTs7Ozs7O0FBTWxDLE9BQU8sV0FBVyxPQUFPLFdBQVcsU0FBUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbi8vIHJlcXVpcmUoJ2FuZ3VsYXInKTtcbi8vIHJlcXVpcmUoJ2lvbmljJyk7XG5cbi8vIGFuZ3VsYXIgbW9kdWxlc1xuLy8gcmVxdWlyZSgnYW5ndWxhci11aS1yb3V0ZXInKTtcbi8vIHJlcXVpcmUoJ2FuZ3VsYXItbW9kdWxlLXNhbml0aXplJyk7XG4vLyByZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9faW5kZXgnKTtcbi8vIHJlcXVpcmUoJy4vc2VydmljZXMvX2luZGV4Jyk7XG4vLyByZXF1aXJlKCcuL2NvbXBvbmVudHMvX2luZGV4Jyk7XG5cbi8vIGNyZWF0ZSBhbmQgYm9vdHN0cmFwIGFwcGxpY2F0aW9uXG5hbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gIHZhciByZXF1aXJlcyA9IFtcbiAgICAnaW9uaWMnLFxuICAgICdhcHAuY29udHJvbGxlcnMnLFxuICAgICd1aS5yb3V0ZXInXG4gICAgLy8gJ3RlbXBsYXRlcycsXG4gICAgLy8gJ25nU2FuaXRpemUnLFxuICAgIC8vICdhcHAuc2VydmljZXMnLFxuICAgIC8vICdhcHAuY29tcG9uZW50cydcbiAgXTtcblxuICAvLyBtb3VudCBvbiB3aW5kb3cgZm9yIHRlc3RpbmdcbiAgd2luZG93LmFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCByZXF1aXJlcyk7XG5cbiAgLy8gYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnN0YW50KCdBcHBTZXR0aW5ncycsIHJlcXVpcmUoJy4vY29uc3RhbnRzLmRldmVsb3BtZW50JykpO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb25maWcocmVxdWlyZSgnLi9vbl9jb25maWcnKSk7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLnJ1bihyZXF1aXJlKCcuL29uX3J1bicpKTtcblxuICBhbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydhcHAnXSk7XG5cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gQXBwQ3RybCgkc2NvcGUsICRpb25pY01vZGFsLCAkdGltZW91dCkge1xuICBcbi8vIEZvcm0gZGF0YSBmb3IgdGhlIGxvZ2luIG1vZGFsXG4gICRzY29wZS5sb2dpbkRhdGEgPSB7fTtcblxuICAvLyBDcmVhdGUgdGhlIGxvZ2luIG1vZGFsIHRoYXQgd2Ugd2lsbCB1c2UgbGF0ZXJcbiAgJGlvbmljTW9kYWwuZnJvbVRlbXBsYXRlVXJsKCd0ZW1wbGF0ZXMvbG9naW4uaHRtbCcsIHtcbiAgICBzY29wZTogJHNjb3BlXG4gIH0pLnRoZW4oZnVuY3Rpb24obW9kYWwpIHtcbiAgICAkc2NvcGUubW9kYWwgPSBtb2RhbDtcbiAgfSk7XG5cbiAgLy8gVHJpZ2dlcmVkIGluIHRoZSBsb2dpbiBtb2RhbCB0byBjbG9zZSBpdFxuICAkc2NvcGUuY2xvc2VMb2dpbiA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5tb2RhbC5oaWRlKCk7XG4gIH07XG5cbiAgLy8gT3BlbiB0aGUgbG9naW4gbW9kYWxcbiAgJHNjb3BlLmxvZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLm1vZGFsLnNob3coKTtcbiAgfTtcblxuICAvLyBQZXJmb3JtIHRoZSBsb2dpbiBhY3Rpb24gd2hlbiB0aGUgdXNlciBzdWJtaXRzIHRoZSBsb2dpbiBmb3JtXG4gICRzY29wZS5kb0xvZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ0RvaW5nIGxvZ2luJywgJHNjb3BlLmxvZ2luRGF0YSk7XG5cbiAgICAvLyBTaW11bGF0ZSBhIGxvZ2luIGRlbGF5LiBSZW1vdmUgdGhpcyBhbmQgcmVwbGFjZSB3aXRoIHlvdXIgbG9naW5cbiAgICAvLyBjb2RlIGlmIHVzaW5nIGEgbG9naW4gc3lzdGVtXG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAkc2NvcGUuY2xvc2VMb2dpbigpO1xuICAgIH0sIDEwMDApO1xuICB9O1xuXG59O1xuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdBcHBDdHJsJywgQXBwQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBQbGF5bGlzdEN0cmwoJHNjb3BlKSB7XG4gIFxuXG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ1BsYXlsaXN0Q3RybCcsIFBsYXlsaXN0Q3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBQbGF5bGlzdHNDdHJsKCRzY29wZSkge1xuICBcbiAkc2NvcGUucGxheWxpc3RzID0gW1xuICAgIHsgdGl0bGU6ICdSZWdnYWUnLCBpZDogMSB9LFxuICAgIHsgdGl0bGU6ICdDaGlsbCcsIGlkOiAyIH0sXG4gICAgeyB0aXRsZTogJ0R1YnN0ZXAnLCBpZDogMyB9LFxuICAgIHsgdGl0bGU6ICdJbmRpZScsIGlkOiA0IH0sXG4gICAgeyB0aXRsZTogJ1JhcCcsIGlkOiA1IH0sXG4gICAgeyB0aXRsZTogJ0Nvd2JlbGwnLCBpZDogNiB9XG4gIF07XG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ1BsYXlsaXN0c0N0cmwnLCBQbGF5bGlzdHNDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbi8vIHZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmNvbnRyb2xsZXJzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pOyIsIid1c2Ugc3RyaWN0JztcblxuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBPbkNvbmZpZygkc3RhdGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJHByb3ZpZGUpIHtcbiAgXG4gIC8vYWN0aXZhdGUgTG9nRGVjb3JhdG9yXG4gIHJlcXVpcmUoJy4vdXRpbHMvbG9nZ2luZy9Mb2dEZWNvcmF0b3IuanMnKSgkcHJvdmlkZSk7XG5cbiRzdGF0ZVByb3ZpZGVyXG5cbiAgICAuc3RhdGUoJ2FwcCcsIHtcbiAgICB1cmw6ICcvYXBwJyxcbiAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9tZW51Lmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdBcHBDdHJsJ1xuICB9KVxuXG4gIC5zdGF0ZSgnYXBwLnNlYXJjaCcsIHtcbiAgICB1cmw6ICcvc2VhcmNoJyxcbiAgICB2aWV3czoge1xuICAgICAgJ21lbnVDb250ZW50Jzoge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9zZWFyY2guaHRtbCdcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgLnN0YXRlKCdhcHAuYnJvd3NlJywge1xuICAgICAgdXJsOiAnL2Jyb3dzZScsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYnJvd3NlLmh0bWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5zdGF0ZSgnYXBwLnBsYXlsaXN0cycsIHtcbiAgICAgIHVybDogJy9wbGF5bGlzdHMnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ21lbnVDb250ZW50Jzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3BsYXlsaXN0cy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnUGxheWxpc3RzQ3RybCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgLnN0YXRlKCdhcHAuc2luZ2xlJywge1xuICAgIHVybDogJy9wbGF5bGlzdHMvOnBsYXlsaXN0SWQnLFxuICAgIHZpZXdzOiB7XG4gICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3BsYXlsaXN0Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUGxheWxpc3RDdHJsJ1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIC8vIGlmIG5vbmUgb2YgdGhlIGFib3ZlIHN0YXRlcyBhcmUgbWF0Y2hlZCwgdXNlIHRoaXMgYXMgdGhlIGZhbGxiYWNrXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9hcHAvcGxheWxpc3RzJyk7XG4gIFxuICBcblxuXG59Ly8vLyBPbkNvbmZpZ1xuXG5cbm1vZHVsZS5leHBvcnRzID0gT25Db25maWc7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBPblJ1bigkaW9uaWNQbGF0Zm9ybSkge1xuICAkaW9uaWNQbGF0Zm9ybS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBcbiAgICAvLyBIaWRlIHRoZSBhY2Nlc3NvcnkgYmFyIGJ5IGRlZmF1bHQgKHJlbW92ZSB0aGlzIHRvIHNob3cgdGhlIGFjY2Vzc29yeSBiYXIgYWJvdmUgdGhlIGtleWJvYXJkXG4gICAgLy8gZm9yIGZvcm0gaW5wdXRzKVxuICAgIGlmICh3aW5kb3cuY29yZG92YSAmJiB3aW5kb3cuY29yZG92YS5wbHVnaW5zLktleWJvYXJkKSB7XG4gICAgICBjb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQuaGlkZUtleWJvYXJkQWNjZXNzb3J5QmFyKHRydWUpO1xuICAgICAgY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmRpc2FibGVTY3JvbGwodHJ1ZSk7XG5cbiAgICB9XG4gICAgaWYgKHdpbmRvdy5TdGF0dXNCYXIpIHtcbiAgICAgIC8vIG9yZy5hcGFjaGUuY29yZG92YS5zdGF0dXNiYXIgcmVxdWlyZWRcbiAgICAgIFN0YXR1c0Jhci5zdHlsZURlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uUnVuOyIsIi8qKlxuICogQGF1dGhvciAgICAgVGhvbWFzIEJ1cmxlc29uXG4gKiBAYXV0aG9yICAgICBTdGFja092ZXJmbG93IC0gSGFydG8sIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjMxNTQwOC9ob3ctZG8taS1mb3JtYXQtYS10aW1lc3RhbXAtaW4tamF2YXNjcmlwdC10by1kaXNwbGF5LWl0LWluLWdyYXBocy11dGMtaXMtZmluZVxuICogQGRlc2NyaXB0aW9uXG4gKiAgXG4gKiBEYXRlVGltZSB1dGlsaXR5IGNsYXNzIHRoYXQgc3BpdHMgb3V0IFVUQyB0aW1lc3RhbXAgc3RyaW5ncyB1c3VhbGx5IHVzZWQgaW4gYSByZXBvcnRpbmcsIHByaW50LWNhcGFibGUgcHJvY2Vzcy5cbiovXG4gXG5cbiAndXNlIHN0cmljdCc7XG5cblxudmFyIGJ1aWxkVGltZVN0cmluZyA9IGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCBcIiVoOiVtOiVzOiV6XCI7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBhZCh2YWx1ZSwgaXNNaWxsaVNlY29uZHMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIChpc01pbGxpU2Vjb25kcykgPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpc01pbGxpU2Vjb25kcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihpc01pbGxpU2Vjb25kcylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlIDwgMTApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCIwMFwiICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih2YWx1ZSA8IDEwMClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIjBcIiArIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybih2YWx1ZS50b1N0cmluZygpLmxlbmd0aCA8IDIpID8gXCIwXCIgKyB2YWx1ZSA6IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoLyUoW2EtekEtWl0pL2csIGZ1bmN0aW9uIChfLCBmbXRDb2RlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN3aXRjaChmbXRDb2RlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiWVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldERhdGUoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldEhvdXJzKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNaW51dGVzKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgZm9ybWF0IGNvZGU6IFwiICsgZm10Q29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cblxuIC8vIFB1Ymxpc2ggQVBJIGZvciBEYXRlVGltZSB1dGlsc1xuICAgICAgICAvLyByZXR1cm4ge1xuICAgICAgICAvLyAgICAgZm9ybWF0dGVkTm93OiBmdW5jdGlvbiAoKVxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBidWlsZFRpbWVTdHJpbmcobmV3IERhdGUoKSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIFxuIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZvcm1hdHRlZE5vdzogZnVuY3Rpb24gKCkgeyByZXR1cm4gYnVpbGRUaW1lU3RyaW5nKG5ldyBEYXRlKCkpOyB9XG4gfTtcblxuXG5cbiIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogTG9nRGVjb3JhdG9yXG4gKiAgQHNvdXJjZTogaHR0cDovL3NvbHV0aW9ub3B0aW1pc3QuY29tLzIwMTMvMTAvMDcvZW5oYW5jZS1hbmd1bGFyanMtbG9nZ2luZy11c2luZy1kZWNvcmF0b3JzL1xuICovXG5cbiB2YXIgTG9nRGVjb3JhdG9yID0gZnVuY3Rpb24oICRwcm92aWRlICApe1xuXG5cbiAgICAgICAgICAgICAgLy8gUmVnaXN0ZXIgb3VyICRsb2cgZGVjb3JhdG9yIHdpdGggQW5ndWxhckpTICRwcm92aWRlclxuICAgICAgICAgICAgICAkcHJvdmlkZS5kZWNvcmF0b3IoICckbG9nJywgWyBcIiRkZWxlZ2F0ZVwiLCBmdW5jdGlvbiggJGRlbGVnYXRlIClcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgLy8gTk9URTogdGhlIExvZ0VuY2hhbmNlciBtb2R1bGUgcmV0dXJucyBhIEZVTkNUSU9OIHRoYXQgd2UgbmFtZWQgYGVuY2hhbmNlTG9nZ2VyRm5gXG4gICAgICAgICAgICAgICAvLyAgICAgICBBbGwgdGhlIGRldGFpbHMgb2YgaG93IHRoZSBgZW5jaGFuY2VtZW50YCB3b3JrcyBpcyBlbmNhcHN1bGF0ZWQgaW4gTG9nRW5oYW5jZXIhXG5cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmUoJy4vTG9nRW5oYW5jZXIuanMnKSggJGRlbGVnYXRlICk7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAkZGVsZWdhdGU7XG4gICAgICAgICAgICAgIH1dKTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSAgTG9nRGVjb3JhdG9yOyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogTG9nRW5oYW5jZXJcbiAqIFRoaXMgYWRkcyB0aW1lc3RhbXBzIGFuZCBzdXBwbGFudCBmdW5jdGlvbmFsaXR5IHRvIEFuZ3VsYXIgJGxvZyBzZXJ2aWNlXG4gKiBAc291cmNlOiBodHRwOi8vc29sdXRpb25vcHRpbWlzdC5jb20vMjAxMy8xMC8wNy9lbmhhbmNlLWFuZ3VsYXJqcy1sb2dnaW5nLXVzaW5nLWRlY29yYXRvcnMvXG4gKiBAYXBpOiBwdWJsaWNcbiAqIEByZXR1cm5zOiBPYmplY3QgLSBleHRlbmRlZCAkbG9nIHNlcnZpY2VcbiAqL1xuXG52YXIgZW5jaGFuY2VMb2dnZXIgPSBmdW5jdGlvbiggJGxvZyApe1xuICB2YXIgc3VwcGxhbnQgPSByZXF1aXJlKCcuLi9zdXBwbGFudC5qcycpO1xuICB2YXIgRGF0ZVRpbWUgPSByZXF1aXJlKCcuLi9EYXRlVGltZS5qcycpO1xuXG5cbiAgLyoqXG4gICAqIENhcHR1cmUgdGhlIG9yaWdpbmFsICRsb2cgZnVuY3Rpb25zOyBmb3IgdXNlIGluIGVuaGFuY2VkTG9nRm4oKVxuICAgKiBAYXBpICBwcml2YXRlIFxuICAgKi9cbiAgXG4gIHZhciBfJGxvZyA9IChmdW5jdGlvbiggJGxvZyApe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9nICAgOiAkbG9nLmxvZyxcbiAgICAgICAgaW5mbyAgOiAkbG9nLmluZm8sXG4gICAgICAgIHdhcm4gIDogJGxvZy53YXJuLFxuICAgICAgICBkZWJ1ZyA6ICRsb2cuZGVidWcsXG4gICAgICAgIC8vIGVycm9yIDogJGxvZy5lcnJvclxuICAgICAgfTtcbiAgfSkoICRsb2cgKTsgXG5cblxuXG4gICAvKipcbiAgICAqIFBhcnRpYWwgYXBwbGljYXRpb24gdG8gcHJlLWNhcHR1cmUgYSBsb2dnZXIgZnVuY3Rpb25cbiAgICAqIEBhcGk6ICBwcml2YXRlIFxuICAgICogQHJldHVybnM6IEZ1bmN0aW9uIFxuICAgICovXG4gICAgdmFyIHByZXBhcmVMb2dGbiA9IGZ1bmN0aW9uKCBsb2dGbiwgY2xhc3NOYW1lICl7XG5cbiAgICAgIC8qKlxuICAgICAgICogSW52b2tlIHRoZSBzcGVjaWZpZWQgYGxvZ0ZuPGAgd2l0aCB0aGUgc3VwcGxhbnQgZnVuY3Rpb25hbGl0eS4uLlxuICAgICAgICogQGFwaTogcHJpdmF0ZSBcbiAgICAgICAqIEBleGFtcGxlOiBcbiAgICAgICAqICAgdmFyIHVzZXIgPSB7IHdobzpcIlRob21hcyBCdXJsZXNvblwiXCIsIGVtYWlsPVwiVGhvbWFzQnVybGVzb25AZ21haWwuY29tXCJcIiB9O1xuICAgICAgICogICAkbG9nLndhcm4oIFwiQSB3YXJuaW5nIG1lc3NhZ2UgZm9yIGB7d2hvfWAgd2lsbCBiZSBzZW50IHRvIGB7ZW1haWx9YCAhXCIsIHVzZXIgKTsgICBcbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNob3VsZCBvdXRwdXQ6IEEgd2FybmluZyBtZXNzYWdlIGZvciBgVGhvbWFzIEJ1cmxlc29uYCB3aWxsIGJlIHNlbnQgdG8gYFRob21hc0J1cmxlc29uQGdtYWlsLmNvbWAgIVxuICAgICAgICovXG4gICAgICB2YXIgZW5oYW5jZWRMb2dGbiA9IGZ1bmN0aW9uKCApe1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgICAgICBub3cgID0gRGF0ZVRpbWUuZm9ybWF0dGVkTm93KCk7XG4gICAgICAgICAgICAvLyBwcmVwZW5kIGEgdGltZXN0YW1wIHRvIHRoZSBvcmlnaW5hbCBvdXRwdXQgbWVzc2FnZVxuICAgICAgICAgICAgYXJnc1swXSA9IHN1cHBsYW50KFwiezB9IC0gezF9ezJ9XCIsIFsgbm93LCBjbGFzc05hbWUsIGFyZ3NbMF0gXSk7XG5cbiAgICAgICAgbG9nRm4uY2FsbCggbnVsbCwgIHN1cHBsYW50LmFwcGx5KCBudWxsLCBhcmdzICkgKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIFNwZWNpYWwuLi4gb25seSBuZWVkZWQgdG8gc3VwcG9ydCBhbmd1bGFyLW1vY2tzIGV4cGVjdGF0aW9uc1xuICAgICAgZW5oYW5jZWRMb2dGbi5sb2dzID0gWyBdO1xuIFxuICAgICAgcmV0dXJuIGVuaGFuY2VkTG9nRm47XG4gICAgICBcbiAgICB9O1xuXG5cblxuXG4gICAgLyoqXG4gICAgICogU3VwcG9ydCB0byBnZW5lcmF0ZSBjbGFzcy1zcGVjaWZpYyBsb2dnZXIgaW5zdGFuY2Ugd2l0aCBjbGFzc25hbWUgb25seVxuICAgICAqXG4gICAgICogQHBhcmFtOiBuYW1lXG4gICAgICogQHJldHVybnM6IE9iamVjdCB3cmFwcGVyIGZhY2FkZSB0byAkbG9nXG4gICAgICovXG4gICAgdmFyIGdldEluc3RhbmNlID0gZnVuY3Rpb24oIGNsYXNzTmFtZSApe1xuICAgICAgY2xhc3NOYW1lID0gKCBjbGFzc05hbWUgIT09IHVuZGVmaW5lZCApID8gY2xhc3NOYW1lICsgXCI6OlwiIDogXCJcIjtcblxuICAgICAgcmV0dXJue1xuICAgICAgICAgbG9nICAgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmxvZywgICAgY2xhc3NOYW1lICksXG4gICAgICAgICBpbmZvICA6IHByZXBhcmVMb2dGbiggXyRsb2cuaW5mbywgICBjbGFzc05hbWUgKSxcbiAgICAgICAgIHdhcm4gIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy53YXJuLCAgIGNsYXNzTmFtZSApLFxuICAgICAgICAgZGVidWcgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmRlYnVnLCAgY2xhc3NOYW1lICksXG4gICAgICAgICAvLyBlcnJvciA6IHByZXBhcmVMb2dGbiggXyRsb2cuZXJyb3IsICBjbGFzc05hbWUgKVxuICAgICAgfTtcblxuICAgIH07XG5cblxuXG4gICAgLy8gd3JhcCBlYWNoIGxvZyBtZXRob2QgXG4gICAgJGxvZy5sb2cgICA9IHByZXBhcmVMb2dGbiggJGxvZy5sb2cgKTtcbiAgICAkbG9nLmluZm8gID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLmluZm8gKTtcbiAgICAkbG9nLndhcm4gID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLndhcm4gKTtcbiAgICAkbG9nLmRlYnVnID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLmRlYnVnICk7XG4gICAgLy8gJGxvZy5lcnJvciA9IHByZXBhcmVMb2dGbiggJGxvZy5lcnJvciApO1xuXG4gICAgLy8gQWRkIHNwZWNpYWwgbWV0aG9kIHRvIEFuZ3VsYXJKUyAkbG9nXG4gICAgJGxvZy5nZXRJbnN0YW5jZSA9IGdldEluc3RhbmNlO1xuIFxuXG4gICAgcmV0dXJuICRsb2c7XG59Oy8vZW5jaGFuY2VMb2dnZXJcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gIGVuY2hhbmNlTG9nZ2VyOyIsIi8qKlxuICogQGF1dGhvciAgICAgIFRob21hcyBCdXJsZXNvblxuICogQGRhdGUgICAgICAgIE5vdmVtYmVyLCAyMDEzXG4gKiBAc291cmNlOiAgICAgaHR0cHM6Ly9naXRodWIuY29tL1Rob21hc0J1cmxlc29uL2FuZ3VsYXJqcy1sb2dEZWNvcmF0b3IvYmxvYi9tYXN0ZXIvc3JjL21pbmRzcGFjZS91dGlscy9zdXBwbGFudC5qc1xuICAqL1xuIFxuXG4gJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3VwcGxhbnQgPSAgZnVuY3Rpb24oIHRlbXBsYXRlLCB2YWx1ZXMsIHBhdHRlcm4gKSB7XG4gICAgICAgICAgICBwYXR0ZXJuID0gcGF0dGVybiB8fCAvXFx7KFteXFx7XFx9XSopXFx9L2c7XG5cbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKHBhdHRlcm4sIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IGIuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgICAgICAgICAgciA9IHZhbHVlcztcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHMgaW4gcCkgeyByID0gcltwW3NdXTsgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgICAgICAgICByID0gYTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKHR5cGVvZiByID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgciA9PT0gJ251bWJlcicpID8gciA6IGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuXG4vLyBzdXBwbGFudCgpIG1ldGhvZCBmcm9tIENyb2NrZm9yZHMgYFJlbWVkaWFsIEphdmFzY3JpcHRgXG5GdW5jdGlvbi5wcm90b3R5cGUubWV0aG9kID0gZnVuY3Rpb24gKG5hbWUsIGZ1bmMpIHtcbiAgICB0aGlzLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmM7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdHJpbmcubWV0aG9kKFwic3VwcGxhbnRcIiwgZnVuY3Rpb24oIHZhbHVlcywgcGF0dGVybiApIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIHN1cHBsYW50KHNlbGYsIHZhbHVlcywgcGF0dGVybik7XG59KTtcblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSAgU3RyaW5nLnN1cHBsYW50ID0gc3VwcGxhbnQ7Il19

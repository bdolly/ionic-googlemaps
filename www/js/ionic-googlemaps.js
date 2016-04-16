(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Library/WebServer/Documents/ionic-googlemaps/www/js/app-main.js":[function(require,module,exports){
'use strict';

// angular modules
// require('angular-module-sanitize');
// require('./templates');
require('./controllers/_index');
require('./services/_index');
require('./models/_index');
// require('./components/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ionic',
    'app.controllers',
    'app.services',
    'app.models',
    'ui.router'
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

},{"./constants.development":"/Library/WebServer/Documents/ionic-googlemaps/www/js/constants.development.js","./controllers/_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js","./models/_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/_index.js","./on_config":"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_config.js","./on_run":"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_run.js","./services/_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/constants.development.js":[function(require,module,exports){
'use strict';

var AppSettings = {
  yocalAPI:{
    // base: 'http://yoendpoint4-wbbs.rhcloud.com/api/v1/yokal/data/'
    base: 'http://localhost:8100/api/v1/yokal/data/'
  },

  GMAP_RADIUS: 1000
};

module.exports = AppSettings;

},{}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/AppCtrl.js":[function(require,module,exports){
'use strict';

AppCtrl.$inject = ["$log", "$rootScope", "$scope", "$ionicModal", "$timeout", "coordinates", "AppSettings"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function AppCtrl($log, $rootScope, $scope, $ionicModal, $timeout, coordinates, AppSettings) {

  $log = $log.getInstance('AppCtrl');

  var vm = this;
  // set curent position to rootScope to make globally available 
  $rootScope.currentPosition = coordinates;
  console.log(AppSettings);
  
  

  // // Form data for the login modal
  // $scope.loginData = {};

  // // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/login.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });

  // // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // };

  // // Open the login modal
  // $scope.login = function() {
  //   $scope.modal.show();
  // };

  // // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);

  //   // Simulate a login delay. Remove this and replace with your login
  //   // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };

  

};

controllersModule.controller('AppCtrl', AppCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/BrowseCtrl.js":[function(require,module,exports){
'use strict';

BrowseCtrl.$inject = ["$scope", "Yocal"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function BrowseCtrl($scope, Yocal) {
  
  $scope.rando = Math.random();
  $scope.getType = function(x){
    return typeof x;
  }
  $scope.locations =[];
  Yocal.get().then(function(data){
    console.log(data);
    $scope.locations = data;
  });
  var _locations = [
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e6e",
          "name": "Los Gallos",
          "adress": "951 Wolf St Philadelphia PA 19148 United States",
          "lat": "39.921178",
          "long": "-75.1632599"
        },
        "distancefromlocation:1918"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e6f",
          "name": "Hardena",
          "adress": "754 S Hicks St, Philadelphia, PA 19145",
          "lat": "39.941686",
          "long": "-75.1684184"
        },
        "distancefromlocation:423"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e71",
          "name": "Nam Son Bakery",
          "adress": "1601 Washington Ave Philadelphia PA 19146 United States",
          "lat": "39.9392094",
          "long": "-75.170264"
        },
        "distancefromlocation:185"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e72",
          "name": "Breezy's Cafe",
          "adress": "1200 Point Breeze Ave Philadelphia PA 19146 United States",
          "lat": "39.9372372",
          "long": "-75.1771073"
        },
        "distancefromlocation:702"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e73",
          "name": "Pizza Brain/Little Baby's",
          "adress": "2313 Frankford Ave Philadelphia PA 19125 United States",
          "lat": "39.9806746",
          "long": "-75.1280968"
        },
        "distancefromlocation:5894"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e74",
          "name": "Sketch Burger",
          "adress": "413 E Girard Ave Philadelphia PA 19125 United States",
          "lat": "39.9705792",
          "long": "-75.1301184"
        },
        "distancefromlocation:4917"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e76",
          "name": "Tortilleria San Roman",
          "adress": "951 S 9th St Philadelphia PA 19147 United States",
          "lat": "39.9376396",
          "long": "-75.157989"
        },
        "distancefromlocation:936"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e78",
          "name": "Hai Street Kitchen & Co.",
          "adress": "32 S 18th St Philadelphia PA 19103 United States",
          "lat": "39.9521638",
          "long": "-75.1704619"
        },
        "distancefromlocation:1590"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e80",
          "name": "Federal Donuts",
          "adress": "1219 S 2nd St Philadelphia PA 19147 United States",
          "lat": "39.9322098",
          "long": "-75.1474603"
        },
        "distancefromlocation:1941"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e81",
          "name": "Bing Bing Dim Sum",
          "adress": "1648 E Passyunk Ave Philadelphia PA 19148 United States",
          "lat": "39.928959",
          "long": "-75.1647092"
        },
        "distancefromlocation:1056"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e88",
          "name": "Black N Brew",
          "adress": "523 E Passyunk Ave, Philadelphia, PA 19147",
          "lat": "39.941761",
          "long": "-75.1503928"
        },
        "distancefromlocation:1642"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e8e",
          "name": "Philly Flavors",
          "adress": "2004 Fairmount Ave, Philadelphia, PA 19130",
          "lat": "39.967087",
          "long": "-75.1705126"
        },
        "distancefromlocation:3244"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e8f",
          "name": "Capogiro Gelato",
          "adress": "233 Chestnut Street, Philadelphia, PA",
          "lat": "39.948822",
          "long": "-75.145358"
        },
        "distancefromlocation:2352"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e93",
          "name": "1st Oriental Supermarket",
          "adress": "1111 S 6th St Philadelphia, PA 19147",
          "lat": "39.9340158",
          "long": "-75.1536851"
        },
        "distancefromlocation:1373"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9ea0",
          "name": "K & A Sandwiches & Grocery",
          "adress": "1439 S 20th St, Philadelphia, PA 19146",
          "lat": "39.9330012",
          "long": "-75.1774748"
        },
        "distancefromlocation:910"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9ea1",
          "name": "South House",
          "adress": "2535 S 13th St, Philadelphia, PA 19148",
          "lat": "39.9180374",
          "long": "-75.1687131"
        },
        "distancefromlocation:2205"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9ea7",
          "name": "Cinemug",
          "adress": "s 19148, 1607 S Broad St, Philadelphia, PA 19148",
          "lat": "39.9301839",
          "long": "-75.168006"
        },
        "distancefromlocation:860"
      ]
    }
  ];


};

controllersModule.controller('BrowseCtrl', BrowseCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/MapCtrl.js":[function(require,module,exports){
'use strict';

MapCtrl.$inject = ["$rootScope", "$scope", "$log", "$ionicLoading", "AppSettings", "LocationsService"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MapCtrl($rootScope, $scope, $log, $ionicLoading, AppSettings, LocationsService ) {

    $log = $log.getInstance("MapCtrl");

 	  // ViewModel
  	var vm = this;
    vm.coordinates = {};	
    vm.radius = AppSettings.GMAP_RADIUS;
    $scope.CurrentCoords =  $rootScope.currentPosition;

      
    var mapOptions = {
      center:    {lat: $scope.CurrentCoords.latitude, 
                  lng: $scope.CurrentCoords.longitude},
      zoom:      1,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    $ionicLoading.show({
      template: "Exploring Your Location ...",
      backdrop: true
    });


    vm.gmap = new google.maps.Map(document.getElementById("Map"), mapOptions);

    // Drop pin on current location
    // var youAreHere = new google.maps.Marker({
    //     position: mapOptions.center,
    //     map:      vm.gmap,
    //     title:    'You Are Here'
    // });

    
    
    LocationsService.get({radius: vm.radius, 
                          lat: $scope.CurrentCoords.latitude, 
                          lng: $scope.CurrentCoords.longitude })
      .then(function(locations){
      $ionicLoading.hide();
      
      angular.forEach(locations, function(location, index){

        var infowindow = new google.maps.InfoWindow({
                content: '<h3 id="firstHeading" class="firstHeading">'+location.name+'</h3>'
            }),

            marker = new google.maps.Marker({
              position:  {lat: parseFloat(location.lat), 
                          lng: parseFloat(location.long)},
              map:       vm.gmap,
              label:     location.name,
              animation: google.maps.Animation.DROP,
              opacity:   0
          });


          var directionsDisplay = new google.maps.DirectionsRenderer({
            map: vm.gmap
          }),

          request = {
            destination: marker.position,
            origin:      mapOptions.center,
            travelMode:  google.maps.TravelMode.WALKING
          };

          var directionsService = new google.maps.DirectionsService();// Pass the directions request to the directions service.

          directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
              // Display the route on the map.
              directionsDisplay.setDirections(response);
            }
          });


        // marker.addListener('click', function() {
        //   infowindow.open(vm.gmap, marker);
        // });// end marker event


      });
        
    });

   
};//// MapCtrl



controllersModule.controller('MapCtrl', MapCtrl);

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

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/SearchCtrl.js":[function(require,module,exports){
'use strict';

SearchCtrl.$inject = ["$scope", "$rootScope", "$q", "$log", "LocationsService", "$ionicLoading", "$ionicSlideBoxDelegate", "AppSettings"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function SearchCtrl($scope, $rootScope, $q,  $log,  LocationsService,  $ionicLoading,  $ionicSlideBoxDelegate, AppSettings) {
    $log = $log.getInstance('SearchCtrl');

 	// ViewModel
  	var vm = this;
    vm.radius = AppSettings.GMAP_RADIUS;
    $scope.radius = AppSettings.GMAP_RADIUS;

    $scope.locations =[];
    $scope.CurrentCoords =  $rootScope.currentPosition;

    $ionicLoading.show({
    	template: "Finding Rad Spots ...",
    	backdrop: true
    });


    LocationsService.get({radius: vm.radius,  
                          lat:    $scope.CurrentCoords.latitude,  
                          lng:    $scope.CurrentCoords.longitude })

                    .then(function(data){
                        data[0].setTravelTime().then(function(locale) {
                            data[0] =locale;
                            $scope.locations = data;   
                            $ionicSlideBoxDelegate.update();
                            $ionicLoading.hide();    
                        });
   	                });


    $scope.slideHasChanged = function(idx) {
        var currentSlide = $scope.locations[idx];
        $log.debug('slideHasChanged {name}', currentSlide);

        currentSlide.setTravelTime().then(function(locale) {
            return locale;
        });
    }

  
};


controllersModule.controller('SearchCtrl', SearchCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js":[function(require,module,exports){
'use strict';



module.exports = angular.module('app.controllers', []);

({"AppCtrl":require("./AppCtrl.js"),"BrowseCtrl":require("./BrowseCtrl.js"),"MapCtrl":require("./MapCtrl.js"),"PlaylistCtrl":require("./PlaylistCtrl.js"),"PlaylistsCtrl":require("./PlaylistsCtrl.js"),"SearchCtrl":require("./SearchCtrl.js")});

},{"./AppCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/AppCtrl.js","./BrowseCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/BrowseCtrl.js","./MapCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/MapCtrl.js","./PlaylistCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/PlaylistCtrl.js","./PlaylistsCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/PlaylistsCtrl.js","./SearchCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/SearchCtrl.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/LocationModel.js":[function(require,module,exports){
'use strict';

var modelsModule = require('./_index.js');

/**
 * @ngInject
 */
modelsModule.factory('Location', ["$rootScope", "$log", "$q", function($rootScope, $log, $q ) {
  $log = $log.getInstance('Location');

  function Location(LocationData){
    angular.extend(this, LocationData);
    // $log.debug('{name}', this);
    
  }


  Location.responseTransformer = function (responseData) {
    $log.debug('resoponseTransformer {length}', responseData.locations);

    return responseData.locations
    					.map(Location.build);
  }


  Location.prototype.setTravelTime = function() {
      $log.debug('setTravelTime {name}', this);
      
      var _location = this;
      var deferred = $q.defer();

      var service = new google.maps.DistanceMatrixService;
       service.getDistanceMatrix({
         origins:       [{lat: $rootScope.currentPosition.latitude, lng:$rootScope.currentPosition.longitude}],
         destinations:  [{lat: parseFloat(this.lat), lng: parseFloat(this.long)}],
         travelMode:    google.maps.TravelMode.WALKING,
         unitSystem:    google.maps.UnitSystem.IMPERIAL,
         avoidHighways: false,
         avoidTolls:    false
       }, function(response, status) {
         	_location.travelTime = response.rows[0].elements[0].duration.text;
         	deferred.resolve(_location);
         // $log.debug("{name} - {travelTime}", _location);
          
       });

       
       return deferred.promise;

  }


  Location.build = function(lData) {
    // $log.debug('build {name}', lData);
    // Location.setTravelTime(lData);
    return new Location(lData);
  }

   

  
 
  return Location;


}]);

},{"./_index.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/_index.js":[function(require,module,exports){
'use strict';



module.exports = angular.module('app.models', []);

({"LocationModel":require("./LocationModel.js")});

},{"./LocationModel.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/LocationModel.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_config.js":[function(require,module,exports){
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
    controller: 'AppCtrl',
    resolve:{
        coordinates:["CurrentCoords", function(CurrentCoords) {
          return CurrentCoords.get();
        }]
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: 'SearchCtrl'
      }
    }
  })

  .state('app.map', {
      
      url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html',
          controller: 'MapCtrl as Map'
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
  $urlRouterProvider.otherwise('/app/map');
  
  


}//// OnConfig


module.exports = OnConfig;

},{"./utils/logging/LogDecorator.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/logging/LogDecorator.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_run.js":[function(require,module,exports){
'use strict';

/**
 * @ngInject
 */
OnRun.$inject = ["$ionicPlatform", "$log"];
function OnRun($ionicPlatform, $log) {
  $log = $log.getInstance('OnRun');
  
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

},{}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/CurrentCoordsService.js":[function(require,module,exports){
'use strict';

CurrentCoords.$inject = ["$q", "$http", "$log", "AppSettings"];
var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function CurrentCoords($q, $http, $log,  AppSettings) {
  $log = $log.getInstance("CurrentCoordsService");
  
  var service = {};

  service.get = function() {

    var deferred = $q.defer();    

    navigator.geolocation.getCurrentPosition(function(pos) {
        
      $log.debug('lat: {coords.latitude}',pos);
      $log.debug('long: {coords.longitude}',pos);

      deferred.resolve(pos.coords);
        
   }, function(error) {
       $log.warn('Unable to get location: ' + error.message);
       deferred.reject(err, status);
   });


    
    return deferred.promise;
  };

  return service;

}

servicesModule.service('CurrentCoords', CurrentCoords);

},{"./_index.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/LocationModel.js":[function(require,module,exports){
'use strict';

var modelsModule = require('./_index.js');

/**
 * @ngInject
 */
modelsModule.factory('Location', ["$rootScope", "$q", "$log", "$timeout", function($rootScope, $q, $log, $timeout) {
  $log = $log.getInstance('Location');

  function Location(LocationData){
    angular.extend(this, LocationData);
    $log.debug('{name}', this);
  }


  Location.responseTransformer = function (responseData) {
    $log.debug('resoponseTransformer {length}', responseData.locations);

    return responseData.locations.map(Location.build);

  }

  Location.build = function(lData) {
    $log.debug('build {name}', lData);
    return new Location(lData);

  }

  Location.setTravelTime = function(location, currentCords) {
      $log.debug('setTravelTime {name}', location);
      var _this = this;

      var service = new google.maps.DistanceMatrixService;
       service.getDistanceMatrix({
         origins:       [currentCords],
         destinations:  [{lat: parseFloat(value.lat), lng: parseFloat(value.long)}],
         travelMode:    google.maps.TravelMode.WALKING,
         unitSystem:    google.maps.UnitSystem.IMPERIAL,
         avoidHighways: false,
         avoidTolls:    false
       }, function(response, status) {
          _this.travelTime = response.rows[0].elements[0].duration.text;
          $log.debug("{name} - {travelTime}", value);
       });

  }

   

  
 
  return Location;


}]);

},{"./_index.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/LocationsService.js":[function(require,module,exports){
'use strict';

LocationsService.$inject = ["$log", "Yocal", "Location"];
var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function LocationsService($log, Yocal, Location) {
  $log = $log.getInstance("LocationsServiceService");

  var service = {};

  service.get = function( getData ) {

    $log.debug('GET location in a {radius}  of {lat}, {lng}', getData);

    return Yocal.get(getData)
                .then(Location.responseTransformer);

  };

  return service;

}

servicesModule.service('LocationsService', LocationsService);

},{"./_index.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/Yocal.js":[function(require,module,exports){
'use strict';

Yocal.$inject = ["$q", "$http", "AppSettings", "$log"];
var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function Yocal($q, $http, AppSettings, $log) {

  var service = {};
  $log = $log.getInstance("YocalService");

  service.get = function( getData ) {
    var deferred = $q.defer();

    // /listByDistanceCat/Food/8000/39.937893/-75.1689347
   $http.get(AppSettings.yocalAPI.base+'listByDistanceCat/Food/'+getData.radius+'/'+getData.lat+'/'+getData.lng).success(function(data) {
        $log.debug('found {length} spots within '+getData.radius+' meters of '+getData.lat+','+getData.lng, data.locations);
        data.radius = getData.radius;
        deferred.resolve(data);
    }).error(function(err, status) {
        $log.warn('Unable to get location: ' + err.message);
        deferred.reject(err, status);
    });

    return deferred.promise;
  };

  return service;

}

servicesModule.service('Yocal', Yocal);

},{"./_index.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js":[function(require,module,exports){
'use strict';



module.exports = angular.module('app.services', []);

({"CurrentCoordsService":require("./CurrentCoordsService.js"),"LocationModel":require("./LocationModel.js"),"LocationsService":require("./LocationsService.js"),"Yocal":require("./Yocal.js"),"example":require("./example.js")});

},{"./CurrentCoordsService.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/CurrentCoordsService.js","./LocationModel.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/LocationModel.js","./LocationsService.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/LocationsService.js","./Yocal.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/Yocal.js","./example.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/example.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/example.js":[function(require,module,exports){
'use strict';

ExampleService.$inject = ["$q", "$http"];
var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function ExampleService($q, $http) {

  var service = {};

  service.get = function() {
    var deferred = $q.defer();

    $http.get('apiPath').success(function(data) {
        deferred.resolve(data);
    }).error(function(err, status) {
        deferred.reject(err, status);
    });

    return deferred.promise;
  };

  return service;

}

servicesModule.service('ExampleService', ExampleService);

},{"./_index.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/DateTime.js":[function(require,module,exports){
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
            className = className ? className : '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2FwcC1tYWluLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb25zdGFudHMuZGV2ZWxvcG1lbnQuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL0FwcEN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL0Jyb3dzZUN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL01hcEN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL1BsYXlsaXN0Q3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvUGxheWxpc3RzQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvU2VhcmNoQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvX2luZGV4LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9tb2RlbHMvTG9jYXRpb25Nb2RlbC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvbW9kZWxzL19pbmRleC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvb25fY29uZmlnLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9vbl9ydW4uanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3NlcnZpY2VzL0N1cnJlbnRDb29yZHNTZXJ2aWNlLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9Mb2NhdGlvbk1vZGVsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9Mb2NhdGlvbnNTZXJ2aWNlLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9Zb2NhbC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvX2luZGV4LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9leGFtcGxlLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy91dGlscy9EYXRlVGltZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvdXRpbHMvbG9nZ2luZy9Mb2dEZWNvcmF0b3IuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3V0aWxzL2xvZ2dpbmcvTG9nRW5oYW5jZXIuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3V0aWxzL3N1cHBsYW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7O0FBS0EsUUFBUTtBQUNSLFFBQVE7QUFDUixRQUFROzs7O0FBSVIsUUFBUSxRQUFRLFVBQVUsTUFBTSxXQUFXOztFQUV6QyxJQUFJLFdBQVc7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBOzs7Ozs7OztFQVFGLE9BQU8sTUFBTSxRQUFRLE9BQU8sT0FBTzs7RUFFbkMsUUFBUSxPQUFPLE9BQU8sU0FBUyxlQUFlLFFBQVE7O0VBRXRELFFBQVEsT0FBTyxPQUFPLE9BQU8sUUFBUTs7RUFFckMsUUFBUSxPQUFPLE9BQU8sSUFBSSxRQUFROztFQUVsQyxRQUFRLFVBQVUsVUFBVSxDQUFDOztHQUU1Qjs7O0FDcENIOztBQUVBLElBQUksY0FBYztFQUNoQixTQUFTOztJQUVQLE1BQU07OztFQUdSLGFBQWE7OztBQUdmLE9BQU8sVUFBVSxZQUFZOzs7QUNYN0I7OztBQUVBLElBQUksb0JBQW9CLFFBQVE7Ozs7O0FBS2hDLFNBQVMsUUFBUSxNQUFNLFlBQVksUUFBUSxhQUFhLFVBQVUsYUFBYSxhQUFhOztFQUUxRixPQUFPLEtBQUssWUFBWTs7RUFFeEIsSUFBSSxLQUFLOztFQUVULFdBQVcsa0JBQWtCO0VBQzdCLFFBQVEsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXFDYjs7QUFFRCxrQkFBa0IsV0FBVyxXQUFXLFNBQVM7OztBQ3JEakQ7OztBQUVBLElBQUksb0JBQW9CLFFBQVE7Ozs7O0FBS2hDLFNBQVMsV0FBVyxRQUFRLE9BQU87O0VBRWpDLE9BQU8sUUFBUSxLQUFLO0VBQ3BCLE9BQU8sVUFBVSxTQUFTLEVBQUU7SUFDMUIsT0FBTyxPQUFPOztFQUVoQixPQUFPLFdBQVc7RUFDbEIsTUFBTSxNQUFNLEtBQUssU0FBUyxLQUFLO0lBQzdCLFFBQVEsSUFBSTtJQUNaLE9BQU8sWUFBWTs7RUFFckIsSUFBSSxhQUFhO0lBQ2Y7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFD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QU9DOztBQUVELElBQUksWUFBWSxVQUFVLFVBQVUsUUFBUSxVQUFVO1lBQzFDLFVBQVUsV0FBVzs7WUFFckIsT0FBTyxTQUFTLFFBQVEsU0FBUyxTQUFTLEdBQUcsR0FBRztnQkFDNUMsSUFBSSxJQUFJLEVBQUUsTUFBTTtvQkFDWixJQUFJOztnQkFFUixJQUFJO29CQUNBLEtBQUssSUFBSSxLQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtrQkFDN0IsTUFBTSxFQUFFO29CQUNOLElBQUk7OztnQkFHUixPQUFPLENBQUMsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksSUFBSTs7Ozs7O0FBTTlFLFNBQVMsVUFBVSxTQUFTLFVBQVUsTUFBTSxNQUFNO0lBQzlDLEtBQUssVUFBVSxRQUFRO0lBQ3ZCLE9BQU87OztBQUdYLE9BQU8sT0FBTyxZQUFZLFVBQVUsUUFBUSxVQUFVO0lBQ2xELElBQUksT0FBTztJQUNYLE9BQU8sU0FBUyxNQUFNLFFBQVE7Ozs7OztBQU1sQyxPQUFPLFdBQVcsT0FBTyxXQUFXLFNBQVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBhbmd1bGFyIG1vZHVsZXNcbi8vIHJlcXVpcmUoJ2FuZ3VsYXItbW9kdWxlLXNhbml0aXplJyk7XG4vLyByZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9faW5kZXgnKTtcbnJlcXVpcmUoJy4vc2VydmljZXMvX2luZGV4Jyk7XG5yZXF1aXJlKCcuL21vZGVscy9faW5kZXgnKTtcbi8vIHJlcXVpcmUoJy4vY29tcG9uZW50cy9faW5kZXgnKTtcblxuLy8gY3JlYXRlIGFuZCBib290c3RyYXAgYXBwbGljYXRpb25cbmFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgdmFyIHJlcXVpcmVzID0gW1xuICAgICdpb25pYycsXG4gICAgJ2FwcC5jb250cm9sbGVycycsXG4gICAgJ2FwcC5zZXJ2aWNlcycsXG4gICAgJ2FwcC5tb2RlbHMnLFxuICAgICd1aS5yb3V0ZXInXG4gICAgLy8gJ3RlbXBsYXRlcycsXG4gICAgLy8gJ25nU2FuaXRpemUnLFxuICAgIC8vICdhcHAuc2VydmljZXMnLFxuICAgIC8vICdhcHAuY29tcG9uZW50cydcbiAgXTtcblxuICAvLyBtb3VudCBvbiB3aW5kb3cgZm9yIHRlc3RpbmdcbiAgd2luZG93LmFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCByZXF1aXJlcyk7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnN0YW50KCdBcHBTZXR0aW5ncycsIHJlcXVpcmUoJy4vY29uc3RhbnRzLmRldmVsb3BtZW50JykpO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb25maWcocmVxdWlyZSgnLi9vbl9jb25maWcnKSk7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLnJ1bihyZXF1aXJlKCcuL29uX3J1bicpKTtcblxuICBhbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydhcHAnXSk7XG5cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFwcFNldHRpbmdzID0ge1xuICB5b2NhbEFQSTp7XG4gICAgLy8gYmFzZTogJ2h0dHA6Ly95b2VuZHBvaW50NC13YmJzLnJoY2xvdWQuY29tL2FwaS92MS95b2thbC9kYXRhLydcbiAgICBiYXNlOiAnaHR0cDovL2xvY2FsaG9zdDo4MTAwL2FwaS92MS95b2thbC9kYXRhLydcbiAgfSxcblxuICBHTUFQX1JBRElVUzogMTAwMFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHBTZXR0aW5nczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIEFwcEN0cmwoJGxvZywgJHJvb3RTY29wZSwgJHNjb3BlLCAkaW9uaWNNb2RhbCwgJHRpbWVvdXQsIGNvb3JkaW5hdGVzLCBBcHBTZXR0aW5ncykge1xuXG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdBcHBDdHJsJyk7XG5cbiAgdmFyIHZtID0gdGhpcztcbiAgLy8gc2V0IGN1cmVudCBwb3NpdGlvbiB0byByb290U2NvcGUgdG8gbWFrZSBnbG9iYWxseSBhdmFpbGFibGUgXG4gICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uID0gY29vcmRpbmF0ZXM7XG4gIGNvbnNvbGUubG9nKEFwcFNldHRpbmdzKTtcbiAgXG4gIFxuXG4gIC8vIC8vIEZvcm0gZGF0YSBmb3IgdGhlIGxvZ2luIG1vZGFsXG4gIC8vICRzY29wZS5sb2dpbkRhdGEgPSB7fTtcblxuICAvLyAvLyBDcmVhdGUgdGhlIGxvZ2luIG1vZGFsIHRoYXQgd2Ugd2lsbCB1c2UgbGF0ZXJcbiAgLy8gJGlvbmljTW9kYWwuZnJvbVRlbXBsYXRlVXJsKCd0ZW1wbGF0ZXMvbG9naW4uaHRtbCcsIHtcbiAgLy8gICBzY29wZTogJHNjb3BlXG4gIC8vIH0pLnRoZW4oZnVuY3Rpb24obW9kYWwpIHtcbiAgLy8gICAkc2NvcGUubW9kYWwgPSBtb2RhbDtcbiAgLy8gfSk7XG5cbiAgLy8gLy8gVHJpZ2dlcmVkIGluIHRoZSBsb2dpbiBtb2RhbCB0byBjbG9zZSBpdFxuICAvLyAkc2NvcGUuY2xvc2VMb2dpbiA9IGZ1bmN0aW9uKCkge1xuICAvLyAgICRzY29wZS5tb2RhbC5oaWRlKCk7XG4gIC8vIH07XG5cbiAgLy8gLy8gT3BlbiB0aGUgbG9naW4gbW9kYWxcbiAgLy8gJHNjb3BlLmxvZ2luID0gZnVuY3Rpb24oKSB7XG4gIC8vICAgJHNjb3BlLm1vZGFsLnNob3coKTtcbiAgLy8gfTtcblxuICAvLyAvLyBQZXJmb3JtIHRoZSBsb2dpbiBhY3Rpb24gd2hlbiB0aGUgdXNlciBzdWJtaXRzIHRoZSBsb2dpbiBmb3JtXG4gIC8vICRzY29wZS5kb0xvZ2luID0gZnVuY3Rpb24oKSB7XG4gIC8vICAgY29uc29sZS5sb2coJ0RvaW5nIGxvZ2luJywgJHNjb3BlLmxvZ2luRGF0YSk7XG5cbiAgLy8gICAvLyBTaW11bGF0ZSBhIGxvZ2luIGRlbGF5LiBSZW1vdmUgdGhpcyBhbmQgcmVwbGFjZSB3aXRoIHlvdXIgbG9naW5cbiAgLy8gICAvLyBjb2RlIGlmIHVzaW5nIGEgbG9naW4gc3lzdGVtXG4gIC8vICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gIC8vICAgICAkc2NvcGUuY2xvc2VMb2dpbigpO1xuICAvLyAgIH0sIDEwMDApO1xuICAvLyB9O1xuXG4gIFxuXG59O1xuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdBcHBDdHJsJywgQXBwQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBCcm93c2VDdHJsKCRzY29wZSwgWW9jYWwpIHtcbiAgXG4gICRzY29wZS5yYW5kbyA9IE1hdGgucmFuZG9tKCk7XG4gICRzY29wZS5nZXRUeXBlID0gZnVuY3Rpb24oeCl7XG4gICAgcmV0dXJuIHR5cGVvZiB4O1xuICB9XG4gICRzY29wZS5sb2NhdGlvbnMgPVtdO1xuICBZb2NhbC5nZXQoKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICRzY29wZS5sb2NhdGlvbnMgPSBkYXRhO1xuICB9KTtcbiAgdmFyIF9sb2NhdGlvbnMgPSBbXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU2ZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkxvcyBHYWxsb3NcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjk1MSBXb2xmIFN0IFBoaWxhZGVscGhpYSBQQSAxOTE0OCBVbml0ZWQgU3RhdGVzXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45MjExNzhcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTYzMjU5OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246MTkxOFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTZmXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSGFyZGVuYVwiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiNzU0IFMgSGlja3MgU3QsIFBoaWxhZGVscGhpYSwgUEEgMTkxNDVcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5Ljk0MTY4NlwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNjg0MTg0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjo0MjNcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU3MVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIk5hbSBTb24gQmFrZXJ5XCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIxNjAxIFdhc2hpbmd0b24gQXZlIFBoaWxhZGVscGhpYSBQQSAxOTE0NiBVbml0ZWQgU3RhdGVzXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45MzkyMDk0XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE3MDI2NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246MTg1XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNzJcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJCcmVlenkncyBDYWZlXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIxMjAwIFBvaW50IEJyZWV6ZSBBdmUgUGhpbGFkZWxwaGlhIFBBIDE5MTQ2IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5LjkzNzIzNzJcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTc3MTA3M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246NzAyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNzNcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJQaXp6YSBCcmFpbi9MaXR0bGUgQmFieSdzXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIyMzEzIEZyYW5rZm9yZCBBdmUgUGhpbGFkZWxwaGlhIFBBIDE5MTI1IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5Ljk4MDY3NDZcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTI4MDk2OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246NTg5NFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTc0XCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiU2tldGNoIEJ1cmdlclwiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiNDEzIEUgR2lyYXJkIEF2ZSBQaGlsYWRlbHBoaWEgUEEgMTkxMjUgVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTcwNTc5MlwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xMzAxMTg0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjo0OTE3XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNzZcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJUb3J0aWxsZXJpYSBTYW4gUm9tYW5cIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjk1MSBTIDl0aCBTdCBQaGlsYWRlbHBoaWEgUEEgMTkxNDcgVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTM3NjM5NlwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNTc5ODlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjkzNlwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTc4XCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSGFpIFN0cmVldCBLaXRjaGVuICYgQ28uXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIzMiBTIDE4dGggU3QgUGhpbGFkZWxwaGlhIFBBIDE5MTAzIFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5Ljk1MjE2MzhcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTcwNDYxOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246MTU5MFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTgwXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiRmVkZXJhbCBEb251dHNcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjEyMTkgUyAybmQgU3QgUGhpbGFkZWxwaGlhIFBBIDE5MTQ3IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5LjkzMjIwOThcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTQ3NDYwM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246MTk0MVwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTgxXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQmluZyBCaW5nIERpbSBTdW1cIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjE2NDggRSBQYXNzeXVuayBBdmUgUGhpbGFkZWxwaGlhIFBBIDE5MTQ4IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5LjkyODk1OVwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNjQ3MDkyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjoxMDU2XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllODhcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJCbGFjayBOIEJyZXdcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjUyMyBFIFBhc3N5dW5rIEF2ZSwgUGhpbGFkZWxwaGlhLCBQQSAxOTE0N1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTQxNzYxXCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE1MDM5MjhcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjE2NDJcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU4ZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlBoaWxseSBGbGF2b3JzXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIyMDA0IEZhaXJtb3VudCBBdmUsIFBoaWxhZGVscGhpYSwgUEEgMTkxMzBcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5Ljk2NzA4N1wiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNzA1MTI2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjozMjQ0XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllOGZcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJDYXBvZ2lybyBHZWxhdG9cIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjIzMyBDaGVzdG51dCBTdHJlZXQsIFBoaWxhZGVscGhpYSwgUEFcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5Ljk0ODgyMlwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNDUzNThcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjIzNTJcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU5M1wiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIjFzdCBPcmllbnRhbCBTdXBlcm1hcmtldFwiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMTExMSBTIDZ0aCBTdCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ3XCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45MzQwMTU4XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE1MzY4NTFcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjEzNzNcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWVhMFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIksgJiBBIFNhbmR3aWNoZXMgJiBHcm9jZXJ5XCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIxNDM5IFMgMjB0aCBTdCwgUGhpbGFkZWxwaGlhLCBQQSAxOTE0NlwiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTMzMDAxMlwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNzc0NzQ4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjo5MTBcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWVhMVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlNvdXRoIEhvdXNlXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIyNTM1IFMgMTN0aCBTdCwgUGhpbGFkZWxwaGlhLCBQQSAxOTE0OFwiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTE4MDM3NFwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNjg3MTMxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjoyMjA1XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllYTdcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJDaW5lbXVnXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCJzIDE5MTQ4LCAxNjA3IFMgQnJvYWQgU3QsIFBoaWxhZGVscGhpYSwgUEEgMTkxNDhcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5LjkzMDE4MzlcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTY4MDA2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjo4NjBcIlxuICAgICAgXVxuICAgIH1cbiAgXTtcblxuXG59O1xuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdCcm93c2VDdHJsJywgQnJvd3NlQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBNYXBDdHJsKCRyb290U2NvcGUsICRzY29wZSwgJGxvZywgJGlvbmljTG9hZGluZywgQXBwU2V0dGluZ3MsIExvY2F0aW9uc1NlcnZpY2UgKSB7XG5cbiAgICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZShcIk1hcEN0cmxcIik7XG5cbiBcdCAgLy8gVmlld01vZGVsXG4gIFx0dmFyIHZtID0gdGhpcztcbiAgICB2bS5jb29yZGluYXRlcyA9IHt9O1x0XG4gICAgdm0ucmFkaXVzID0gQXBwU2V0dGluZ3MuR01BUF9SQURJVVM7XG4gICAgJHNjb3BlLkN1cnJlbnRDb29yZHMgPSAgJHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb247XG5cbiAgICAgIFxuICAgIHZhciBtYXBPcHRpb25zID0ge1xuICAgICAgY2VudGVyOiAgICB7bGF0OiAkc2NvcGUuQ3VycmVudENvb3Jkcy5sYXRpdHVkZSwgXG4gICAgICAgICAgICAgICAgICBsbmc6ICRzY29wZS5DdXJyZW50Q29vcmRzLmxvbmdpdHVkZX0sXG4gICAgICB6b29tOiAgICAgIDEsXG4gICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLFxuICAgIH07XG5cbiAgICAkaW9uaWNMb2FkaW5nLnNob3coe1xuICAgICAgdGVtcGxhdGU6IFwiRXhwbG9yaW5nIFlvdXIgTG9jYXRpb24gLi4uXCIsXG4gICAgICBiYWNrZHJvcDogdHJ1ZVxuICAgIH0pO1xuXG5cbiAgICB2bS5nbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1hcFwiKSwgbWFwT3B0aW9ucyk7XG5cbiAgICAvLyBEcm9wIHBpbiBvbiBjdXJyZW50IGxvY2F0aW9uXG4gICAgLy8gdmFyIHlvdUFyZUhlcmUgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAvLyAgICAgcG9zaXRpb246IG1hcE9wdGlvbnMuY2VudGVyLFxuICAgIC8vICAgICBtYXA6ICAgICAgdm0uZ21hcCxcbiAgICAvLyAgICAgdGl0bGU6ICAgICdZb3UgQXJlIEhlcmUnXG4gICAgLy8gfSk7XG5cbiAgICBcbiAgICBcbiAgICBMb2NhdGlvbnNTZXJ2aWNlLmdldCh7cmFkaXVzOiB2bS5yYWRpdXMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6ICRzY29wZS5DdXJyZW50Q29vcmRzLmxhdGl0dWRlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiAkc2NvcGUuQ3VycmVudENvb3Jkcy5sb25naXR1ZGUgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGxvY2F0aW9ucyl7XG4gICAgICAkaW9uaWNMb2FkaW5nLmhpZGUoKTtcbiAgICAgIFxuICAgICAgYW5ndWxhci5mb3JFYWNoKGxvY2F0aW9ucywgZnVuY3Rpb24obG9jYXRpb24sIGluZGV4KXtcblxuICAgICAgICB2YXIgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnPGgzIGlkPVwiZmlyc3RIZWFkaW5nXCIgY2xhc3M9XCJmaXJzdEhlYWRpbmdcIj4nK2xvY2F0aW9uLm5hbWUrJzwvaDM+J1xuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgICBwb3NpdGlvbjogIHtsYXQ6IHBhcnNlRmxvYXQobG9jYXRpb24ubGF0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogcGFyc2VGbG9hdChsb2NhdGlvbi5sb25nKX0sXG4gICAgICAgICAgICAgIG1hcDogICAgICAgdm0uZ21hcCxcbiAgICAgICAgICAgICAgbGFiZWw6ICAgICBsb2NhdGlvbi5uYW1lLFxuICAgICAgICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxuICAgICAgICAgICAgICBvcGFjaXR5OiAgIDBcbiAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgdmFyIGRpcmVjdGlvbnNEaXNwbGF5ID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcih7XG4gICAgICAgICAgICBtYXA6IHZtLmdtYXBcbiAgICAgICAgICB9KSxcblxuICAgICAgICAgIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbjogbWFya2VyLnBvc2l0aW9uLFxuICAgICAgICAgICAgb3JpZ2luOiAgICAgIG1hcE9wdGlvbnMuY2VudGVyLFxuICAgICAgICAgICAgdHJhdmVsTW9kZTogIGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuV0FMS0lOR1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICB2YXIgZGlyZWN0aW9uc1NlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UoKTsvLyBQYXNzIHRoZSBkaXJlY3Rpb25zIHJlcXVlc3QgdG8gdGhlIGRpcmVjdGlvbnMgc2VydmljZS5cblxuICAgICAgICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKHJlcXVlc3QsIGZ1bmN0aW9uKHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xuICAgICAgICAgICAgICAvLyBEaXNwbGF5IHRoZSByb3V0ZSBvbiB0aGUgbWFwLlxuICAgICAgICAgICAgICBkaXJlY3Rpb25zRGlzcGxheS5zZXREaXJlY3Rpb25zKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuXG4gICAgICAgIC8vIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICBpbmZvd2luZG93Lm9wZW4odm0uZ21hcCwgbWFya2VyKTtcbiAgICAgICAgLy8gfSk7Ly8gZW5kIG1hcmtlciBldmVudFxuXG5cbiAgICAgIH0pO1xuICAgICAgICBcbiAgICB9KTtcblxuICAgXG59Oy8vLy8gTWFwQ3RybFxuXG5cblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignTWFwQ3RybCcsIE1hcEN0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gUGxheWxpc3RDdHJsKCRzY29wZSkge1xuICBcblxuXG59O1xuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdQbGF5bGlzdEN0cmwnLCBQbGF5bGlzdEN0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gUGxheWxpc3RzQ3RybCgkc2NvcGUpIHtcbiAgXG4gJHNjb3BlLnBsYXlsaXN0cyA9IFtcbiAgICB7IHRpdGxlOiAnUmVnZ2FlJywgaWQ6IDEgfSxcbiAgICB7IHRpdGxlOiAnQ2hpbGwnLCBpZDogMiB9LFxuICAgIHsgdGl0bGU6ICdEdWJzdGVwJywgaWQ6IDMgfSxcbiAgICB7IHRpdGxlOiAnSW5kaWUnLCBpZDogNCB9LFxuICAgIHsgdGl0bGU6ICdSYXAnLCBpZDogNSB9LFxuICAgIHsgdGl0bGU6ICdDb3diZWxsJywgaWQ6IDYgfVxuICBdO1xuXG59O1xuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdQbGF5bGlzdHNDdHJsJywgUGxheWxpc3RzQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBTZWFyY2hDdHJsKCRzY29wZSwgJHJvb3RTY29wZSwgJHEsICAkbG9nLCAgTG9jYXRpb25zU2VydmljZSwgICRpb25pY0xvYWRpbmcsICAkaW9uaWNTbGlkZUJveERlbGVnYXRlLCBBcHBTZXR0aW5ncykge1xuICAgICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdTZWFyY2hDdHJsJyk7XG5cbiBcdC8vIFZpZXdNb2RlbFxuICBcdHZhciB2bSA9IHRoaXM7XG4gICAgdm0ucmFkaXVzID0gQXBwU2V0dGluZ3MuR01BUF9SQURJVVM7XG4gICAgJHNjb3BlLnJhZGl1cyA9IEFwcFNldHRpbmdzLkdNQVBfUkFESVVTO1xuXG4gICAgJHNjb3BlLmxvY2F0aW9ucyA9W107XG4gICAgJHNjb3BlLkN1cnJlbnRDb29yZHMgPSAgJHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb247XG5cbiAgICAkaW9uaWNMb2FkaW5nLnNob3coe1xuICAgIFx0dGVtcGxhdGU6IFwiRmluZGluZyBSYWQgU3BvdHMgLi4uXCIsXG4gICAgXHRiYWNrZHJvcDogdHJ1ZVxuICAgIH0pO1xuXG5cbiAgICBMb2NhdGlvbnNTZXJ2aWNlLmdldCh7cmFkaXVzOiB2bS5yYWRpdXMsICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiAgICAkc2NvcGUuQ3VycmVudENvb3Jkcy5sYXRpdHVkZSwgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6ICAgICRzY29wZS5DdXJyZW50Q29vcmRzLmxvbmdpdHVkZSB9KVxuXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVswXS5zZXRUcmF2ZWxUaW1lKCkudGhlbihmdW5jdGlvbihsb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhWzBdID1sb2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvY2F0aW9ucyA9IGRhdGE7ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGlvbmljU2xpZGVCb3hEZWxlZ2F0ZS51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW9uaWNMb2FkaW5nLmhpZGUoKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgIFx0ICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAkc2NvcGUuc2xpZGVIYXNDaGFuZ2VkID0gZnVuY3Rpb24oaWR4KSB7XG4gICAgICAgIHZhciBjdXJyZW50U2xpZGUgPSAkc2NvcGUubG9jYXRpb25zW2lkeF07XG4gICAgICAgICRsb2cuZGVidWcoJ3NsaWRlSGFzQ2hhbmdlZCB7bmFtZX0nLCBjdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIGN1cnJlbnRTbGlkZS5zZXRUcmF2ZWxUaW1lKCkudGhlbihmdW5jdGlvbihsb2NhbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICBcbn07XG5cblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignU2VhcmNoQ3RybCcsIFNlYXJjaEN0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmNvbnRyb2xsZXJzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1vZGVsc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbm1vZGVsc01vZHVsZS5mYWN0b3J5KCdMb2NhdGlvbicsIGZ1bmN0aW9uKCRyb290U2NvcGUsICRsb2csICRxICkge1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnTG9jYXRpb24nKTtcblxuICBmdW5jdGlvbiBMb2NhdGlvbihMb2NhdGlvbkRhdGEpe1xuICAgIGFuZ3VsYXIuZXh0ZW5kKHRoaXMsIExvY2F0aW9uRGF0YSk7XG4gICAgLy8gJGxvZy5kZWJ1Zygne25hbWV9JywgdGhpcyk7XG4gICAgXG4gIH1cblxuXG4gIExvY2F0aW9uLnJlc3BvbnNlVHJhbnNmb3JtZXIgPSBmdW5jdGlvbiAocmVzcG9uc2VEYXRhKSB7XG4gICAgJGxvZy5kZWJ1ZygncmVzb3BvbnNlVHJhbnNmb3JtZXIge2xlbmd0aH0nLCByZXNwb25zZURhdGEubG9jYXRpb25zKTtcblxuICAgIHJldHVybiByZXNwb25zZURhdGEubG9jYXRpb25zXG4gICAgXHRcdFx0XHRcdC5tYXAoTG9jYXRpb24uYnVpbGQpO1xuICB9XG5cblxuICBMb2NhdGlvbi5wcm90b3R5cGUuc2V0VHJhdmVsVGltZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgJGxvZy5kZWJ1Zygnc2V0VHJhdmVsVGltZSB7bmFtZX0nLCB0aGlzKTtcbiAgICAgIFxuICAgICAgdmFyIF9sb2NhdGlvbiA9IHRoaXM7XG4gICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICB2YXIgc2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXN0YW5jZU1hdHJpeFNlcnZpY2U7XG4gICAgICAgc2VydmljZS5nZXREaXN0YW5jZU1hdHJpeCh7XG4gICAgICAgICBvcmlnaW5zOiAgICAgICBbe2xhdDogJHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb24ubGF0aXR1ZGUsIGxuZzokcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbi5sb25naXR1ZGV9XSxcbiAgICAgICAgIGRlc3RpbmF0aW9uczogIFt7bGF0OiBwYXJzZUZsb2F0KHRoaXMubGF0KSwgbG5nOiBwYXJzZUZsb2F0KHRoaXMubG9uZyl9XSxcbiAgICAgICAgIHRyYXZlbE1vZGU6ICAgIGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuV0FMS0lORyxcbiAgICAgICAgIHVuaXRTeXN0ZW06ICAgIGdvb2dsZS5tYXBzLlVuaXRTeXN0ZW0uSU1QRVJJQUwsXG4gICAgICAgICBhdm9pZEhpZ2h3YXlzOiBmYWxzZSxcbiAgICAgICAgIGF2b2lkVG9sbHM6ICAgIGZhbHNlXG4gICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cykge1xuICAgICAgICAgXHRfbG9jYXRpb24udHJhdmVsVGltZSA9IHJlc3BvbnNlLnJvd3NbMF0uZWxlbWVudHNbMF0uZHVyYXRpb24udGV4dDtcbiAgICAgICAgIFx0ZGVmZXJyZWQucmVzb2x2ZShfbG9jYXRpb24pO1xuICAgICAgICAgLy8gJGxvZy5kZWJ1ZyhcIntuYW1lfSAtIHt0cmF2ZWxUaW1lfVwiLCBfbG9jYXRpb24pO1xuICAgICAgICAgIFxuICAgICAgIH0pO1xuXG4gICAgICAgXG4gICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG5cbiAgfVxuXG5cbiAgTG9jYXRpb24uYnVpbGQgPSBmdW5jdGlvbihsRGF0YSkge1xuICAgIC8vICRsb2cuZGVidWcoJ2J1aWxkIHtuYW1lfScsIGxEYXRhKTtcbiAgICAvLyBMb2NhdGlvbi5zZXRUcmF2ZWxUaW1lKGxEYXRhKTtcbiAgICByZXR1cm4gbmV3IExvY2F0aW9uKGxEYXRhKTtcbiAgfVxuXG4gICBcblxuICBcbiBcbiAgcmV0dXJuIExvY2F0aW9uO1xuXG5cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLm1vZGVscycsIFtdKTtcblxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTsiLCIndXNlIHN0cmljdCc7XG5cblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gT25Db25maWcoJHN0YXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRwcm92aWRlKSB7XG4gIFxuICAvL2FjdGl2YXRlIExvZ0RlY29yYXRvclxuICByZXF1aXJlKCcuL3V0aWxzL2xvZ2dpbmcvTG9nRGVjb3JhdG9yLmpzJykoJHByb3ZpZGUpO1xuXG4kc3RhdGVQcm92aWRlclxuXG4gIC5zdGF0ZSgnYXBwJywge1xuICAgIHVybDogJy9hcHAnLFxuICAgIGFic3RyYWN0OiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL21lbnUuaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ0FwcEN0cmwnLFxuICAgIHJlc29sdmU6e1xuICAgICAgICBjb29yZGluYXRlczpmdW5jdGlvbihDdXJyZW50Q29vcmRzKSB7XG4gICAgICAgICAgcmV0dXJuIEN1cnJlbnRDb29yZHMuZ2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgLnN0YXRlKCdhcHAuc2VhcmNoJywge1xuICAgIHVybDogJy9zZWFyY2gnLFxuICAgIHZpZXdzOiB7XG4gICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3NlYXJjaC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1NlYXJjaEN0cmwnXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIC5zdGF0ZSgnYXBwLm1hcCcsIHtcbiAgICAgIFxuICAgICAgdXJsOiAnL21hcCcsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbWFwLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdNYXBDdHJsIGFzIE1hcCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLnN0YXRlKCdhcHAucGxheWxpc3RzJywge1xuICAgICAgdXJsOiAnL3BsYXlsaXN0cycsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvcGxheWxpc3RzLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdQbGF5bGlzdHNDdHJsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAuc3RhdGUoJ2FwcC5zaW5nbGUnLCB7XG4gICAgdXJsOiAnL3BsYXlsaXN0cy86cGxheWxpc3RJZCcsXG4gICAgdmlld3M6IHtcbiAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvcGxheWxpc3QuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdQbGF5bGlzdEN0cmwnXG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuXG4gIC8vIGlmIG5vbmUgb2YgdGhlIGFib3ZlIHN0YXRlcyBhcmUgbWF0Y2hlZCwgdXNlIHRoaXMgYXMgdGhlIGZhbGxiYWNrXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9hcHAvbWFwJyk7XG4gIFxuICBcblxuXG59Ly8vLyBPbkNvbmZpZ1xuXG5cbm1vZHVsZS5leHBvcnRzID0gT25Db25maWc7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBPblJ1bigkaW9uaWNQbGF0Zm9ybSwgJGxvZykge1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnT25SdW4nKTtcbiAgXG4gICRpb25pY1BsYXRmb3JtLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIC8vIEhpZGUgdGhlIGFjY2Vzc29yeSBiYXIgYnkgZGVmYXVsdCAocmVtb3ZlIHRoaXMgdG8gc2hvdyB0aGUgYWNjZXNzb3J5IGJhciBhYm92ZSB0aGUga2V5Ym9hcmRcbiAgICAvLyBmb3IgZm9ybSBpbnB1dHMpXG4gICAgaWYgKHdpbmRvdy5jb3Jkb3ZhICYmIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQpIHtcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5oaWRlS2V5Ym9hcmRBY2Nlc3NvcnlCYXIodHJ1ZSk7XG4gICAgICBjb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQuZGlzYWJsZVNjcm9sbCh0cnVlKTtcblxuICAgIH1cbiAgICBpZiAod2luZG93LlN0YXR1c0Jhcikge1xuICAgICAgLy8gb3JnLmFwYWNoZS5jb3Jkb3ZhLnN0YXR1c2JhciByZXF1aXJlZFxuICAgICAgU3RhdHVzQmFyLnN0eWxlRGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT25SdW47IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2VydmljZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBDdXJyZW50Q29vcmRzKCRxLCAkaHR0cCwgJGxvZywgIEFwcFNldHRpbmdzKSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKFwiQ3VycmVudENvb3Jkc1NlcnZpY2VcIik7XG4gIFxuICB2YXIgc2VydmljZSA9IHt9O1xuXG4gIHNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpOyAgICBcblxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24ocG9zKSB7XG4gICAgICAgIFxuICAgICAgJGxvZy5kZWJ1ZygnbGF0OiB7Y29vcmRzLmxhdGl0dWRlfScscG9zKTtcbiAgICAgICRsb2cuZGVidWcoJ2xvbmc6IHtjb29yZHMubG9uZ2l0dWRlfScscG9zKTtcblxuICAgICAgZGVmZXJyZWQucmVzb2x2ZShwb3MuY29vcmRzKTtcbiAgICAgICAgXG4gICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICRsb2cud2FybignVW5hYmxlIHRvIGdldCBsb2NhdGlvbjogJyArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIsIHN0YXR1cyk7XG4gICB9KTtcblxuXG4gICAgXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG5cbn1cblxuc2VydmljZXNNb2R1bGUuc2VydmljZSgnQ3VycmVudENvb3JkcycsIEN1cnJlbnRDb29yZHMpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1vZGVsc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbm1vZGVsc01vZHVsZS5mYWN0b3J5KCdMb2NhdGlvbicsIGZ1bmN0aW9uKCRyb290U2NvcGUsICRxLCAkbG9nLCAkdGltZW91dCkge1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnTG9jYXRpb24nKTtcblxuICBmdW5jdGlvbiBMb2NhdGlvbihMb2NhdGlvbkRhdGEpe1xuICAgIGFuZ3VsYXIuZXh0ZW5kKHRoaXMsIExvY2F0aW9uRGF0YSk7XG4gICAgJGxvZy5kZWJ1Zygne25hbWV9JywgdGhpcyk7XG4gIH1cblxuXG4gIExvY2F0aW9uLnJlc3BvbnNlVHJhbnNmb3JtZXIgPSBmdW5jdGlvbiAocmVzcG9uc2VEYXRhKSB7XG4gICAgJGxvZy5kZWJ1ZygncmVzb3BvbnNlVHJhbnNmb3JtZXIge2xlbmd0aH0nLCByZXNwb25zZURhdGEubG9jYXRpb25zKTtcblxuICAgIHJldHVybiByZXNwb25zZURhdGEubG9jYXRpb25zLm1hcChMb2NhdGlvbi5idWlsZCk7XG5cbiAgfVxuXG4gIExvY2F0aW9uLmJ1aWxkID0gZnVuY3Rpb24obERhdGEpIHtcbiAgICAkbG9nLmRlYnVnKCdidWlsZCB7bmFtZX0nLCBsRGF0YSk7XG4gICAgcmV0dXJuIG5ldyBMb2NhdGlvbihsRGF0YSk7XG5cbiAgfVxuXG4gIExvY2F0aW9uLnNldFRyYXZlbFRpbWUgPSBmdW5jdGlvbihsb2NhdGlvbiwgY3VycmVudENvcmRzKSB7XG4gICAgICAkbG9nLmRlYnVnKCdzZXRUcmF2ZWxUaW1lIHtuYW1lfScsIGxvY2F0aW9uKTtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBzZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpc3RhbmNlTWF0cml4U2VydmljZTtcbiAgICAgICBzZXJ2aWNlLmdldERpc3RhbmNlTWF0cml4KHtcbiAgICAgICAgIG9yaWdpbnM6ICAgICAgIFtjdXJyZW50Q29yZHNdLFxuICAgICAgICAgZGVzdGluYXRpb25zOiAgW3tsYXQ6IHBhcnNlRmxvYXQodmFsdWUubGF0KSwgbG5nOiBwYXJzZUZsb2F0KHZhbHVlLmxvbmcpfV0sXG4gICAgICAgICB0cmF2ZWxNb2RlOiAgICBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLldBTEtJTkcsXG4gICAgICAgICB1bml0U3lzdGVtOiAgICBnb29nbGUubWFwcy5Vbml0U3lzdGVtLklNUEVSSUFMLFxuICAgICAgICAgYXZvaWRIaWdod2F5czogZmFsc2UsXG4gICAgICAgICBhdm9pZFRvbGxzOiAgICBmYWxzZVxuICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICAgICAgICBfdGhpcy50cmF2ZWxUaW1lID0gcmVzcG9uc2Uucm93c1swXS5lbGVtZW50c1swXS5kdXJhdGlvbi50ZXh0O1xuICAgICAgICAgICRsb2cuZGVidWcoXCJ7bmFtZX0gLSB7dHJhdmVsVGltZX1cIiwgdmFsdWUpO1xuICAgICAgIH0pO1xuXG4gIH1cblxuICAgXG5cbiAgXG4gXG4gIHJldHVybiBMb2NhdGlvbjtcblxuXG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIExvY2F0aW9uc1NlcnZpY2UoJGxvZywgWW9jYWwsIExvY2F0aW9uKSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKFwiTG9jYXRpb25zU2VydmljZVNlcnZpY2VcIik7XG5cbiAgdmFyIHNlcnZpY2UgPSB7fTtcblxuICBzZXJ2aWNlLmdldCA9IGZ1bmN0aW9uKCBnZXREYXRhICkge1xuXG4gICAgJGxvZy5kZWJ1ZygnR0VUIGxvY2F0aW9uIGluIGEge3JhZGl1c30gIG9mIHtsYXR9LCB7bG5nfScsIGdldERhdGEpO1xuXG4gICAgcmV0dXJuIFlvY2FsLmdldChnZXREYXRhKVxuICAgICAgICAgICAgICAgIC50aGVuKExvY2F0aW9uLnJlc3BvbnNlVHJhbnNmb3JtZXIpO1xuXG4gIH07XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG5cbn1cblxuc2VydmljZXNNb2R1bGUuc2VydmljZSgnTG9jYXRpb25zU2VydmljZScsIExvY2F0aW9uc1NlcnZpY2UpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNlcnZpY2VzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gWW9jYWwoJHEsICRodHRwLCBBcHBTZXR0aW5ncywgJGxvZykge1xuXG4gIHZhciBzZXJ2aWNlID0ge307XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKFwiWW9jYWxTZXJ2aWNlXCIpO1xuXG4gIHNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24oIGdldERhdGEgKSB7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgIC8vIC9saXN0QnlEaXN0YW5jZUNhdC9Gb29kLzgwMDAvMzkuOTM3ODkzLy03NS4xNjg5MzQ3XG4gICAkaHR0cC5nZXQoQXBwU2V0dGluZ3MueW9jYWxBUEkuYmFzZSsnbGlzdEJ5RGlzdGFuY2VDYXQvRm9vZC8nK2dldERhdGEucmFkaXVzKycvJytnZXREYXRhLmxhdCsnLycrZ2V0RGF0YS5sbmcpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKCdmb3VuZCB7bGVuZ3RofSBzcG90cyB3aXRoaW4gJytnZXREYXRhLnJhZGl1cysnIG1ldGVycyBvZiAnK2dldERhdGEubGF0KycsJytnZXREYXRhLmxuZywgZGF0YS5sb2NhdGlvbnMpO1xuICAgICAgICBkYXRhLnJhZGl1cyA9IGdldERhdGEucmFkaXVzO1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgIH0pLmVycm9yKGZ1bmN0aW9uKGVyciwgc3RhdHVzKSB7XG4gICAgICAgICRsb2cud2FybignVW5hYmxlIHRvIGdldCBsb2NhdGlvbjogJyArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVyciwgc3RhdHVzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ1lvY2FsJywgWW9jYWwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLnNlcnZpY2VzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNlcnZpY2VzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gRXhhbXBsZVNlcnZpY2UoJHEsICRodHRwKSB7XG5cbiAgdmFyIHNlcnZpY2UgPSB7fTtcblxuICBzZXJ2aWNlLmdldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAkaHR0cC5nZXQoJ2FwaVBhdGgnKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICB9KS5lcnJvcihmdW5jdGlvbihlcnIsIHN0YXR1cykge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyLCBzdGF0dXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG5cbn1cblxuc2VydmljZXNNb2R1bGUuc2VydmljZSgnRXhhbXBsZVNlcnZpY2UnLCBFeGFtcGxlU2VydmljZSk7IiwiLyoqXG4gKiBAYXV0aG9yICAgICBUaG9tYXMgQnVybGVzb25cbiAqIEBhdXRob3IgICAgIFN0YWNrT3ZlcmZsb3cgLSBIYXJ0bywgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzE1NDA4L2hvdy1kby1pLWZvcm1hdC1hLXRpbWVzdGFtcC1pbi1qYXZhc2NyaXB0LXRvLWRpc3BsYXktaXQtaW4tZ3JhcGhzLXV0Yy1pcy1maW5lXG4gKiBAZGVzY3JpcHRpb25cbiAqICBcbiAqIERhdGVUaW1lIHV0aWxpdHkgY2xhc3MgdGhhdCBzcGl0cyBvdXQgVVRDIHRpbWVzdGFtcCBzdHJpbmdzIHVzdWFsbHkgdXNlZCBpbiBhIHJlcG9ydGluZywgcHJpbnQtY2FwYWJsZSBwcm9jZXNzLlxuKi9cbiBcblxuICd1c2Ugc3RyaWN0JztcblxuXG52YXIgYnVpbGRUaW1lU3RyaW5nID0gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdClcbiAgICAgICAge1xuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8IFwiJWg6JW06JXM6JXpcIjtcblxuICAgICAgICAgICAgZnVuY3Rpb24gcGFkKHZhbHVlLCBpc01pbGxpU2Vjb25kcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgKGlzTWlsbGlTZWNvbmRzKSA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlzTWlsbGlTZWNvbmRzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGlzTWlsbGlTZWNvbmRzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUgPCAxMClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIjAwXCIgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHZhbHVlIDwgMTAwKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiMFwiICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuKHZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoIDwgMikgPyBcIjBcIiArIHZhbHVlIDogdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQucmVwbGFjZSgvJShbYS16QS1aXSkvZywgZnVuY3Rpb24gKF8sIGZtdENvZGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3dpdGNoKGZtdENvZGUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJZXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiaFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0SG91cnMoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldE1pbnV0ZXMoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldFNlY29uZHMoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldE1pbGxpc2Vjb25kcygpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBmb3JtYXQgY29kZTogXCIgKyBmbXRDb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuXG4gLy8gUHVibGlzaCBBUEkgZm9yIERhdGVUaW1lIHV0aWxzXG4gICAgICAgIC8vIHJldHVybiB7XG4gICAgICAgIC8vICAgICBmb3JtYXR0ZWROb3c6IGZ1bmN0aW9uICgpXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGJ1aWxkVGltZVN0cmluZyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gXG4gbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZm9ybWF0dGVkTm93OiBmdW5jdGlvbiAoKSB7IHJldHVybiBidWlsZFRpbWVTdHJpbmcobmV3IERhdGUoKSk7IH1cbiB9O1xuXG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBMb2dEZWNvcmF0b3JcbiAqICBAc291cmNlOiBodHRwOi8vc29sdXRpb25vcHRpbWlzdC5jb20vMjAxMy8xMC8wNy9lbmhhbmNlLWFuZ3VsYXJqcy1sb2dnaW5nLXVzaW5nLWRlY29yYXRvcnMvXG4gKi9cblxuIHZhciBMb2dEZWNvcmF0b3IgPSBmdW5jdGlvbiggJHByb3ZpZGUgICl7XG5cblxuICAgICAgICAgICAgICAvLyBSZWdpc3RlciBvdXIgJGxvZyBkZWNvcmF0b3Igd2l0aCBBbmd1bGFySlMgJHByb3ZpZGVyXG4gICAgICAgICAgICAgICRwcm92aWRlLmRlY29yYXRvciggJyRsb2cnLCBbIFwiJGRlbGVnYXRlXCIsIGZ1bmN0aW9uKCAkZGVsZWdhdGUgKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAvLyBOT1RFOiB0aGUgTG9nRW5jaGFuY2VyIG1vZHVsZSByZXR1cm5zIGEgRlVOQ1RJT04gdGhhdCB3ZSBuYW1lZCBgZW5jaGFuY2VMb2dnZXJGbmBcbiAgICAgICAgICAgICAgIC8vICAgICAgIEFsbCB0aGUgZGV0YWlscyBvZiBob3cgdGhlIGBlbmNoYW5jZW1lbnRgIHdvcmtzIGlzIGVuY2Fwc3VsYXRlZCBpbiBMb2dFbmhhbmNlciFcblxuICAgICAgICAgICAgICAgICAgcmVxdWlyZSgnLi9Mb2dFbmhhbmNlci5qcycpKCAkZGVsZWdhdGUgKTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuICRkZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgfV0pO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9ICBMb2dEZWNvcmF0b3I7IiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBMb2dFbmhhbmNlclxuICogVGhpcyBhZGRzIHRpbWVzdGFtcHMgYW5kIHN1cHBsYW50IGZ1bmN0aW9uYWxpdHkgdG8gQW5ndWxhciAkbG9nIHNlcnZpY2VcbiAqIEBzb3VyY2U6IGh0dHA6Ly9zb2x1dGlvbm9wdGltaXN0LmNvbS8yMDEzLzEwLzA3L2VuaGFuY2UtYW5ndWxhcmpzLWxvZ2dpbmctdXNpbmctZGVjb3JhdG9ycy9cbiAqIEBhcGk6IHB1YmxpY1xuICogQHJldHVybnM6IE9iamVjdCAtIGV4dGVuZGVkICRsb2cgc2VydmljZVxuICovXG5cbnZhciBlbmNoYW5jZUxvZ2dlciA9IGZ1bmN0aW9uKCAkbG9nICl7XG4gIHZhciBzdXBwbGFudCA9IHJlcXVpcmUoJy4uL3N1cHBsYW50LmpzJyk7XG4gIHZhciBEYXRlVGltZSA9IHJlcXVpcmUoJy4uL0RhdGVUaW1lLmpzJyk7XG5cblxuICAvKipcbiAgICogQ2FwdHVyZSB0aGUgb3JpZ2luYWwgJGxvZyBmdW5jdGlvbnM7IGZvciB1c2UgaW4gZW5oYW5jZWRMb2dGbigpXG4gICAqIEBhcGkgIHByaXZhdGUgXG4gICAqL1xuICBcbiAgdmFyIF8kbG9nID0gKGZ1bmN0aW9uKCAkbG9nICl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2cgICA6ICRsb2cubG9nLFxuICAgICAgICBpbmZvICA6ICRsb2cuaW5mbyxcbiAgICAgICAgd2FybiAgOiAkbG9nLndhcm4sXG4gICAgICAgIGRlYnVnIDogJGxvZy5kZWJ1ZyxcbiAgICAgICAgLy8gZXJyb3IgOiAkbG9nLmVycm9yXG4gICAgICB9O1xuICB9KSggJGxvZyApOyBcblxuXG5cbiAgIC8qKlxuICAgICogUGFydGlhbCBhcHBsaWNhdGlvbiB0byBwcmUtY2FwdHVyZSBhIGxvZ2dlciBmdW5jdGlvblxuICAgICogQGFwaTogIHByaXZhdGUgXG4gICAgKiBAcmV0dXJuczogRnVuY3Rpb24gXG4gICAgKi9cbiAgICB2YXIgcHJlcGFyZUxvZ0ZuID0gZnVuY3Rpb24oIGxvZ0ZuLCBjbGFzc05hbWUgKXtcblxuICAgICAgLyoqXG4gICAgICAgKiBJbnZva2UgdGhlIHNwZWNpZmllZCBgbG9nRm48YCB3aXRoIHRoZSBzdXBwbGFudCBmdW5jdGlvbmFsaXR5Li4uXG4gICAgICAgKiBAYXBpOiBwcml2YXRlIFxuICAgICAgICogQGV4YW1wbGU6IFxuICAgICAgICogICB2YXIgdXNlciA9IHsgd2hvOlwiVGhvbWFzIEJ1cmxlc29uXCJcIiwgZW1haWw9XCJUaG9tYXNCdXJsZXNvbkBnbWFpbC5jb21cIlwiIH07XG4gICAgICAgKiAgICRsb2cud2FybiggXCJBIHdhcm5pbmcgbWVzc2FnZSBmb3IgYHt3aG99YCB3aWxsIGJlIHNlbnQgdG8gYHtlbWFpbH1gICFcIiwgdXNlciApOyAgIFxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc2hvdWxkIG91dHB1dDogQSB3YXJuaW5nIG1lc3NhZ2UgZm9yIGBUaG9tYXMgQnVybGVzb25gIHdpbGwgYmUgc2VudCB0byBgVGhvbWFzQnVybGVzb25AZ21haWwuY29tYCAhXG4gICAgICAgKi9cbiAgICAgIHZhciBlbmhhbmNlZExvZ0ZuID0gZnVuY3Rpb24oICl7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgICAgIG5vdyAgPSBEYXRlVGltZS5mb3JtYXR0ZWROb3coKTtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnO1xuICAgICAgICAgICAgLy8gcHJlcGVuZCBhIHRpbWVzdGFtcCB0byB0aGUgb3JpZ2luYWwgb3V0cHV0IG1lc3NhZ2VcbiAgICAgICAgICAgIGFyZ3NbMF0gPSBzdXBwbGFudChcInswfSAtIHsxfXsyfVwiLCBbIG5vdywgY2xhc3NOYW1lLCBhcmdzWzBdIF0pO1xuXG4gICAgICAgIGxvZ0ZuLmNhbGwoIG51bGwsICBzdXBwbGFudC5hcHBseSggbnVsbCwgYXJncyApICk7XG4gICAgICB9O1xuXG4gICAgICAvLyBTcGVjaWFsLi4uIG9ubHkgbmVlZGVkIHRvIHN1cHBvcnQgYW5ndWxhci1tb2NrcyBleHBlY3RhdGlvbnNcbiAgICAgIGVuaGFuY2VkTG9nRm4ubG9ncyA9IFsgXTtcbiBcbiAgICAgIHJldHVybiBlbmhhbmNlZExvZ0ZuO1xuICAgICAgXG4gICAgfTtcblxuXG5cblxuICAgIC8qKlxuICAgICAqIFN1cHBvcnQgdG8gZ2VuZXJhdGUgY2xhc3Mtc3BlY2lmaWMgbG9nZ2VyIGluc3RhbmNlIHdpdGggY2xhc3NuYW1lIG9ubHlcbiAgICAgKlxuICAgICAqIEBwYXJhbTogbmFtZVxuICAgICAqIEByZXR1cm5zOiBPYmplY3Qgd3JhcHBlciBmYWNhZGUgdG8gJGxvZ1xuICAgICAqL1xuICAgIHZhciBnZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKCBjbGFzc05hbWUgKXtcbiAgICAgIGNsYXNzTmFtZSA9ICggY2xhc3NOYW1lICE9PSB1bmRlZmluZWQgKSA/IGNsYXNzTmFtZSArIFwiOjpcIiA6IFwiXCI7XG5cbiAgICAgIHJldHVybntcbiAgICAgICAgIGxvZyAgIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy5sb2csICAgIGNsYXNzTmFtZSApLFxuICAgICAgICAgaW5mbyAgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmluZm8sICAgY2xhc3NOYW1lICksXG4gICAgICAgICB3YXJuICA6IHByZXBhcmVMb2dGbiggXyRsb2cud2FybiwgICBjbGFzc05hbWUgKSxcbiAgICAgICAgIGRlYnVnIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy5kZWJ1ZywgIGNsYXNzTmFtZSApLFxuICAgICAgICAgLy8gZXJyb3IgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmVycm9yLCAgY2xhc3NOYW1lIClcbiAgICAgIH07XG5cbiAgICB9O1xuXG5cblxuICAgIC8vIHdyYXAgZWFjaCBsb2cgbWV0aG9kIFxuICAgICRsb2cubG9nICAgPSBwcmVwYXJlTG9nRm4oICRsb2cubG9nICk7XG4gICAgJGxvZy5pbmZvICA9IHByZXBhcmVMb2dGbiggJGxvZy5pbmZvICk7XG4gICAgJGxvZy53YXJuICA9IHByZXBhcmVMb2dGbiggJGxvZy53YXJuICk7XG4gICAgJGxvZy5kZWJ1ZyA9IHByZXBhcmVMb2dGbiggJGxvZy5kZWJ1ZyApO1xuICAgIC8vICRsb2cuZXJyb3IgPSBwcmVwYXJlTG9nRm4oICRsb2cuZXJyb3IgKTtcblxuICAgIC8vIEFkZCBzcGVjaWFsIG1ldGhvZCB0byBBbmd1bGFySlMgJGxvZ1xuICAgICRsb2cuZ2V0SW5zdGFuY2UgPSBnZXRJbnN0YW5jZTtcbiBcblxuICAgIHJldHVybiAkbG9nO1xufTsvL2VuY2hhbmNlTG9nZ2VyXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9ICBlbmNoYW5jZUxvZ2dlcjsiLCIvKipcbiAqIEBhdXRob3IgICAgICBUaG9tYXMgQnVybGVzb25cbiAqIEBkYXRlICAgICAgICBOb3ZlbWJlciwgMjAxM1xuICogQHNvdXJjZTogICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9UaG9tYXNCdXJsZXNvbi9hbmd1bGFyanMtbG9nRGVjb3JhdG9yL2Jsb2IvbWFzdGVyL3NyYy9taW5kc3BhY2UvdXRpbHMvc3VwcGxhbnQuanNcbiAgKi9cbiBcblxuICd1c2Ugc3RyaWN0JztcblxudmFyIHN1cHBsYW50ID0gIGZ1bmN0aW9uKCB0ZW1wbGF0ZSwgdmFsdWVzLCBwYXR0ZXJuICkge1xuICAgICAgICAgICAgcGF0dGVybiA9IHBhdHRlcm4gfHwgL1xceyhbXlxce1xcfV0qKVxcfS9nO1xuXG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZShwYXR0ZXJuLCBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSBiLnNwbGl0KCcuJyksXG4gICAgICAgICAgICAgICAgICAgIHIgPSB2YWx1ZXM7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzIGluIHApIHsgciA9IHJbcFtzXV07ICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgICAgICAgICAgciA9IGE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgciA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHIgPT09ICdudW1iZXInKSA/IHIgOiBhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cblxuLy8gc3VwcGxhbnQoKSBtZXRob2QgZnJvbSBDcm9ja2ZvcmRzIGBSZW1lZGlhbCBKYXZhc2NyaXB0YFxuRnVuY3Rpb24ucHJvdG90eXBlLm1ldGhvZCA9IGZ1bmN0aW9uIChuYW1lLCBmdW5jKSB7XG4gICAgdGhpcy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuU3RyaW5nLm1ldGhvZChcInN1cHBsYW50XCIsIGZ1bmN0aW9uKCB2YWx1ZXMsIHBhdHRlcm4gKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiBzdXBwbGFudChzZWxmLCB2YWx1ZXMsIHBhdHRlcm4pO1xufSk7XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gIFN0cmluZy5zdXBwbGFudCA9IHN1cHBsYW50OyJdfQ==

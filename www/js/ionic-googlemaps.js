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

  GMAP_DEFAULT:{
  	RADIUS: 800,
  	ZOOM:   14
  }
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

MapCtrl.$inject = ["$rootScope", "$scope", "$log", "$timeout", "$ionicLoading", "AppSettings", "GMap"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MapCtrl($rootScope, $scope, $log, $timeout, $ionicLoading, AppSettings, GMap ) {

    $log = $log.getInstance("MapCtrl");

 	  // ViewModel
  	var vm = this;
    vm.gmap = new GMap();    
    vm.gmap.height = 625;
    var locationsRadius = vm.gmap.setRadiusCircle();
    vm.gmap.plotLocations();

  $rootScope.$on('marker:clicked', function(e, locale) {
    $scope.$apply(function() {
      
      vm.gmap.height = vm.gmap.height/2;
      vm.gmap.map.panTo({lat:parseFloat(locale.lat), 
                         lng:parseFloat(locale.long)});
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

},{"./AppCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/AppCtrl.js","./BrowseCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/BrowseCtrl.js","./MapCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/MapCtrl.js","./PlaylistCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/PlaylistCtrl.js","./PlaylistsCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/PlaylistsCtrl.js","./SearchCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/SearchCtrl.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/GMap.js":[function(require,module,exports){
'use strict';

var modelsModule = require('./_index.js');

/**
 * @ngInject
*/

modelsModule.factory('GMap', ["$log", "$rootScope", "LocationsService", "AppSettings", function($log, $rootScope, LocationsService, AppSettings){
  $log = $log.getInstance('GMap');

  var currentCenter = $rootScope.currentPosition;

  function GMap(mapSettings){
    
    this.mapOptions = {
      center:    {lat: currentCenter.latitude, 
                  lng: currentCenter.longitude},
      zoom:      AppSettings.GMAP_DEFAULT.ZOOM,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      radius:    AppSettings.GMAP_DEFAULT.RADIUS,
    };

    angular.extend(this.mapOptions, mapSettings);
    
    $log.debug('zoom {mapOptions.zoom}', this);
    
    this.map = new google.maps.Map(document.getElementById("Map"), this.mapOptions);
    return this;
  };//GMap constructor


  GMap.prototype ={

    dropMarker: function(markerData) {
      var _markerSettings = {};
      angular.extend(_markerSettings, this.mapOptions, markerData);
      $log.debug('dropMarker for "{title}"" at "{center.lat}, {center.lng}"', _markerSettings);
      
      var _marker = new google.maps.Marker({
            position:  _markerSettings.center,
            map:       this.map,
            title:     _markerSettings.title,
            opacity:   _markerSettings.opacity,
            animation: google.maps.Animation.DROP
      });

      return _marker;
    },


    buildInfoWindow: function(locationInfo, locationMarker) {
      var _map = this;

      $log.debug('buildInfoWindow for {name}', locationInfo);
      var infowindow = new google.maps.InfoWindow({
                    content: '<h3 id="firstHeading" class="firstHeading">'+locationInfo.name+'</h3>'+
                             '<p>'+locationInfo.travelTime+' walk</p>'
      });

      locationMarker.addListener('click', function() {
        $rootScope.$broadcast('marker:clicked', locationInfo );
        infowindow.open( _map.map ,locationMarker);
      });

      return infowindow;
    },


    plotLocations:function(plotData) {
      var _map = this;
      var _plotSettings ={}; 

      angular.extend(_plotSettings,this.mapOptions, plotData);
      $log.debug('plotLocations within a "{radius}" meter radius of "{center.lat}, {center.lng}"', _plotSettings);
      
      // drop marker on current location
      _map.dropMarker({title:"You Are Here", opacity:1});

      // get all locations around specified area
      LocationsService
        .get({radius: _plotSettings.radius, 
              lat:    _plotSettings.center.lat, 
              lng:    _plotSettings.center.lng })
        .then(function(locations) {

          // process locations 
          angular.forEach(locations, function(location) {
            $log.debug('plotLocation {name}',location);
            //get the travelTime forEach location
            location.setTravelTime().then(function() {

              var locationPin = _map.dropMarker({center: {
                                    lat: parseFloat(location.lat),
                                    lng: parseFloat(location.long)
                                  },
                                  opacity: 0.5,
                                  title: location.name
                                });

              _map.buildInfoWindow(location, locationPin);
              _map.plotRouteTo(location);

            });///location.setTravelTime


          });///end angular.forEach

        });//end LocationsService

    },

    plotRouteTo: function(location){
      $log.debug('plotRouteTo {name}',location);

      var _map = this;
      var _routeSettings = {
            draggable:           false,
            suppressInfoWindows: true,
            suppressMarkers:     true,
            origin:              _map.mapOptions.center
      };

      angular.extend(_routeSettings, this.mapOptions);

      var directionsDisplay = new google.maps.DirectionsRenderer({
            map:                 _map.map,
            draggable:           _routeSettings.draggable,
            suppressInfoWindows: _routeSettings.suppressInfoWindows,
            suppressMarkers:     _routeSettings.suppressMarkers
          }),
          request = {
            destination: {lat: parseFloat(location.lat), 
                          lng: parseFloat(location.long)},
            origin:      _routeSettings.origin,
            travelMode:  google.maps.TravelMode.WALKING,
          },
          directionsService = new google.maps.DirectionsService();// Pass the directions request to the directions service.


          directionsService.route(request, function(response, status) {
            
            if (status == google.maps.DirectionsStatus.OK) {
              // Display the route on the map.
              directionsDisplay.setDirections(response);
            }
          });///directiosService.route


    },

    setRadiusCircle: function(radiusCircleSettings) {
      var _map = this;
      var _circleSettings ={
              strokeColor:   '#0084b4',
              strokeOpacity: 0.8,
              strokeWeight:  1,
              fillColor:     '#0084b4',
              fillOpacity:   0.0625,
      };

      angular.extend(_circleSettings ,this.mapOptions, radiusCircleSettings);

      var locationsCircle = new google.maps.Circle({
                strokeColor:   _circleSettings.strokeColor,
                strokeOpacity: _circleSettings.strokeOpacity,
                strokeWeight:  _circleSettings.strokeWeight,
                fillColor:     _circleSettings.fillColor,
                fillOpacity:   _circleSettings.fillOpacity,
                map:           _map.map,
                center:        _circleSettings.center,
                radius:        _circleSettings.radius
          });

      return locationsCircle;
    }

  };
    


  return GMap;

  
}]);

},{"./_index.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/LocationModel.js":[function(require,module,exports){
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

({"GMap":require("./GMap.js"),"LocationModel":require("./LocationModel.js")});

},{"./GMap.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/GMap.js","./LocationModel.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/LocationModel.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_config.js":[function(require,module,exports){
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

({"CurrentCoordsService":require("./CurrentCoordsService.js"),"LocationsService":require("./LocationsService.js"),"Yocal":require("./Yocal.js"),"example":require("./example.js")});

},{"./CurrentCoordsService.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/CurrentCoordsService.js","./LocationsService.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/LocationsService.js","./Yocal.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/Yocal.js","./example.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/example.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/example.js":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2FwcC1tYWluLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb25zdGFudHMuZGV2ZWxvcG1lbnQuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL0FwcEN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL0Jyb3dzZUN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL01hcEN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL1BsYXlsaXN0Q3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvUGxheWxpc3RzQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvU2VhcmNoQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvX2luZGV4LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9tb2RlbHMvR01hcC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvbW9kZWxzL0xvY2F0aW9uTW9kZWwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL21vZGVscy9faW5kZXguanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL29uX2NvbmZpZy5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvb25fcnVuLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9DdXJyZW50Q29vcmRzU2VydmljZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvTG9jYXRpb25zU2VydmljZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvWW9jYWwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3NlcnZpY2VzL19pbmRleC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvZXhhbXBsZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvdXRpbHMvRGF0ZVRpbWUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3V0aWxzL2xvZ2dpbmcvTG9nRGVjb3JhdG9yLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy91dGlscy9sb2dnaW5nL0xvZ0VuaGFuY2VyLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy91dGlscy9zdXBwbGFudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7OztBQUtBLFFBQVE7QUFDUixRQUFRO0FBQ1IsUUFBUTs7OztBQUlSLFFBQVEsUUFBUSxVQUFVLE1BQU0sV0FBVzs7RUFFekMsSUFBSSxXQUFXO0lBQ2I7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7Ozs7Ozs7RUFRRixPQUFPLE1BQU0sUUFBUSxPQUFPLE9BQU87O0VBRW5DLFFBQVEsT0FBTyxPQUFPLFNBQVMsZUFBZSxRQUFROztFQUV0RCxRQUFRLE9BQU8sT0FBTyxPQUFPLFFBQVE7O0VBRXJDLFFBQVEsT0FBTyxPQUFPLElBQUksUUFBUTs7RUFFbEMsUUFBUSxVQUFVLFVBQVUsQ0FBQzs7R0FFNUI7OztBQ3BDSDs7QUFFQSxJQUFJLGNBQWM7RUFDaEIsU0FBUzs7SUFFUCxNQUFNOzs7RUFHUixhQUFhO0dBQ1osUUFBUTtHQUNSLFFBQVE7Ozs7QUFJWCxPQUFPLFVBQVUsWUFBWTs7O0FDZDdCOzs7QUFFQSxJQUFJLG9CQUFvQixRQUFROzs7OztBQUtoQyxTQUFTLFFBQVEsTUFBTSxZQUFZLFFBQVEsYUFBYSxVQUFVLGFBQWEsYUFBYTs7RUFFMUYsT0FBTyxLQUFLLFlBQVk7O0VBRXhCLElBQUksS0FBSzs7RUFFVCxXQUFXLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBb0M5Qjs7QUFFRCxrQkFBa0IsV0FBVyxXQUFXLFNBQVM7OztBQ25EakQ7OztBQUVBLElBQUksb0JBQW9CLFFBQVE7Ozs7O0FBS2hDLFNBQVMsV0FBVyxRQUFRLE9BQU87O0VBRWpDLE9BQU8sUUFBUSxLQUFLO0VBQ3BCLE9BQU8sVUFBVSxTQUFTLEVBQUU7SUFDMUIsT0FBTyxPQUFPOztFQUVoQixPQUFPLFdBQVc7RUFDbEIsTUFBTSxNQUFNLEtBQUssU0FBUyxLQUFLO0lBQzdCLFFBQVEsSUFBSTtJQUNaLE9BQU8sWUFBWTs7RUFFckIsSUFBSSxhQUFhO0lBQ2Y7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFPO1VBQ1AsUUFBUTtVQUNSLFVBQVU7VUFDVixPQUFPO1VBQ1AsUUFBUTs7UUFFVjs7O0lBR0o7TUFDRSxZQUFZO1FBQ1Y7VUFDRSxPQUFP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ZUFBZTs7O0FDeEdqQzs7Ozs7OztDQU9DOztBQUVELElBQUksWUFBWSxVQUFVLFVBQVUsUUFBUSxVQUFVO1lBQzFDLFVBQVUsV0FBVzs7WUFFckIsT0FBTyxTQUFTLFFBQVEsU0FBUyxTQUFTLEdBQUcsR0FBRztnQkFDNUMsSUFBSSxJQUFJLEVBQUUsTUFBTTtvQkFDWixJQUFJOztnQkFFUixJQUFJO29CQUNBLEtBQUssSUFBSSxLQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtrQkFDN0IsTUFBTSxFQUFFO29CQUNOLElBQUk7OztnQkFHUixPQUFPLENBQUMsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksSUFBSTs7Ozs7O0FBTTlFLFNBQVMsVUFBVSxTQUFTLFVBQVUsTUFBTSxNQUFNO0lBQzlDLEtBQUssVUFBVSxRQUFRO0lBQ3ZCLE9BQU87OztBQUdYLE9BQU8sT0FBTyxZQUFZLFVBQVUsUUFBUSxVQUFVO0lBQ2xELElBQUksT0FBTztJQUNYLE9BQU8sU0FBUyxNQUFNLFFBQVE7Ozs7OztBQU1sQyxPQUFPLFdBQVcsT0FBTyxXQUFXLFNBQVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBhbmd1bGFyIG1vZHVsZXNcbi8vIHJlcXVpcmUoJ2FuZ3VsYXItbW9kdWxlLXNhbml0aXplJyk7XG4vLyByZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9faW5kZXgnKTtcbnJlcXVpcmUoJy4vc2VydmljZXMvX2luZGV4Jyk7XG5yZXF1aXJlKCcuL21vZGVscy9faW5kZXgnKTtcbi8vIHJlcXVpcmUoJy4vY29tcG9uZW50cy9faW5kZXgnKTtcblxuLy8gY3JlYXRlIGFuZCBib290c3RyYXAgYXBwbGljYXRpb25cbmFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgdmFyIHJlcXVpcmVzID0gW1xuICAgICdpb25pYycsXG4gICAgJ2FwcC5jb250cm9sbGVycycsXG4gICAgJ2FwcC5zZXJ2aWNlcycsXG4gICAgJ2FwcC5tb2RlbHMnLFxuICAgICd1aS5yb3V0ZXInXG4gICAgLy8gJ3RlbXBsYXRlcycsXG4gICAgLy8gJ25nU2FuaXRpemUnLFxuICAgIC8vICdhcHAuc2VydmljZXMnLFxuICAgIC8vICdhcHAuY29tcG9uZW50cydcbiAgXTtcblxuICAvLyBtb3VudCBvbiB3aW5kb3cgZm9yIHRlc3RpbmdcbiAgd2luZG93LmFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCByZXF1aXJlcyk7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnN0YW50KCdBcHBTZXR0aW5ncycsIHJlcXVpcmUoJy4vY29uc3RhbnRzLmRldmVsb3BtZW50JykpO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb25maWcocmVxdWlyZSgnLi9vbl9jb25maWcnKSk7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLnJ1bihyZXF1aXJlKCcuL29uX3J1bicpKTtcblxuICBhbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydhcHAnXSk7XG5cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFwcFNldHRpbmdzID0ge1xuICB5b2NhbEFQSTp7XG4gICAgLy8gYmFzZTogJ2h0dHA6Ly95b2VuZHBvaW50NC13YmJzLnJoY2xvdWQuY29tL2FwaS92MS95b2thbC9kYXRhLydcbiAgICBiYXNlOiAnaHR0cDovL2xvY2FsaG9zdDo4MTAwL2FwaS92MS95b2thbC9kYXRhLydcbiAgfSxcblxuICBHTUFQX0RFRkFVTFQ6e1xuICBcdFJBRElVUzogODAwLFxuICBcdFpPT006ICAgMTRcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHBTZXR0aW5nczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIEFwcEN0cmwoJGxvZywgJHJvb3RTY29wZSwgJHNjb3BlLCAkaW9uaWNNb2RhbCwgJHRpbWVvdXQsIGNvb3JkaW5hdGVzLCBBcHBTZXR0aW5ncykge1xuXG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdBcHBDdHJsJyk7XG5cbiAgdmFyIHZtID0gdGhpcztcbiAgLy8gc2V0IGN1cmVudCBwb3NpdGlvbiB0byByb290U2NvcGUgdG8gbWFrZSBnbG9iYWxseSBhdmFpbGFibGUgXG4gICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uID0gY29vcmRpbmF0ZXM7XG4gIFxuXG4gIC8vIC8vIEZvcm0gZGF0YSBmb3IgdGhlIGxvZ2luIG1vZGFsXG4gIC8vICRzY29wZS5sb2dpbkRhdGEgPSB7fTtcblxuICAvLyAvLyBDcmVhdGUgdGhlIGxvZ2luIG1vZGFsIHRoYXQgd2Ugd2lsbCB1c2UgbGF0ZXJcbiAgLy8gJGlvbmljTW9kYWwuZnJvbVRlbXBsYXRlVXJsKCd0ZW1wbGF0ZXMvbG9naW4uaHRtbCcsIHtcbiAgLy8gICBzY29wZTogJHNjb3BlXG4gIC8vIH0pLnRoZW4oZnVuY3Rpb24obW9kYWwpIHtcbiAgLy8gICAkc2NvcGUubW9kYWwgPSBtb2RhbDtcbiAgLy8gfSk7XG5cbiAgLy8gLy8gVHJpZ2dlcmVkIGluIHRoZSBsb2dpbiBtb2RhbCB0byBjbG9zZSBpdFxuICAvLyAkc2NvcGUuY2xvc2VMb2dpbiA9IGZ1bmN0aW9uKCkge1xuICAvLyAgICRzY29wZS5tb2RhbC5oaWRlKCk7XG4gIC8vIH07XG5cbiAgLy8gLy8gT3BlbiB0aGUgbG9naW4gbW9kYWxcbiAgLy8gJHNjb3BlLmxvZ2luID0gZnVuY3Rpb24oKSB7XG4gIC8vICAgJHNjb3BlLm1vZGFsLnNob3coKTtcbiAgLy8gfTtcblxuICAvLyAvLyBQZXJmb3JtIHRoZSBsb2dpbiBhY3Rpb24gd2hlbiB0aGUgdXNlciBzdWJtaXRzIHRoZSBsb2dpbiBmb3JtXG4gIC8vICRzY29wZS5kb0xvZ2luID0gZnVuY3Rpb24oKSB7XG4gIC8vICAgY29uc29sZS5sb2coJ0RvaW5nIGxvZ2luJywgJHNjb3BlLmxvZ2luRGF0YSk7XG5cbiAgLy8gICAvLyBTaW11bGF0ZSBhIGxvZ2luIGRlbGF5LiBSZW1vdmUgdGhpcyBhbmQgcmVwbGFjZSB3aXRoIHlvdXIgbG9naW5cbiAgLy8gICAvLyBjb2RlIGlmIHVzaW5nIGEgbG9naW4gc3lzdGVtXG4gIC8vICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gIC8vICAgICAkc2NvcGUuY2xvc2VMb2dpbigpO1xuICAvLyAgIH0sIDEwMDApO1xuICAvLyB9O1xuXG4gIFxuXG59O1xuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdBcHBDdHJsJywgQXBwQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBCcm93c2VDdHJsKCRzY29wZSwgWW9jYWwpIHtcbiAgXG4gICRzY29wZS5yYW5kbyA9IE1hdGgucmFuZG9tKCk7XG4gICRzY29wZS5nZXRUeXBlID0gZnVuY3Rpb24oeCl7XG4gICAgcmV0dXJuIHR5cGVvZiB4O1xuICB9XG4gICRzY29wZS5sb2NhdGlvbnMgPVtdO1xuICBZb2NhbC5nZXQoKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICRzY29wZS5sb2NhdGlvbnMgPSBkYXRhO1xuICB9KTtcbiAgdmFyIF9sb2NhdGlvbnMgPSBbXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU2ZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkxvcyBHYWxsb3NcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjk1MSBXb2xmIFN0IFBoaWxhZGVscGhpYSBQQSAxOTE0OCBVbml0ZWQgU3RhdGVzXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45MjExNzhcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTYzMjU5OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246MTkxOFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTZmXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSGFyZGVuYVwiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiNzU0IFMgSGlja3MgU3QsIFBoaWxhZGVscGhpYSwgUEEgMTkxNDVcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5Ljk0MTY4NlwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNjg0MTg0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjo0MjNcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU3MVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIk5hbSBTb24gQmFrZXJ5XCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIxNjAxIFdhc2hpbmd0b24gQXZlIFBoaWxhZGVscGhpYSBQQSAxOTE0NiBVbml0ZWQgU3RhdGVzXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45MzkyMDk0XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE3MDI2NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246MTg1XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNzJcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJCcmVlenkncyBDYWZlXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIxMjAwIFBvaW50IEJyZWV6ZSBBdmUgUGhpbGFkZWxwaGlhIFBBIDE5MTQ2IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5LjkzNzIzNzJcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTc3MTA3M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246NzAyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNzNcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJQaXp6YSBCcmFpbi9MaXR0bGUgQmFieSdzXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIyMzEzIEZyYW5rZm9yZCBBdmUgUGhpbGFkZWxwaGlhIFBBIDE5MTI1IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5Ljk4MDY3NDZcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTI4MDk2OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246NTg5NFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTc0XCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiU2tldGNoIEJ1cmdlclwiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiNDEzIEUgR2lyYXJkIEF2ZSBQaGlsYWRlbHBoaWEgUEEgMTkxMjUgVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTcwNTc5MlwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xMzAxMTg0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjo0OTE3XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNzZcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJUb3J0aWxsZXJpYSBTYW4gUm9tYW5cIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjk1MSBTIDl0aCBTdCBQaGlsYWRlbHBoaWEgUEEgMTkxNDcgVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTM3NjM5NlwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNTc5ODlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjkzNlwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTc4XCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSGFpIFN0cmVldCBLaXRjaGVuICYgQ28uXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIzMiBTIDE4dGggU3QgUGhpbGFkZWxwaGlhIFBBIDE5MTAzIFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5Ljk1MjE2MzhcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTcwNDYxOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246MTU5MFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTgwXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiRmVkZXJhbCBEb251dHNcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjEyMTkgUyAybmQgU3QgUGhpbGFkZWxwaGlhIFBBIDE5MTQ3IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5LjkzMjIwOThcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTQ3NDYwM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246MTk0MVwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTgxXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQmluZyBCaW5nIERpbSBTdW1cIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjE2NDggRSBQYXNzeXVuayBBdmUgUGhpbGFkZWxwaGlhIFBBIDE5MTQ4IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5LjkyODk1OVwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNjQ3MDkyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjoxMDU2XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllODhcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJCbGFjayBOIEJyZXdcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjUyMyBFIFBhc3N5dW5rIEF2ZSwgUGhpbGFkZWxwaGlhLCBQQSAxOTE0N1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTQxNzYxXCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE1MDM5MjhcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjE2NDJcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU4ZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlBoaWxseSBGbGF2b3JzXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIyMDA0IEZhaXJtb3VudCBBdmUsIFBoaWxhZGVscGhpYSwgUEEgMTkxMzBcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5Ljk2NzA4N1wiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNzA1MTI2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjozMjQ0XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllOGZcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJDYXBvZ2lybyBHZWxhdG9cIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjIzMyBDaGVzdG51dCBTdHJlZXQsIFBoaWxhZGVscGhpYSwgUEFcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5Ljk0ODgyMlwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNDUzNThcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjIzNTJcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU5M1wiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIjFzdCBPcmllbnRhbCBTdXBlcm1hcmtldFwiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMTExMSBTIDZ0aCBTdCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ3XCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45MzQwMTU4XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE1MzY4NTFcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjEzNzNcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWVhMFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIksgJiBBIFNhbmR3aWNoZXMgJiBHcm9jZXJ5XCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIxNDM5IFMgMjB0aCBTdCwgUGhpbGFkZWxwaGlhLCBQQSAxOTE0NlwiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTMzMDAxMlwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNzc0NzQ4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjo5MTBcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWVhMVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlNvdXRoIEhvdXNlXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIyNTM1IFMgMTN0aCBTdCwgUGhpbGFkZWxwaGlhLCBQQSAxOTE0OFwiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTE4MDM3NFwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNjg3MTMxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjoyMjA1XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllYTdcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJDaW5lbXVnXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCJzIDE5MTQ4LCAxNjA3IFMgQnJvYWQgU3QsIFBoaWxhZGVscGhpYSwgUEEgMTkxNDhcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5LjkzMDE4MzlcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTY4MDA2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjo4NjBcIlxuICAgICAgXVxuICAgIH1cbiAgXTtcblxuXG59O1xuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdCcm93c2VDdHJsJywgQnJvd3NlQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBNYXBDdHJsKCRyb290U2NvcGUsICRzY29wZSwgJGxvZywgJHRpbWVvdXQsICRpb25pY0xvYWRpbmcsIEFwcFNldHRpbmdzLCBHTWFwICkge1xuXG4gICAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoXCJNYXBDdHJsXCIpO1xuXG4gXHQgIC8vIFZpZXdNb2RlbFxuICBcdHZhciB2bSA9IHRoaXM7XG4gICAgdm0uZ21hcCA9IG5ldyBHTWFwKCk7ICAgIFxuICAgIHZtLmdtYXAuaGVpZ2h0ID0gNjI1O1xuICAgIHZhciBsb2NhdGlvbnNSYWRpdXMgPSB2bS5nbWFwLnNldFJhZGl1c0NpcmNsZSgpO1xuICAgIHZtLmdtYXAucGxvdExvY2F0aW9ucygpO1xuXG4gICRyb290U2NvcGUuJG9uKCdtYXJrZXI6Y2xpY2tlZCcsIGZ1bmN0aW9uKGUsIGxvY2FsZSkge1xuICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICBcbiAgICAgIHZtLmdtYXAuaGVpZ2h0ID0gdm0uZ21hcC5oZWlnaHQvMjtcbiAgICAgIHZtLmdtYXAubWFwLnBhblRvKHtsYXQ6cGFyc2VGbG9hdChsb2NhbGUubGF0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgbG5nOnBhcnNlRmxvYXQobG9jYWxlLmxvbmcpfSk7XG4gICAgfSk7XG4gICAgXG4gIH0pO1xufTsvLy8vIE1hcEN0cmxcblxuXG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ01hcEN0cmwnLCBNYXBDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIFBsYXlsaXN0Q3RybCgkc2NvcGUpIHtcbiAgXG5cblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignUGxheWxpc3RDdHJsJywgUGxheWxpc3RDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIFBsYXlsaXN0c0N0cmwoJHNjb3BlKSB7XG4gIFxuICRzY29wZS5wbGF5bGlzdHMgPSBbXG4gICAgeyB0aXRsZTogJ1JlZ2dhZScsIGlkOiAxIH0sXG4gICAgeyB0aXRsZTogJ0NoaWxsJywgaWQ6IDIgfSxcbiAgICB7IHRpdGxlOiAnRHVic3RlcCcsIGlkOiAzIH0sXG4gICAgeyB0aXRsZTogJ0luZGllJywgaWQ6IDQgfSxcbiAgICB7IHRpdGxlOiAnUmFwJywgaWQ6IDUgfSxcbiAgICB7IHRpdGxlOiAnQ293YmVsbCcsIGlkOiA2IH1cbiAgXTtcblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignUGxheWxpc3RzQ3RybCcsIFBsYXlsaXN0c0N0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gU2VhcmNoQ3RybCgkc2NvcGUsICRyb290U2NvcGUsICRxLCAgJGxvZywgIExvY2F0aW9uc1NlcnZpY2UsICAkaW9uaWNMb2FkaW5nLCAgJGlvbmljU2xpZGVCb3hEZWxlZ2F0ZSwgQXBwU2V0dGluZ3MpIHtcbiAgICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnU2VhcmNoQ3RybCcpO1xuXG4gXHQvLyBWaWV3TW9kZWxcbiAgXHR2YXIgdm0gPSB0aGlzO1xuICAgIHZtLnJhZGl1cyA9IEFwcFNldHRpbmdzLkdNQVBfUkFESVVTO1xuICAgICRzY29wZS5yYWRpdXMgPSBBcHBTZXR0aW5ncy5HTUFQX1JBRElVUztcblxuICAgICRzY29wZS5sb2NhdGlvbnMgPVtdO1xuICAgICRzY29wZS5DdXJyZW50Q29vcmRzID0gICRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uO1xuXG4gICAgJGlvbmljTG9hZGluZy5zaG93KHtcbiAgICBcdHRlbXBsYXRlOiBcIkZpbmRpbmcgUmFkIFNwb3RzIC4uLlwiLFxuICAgIFx0YmFja2Ryb3A6IHRydWVcbiAgICB9KTtcblxuXG4gICAgTG9jYXRpb25zU2VydmljZS5nZXQoe3JhZGl1czogdm0ucmFkaXVzLCAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogICAgJHNjb3BlLkN1cnJlbnRDb29yZHMubGF0aXR1ZGUsICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiAgICAkc2NvcGUuQ3VycmVudENvb3Jkcy5sb25naXR1ZGUgfSlcblxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbMF0uc2V0VHJhdmVsVGltZSgpLnRoZW4oZnVuY3Rpb24obG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVswXSA9bG9jYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sb2NhdGlvbnMgPSBkYXRhOyAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpb25pY1NsaWRlQm94RGVsZWdhdGUudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGlvbmljTG9hZGluZy5oaWRlKCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICBcdCAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgJHNjb3BlLnNsaWRlSGFzQ2hhbmdlZCA9IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgICB2YXIgY3VycmVudFNsaWRlID0gJHNjb3BlLmxvY2F0aW9uc1tpZHhdO1xuICAgICAgICAkbG9nLmRlYnVnKCdzbGlkZUhhc0NoYW5nZWQge25hbWV9JywgY3VycmVudFNsaWRlKTtcblxuICAgICAgICBjdXJyZW50U2xpZGUuc2V0VHJhdmVsVGltZSgpLnRoZW4oZnVuY3Rpb24obG9jYWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgXG59O1xuXG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ1NlYXJjaEN0cmwnLCBTZWFyY2hDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycsIFtdKTtcblxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBtb2RlbHNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuKi9cblxubW9kZWxzTW9kdWxlLmZhY3RvcnkoJ0dNYXAnLCBmdW5jdGlvbigkbG9nLCAkcm9vdFNjb3BlLCBMb2NhdGlvbnNTZXJ2aWNlLCBBcHBTZXR0aW5ncyl7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdHTWFwJyk7XG5cbiAgdmFyIGN1cnJlbnRDZW50ZXIgPSAkcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbjtcblxuICBmdW5jdGlvbiBHTWFwKG1hcFNldHRpbmdzKXtcbiAgICBcbiAgICB0aGlzLm1hcE9wdGlvbnMgPSB7XG4gICAgICBjZW50ZXI6ICAgIHtsYXQ6IGN1cnJlbnRDZW50ZXIubGF0aXR1ZGUsIFxuICAgICAgICAgICAgICAgICAgbG5nOiBjdXJyZW50Q2VudGVyLmxvbmdpdHVkZX0sXG4gICAgICB6b29tOiAgICAgIEFwcFNldHRpbmdzLkdNQVBfREVGQVVMVC5aT09NLFxuICAgICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCxcbiAgICAgIHJhZGl1czogICAgQXBwU2V0dGluZ3MuR01BUF9ERUZBVUxULlJBRElVUyxcbiAgICB9O1xuXG4gICAgYW5ndWxhci5leHRlbmQodGhpcy5tYXBPcHRpb25zLCBtYXBTZXR0aW5ncyk7XG4gICAgXG4gICAgJGxvZy5kZWJ1Zygnem9vbSB7bWFwT3B0aW9ucy56b29tfScsIHRoaXMpO1xuICAgIFxuICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1hcFwiKSwgdGhpcy5tYXBPcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTsvL0dNYXAgY29uc3RydWN0b3JcblxuXG4gIEdNYXAucHJvdG90eXBlID17XG5cbiAgICBkcm9wTWFya2VyOiBmdW5jdGlvbihtYXJrZXJEYXRhKSB7XG4gICAgICB2YXIgX21hcmtlclNldHRpbmdzID0ge307XG4gICAgICBhbmd1bGFyLmV4dGVuZChfbWFya2VyU2V0dGluZ3MsIHRoaXMubWFwT3B0aW9ucywgbWFya2VyRGF0YSk7XG4gICAgICAkbG9nLmRlYnVnKCdkcm9wTWFya2VyIGZvciBcInt0aXRsZX1cIlwiIGF0IFwie2NlbnRlci5sYXR9LCB7Y2VudGVyLmxuZ31cIicsIF9tYXJrZXJTZXR0aW5ncyk7XG4gICAgICBcbiAgICAgIHZhciBfbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogIF9tYXJrZXJTZXR0aW5ncy5jZW50ZXIsXG4gICAgICAgICAgICBtYXA6ICAgICAgIHRoaXMubWFwLFxuICAgICAgICAgICAgdGl0bGU6ICAgICBfbWFya2VyU2V0dGluZ3MudGl0bGUsXG4gICAgICAgICAgICBvcGFjaXR5OiAgIF9tYXJrZXJTZXR0aW5ncy5vcGFjaXR5LFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBfbWFya2VyO1xuICAgIH0sXG5cblxuICAgIGJ1aWxkSW5mb1dpbmRvdzogZnVuY3Rpb24obG9jYXRpb25JbmZvLCBsb2NhdGlvbk1hcmtlcikge1xuICAgICAgdmFyIF9tYXAgPSB0aGlzO1xuXG4gICAgICAkbG9nLmRlYnVnKCdidWlsZEluZm9XaW5kb3cgZm9yIHtuYW1lfScsIGxvY2F0aW9uSW5mbyk7XG4gICAgICB2YXIgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJzxoMyBpZD1cImZpcnN0SGVhZGluZ1wiIGNsYXNzPVwiZmlyc3RIZWFkaW5nXCI+Jytsb2NhdGlvbkluZm8ubmFtZSsnPC9oMz4nK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHA+Jytsb2NhdGlvbkluZm8udHJhdmVsVGltZSsnIHdhbGs8L3A+J1xuICAgICAgfSk7XG5cbiAgICAgIGxvY2F0aW9uTWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ21hcmtlcjpjbGlja2VkJywgbG9jYXRpb25JbmZvICk7XG4gICAgICAgIGluZm93aW5kb3cub3BlbiggX21hcC5tYXAgLGxvY2F0aW9uTWFya2VyKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gaW5mb3dpbmRvdztcbiAgICB9LFxuXG5cbiAgICBwbG90TG9jYXRpb25zOmZ1bmN0aW9uKHBsb3REYXRhKSB7XG4gICAgICB2YXIgX21hcCA9IHRoaXM7XG4gICAgICB2YXIgX3Bsb3RTZXR0aW5ncyA9e307IFxuXG4gICAgICBhbmd1bGFyLmV4dGVuZChfcGxvdFNldHRpbmdzLHRoaXMubWFwT3B0aW9ucywgcGxvdERhdGEpO1xuICAgICAgJGxvZy5kZWJ1ZygncGxvdExvY2F0aW9ucyB3aXRoaW4gYSBcIntyYWRpdXN9XCIgbWV0ZXIgcmFkaXVzIG9mIFwie2NlbnRlci5sYXR9LCB7Y2VudGVyLmxuZ31cIicsIF9wbG90U2V0dGluZ3MpO1xuICAgICAgXG4gICAgICAvLyBkcm9wIG1hcmtlciBvbiBjdXJyZW50IGxvY2F0aW9uXG4gICAgICBfbWFwLmRyb3BNYXJrZXIoe3RpdGxlOlwiWW91IEFyZSBIZXJlXCIsIG9wYWNpdHk6MX0pO1xuXG4gICAgICAvLyBnZXQgYWxsIGxvY2F0aW9ucyBhcm91bmQgc3BlY2lmaWVkIGFyZWFcbiAgICAgIExvY2F0aW9uc1NlcnZpY2VcbiAgICAgICAgLmdldCh7cmFkaXVzOiBfcGxvdFNldHRpbmdzLnJhZGl1cywgXG4gICAgICAgICAgICAgIGxhdDogICAgX3Bsb3RTZXR0aW5ncy5jZW50ZXIubGF0LCBcbiAgICAgICAgICAgICAgbG5nOiAgICBfcGxvdFNldHRpbmdzLmNlbnRlci5sbmcgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24obG9jYXRpb25zKSB7XG5cbiAgICAgICAgICAvLyBwcm9jZXNzIGxvY2F0aW9ucyBcbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2gobG9jYXRpb25zLCBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZygncGxvdExvY2F0aW9uIHtuYW1lfScsbG9jYXRpb24pO1xuICAgICAgICAgICAgLy9nZXQgdGhlIHRyYXZlbFRpbWUgZm9yRWFjaCBsb2NhdGlvblxuICAgICAgICAgICAgbG9jYXRpb24uc2V0VHJhdmVsVGltZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uUGluID0gX21hcC5kcm9wTWFya2VyKHtjZW50ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogcGFyc2VGbG9hdChsb2NhdGlvbi5sYXQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiBwYXJzZUZsb2F0KGxvY2F0aW9uLmxvbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGxvY2F0aW9uLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgX21hcC5idWlsZEluZm9XaW5kb3cobG9jYXRpb24sIGxvY2F0aW9uUGluKTtcbiAgICAgICAgICAgICAgX21hcC5wbG90Um91dGVUbyhsb2NhdGlvbik7XG5cbiAgICAgICAgICAgIH0pOy8vL2xvY2F0aW9uLnNldFRyYXZlbFRpbWVcblxuXG4gICAgICAgICAgfSk7Ly8vZW5kIGFuZ3VsYXIuZm9yRWFjaFxuXG4gICAgICAgIH0pOy8vZW5kIExvY2F0aW9uc1NlcnZpY2VcblxuICAgIH0sXG5cbiAgICBwbG90Um91dGVUbzogZnVuY3Rpb24obG9jYXRpb24pe1xuICAgICAgJGxvZy5kZWJ1ZygncGxvdFJvdXRlVG8ge25hbWV9Jyxsb2NhdGlvbik7XG5cbiAgICAgIHZhciBfbWFwID0gdGhpcztcbiAgICAgIHZhciBfcm91dGVTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgIGRyYWdnYWJsZTogICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgc3VwcHJlc3NJbmZvV2luZG93czogdHJ1ZSxcbiAgICAgICAgICAgIHN1cHByZXNzTWFya2VyczogICAgIHRydWUsXG4gICAgICAgICAgICBvcmlnaW46ICAgICAgICAgICAgICBfbWFwLm1hcE9wdGlvbnMuY2VudGVyXG4gICAgICB9O1xuXG4gICAgICBhbmd1bGFyLmV4dGVuZChfcm91dGVTZXR0aW5ncywgdGhpcy5tYXBPcHRpb25zKTtcblxuICAgICAgdmFyIGRpcmVjdGlvbnNEaXNwbGF5ID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcih7XG4gICAgICAgICAgICBtYXA6ICAgICAgICAgICAgICAgICBfbWFwLm1hcCxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogICAgICAgICAgIF9yb3V0ZVNldHRpbmdzLmRyYWdnYWJsZSxcbiAgICAgICAgICAgIHN1cHByZXNzSW5mb1dpbmRvd3M6IF9yb3V0ZVNldHRpbmdzLnN1cHByZXNzSW5mb1dpbmRvd3MsXG4gICAgICAgICAgICBzdXBwcmVzc01hcmtlcnM6ICAgICBfcm91dGVTZXR0aW5ncy5zdXBwcmVzc01hcmtlcnNcbiAgICAgICAgICB9KSxcbiAgICAgICAgICByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgZGVzdGluYXRpb246IHtsYXQ6IHBhcnNlRmxvYXQobG9jYXRpb24ubGF0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogcGFyc2VGbG9hdChsb2NhdGlvbi5sb25nKX0sXG4gICAgICAgICAgICBvcmlnaW46ICAgICAgX3JvdXRlU2V0dGluZ3Mub3JpZ2luLFxuICAgICAgICAgICAgdHJhdmVsTW9kZTogIGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuV0FMS0lORyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7Ly8gUGFzcyB0aGUgZGlyZWN0aW9ucyByZXF1ZXN0IHRvIHRoZSBkaXJlY3Rpb25zIHNlcnZpY2UuXG5cblxuICAgICAgICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKHJlcXVlc3QsIGZ1bmN0aW9uKHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgIC8vIERpc3BsYXkgdGhlIHJvdXRlIG9uIHRoZSBtYXAuXG4gICAgICAgICAgICAgIGRpcmVjdGlvbnNEaXNwbGF5LnNldERpcmVjdGlvbnMocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pOy8vL2RpcmVjdGlvc1NlcnZpY2Uucm91dGVcblxuXG4gICAgfSxcblxuICAgIHNldFJhZGl1c0NpcmNsZTogZnVuY3Rpb24ocmFkaXVzQ2lyY2xlU2V0dGluZ3MpIHtcbiAgICAgIHZhciBfbWFwID0gdGhpcztcbiAgICAgIHZhciBfY2lyY2xlU2V0dGluZ3MgPXtcbiAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6ICAgJyMwMDg0YjQnLFxuICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAwLjgsXG4gICAgICAgICAgICAgIHN0cm9rZVdlaWdodDogIDEsXG4gICAgICAgICAgICAgIGZpbGxDb2xvcjogICAgICcjMDA4NGI0JyxcbiAgICAgICAgICAgICAgZmlsbE9wYWNpdHk6ICAgMC4wNjI1LFxuICAgICAgfTtcblxuICAgICAgYW5ndWxhci5leHRlbmQoX2NpcmNsZVNldHRpbmdzICx0aGlzLm1hcE9wdGlvbnMsIHJhZGl1c0NpcmNsZVNldHRpbmdzKTtcblxuICAgICAgdmFyIGxvY2F0aW9uc0NpcmNsZSA9IG5ldyBnb29nbGUubWFwcy5DaXJjbGUoe1xuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAgIF9jaXJjbGVTZXR0aW5ncy5zdHJva2VDb2xvcixcbiAgICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5OiBfY2lyY2xlU2V0dGluZ3Muc3Ryb2tlT3BhY2l0eSxcbiAgICAgICAgICAgICAgICBzdHJva2VXZWlnaHQ6ICBfY2lyY2xlU2V0dGluZ3Muc3Ryb2tlV2VpZ2h0LFxuICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogICAgIF9jaXJjbGVTZXR0aW5ncy5maWxsQ29sb3IsXG4gICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk6ICAgX2NpcmNsZVNldHRpbmdzLmZpbGxPcGFjaXR5LFxuICAgICAgICAgICAgICAgIG1hcDogICAgICAgICAgIF9tYXAubWFwLFxuICAgICAgICAgICAgICAgIGNlbnRlcjogICAgICAgIF9jaXJjbGVTZXR0aW5ncy5jZW50ZXIsXG4gICAgICAgICAgICAgICAgcmFkaXVzOiAgICAgICAgX2NpcmNsZVNldHRpbmdzLnJhZGl1c1xuICAgICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbG9jYXRpb25zQ2lyY2xlO1xuICAgIH1cblxuICB9O1xuICAgIFxuXG5cbiAgcmV0dXJuIEdNYXA7XG5cbiAgXG59KTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbW9kZWxzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xubW9kZWxzTW9kdWxlLmZhY3RvcnkoJ0xvY2F0aW9uJywgZnVuY3Rpb24oJHJvb3RTY29wZSwgJGxvZywgJHEgKSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdMb2NhdGlvbicpO1xuXG4gIGZ1bmN0aW9uIExvY2F0aW9uKExvY2F0aW9uRGF0YSl7XG4gICAgYW5ndWxhci5leHRlbmQodGhpcywgTG9jYXRpb25EYXRhKTtcbiAgICAvLyAkbG9nLmRlYnVnKCd7bmFtZX0nLCB0aGlzKTtcbiAgICBcbiAgfVxuXG5cbiAgTG9jYXRpb24ucmVzcG9uc2VUcmFuc2Zvcm1lciA9IGZ1bmN0aW9uIChyZXNwb25zZURhdGEpIHtcbiAgICAkbG9nLmRlYnVnKCdyZXNvcG9uc2VUcmFuc2Zvcm1lciB7bGVuZ3RofScsIHJlc3BvbnNlRGF0YS5sb2NhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlRGF0YS5sb2NhdGlvbnNcbiAgICBcdFx0XHRcdFx0Lm1hcChMb2NhdGlvbi5idWlsZCk7XG4gIH1cblxuXG4gIExvY2F0aW9uLnByb3RvdHlwZS5zZXRUcmF2ZWxUaW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAkbG9nLmRlYnVnKCdzZXRUcmF2ZWxUaW1lIHtuYW1lfScsIHRoaXMpO1xuICAgICAgXG4gICAgICB2YXIgX2xvY2F0aW9uID0gdGhpcztcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgIHZhciBzZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpc3RhbmNlTWF0cml4U2VydmljZTtcbiAgICAgICBzZXJ2aWNlLmdldERpc3RhbmNlTWF0cml4KHtcbiAgICAgICAgIG9yaWdpbnM6ICAgICAgIFt7bGF0OiAkcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbi5sYXRpdHVkZSwgbG5nOiRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uLmxvbmdpdHVkZX1dLFxuICAgICAgICAgZGVzdGluYXRpb25zOiAgW3tsYXQ6IHBhcnNlRmxvYXQodGhpcy5sYXQpLCBsbmc6IHBhcnNlRmxvYXQodGhpcy5sb25nKX1dLFxuICAgICAgICAgdHJhdmVsTW9kZTogICAgZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5XQUxLSU5HLFxuICAgICAgICAgdW5pdFN5c3RlbTogICAgZ29vZ2xlLm1hcHMuVW5pdFN5c3RlbS5JTVBFUklBTCxcbiAgICAgICAgIGF2b2lkSGlnaHdheXM6IGZhbHNlLFxuICAgICAgICAgYXZvaWRUb2xsczogICAgZmFsc2VcbiAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzKSB7XG4gICAgICAgICBcdF9sb2NhdGlvbi50cmF2ZWxUaW1lID0gcmVzcG9uc2Uucm93c1swXS5lbGVtZW50c1swXS5kdXJhdGlvbi50ZXh0O1xuICAgICAgICAgXHRkZWZlcnJlZC5yZXNvbHZlKF9sb2NhdGlvbik7XG4gICAgICAgICAvLyAkbG9nLmRlYnVnKFwie25hbWV9IC0ge3RyYXZlbFRpbWV9XCIsIF9sb2NhdGlvbik7XG4gICAgICAgICAgXG4gICAgICAgfSk7XG5cbiAgICAgICBcbiAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcblxuICB9XG5cblxuICBMb2NhdGlvbi5idWlsZCA9IGZ1bmN0aW9uKGxEYXRhKSB7XG4gICAgLy8gJGxvZy5kZWJ1ZygnYnVpbGQge25hbWV9JywgbERhdGEpO1xuICAgIC8vIExvY2F0aW9uLnNldFRyYXZlbFRpbWUobERhdGEpO1xuICAgIHJldHVybiBuZXcgTG9jYXRpb24obERhdGEpO1xuICB9XG5cbiAgIFxuXG4gIFxuIFxuICByZXR1cm4gTG9jYXRpb247XG5cblxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYnVsayA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAubW9kZWxzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pOyIsIid1c2Ugc3RyaWN0JztcblxuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBPbkNvbmZpZygkc3RhdGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJHByb3ZpZGUpIHtcbiAgXG4gIC8vYWN0aXZhdGUgTG9nRGVjb3JhdG9yXG4gIHJlcXVpcmUoJy4vdXRpbHMvbG9nZ2luZy9Mb2dEZWNvcmF0b3IuanMnKSgkcHJvdmlkZSk7XG5cbiRzdGF0ZVByb3ZpZGVyXG5cbiAgLnN0YXRlKCdhcHAnLCB7XG4gICAgdXJsOiAnL2FwcCcsXG4gICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbWVudS5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnQXBwQ3RybCcsXG4gICAgcmVzb2x2ZTp7XG4gICAgICAgIGNvb3JkaW5hdGVzOmZ1bmN0aW9uKEN1cnJlbnRDb29yZHMpIHtcbiAgICAgICAgICByZXR1cm4gQ3VycmVudENvb3Jkcy5nZXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfSlcblxuICAuc3RhdGUoJ2FwcC5zZWFyY2gnLCB7XG4gICAgdXJsOiAnL3NlYXJjaCcsXG4gICAgdmlld3M6IHtcbiAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvc2VhcmNoLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnU2VhcmNoQ3RybCdcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgLnN0YXRlKCdhcHAubWFwJywge1xuICAgICAgXG4gICAgICB1cmw6ICcvbWFwJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9tYXAuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ01hcEN0cmwgYXMgTWFwJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuc3RhdGUoJ2FwcC5wbGF5bGlzdHMnLCB7XG4gICAgICB1cmw6ICcvcGxheWxpc3RzJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9wbGF5bGlzdHMuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ1BsYXlsaXN0c0N0cmwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gIC5zdGF0ZSgnYXBwLnNpbmdsZScsIHtcbiAgICB1cmw6ICcvcGxheWxpc3RzLzpwbGF5bGlzdElkJyxcbiAgICB2aWV3czoge1xuICAgICAgJ21lbnVDb250ZW50Jzoge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9wbGF5bGlzdC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1BsYXlsaXN0Q3RybCdcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG5cbiAgLy8gaWYgbm9uZSBvZiB0aGUgYWJvdmUgc3RhdGVzIGFyZSBtYXRjaGVkLCB1c2UgdGhpcyBhcyB0aGUgZmFsbGJhY2tcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2FwcC9tYXAnKTtcbiAgXG4gIFxuXG5cbn0vLy8vIE9uQ29uZmlnXG5cblxubW9kdWxlLmV4cG9ydHMgPSBPbkNvbmZpZzsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIE9uUnVuKCRpb25pY1BsYXRmb3JtLCAkbG9nKSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdPblJ1bicpO1xuICBcbiAgJGlvbmljUGxhdGZvcm0ucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgLy8gSGlkZSB0aGUgYWNjZXNzb3J5IGJhciBieSBkZWZhdWx0IChyZW1vdmUgdGhpcyB0byBzaG93IHRoZSBhY2Nlc3NvcnkgYmFyIGFib3ZlIHRoZSBrZXlib2FyZFxuICAgIC8vIGZvciBmb3JtIGlucHV0cylcbiAgICBpZiAod2luZG93LmNvcmRvdmEgJiYgd2luZG93LmNvcmRvdmEucGx1Z2lucy5LZXlib2FyZCkge1xuICAgICAgY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmhpZGVLZXlib2FyZEFjY2Vzc29yeUJhcih0cnVlKTtcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5kaXNhYmxlU2Nyb2xsKHRydWUpO1xuXG4gICAgfVxuICAgIGlmICh3aW5kb3cuU3RhdHVzQmFyKSB7XG4gICAgICAvLyBvcmcuYXBhY2hlLmNvcmRvdmEuc3RhdHVzYmFyIHJlcXVpcmVkXG4gICAgICBTdGF0dXNCYXIuc3R5bGVEZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPblJ1bjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIEN1cnJlbnRDb29yZHMoJHEsICRodHRwLCAkbG9nLCAgQXBwU2V0dGluZ3MpIHtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoXCJDdXJyZW50Q29vcmRzU2VydmljZVwiKTtcbiAgXG4gIHZhciBzZXJ2aWNlID0ge307XG5cbiAgc2VydmljZS5nZXQgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7ICAgIFxuXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbihwb3MpIHtcbiAgICAgICAgXG4gICAgICAkbG9nLmRlYnVnKCdsYXQ6IHtjb29yZHMubGF0aXR1ZGV9Jyxwb3MpO1xuICAgICAgJGxvZy5kZWJ1ZygnbG9uZzoge2Nvb3Jkcy5sb25naXR1ZGV9Jyxwb3MpO1xuXG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKHBvcy5jb29yZHMpO1xuICAgICAgICBcbiAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgJGxvZy53YXJuKCdVbmFibGUgdG8gZ2V0IGxvY2F0aW9uOiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgZGVmZXJyZWQucmVqZWN0KGVyciwgc3RhdHVzKTtcbiAgIH0pO1xuXG5cbiAgICBcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfTtcblxuICByZXR1cm4gc2VydmljZTtcblxufVxuXG5zZXJ2aWNlc01vZHVsZS5zZXJ2aWNlKCdDdXJyZW50Q29vcmRzJywgQ3VycmVudENvb3Jkcyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2VydmljZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBMb2NhdGlvbnNTZXJ2aWNlKCRsb2csIFlvY2FsLCBMb2NhdGlvbikge1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZShcIkxvY2F0aW9uc1NlcnZpY2VTZXJ2aWNlXCIpO1xuXG4gIHZhciBzZXJ2aWNlID0ge307XG5cbiAgc2VydmljZS5nZXQgPSBmdW5jdGlvbiggZ2V0RGF0YSApIHtcblxuICAgICRsb2cuZGVidWcoJ0dFVCBsb2NhdGlvbiBpbiBhIHtyYWRpdXN9ICBvZiB7bGF0fSwge2xuZ30nLCBnZXREYXRhKTtcblxuICAgIHJldHVybiBZb2NhbC5nZXQoZ2V0RGF0YSlcbiAgICAgICAgICAgICAgICAudGhlbihMb2NhdGlvbi5yZXNwb25zZVRyYW5zZm9ybWVyKTtcblxuICB9O1xuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ0xvY2F0aW9uc1NlcnZpY2UnLCBMb2NhdGlvbnNTZXJ2aWNlKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIFlvY2FsKCRxLCAkaHR0cCwgQXBwU2V0dGluZ3MsICRsb2cpIHtcblxuICB2YXIgc2VydmljZSA9IHt9O1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZShcIllvY2FsU2VydmljZVwiKTtcblxuICBzZXJ2aWNlLmdldCA9IGZ1bmN0aW9uKCBnZXREYXRhICkge1xuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAvLyAvbGlzdEJ5RGlzdGFuY2VDYXQvRm9vZC84MDAwLzM5LjkzNzg5My8tNzUuMTY4OTM0N1xuICAgJGh0dHAuZ2V0KEFwcFNldHRpbmdzLnlvY2FsQVBJLmJhc2UrJ2xpc3RCeURpc3RhbmNlQ2F0L0Zvb2QvJytnZXREYXRhLnJhZGl1cysnLycrZ2V0RGF0YS5sYXQrJy8nK2dldERhdGEubG5nKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZygnZm91bmQge2xlbmd0aH0gc3BvdHMgd2l0aGluICcrZ2V0RGF0YS5yYWRpdXMrJyBtZXRlcnMgb2YgJytnZXREYXRhLmxhdCsnLCcrZ2V0RGF0YS5sbmcsIGRhdGEubG9jYXRpb25zKTtcbiAgICAgICAgZGF0YS5yYWRpdXMgPSBnZXREYXRhLnJhZGl1cztcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICB9KS5lcnJvcihmdW5jdGlvbihlcnIsIHN0YXR1cykge1xuICAgICAgICAkbG9nLndhcm4oJ1VuYWJsZSB0byBnZXQgbG9jYXRpb246ICcgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIsIHN0YXR1cyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfTtcblxuICByZXR1cm4gc2VydmljZTtcblxufVxuXG5zZXJ2aWNlc01vZHVsZS5zZXJ2aWNlKCdZb2NhbCcsIFlvY2FsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5zZXJ2aWNlcycsIFtdKTtcblxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIEV4YW1wbGVTZXJ2aWNlKCRxLCAkaHR0cCkge1xuXG4gIHZhciBzZXJ2aWNlID0ge307XG5cbiAgc2VydmljZS5nZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgJGh0dHAuZ2V0KCdhcGlQYXRoJykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyLCBzdGF0dXMpIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVyciwgc3RhdHVzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ0V4YW1wbGVTZXJ2aWNlJywgRXhhbXBsZVNlcnZpY2UpOyIsIi8qKlxuICogQGF1dGhvciAgICAgVGhvbWFzIEJ1cmxlc29uXG4gKiBAYXV0aG9yICAgICBTdGFja092ZXJmbG93IC0gSGFydG8sIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjMxNTQwOC9ob3ctZG8taS1mb3JtYXQtYS10aW1lc3RhbXAtaW4tamF2YXNjcmlwdC10by1kaXNwbGF5LWl0LWluLWdyYXBocy11dGMtaXMtZmluZVxuICogQGRlc2NyaXB0aW9uXG4gKiAgXG4gKiBEYXRlVGltZSB1dGlsaXR5IGNsYXNzIHRoYXQgc3BpdHMgb3V0IFVUQyB0aW1lc3RhbXAgc3RyaW5ncyB1c3VhbGx5IHVzZWQgaW4gYSByZXBvcnRpbmcsIHByaW50LWNhcGFibGUgcHJvY2Vzcy5cbiovXG4gXG5cbiAndXNlIHN0cmljdCc7XG5cblxudmFyIGJ1aWxkVGltZVN0cmluZyA9IGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCBcIiVoOiVtOiVzOiV6XCI7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBhZCh2YWx1ZSwgaXNNaWxsaVNlY29uZHMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIChpc01pbGxpU2Vjb25kcykgPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpc01pbGxpU2Vjb25kcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihpc01pbGxpU2Vjb25kcylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlIDwgMTApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCIwMFwiICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih2YWx1ZSA8IDEwMClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIjBcIiArIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybih2YWx1ZS50b1N0cmluZygpLmxlbmd0aCA8IDIpID8gXCIwXCIgKyB2YWx1ZSA6IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoLyUoW2EtekEtWl0pL2csIGZ1bmN0aW9uIChfLCBmbXRDb2RlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN3aXRjaChmbXRDb2RlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiWVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldERhdGUoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldEhvdXJzKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNaW51dGVzKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgZm9ybWF0IGNvZGU6IFwiICsgZm10Q29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cblxuIC8vIFB1Ymxpc2ggQVBJIGZvciBEYXRlVGltZSB1dGlsc1xuICAgICAgICAvLyByZXR1cm4ge1xuICAgICAgICAvLyAgICAgZm9ybWF0dGVkTm93OiBmdW5jdGlvbiAoKVxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBidWlsZFRpbWVTdHJpbmcobmV3IERhdGUoKSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIFxuIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZvcm1hdHRlZE5vdzogZnVuY3Rpb24gKCkgeyByZXR1cm4gYnVpbGRUaW1lU3RyaW5nKG5ldyBEYXRlKCkpOyB9XG4gfTtcblxuXG5cbiIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogTG9nRGVjb3JhdG9yXG4gKiAgQHNvdXJjZTogaHR0cDovL3NvbHV0aW9ub3B0aW1pc3QuY29tLzIwMTMvMTAvMDcvZW5oYW5jZS1hbmd1bGFyanMtbG9nZ2luZy11c2luZy1kZWNvcmF0b3JzL1xuICovXG5cbiB2YXIgTG9nRGVjb3JhdG9yID0gZnVuY3Rpb24oICRwcm92aWRlICApe1xuXG5cbiAgICAgICAgICAgICAgLy8gUmVnaXN0ZXIgb3VyICRsb2cgZGVjb3JhdG9yIHdpdGggQW5ndWxhckpTICRwcm92aWRlclxuICAgICAgICAgICAgICAkcHJvdmlkZS5kZWNvcmF0b3IoICckbG9nJywgWyBcIiRkZWxlZ2F0ZVwiLCBmdW5jdGlvbiggJGRlbGVnYXRlIClcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgLy8gTk9URTogdGhlIExvZ0VuY2hhbmNlciBtb2R1bGUgcmV0dXJucyBhIEZVTkNUSU9OIHRoYXQgd2UgbmFtZWQgYGVuY2hhbmNlTG9nZ2VyRm5gXG4gICAgICAgICAgICAgICAvLyAgICAgICBBbGwgdGhlIGRldGFpbHMgb2YgaG93IHRoZSBgZW5jaGFuY2VtZW50YCB3b3JrcyBpcyBlbmNhcHN1bGF0ZWQgaW4gTG9nRW5oYW5jZXIhXG5cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmUoJy4vTG9nRW5oYW5jZXIuanMnKSggJGRlbGVnYXRlICk7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAkZGVsZWdhdGU7XG4gICAgICAgICAgICAgIH1dKTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSAgTG9nRGVjb3JhdG9yOyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogTG9nRW5oYW5jZXJcbiAqIFRoaXMgYWRkcyB0aW1lc3RhbXBzIGFuZCBzdXBwbGFudCBmdW5jdGlvbmFsaXR5IHRvIEFuZ3VsYXIgJGxvZyBzZXJ2aWNlXG4gKiBAc291cmNlOiBodHRwOi8vc29sdXRpb25vcHRpbWlzdC5jb20vMjAxMy8xMC8wNy9lbmhhbmNlLWFuZ3VsYXJqcy1sb2dnaW5nLXVzaW5nLWRlY29yYXRvcnMvXG4gKiBAYXBpOiBwdWJsaWNcbiAqIEByZXR1cm5zOiBPYmplY3QgLSBleHRlbmRlZCAkbG9nIHNlcnZpY2VcbiAqL1xuXG52YXIgZW5jaGFuY2VMb2dnZXIgPSBmdW5jdGlvbiggJGxvZyApe1xuICB2YXIgc3VwcGxhbnQgPSByZXF1aXJlKCcuLi9zdXBwbGFudC5qcycpO1xuICB2YXIgRGF0ZVRpbWUgPSByZXF1aXJlKCcuLi9EYXRlVGltZS5qcycpO1xuXG5cbiAgLyoqXG4gICAqIENhcHR1cmUgdGhlIG9yaWdpbmFsICRsb2cgZnVuY3Rpb25zOyBmb3IgdXNlIGluIGVuaGFuY2VkTG9nRm4oKVxuICAgKiBAYXBpICBwcml2YXRlIFxuICAgKi9cbiAgXG4gIHZhciBfJGxvZyA9IChmdW5jdGlvbiggJGxvZyApe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9nICAgOiAkbG9nLmxvZyxcbiAgICAgICAgaW5mbyAgOiAkbG9nLmluZm8sXG4gICAgICAgIHdhcm4gIDogJGxvZy53YXJuLFxuICAgICAgICBkZWJ1ZyA6ICRsb2cuZGVidWcsXG4gICAgICAgIC8vIGVycm9yIDogJGxvZy5lcnJvclxuICAgICAgfTtcbiAgfSkoICRsb2cgKTsgXG5cblxuXG4gICAvKipcbiAgICAqIFBhcnRpYWwgYXBwbGljYXRpb24gdG8gcHJlLWNhcHR1cmUgYSBsb2dnZXIgZnVuY3Rpb25cbiAgICAqIEBhcGk6ICBwcml2YXRlIFxuICAgICogQHJldHVybnM6IEZ1bmN0aW9uIFxuICAgICovXG4gICAgdmFyIHByZXBhcmVMb2dGbiA9IGZ1bmN0aW9uKCBsb2dGbiwgY2xhc3NOYW1lICl7XG5cbiAgICAgIC8qKlxuICAgICAgICogSW52b2tlIHRoZSBzcGVjaWZpZWQgYGxvZ0ZuPGAgd2l0aCB0aGUgc3VwcGxhbnQgZnVuY3Rpb25hbGl0eS4uLlxuICAgICAgICogQGFwaTogcHJpdmF0ZSBcbiAgICAgICAqIEBleGFtcGxlOiBcbiAgICAgICAqICAgdmFyIHVzZXIgPSB7IHdobzpcIlRob21hcyBCdXJsZXNvblwiXCIsIGVtYWlsPVwiVGhvbWFzQnVybGVzb25AZ21haWwuY29tXCJcIiB9O1xuICAgICAgICogICAkbG9nLndhcm4oIFwiQSB3YXJuaW5nIG1lc3NhZ2UgZm9yIGB7d2hvfWAgd2lsbCBiZSBzZW50IHRvIGB7ZW1haWx9YCAhXCIsIHVzZXIgKTsgICBcbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNob3VsZCBvdXRwdXQ6IEEgd2FybmluZyBtZXNzYWdlIGZvciBgVGhvbWFzIEJ1cmxlc29uYCB3aWxsIGJlIHNlbnQgdG8gYFRob21hc0J1cmxlc29uQGdtYWlsLmNvbWAgIVxuICAgICAgICovXG4gICAgICB2YXIgZW5oYW5jZWRMb2dGbiA9IGZ1bmN0aW9uKCApe1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgICAgICBub3cgID0gRGF0ZVRpbWUuZm9ybWF0dGVkTm93KCk7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJztcbiAgICAgICAgICAgIC8vIHByZXBlbmQgYSB0aW1lc3RhbXAgdG8gdGhlIG9yaWdpbmFsIG91dHB1dCBtZXNzYWdlXG4gICAgICAgICAgICBhcmdzWzBdID0gc3VwcGxhbnQoXCJ7MH0gLSB7MX17Mn1cIiwgWyBub3csIGNsYXNzTmFtZSwgYXJnc1swXSBdKTtcblxuICAgICAgICBsb2dGbi5jYWxsKCBudWxsLCAgc3VwcGxhbnQuYXBwbHkoIG51bGwsIGFyZ3MgKSApO1xuICAgICAgfTtcblxuICAgICAgLy8gU3BlY2lhbC4uLiBvbmx5IG5lZWRlZCB0byBzdXBwb3J0IGFuZ3VsYXItbW9ja3MgZXhwZWN0YXRpb25zXG4gICAgICBlbmhhbmNlZExvZ0ZuLmxvZ3MgPSBbIF07XG4gXG4gICAgICByZXR1cm4gZW5oYW5jZWRMb2dGbjtcbiAgICAgIFxuICAgIH07XG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBTdXBwb3J0IHRvIGdlbmVyYXRlIGNsYXNzLXNwZWNpZmljIGxvZ2dlciBpbnN0YW5jZSB3aXRoIGNsYXNzbmFtZSBvbmx5XG4gICAgICpcbiAgICAgKiBAcGFyYW06IG5hbWVcbiAgICAgKiBAcmV0dXJuczogT2JqZWN0IHdyYXBwZXIgZmFjYWRlIHRvICRsb2dcbiAgICAgKi9cbiAgICB2YXIgZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiggY2xhc3NOYW1lICl7XG4gICAgICBjbGFzc05hbWUgPSAoIGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICkgPyBjbGFzc05hbWUgKyBcIjo6XCIgOiBcIlwiO1xuXG4gICAgICByZXR1cm57XG4gICAgICAgICBsb2cgICA6IHByZXBhcmVMb2dGbiggXyRsb2cubG9nLCAgICBjbGFzc05hbWUgKSxcbiAgICAgICAgIGluZm8gIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy5pbmZvLCAgIGNsYXNzTmFtZSApLFxuICAgICAgICAgd2FybiAgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLndhcm4sICAgY2xhc3NOYW1lICksXG4gICAgICAgICBkZWJ1ZyA6IHByZXBhcmVMb2dGbiggXyRsb2cuZGVidWcsICBjbGFzc05hbWUgKSxcbiAgICAgICAgIC8vIGVycm9yIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy5lcnJvciwgIGNsYXNzTmFtZSApXG4gICAgICB9O1xuXG4gICAgfTtcblxuXG5cbiAgICAvLyB3cmFwIGVhY2ggbG9nIG1ldGhvZCBcbiAgICAkbG9nLmxvZyAgID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLmxvZyApO1xuICAgICRsb2cuaW5mbyAgPSBwcmVwYXJlTG9nRm4oICRsb2cuaW5mbyApO1xuICAgICRsb2cud2FybiAgPSBwcmVwYXJlTG9nRm4oICRsb2cud2FybiApO1xuICAgICRsb2cuZGVidWcgPSBwcmVwYXJlTG9nRm4oICRsb2cuZGVidWcgKTtcbiAgICAvLyAkbG9nLmVycm9yID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLmVycm9yICk7XG5cbiAgICAvLyBBZGQgc3BlY2lhbCBtZXRob2QgdG8gQW5ndWxhckpTICRsb2dcbiAgICAkbG9nLmdldEluc3RhbmNlID0gZ2V0SW5zdGFuY2U7XG4gXG5cbiAgICByZXR1cm4gJGxvZztcbn07Ly9lbmNoYW5jZUxvZ2dlclxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSAgZW5jaGFuY2VMb2dnZXI7IiwiLyoqXG4gKiBAYXV0aG9yICAgICAgVGhvbWFzIEJ1cmxlc29uXG4gKiBAZGF0ZSAgICAgICAgTm92ZW1iZXIsIDIwMTNcbiAqIEBzb3VyY2U6ICAgICBodHRwczovL2dpdGh1Yi5jb20vVGhvbWFzQnVybGVzb24vYW5ndWxhcmpzLWxvZ0RlY29yYXRvci9ibG9iL21hc3Rlci9zcmMvbWluZHNwYWNlL3V0aWxzL3N1cHBsYW50LmpzXG4gICovXG4gXG5cbiAndXNlIHN0cmljdCc7XG5cbnZhciBzdXBwbGFudCA9ICBmdW5jdGlvbiggdGVtcGxhdGUsIHZhbHVlcywgcGF0dGVybiApIHtcbiAgICAgICAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuIHx8IC9cXHsoW15cXHtcXH1dKilcXH0vZztcblxuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UocGF0dGVybiwgZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHZhciBwID0gYi5zcGxpdCgnLicpLFxuICAgICAgICAgICAgICAgICAgICByID0gdmFsdWVzO1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyBpbiBwKSB7IHIgPSByW3Bbc11dOyAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAgICAgICAgIHIgPSBhO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAodHlwZW9mIHIgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiByID09PSAnbnVtYmVyJykgPyByIDogYTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG5cbi8vIHN1cHBsYW50KCkgbWV0aG9kIGZyb20gQ3JvY2tmb3JkcyBgUmVtZWRpYWwgSmF2YXNjcmlwdGBcbkZ1bmN0aW9uLnByb3RvdHlwZS5tZXRob2QgPSBmdW5jdGlvbiAobmFtZSwgZnVuYykge1xuICAgIHRoaXMucHJvdG90eXBlW25hbWVdID0gZnVuYztcbiAgICByZXR1cm4gdGhpcztcbn07XG5cblN0cmluZy5tZXRob2QoXCJzdXBwbGFudFwiLCBmdW5jdGlvbiggdmFsdWVzLCBwYXR0ZXJuICkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICByZXR1cm4gc3VwcGxhbnQoc2VsZiwgdmFsdWVzLCBwYXR0ZXJuKTtcbn0pO1xuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9ICBTdHJpbmcuc3VwcGxhbnQgPSBzdXBwbGFudDsiXX0=

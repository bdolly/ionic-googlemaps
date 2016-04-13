(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Library/WebServer/Documents/ionic-googlemaps/www/js/app-main.js":[function(require,module,exports){
'use strict';

// angular modules
// require('angular-module-sanitize');
// require('./templates');
require('./controllers/_index');
require('./services/_index');
// require('./components/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ionic',
    'app.controllers',
    'app.services',
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

},{"./constants.development":"/Library/WebServer/Documents/ionic-googlemaps/www/js/constants.development.js","./controllers/_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js","./on_config":"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_config.js","./on_run":"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_run.js","./services/_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/constants.development.js":[function(require,module,exports){
'use strict';

var AppSettings = {
  yocalAPI:{
    // base: 'http://yoendpoint4-wbbs.rhcloud.com/api/v1/yokal/data/'
    base: 'http://localhost:8100/api/v1/yokal/data/'
  }

};

module.exports = AppSettings;

},{}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/AppCtrl.js":[function(require,module,exports){
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

MapCtrl.$inject = ["$scope", "$log", "$state", "$ionicLoading", "CurrentCoords", "Yocal", "$timeout"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MapCtrl($scope, $log, $state, $ionicLoading, CurrentCoords, Yocal, $timeout ) {
 	// ViewModel
  	var vm = this;
    vm.coordinates = {};	
  
  	// $log.debug('initMap');
  	$log = $log.getInstance("MapCtrl");
  	      
    var mapOptions = {
      // center:    {lat: 39.937893, lng:-75.1689347},
      zoom:      1,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    $ionicLoading.show({
      template: "Exploring Your Location ...",
      backdrop: true
    });

    
    CurrentCoords.get().then(function(pos){
      mapOptions.center = {lat: pos.latitude, lng: pos.longitude};

      vm.gmap = new google.maps.Map(document.getElementById("Map"), mapOptions);

      var youAreHere = new google.maps.Marker({
        position: mapOptions.center,
        map:      vm.gmap,
        title:    'You Are Here'
      });
      
      $ionicLoading.hide();
    
      return Yocal.get({radius: 100000, lat:pos.latitude, lng:pos.longitude });
      // return Yocal.get({radius: 8000, lat:mapOptions.center.lat, lng:mapOptions.center.lng });
    })
    .then(function(data){

      
      angular.forEach(data.locations, function(value, index){
        var infowindow = new google.maps.InfoWindow({
                content: '<h3 id="firstHeading" class="firstHeading">'+value.name+'</h3>'
            }),
            marker = new google.maps.Marker({
              position:  {lat: parseFloat(value.lat), lng:parseFloat(value.long)},
              map:       vm.gmap,
              label:     value.name,
              animation: google.maps.Animation.DROP,
              opacity:   0
          });


          var directionsDisplay = new google.maps.DirectionsRenderer({
            map: vm.gmap
          });
          var request = {
            destination: marker.position,
            origin:      mapOptions.center,
            travelMode:  google.maps.TravelMode.WALKING
          };


          // Pass the directions request to the directions service.
          var directionsService = new google.maps.DirectionsService();

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

SearchCtrl.$inject = ["$scope", "$log", "$state", "Yocal", "CurrentCoords", "$ionicLoading", "$ionicSlideBoxDelegate", "$timeout"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function SearchCtrl($scope, $log, $state, Yocal, CurrentCoords, $ionicLoading, $ionicSlideBoxDelegate, $timeout) {
 	// ViewModel
  	var vm = this;
    // $scope.locations = $state.current.data.locations;
    $scope.locations =[];
    $scope.shouldShowDelete = false;
 	$scope.shouldShowReorder = false;
 	$scope.listCanSwipe = true;
    var currentCords ={};

    $log = $log.getInstance('SearchCtrl');

    $ionicLoading.show({
    	template: "Finding Rad Spots ...",
    	backdrop: true
    });

    // var southPhilly = {lat: 39.937893, lng:-75.1689347};

    CurrentCoords.get().then(function(youAreHere){
        currentCords = {lat:youAreHere.latitude, lng:youAreHere.longitude};

    	return Yocal.get({radius: 80000, lat:currentCords.lat, lng:currentCords.lng});
    })
    .then(function(data){
        var service = new google.maps.DistanceMatrixService;

    	angular.forEach(data.locations, function(value, index){
    	
    		service.getDistanceMatrix({
    			origins:       [currentCords],
    			destinations:  [{lat: parseFloat(value.lat), lng: parseFloat(value.long)}],
    			travelMode:    google.maps.TravelMode.WALKING,
    			unitSystem:    google.maps.UnitSystem.IMPERIAL,
    			avoidHighways: false,
    			avoidTolls:    false
    		}, function(response, status) {

    			data.locations[index].travelTime = response.rows[0].elements[0].duration.text;
                // $log.debug("{name} - {travelTime}", value);
    		});
    	});

        $ionicSlideBoxDelegate.update();
        $scope.locations = data.locations;      

        $timeout(function() {
            $ionicLoading.hide();    
        }, 1000);
        

   	});
    
    

  
};


controllersModule.controller('SearchCtrl', SearchCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js":[function(require,module,exports){
'use strict';



module.exports = angular.module('app.controllers', []);

({"AppCtrl":require("./AppCtrl.js"),"BrowseCtrl":require("./BrowseCtrl.js"),"MapCtrl":require("./MapCtrl.js"),"PlaylistCtrl":require("./PlaylistCtrl.js"),"PlaylistsCtrl":require("./PlaylistsCtrl.js"),"SearchCtrl":require("./SearchCtrl.js")});

},{"./AppCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/AppCtrl.js","./BrowseCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/BrowseCtrl.js","./MapCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/MapCtrl.js","./PlaylistCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/PlaylistCtrl.js","./PlaylistsCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/PlaylistsCtrl.js","./SearchCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/SearchCtrl.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_config.js":[function(require,module,exports){
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
        templateUrl: 'templates/search.html',
        controller: 'SearchCtrl'
      }
    },

    data:{
      locations: [
  {
     "_id": "5709d94d85db6f029bff9e6e",
     "name": "Los Gallos",
     "adress": "951 Wolf St Philadelphia PA 19148 United States",
     "lat": "39.921178",
     "long": "-75.1632599",
     "category":"Food",
    "distancefromlocation":1918
  },
  {
     "_id": "5709d94d85db6f029bff9e6f",
     "name": "Hardena",
     "adress": "754 S Hicks St, Philadelphia, PA 19145",
     "lat": "39.941686",
     "long": "-75.1684184",
     "category":"Food",
    "distancefromlocation":423
  },
  {
     "_id": "5709d94d85db6f029bff9e71",
     "name": "Nam Son Bakery",
     "adress": "1601 Washington Ave Philadelphia PA 19146 United States",
     "lat": "39.9392094",
     "long": "-75.170264",
     "category":"Food",
    "distancefromlocation":185
  },
  {
     "_id": "5709d94d85db6f029bff9e72",
     "name": "Breezy's Cafe",
     "adress": "1200 Point Breeze Ave Philadelphia PA 19146 United States",
     "lat": "39.9372372",
     "long": "-75.1771073",
     "category":"Food",
    "distancefromlocation":702
  },
  {
     "_id": "5709d94d85db6f029bff9e73",
     "name": "Pizza Brain/Little Baby's",
     "adress": "2313 Frankford Ave Philadelphia PA 19125 United States",
     "lat": "39.9806746",
     "long": "-75.1280968",
     "category":"Food",
    "distancefromlocation":5894
  },
  {
     "_id": "5709d94d85db6f029bff9e74",
     "name": "Sketch Burger",
     "adress": "413 E Girard Ave Philadelphia PA 19125 United States",
     "lat": "39.9705792",
     "long": "-75.1301184",
     "category":"Food",
    "distancefromlocation":4917
  },
  {
     "_id": "5709d94d85db6f029bff9e76",
     "name": "Tortilleria San Roman",
     "adress": "951 S 9th St Philadelphia PA 19147 United States",
     "lat": "39.9376396",
     "long": "-75.157989",
     "category":"Food",
    "distancefromlocation":936
  },
  {
     "_id": "5709d94d85db6f029bff9e78",
     "name": "Hai Street Kitchen & Co.",
     "adress": "32 S 18th St Philadelphia PA 19103 United States",
     "lat": "39.9521638",
     "long": "-75.1704619",
     "category":"Food",
    "distancefromlocation":1590
  },
  {
     "_id": "5709d94d85db6f029bff9e80",
     "name": "Federal Donuts",
     "adress": "1219 S 2nd St Philadelphia PA 19147 United States",
     "lat": "39.9322098",
     "long": "-75.1474603",
     "category":"Food",
    "distancefromlocation":1941
  },
  {
     "_id": "5709d94d85db6f029bff9e81",
     "name": "Bing Bing Dim Sum",
     "adress": "1648 E Passyunk Ave Philadelphia PA 19148 United States",
     "lat": "39.928959",
     "long": "-75.1647092",
     "category":"Food",
    "distancefromlocation":1056
  },
  {
     "_id": "5709d94d85db6f029bff9e88",
     "name": "Black N Brew",
     "adress": "523 E Passyunk Ave, Philadelphia, PA 19147",
     "lat": "39.941761",
     "long": "-75.1503928",
     "category":"Food",
    "distancefromlocation":1642
  },
  {
     "_id": "5709d94d85db6f029bff9e8e",
     "name": "Philly Flavors",
     "adress": "2004 Fairmount Ave, Philadelphia, PA 19130",
     "lat": "39.967087",
     "long": "-75.1705126",
     "category":"Food",
    "distancefromlocation":3244
  },
  {
     "_id": "5709d94d85db6f029bff9e8f",
     "name": "Capogiro Gelato",
     "adress": "233 Chestnut Street, Philadelphia, PA",
     "lat": "39.948822",
     "long": "-75.145358",
     "category":"Food",
    "distancefromlocation":2352
  },
  {
     "_id": "5709d94d85db6f029bff9e93",
     "name": "1st Oriental Supermarket",
     "adress": "1111 S 6th St Philadelphia, PA 19147",
     "lat": "39.9340158",
     "long": "-75.1536851",
     "category":"Food",
    "distancefromlocation":1373
  },
  {
     "_id": "5709d94d85db6f029bff9ea0",
     "name": "K & A Sandwiches & Grocery",
     "adress": "1439 S 20th St, Philadelphia, PA 19146",
     "lat": "39.9330012",
     "long": "-75.1774748",
     "category":"Food",
    "distancefromlocation":910
  },
  {
     "_id": "5709d94d85db6f029bff9ea1",
     "name": "South House",
     "adress": "2535 S 13th St, Philadelphia, PA 19148",
     "lat": "39.9180374",
     "long": "-75.1687131",
     "category":"Food",
    "distancefromlocation":2205
  },
  {
     "_id": "5709d94d85db6f029bff9ea7",
     "name": "Cinemug",
     "adress": "s 19148, 1607 S Broad St, Philadelphia, PA 19148",
     "lat": "39.9301839",
     "long": "-75.168006",
     "category":"Food",
    "distancefromlocation":860
  }
]
    }
  })

  .state('app.map', {
      // resolve:{
      //   coords:function(CurrentCoords) {
      //     return CurrentCoords.get();
      //   }
      // },
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
    // 
    $http.get(AppSettings.yocalAPI.base+'listByDistanceCat/Food/'+getData.radius+'/'+getData.lat+'/'+getData.lng).success(function(data) {
        $log.debug('found {length} spots within '+getData.radius+' meters of '+getData.lat+','+getData.lng, data.locations);

        data.radius = getData.radius;
        deferred.resolve(data);
    }).error(function(err, status) {
        $log.error('Unable to get location: ' + error.message);
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

({"CurrentCoordsService":require("./CurrentCoordsService.js"),"Yocal":require("./Yocal.js"),"example":require("./example.js")});

},{"./CurrentCoordsService.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/CurrentCoordsService.js","./Yocal.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/Yocal.js","./example.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/example.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/example.js":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2FwcC1tYWluLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb25zdGFudHMuZGV2ZWxvcG1lbnQuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL0FwcEN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL0Jyb3dzZUN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL01hcEN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL1BsYXlsaXN0Q3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvUGxheWxpc3RzQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvU2VhcmNoQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvX2luZGV4LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9vbl9jb25maWcuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL29uX3J1bi5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvQ3VycmVudENvb3Jkc1NlcnZpY2UuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3NlcnZpY2VzL1lvY2FsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9faW5kZXguanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3NlcnZpY2VzL2V4YW1wbGUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3V0aWxzL0RhdGVUaW1lLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy91dGlscy9sb2dnaW5nL0xvZ0RlY29yYXRvci5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvdXRpbHMvbG9nZ2luZy9Mb2dFbmhhbmNlci5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvdXRpbHMvc3VwcGxhbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7QUFLQSxRQUFRO0FBQ1IsUUFBUTs7OztBQUlSLFFBQVEsUUFBUSxVQUFVLE1BQU0sV0FBVzs7RUFFekMsSUFBSSxXQUFXO0lBQ2I7SUFDQTtJQUNBO0lBQ0E7Ozs7Ozs7O0VBUUYsT0FBTyxNQUFNLFFBQVEsT0FBTyxPQUFPOztFQUVuQyxRQUFRLE9BQU8sT0FBTyxTQUFTLGVBQWUsUUFBUTs7RUFFdEQsUUFBUSxPQUFPLE9BQU8sT0FBTyxRQUFROztFQUVyQyxRQUFRLE9BQU8sT0FBTyxJQUFJLFFBQVE7O0VBRWxDLFFBQVEsVUFBVSxVQUFVLENBQUM7O0dBRTVCOzs7QUNsQ0g7O0FBRUEsSUFBSSxjQUFjO0VBQ2hCLFNBQVM7O0lBRVAsTUFBTTs7Ozs7QUFLVixPQUFPLFVBQVUsWUFBWTs7O0FDVjdCOzs7QUFFQSxJQUFJLG9CQUFvQixRQUFROzs7OztBQUtoQyxTQUFTLFFBQVEsUUFBUSxhQUFhLFVBQVU7OztFQUc5QyxPQUFPLFlBQVk7OztFQUduQixZQUFZLGdCQUFnQix3QkFBd0I7SUFDbEQsT0FBTztLQUNOLEtBQUssU0FBUyxPQUFPO0lBQ3RCLE9BQU8sUUFBUTs7OztFQUlqQixPQUFPLGFBQWEsV0FBVztJQUM3QixPQUFPLE1BQU07Ozs7RUFJZixPQUFPLFFBQVEsV0FBVztJQUN4QixPQUFPLE1BQU07Ozs7RUFJZixPQUFPLFVBQVUsV0FBVztJQUMxQixRQUFRLElBQUksZUFBZSxPQUFPOzs7O0lBSWxDLFNBQVMsV0FBVztNQUNsQixPQUFPO09BQ047Ozs7O0NBS047O0FBRUQsa0JBQWtCLFdBQVcsV0FBVyxTQUFTOzs7QUM1Q2pEOzs7QUFFQSxJQUFJLG9CQUFvQixRQUFROzs7OztBQUtoQyxTQUFTLFdBQVcsUUFBUSxPQUFPOztFQUVqQyxPQUFPLFFBQVEsS0FBSztFQUNwQixPQUFPLFVBQVUsU0FBUyxFQUFFO0lBQzFCLE9BQU8sT0FBTzs7RUFFaEIsT0FBTyxXQUFXO0VBQ2xCLE1BQU0sTUFBTSxLQUFLLFNBQVMsS0FBSztJQUM3QixRQUFRLElBQUk7SUFDWixPQUFPLFlBQVk7O0VBRXJCLElBQUksYUFBYTtJQUNmO01BQ0UsWUFBWTtRQUNWO1VBQ0UsT0FBTztVQUNQLFFBQVE7VUFDUixVQUFVO1VBQ1YsT0FBTztVQUNQLFFBQVE7O1FBRVY7OztJQUdKO01BQ0UsWUFBWTtRQUNWO1VBQ0UsT0FBTztVQUNQLFFBQVE7VUFDUixVQUFVO1VBQ1YsT0FBTztVQUNQLFFBQVE7O1FBRVY7OztJQUdKO01BQ0UsWUFBWTtRQUNWO1VBQ0UsT0FBTztVQUNQLFFBQVE7VUFDUixVQUFVO1VBQ1YsT0FBTztVQUNQLFFBQVE7O1FBRVY7OztJQUdKO01BQ0UsWUFBWTtRQUNWO1VBQ0UsT0FBTztVQUNQLFFBQVE7VUFDUixVQUFVO1VBQ1YsT0FBTztVQUNQLFFBQVE7O1FBRVY7OztJQUdKO01BQ0UsWUFBWTtRQUNWO1VBQ0UsT0FBTztVQUNQLFFBQVE7VUFDUixVQUFVO1VBQ1YsT0FBTztVQUNQLFFBQVE7O1FBRVY7OztJQUdKO01BQ0UsWUFBWTtRQUNWO1VBQ0UsT0FBTztVQUNQLFFBQVE7VUFDUixVQUFVO1VBQ1YsT0FBTztVQUNQLFFBQVE7O1FBRVY7OztJQUdKO01BQ0UsWUFBWTtRQUNWO1VBQ0UsT0FBTztVQUNQLFFBQVE7VUFDUixVQUFVO1VBQ1YsT0FBTztVQUNQLFFBQVE7O1FBRVY7OztJQUdKO01BQ0UsWUFBWTtRQUNWO1VBQ0UsT0FBTztVQUNQLFFBQVE7VUFDUixVQUFVO1VBQ1YsT0FBTztVQUNQLFFBQVE7O1FBRVY7OztJQUdKO01BQ0UsWUFBWTtRQUNWO1VBQ0UsT0FBTztVQUNQLFFBQVE7VUFDUixVQUFVO1VBQ1YsT0FBTztVQUNQLFFBQVE7O1FBRVY7OztJQUdKO01BQ0UsWUFBWTtRQUNWO1VBQ0UsT0FBTztVQUNQLFFBQVE7VUFDUixVQUFVO1VBQ1YsT0FBTztVQUNQLFFBQVE7O1FBRVY7OztJQUdKO01BQ0UsWUFBWTtRQUNWO1VBQ0UsT0FBTztVQUNQLFFBQVE7VUFDUixVQUFVO1VBQ1YsT0FBTztVQUNQLFFBQVE7O1FBRVY7OztJQUdKO01BQ0UsWUFBWTtRQUNWO1VBQ0UsT0FBTztVQUNQLFFBQVE7VUFDUixVQUFVO1VBQ1YsT0FBTztVQUNQLFFBQVE7O1FBRVY7OztJQUdKO01BQ0UsWUFBWTtRQUNWO1VBQ0UsT0FBTztVQUNQLFFBQVE7VUFDUixVQUFVO1VBQ1YsT0FBTztVQUNQLFFBQVE7O1FBRVY7OztJQUdKO01BQ0UsWUFBWTtRQUNWO1VBQ0UsT0FBTztVQUNQLFFBQVE7VUFDUixVQUFVO1VBQ1YsT0FBTztVQUNQLFFBQVE7O1FBRVY7OztJ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LE9BQU8sU0FBUyxNQUFNLFFBQVE7Ozs7OztBQU1sQyxPQUFPLFdBQVcsT0FBTyxXQUFXLFNBQVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBhbmd1bGFyIG1vZHVsZXNcbi8vIHJlcXVpcmUoJ2FuZ3VsYXItbW9kdWxlLXNhbml0aXplJyk7XG4vLyByZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9faW5kZXgnKTtcbnJlcXVpcmUoJy4vc2VydmljZXMvX2luZGV4Jyk7XG4vLyByZXF1aXJlKCcuL2NvbXBvbmVudHMvX2luZGV4Jyk7XG5cbi8vIGNyZWF0ZSBhbmQgYm9vdHN0cmFwIGFwcGxpY2F0aW9uXG5hbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gIHZhciByZXF1aXJlcyA9IFtcbiAgICAnaW9uaWMnLFxuICAgICdhcHAuY29udHJvbGxlcnMnLFxuICAgICdhcHAuc2VydmljZXMnLFxuICAgICd1aS5yb3V0ZXInXG4gICAgLy8gJ3RlbXBsYXRlcycsXG4gICAgLy8gJ25nU2FuaXRpemUnLFxuICAgIC8vICdhcHAuc2VydmljZXMnLFxuICAgIC8vICdhcHAuY29tcG9uZW50cydcbiAgXTtcblxuICAvLyBtb3VudCBvbiB3aW5kb3cgZm9yIHRlc3RpbmdcbiAgd2luZG93LmFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCByZXF1aXJlcyk7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnN0YW50KCdBcHBTZXR0aW5ncycsIHJlcXVpcmUoJy4vY29uc3RhbnRzLmRldmVsb3BtZW50JykpO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb25maWcocmVxdWlyZSgnLi9vbl9jb25maWcnKSk7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLnJ1bihyZXF1aXJlKCcuL29uX3J1bicpKTtcblxuICBhbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydhcHAnXSk7XG5cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFwcFNldHRpbmdzID0ge1xuICB5b2NhbEFQSTp7XG4gICAgLy8gYmFzZTogJ2h0dHA6Ly95b2VuZHBvaW50NC13YmJzLnJoY2xvdWQuY29tL2FwaS92MS95b2thbC9kYXRhLydcbiAgICBiYXNlOiAnaHR0cDovL2xvY2FsaG9zdDo4MTAwL2FwaS92MS95b2thbC9kYXRhLydcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcFNldHRpbmdzOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gQXBwQ3RybCgkc2NvcGUsICRpb25pY01vZGFsLCAkdGltZW91dCkge1xuICBcbiAgLy8gRm9ybSBkYXRhIGZvciB0aGUgbG9naW4gbW9kYWxcbiAgJHNjb3BlLmxvZ2luRGF0YSA9IHt9O1xuXG4gIC8vIENyZWF0ZSB0aGUgbG9naW4gbW9kYWwgdGhhdCB3ZSB3aWxsIHVzZSBsYXRlclxuICAkaW9uaWNNb2RhbC5mcm9tVGVtcGxhdGVVcmwoJ3RlbXBsYXRlcy9sb2dpbi5odG1sJywge1xuICAgIHNjb3BlOiAkc2NvcGVcbiAgfSkudGhlbihmdW5jdGlvbihtb2RhbCkge1xuICAgICRzY29wZS5tb2RhbCA9IG1vZGFsO1xuICB9KTtcblxuICAvLyBUcmlnZ2VyZWQgaW4gdGhlIGxvZ2luIG1vZGFsIHRvIGNsb3NlIGl0XG4gICRzY29wZS5jbG9zZUxvZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLm1vZGFsLmhpZGUoKTtcbiAgfTtcblxuICAvLyBPcGVuIHRoZSBsb2dpbiBtb2RhbFxuICAkc2NvcGUubG9naW4gPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUubW9kYWwuc2hvdygpO1xuICB9O1xuXG4gIC8vIFBlcmZvcm0gdGhlIGxvZ2luIGFjdGlvbiB3aGVuIHRoZSB1c2VyIHN1Ym1pdHMgdGhlIGxvZ2luIGZvcm1cbiAgJHNjb3BlLmRvTG9naW4gPSBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnRG9pbmcgbG9naW4nLCAkc2NvcGUubG9naW5EYXRhKTtcblxuICAgIC8vIFNpbXVsYXRlIGEgbG9naW4gZGVsYXkuIFJlbW92ZSB0aGlzIGFuZCByZXBsYWNlIHdpdGggeW91ciBsb2dpblxuICAgIC8vIGNvZGUgaWYgdXNpbmcgYSBsb2dpbiBzeXN0ZW1cbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICRzY29wZS5jbG9zZUxvZ2luKCk7XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgXG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCBBcHBDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIEJyb3dzZUN0cmwoJHNjb3BlLCBZb2NhbCkge1xuICBcbiAgJHNjb3BlLnJhbmRvID0gTWF0aC5yYW5kb20oKTtcbiAgJHNjb3BlLmdldFR5cGUgPSBmdW5jdGlvbih4KXtcbiAgICByZXR1cm4gdHlwZW9mIHg7XG4gIH1cbiAgJHNjb3BlLmxvY2F0aW9ucyA9W107XG4gIFlvY2FsLmdldCgpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgJHNjb3BlLmxvY2F0aW9ucyA9IGRhdGE7XG4gIH0pO1xuICB2YXIgX2xvY2F0aW9ucyA9IFtcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTZlXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiTG9zIEdhbGxvc1wiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiOTUxIFdvbGYgU3QgUGhpbGFkZWxwaGlhIFBBIDE5MTQ4IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5LjkyMTE3OFwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNjMyNTk5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjoxOTE4XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNmZcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJIYXJkZW5hXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCI3NTQgUyBIaWNrcyBTdCwgUGhpbGFkZWxwaGlhLCBQQSAxOTE0NVwiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTQxNjg2XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE2ODQxODRcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjQyM1wiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTcxXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiTmFtIFNvbiBCYWtlcnlcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjE2MDEgV2FzaGluZ3RvbiBBdmUgUGhpbGFkZWxwaGlhIFBBIDE5MTQ2IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5LjkzOTIwOTRcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTcwMjY0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjoxODVcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU3MlwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkJyZWV6eSdzIENhZmVcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjEyMDAgUG9pbnQgQnJlZXplIEF2ZSBQaGlsYWRlbHBoaWEgUEEgMTkxNDYgVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTM3MjM3MlwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNzcxMDczXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjo3MDJcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU3M1wiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlBpenphIEJyYWluL0xpdHRsZSBCYWJ5J3NcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjIzMTMgRnJhbmtmb3JkIEF2ZSBQaGlsYWRlbHBoaWEgUEEgMTkxMjUgVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTgwNjc0NlwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xMjgwOTY4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjo1ODk0XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNzRcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJTa2V0Y2ggQnVyZ2VyXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCI0MTMgRSBHaXJhcmQgQXZlIFBoaWxhZGVscGhpYSBQQSAxOTEyNSBVbml0ZWQgU3RhdGVzXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45NzA1NzkyXCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjEzMDExODRcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjQ5MTdcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU3NlwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlRvcnRpbGxlcmlhIFNhbiBSb21hblwiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiOTUxIFMgOXRoIFN0IFBoaWxhZGVscGhpYSBQQSAxOTE0NyBVbml0ZWQgU3RhdGVzXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45Mzc2Mzk2XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE1Nzk4OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246OTM2XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNzhcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJIYWkgU3RyZWV0IEtpdGNoZW4gJiBDby5cIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjMyIFMgMTh0aCBTdCBQaGlsYWRlbHBoaWEgUEEgMTkxMDMgVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTUyMTYzOFwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNzA0NjE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjoxNTkwXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllODBcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJGZWRlcmFsIERvbnV0c1wiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMTIxOSBTIDJuZCBTdCBQaGlsYWRlbHBoaWEgUEEgMTkxNDcgVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTMyMjA5OFwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNDc0NjAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjoxOTQxXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllODFcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJCaW5nIEJpbmcgRGltIFN1bVwiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMTY0OCBFIFBhc3N5dW5rIEF2ZSBQaGlsYWRlbHBoaWEgUEEgMTkxNDggVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTI4OTU5XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE2NDcwOTJcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjEwNTZcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU4OFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkJsYWNrIE4gQnJld1wiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiNTIzIEUgUGFzc3l1bmsgQXZlLCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ3XCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45NDE3NjFcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTUwMzkyOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246MTY0MlwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZThlXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiUGhpbGx5IEZsYXZvcnNcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjIwMDQgRmFpcm1vdW50IEF2ZSwgUGhpbGFkZWxwaGlhLCBQQSAxOTEzMFwiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTY3MDg3XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE3MDUxMjZcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjMyNDRcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU4ZlwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkNhcG9naXJvIEdlbGF0b1wiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMjMzIENoZXN0bnV0IFN0cmVldCwgUGhpbGFkZWxwaGlhLCBQQVwiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTQ4ODIyXCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE0NTM1OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246MjM1MlwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTkzXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiMXN0IE9yaWVudGFsIFN1cGVybWFya2V0XCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIxMTExIFMgNnRoIFN0IFBoaWxhZGVscGhpYSwgUEEgMTkxNDdcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5LjkzNDAxNThcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTUzNjg1MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246MTM3M1wiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZWEwXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSyAmIEEgU2FuZHdpY2hlcyAmIEdyb2NlcnlcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjE0MzkgUyAyMHRoIFN0LCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ2XCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45MzMwMDEyXCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE3NzQ3NDhcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjkxMFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZWExXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiU291dGggSG91c2VcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjI1MzUgUyAxM3RoIFN0LCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ4XCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45MTgwMzc0XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE2ODcxMzFcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjIyMDVcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWVhN1wiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkNpbmVtdWdcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcInMgMTkxNDgsIDE2MDcgUyBCcm9hZCBTdCwgUGhpbGFkZWxwaGlhLCBQQSAxOTE0OFwiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTMwMTgzOVwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNjgwMDZcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjg2MFwiXG4gICAgICBdXG4gICAgfVxuICBdO1xuXG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ0Jyb3dzZUN0cmwnLCBCcm93c2VDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIE1hcEN0cmwoJHNjb3BlLCAkbG9nLCAkc3RhdGUsICRpb25pY0xvYWRpbmcsIEN1cnJlbnRDb29yZHMsIFlvY2FsLCAkdGltZW91dCApIHtcbiBcdC8vIFZpZXdNb2RlbFxuICBcdHZhciB2bSA9IHRoaXM7XG4gICAgdm0uY29vcmRpbmF0ZXMgPSB7fTtcdFxuICBcbiAgXHQvLyAkbG9nLmRlYnVnKCdpbml0TWFwJyk7XG4gIFx0JGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoXCJNYXBDdHJsXCIpO1xuICBcdCAgICAgIFxuICAgIHZhciBtYXBPcHRpb25zID0ge1xuICAgICAgLy8gY2VudGVyOiAgICB7bGF0OiAzOS45Mzc4OTMsIGxuZzotNzUuMTY4OTM0N30sXG4gICAgICB6b29tOiAgICAgIDEsXG4gICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLFxuICAgIH07XG5cbiAgICAkaW9uaWNMb2FkaW5nLnNob3coe1xuICAgICAgdGVtcGxhdGU6IFwiRXhwbG9yaW5nIFlvdXIgTG9jYXRpb24gLi4uXCIsXG4gICAgICBiYWNrZHJvcDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgXG4gICAgQ3VycmVudENvb3Jkcy5nZXQoKS50aGVuKGZ1bmN0aW9uKHBvcyl7XG4gICAgICBtYXBPcHRpb25zLmNlbnRlciA9IHtsYXQ6IHBvcy5sYXRpdHVkZSwgbG5nOiBwb3MubG9uZ2l0dWRlfTtcblxuICAgICAgdm0uZ21hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYXBcIiksIG1hcE9wdGlvbnMpO1xuXG4gICAgICB2YXIgeW91QXJlSGVyZSA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICBwb3NpdGlvbjogbWFwT3B0aW9ucy5jZW50ZXIsXG4gICAgICAgIG1hcDogICAgICB2bS5nbWFwLFxuICAgICAgICB0aXRsZTogICAgJ1lvdSBBcmUgSGVyZSdcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICAkaW9uaWNMb2FkaW5nLmhpZGUoKTtcbiAgICBcbiAgICAgIHJldHVybiBZb2NhbC5nZXQoe3JhZGl1czogMTAwMDAwLCBsYXQ6cG9zLmxhdGl0dWRlLCBsbmc6cG9zLmxvbmdpdHVkZSB9KTtcbiAgICAgIC8vIHJldHVybiBZb2NhbC5nZXQoe3JhZGl1czogODAwMCwgbGF0Om1hcE9wdGlvbnMuY2VudGVyLmxhdCwgbG5nOm1hcE9wdGlvbnMuY2VudGVyLmxuZyB9KTtcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXG4gICAgICBcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChkYXRhLmxvY2F0aW9ucywgZnVuY3Rpb24odmFsdWUsIGluZGV4KXtcbiAgICAgICAgdmFyIGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XG4gICAgICAgICAgICAgICAgY29udGVudDogJzxoMyBpZD1cImZpcnN0SGVhZGluZ1wiIGNsYXNzPVwiZmlyc3RIZWFkaW5nXCI+Jyt2YWx1ZS5uYW1lKyc8L2gzPidcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAge2xhdDogcGFyc2VGbG9hdCh2YWx1ZS5sYXQpLCBsbmc6cGFyc2VGbG9hdCh2YWx1ZS5sb25nKX0sXG4gICAgICAgICAgICAgIG1hcDogICAgICAgdm0uZ21hcCxcbiAgICAgICAgICAgICAgbGFiZWw6ICAgICB2YWx1ZS5uYW1lLFxuICAgICAgICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxuICAgICAgICAgICAgICBvcGFjaXR5OiAgIDBcbiAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgdmFyIGRpcmVjdGlvbnNEaXNwbGF5ID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcih7XG4gICAgICAgICAgICBtYXA6IHZtLmdtYXBcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBtYXJrZXIucG9zaXRpb24sXG4gICAgICAgICAgICBvcmlnaW46ICAgICAgbWFwT3B0aW9ucy5jZW50ZXIsXG4gICAgICAgICAgICB0cmF2ZWxNb2RlOiAgZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5XQUxLSU5HXG4gICAgICAgICAgfTtcblxuXG4gICAgICAgICAgLy8gUGFzcyB0aGUgZGlyZWN0aW9ucyByZXF1ZXN0IHRvIHRoZSBkaXJlY3Rpb25zIHNlcnZpY2UuXG4gICAgICAgICAgdmFyIGRpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XG5cbiAgICAgICAgICBkaXJlY3Rpb25zU2VydmljZS5yb3V0ZShyZXF1ZXN0LCBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzKSB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzID09IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTdGF0dXMuT0spIHtcbiAgICAgICAgICAgICAgLy8gRGlzcGxheSB0aGUgcm91dGUgb24gdGhlIG1hcC5cbiAgICAgICAgICAgICAgZGlyZWN0aW9uc0Rpc3BsYXkuc2V0RGlyZWN0aW9ucyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cblxuICAgICAgICAvLyBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICAgaW5mb3dpbmRvdy5vcGVuKHZtLmdtYXAsIG1hcmtlcik7XG4gICAgICAgIC8vIH0pOy8vIGVuZCBtYXJrZXIgZXZlbnRcblxuXG4gICAgICB9KTtcbiAgICAgICAgXG4gICAgfSk7XG5cblxuXG4gICAgXG4gXG4gICBcbn07Ly8vLyBNYXBDdHJsXG5cblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignTWFwQ3RybCcsIE1hcEN0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gUGxheWxpc3RDdHJsKCRzY29wZSkge1xuICBcblxuXG59O1xuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdQbGF5bGlzdEN0cmwnLCBQbGF5bGlzdEN0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gUGxheWxpc3RzQ3RybCgkc2NvcGUpIHtcbiAgXG4gJHNjb3BlLnBsYXlsaXN0cyA9IFtcbiAgICB7IHRpdGxlOiAnUmVnZ2FlJywgaWQ6IDEgfSxcbiAgICB7IHRpdGxlOiAnQ2hpbGwnLCBpZDogMiB9LFxuICAgIHsgdGl0bGU6ICdEdWJzdGVwJywgaWQ6IDMgfSxcbiAgICB7IHRpdGxlOiAnSW5kaWUnLCBpZDogNCB9LFxuICAgIHsgdGl0bGU6ICdSYXAnLCBpZDogNSB9LFxuICAgIHsgdGl0bGU6ICdDb3diZWxsJywgaWQ6IDYgfVxuICBdO1xuXG59O1xuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdQbGF5bGlzdHNDdHJsJywgUGxheWxpc3RzQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBTZWFyY2hDdHJsKCRzY29wZSwgJGxvZywgJHN0YXRlLCBZb2NhbCwgQ3VycmVudENvb3JkcywgJGlvbmljTG9hZGluZywgJGlvbmljU2xpZGVCb3hEZWxlZ2F0ZSwgJHRpbWVvdXQpIHtcbiBcdC8vIFZpZXdNb2RlbFxuICBcdHZhciB2bSA9IHRoaXM7XG4gICAgLy8gJHNjb3BlLmxvY2F0aW9ucyA9ICRzdGF0ZS5jdXJyZW50LmRhdGEubG9jYXRpb25zO1xuICAgICRzY29wZS5sb2NhdGlvbnMgPVtdO1xuICAgICRzY29wZS5zaG91bGRTaG93RGVsZXRlID0gZmFsc2U7XG4gXHQkc2NvcGUuc2hvdWxkU2hvd1Jlb3JkZXIgPSBmYWxzZTtcbiBcdCRzY29wZS5saXN0Q2FuU3dpcGUgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29yZHMgPXt9O1xuXG4gICAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ1NlYXJjaEN0cmwnKTtcblxuICAgICRpb25pY0xvYWRpbmcuc2hvdyh7XG4gICAgXHR0ZW1wbGF0ZTogXCJGaW5kaW5nIFJhZCBTcG90cyAuLi5cIixcbiAgICBcdGJhY2tkcm9wOiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyB2YXIgc291dGhQaGlsbHkgPSB7bGF0OiAzOS45Mzc4OTMsIGxuZzotNzUuMTY4OTM0N307XG5cbiAgICBDdXJyZW50Q29vcmRzLmdldCgpLnRoZW4oZnVuY3Rpb24oeW91QXJlSGVyZSl7XG4gICAgICAgIGN1cnJlbnRDb3JkcyA9IHtsYXQ6eW91QXJlSGVyZS5sYXRpdHVkZSwgbG5nOnlvdUFyZUhlcmUubG9uZ2l0dWRlfTtcblxuICAgIFx0cmV0dXJuIFlvY2FsLmdldCh7cmFkaXVzOiA4MDAwMCwgbGF0OmN1cnJlbnRDb3Jkcy5sYXQsIGxuZzpjdXJyZW50Q29yZHMubG5nfSk7XG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgdmFyIHNlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlzdGFuY2VNYXRyaXhTZXJ2aWNlO1xuXG4gICAgXHRhbmd1bGFyLmZvckVhY2goZGF0YS5sb2NhdGlvbnMsIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCl7XG4gICAgXHRcbiAgICBcdFx0c2VydmljZS5nZXREaXN0YW5jZU1hdHJpeCh7XG4gICAgXHRcdFx0b3JpZ2luczogICAgICAgW2N1cnJlbnRDb3Jkc10sXG4gICAgXHRcdFx0ZGVzdGluYXRpb25zOiAgW3tsYXQ6IHBhcnNlRmxvYXQodmFsdWUubGF0KSwgbG5nOiBwYXJzZUZsb2F0KHZhbHVlLmxvbmcpfV0sXG4gICAgXHRcdFx0dHJhdmVsTW9kZTogICAgZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5XQUxLSU5HLFxuICAgIFx0XHRcdHVuaXRTeXN0ZW06ICAgIGdvb2dsZS5tYXBzLlVuaXRTeXN0ZW0uSU1QRVJJQUwsXG4gICAgXHRcdFx0YXZvaWRIaWdod2F5czogZmFsc2UsXG4gICAgXHRcdFx0YXZvaWRUb2xsczogICAgZmFsc2VcbiAgICBcdFx0fSwgZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cykge1xuXG4gICAgXHRcdFx0ZGF0YS5sb2NhdGlvbnNbaW5kZXhdLnRyYXZlbFRpbWUgPSByZXNwb25zZS5yb3dzWzBdLmVsZW1lbnRzWzBdLmR1cmF0aW9uLnRleHQ7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5kZWJ1ZyhcIntuYW1lfSAtIHt0cmF2ZWxUaW1lfVwiLCB2YWx1ZSk7XG4gICAgXHRcdH0pO1xuICAgIFx0fSk7XG5cbiAgICAgICAgJGlvbmljU2xpZGVCb3hEZWxlZ2F0ZS51cGRhdGUoKTtcbiAgICAgICAgJHNjb3BlLmxvY2F0aW9ucyA9IGRhdGEubG9jYXRpb25zOyAgICAgIFxuXG4gICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJGlvbmljTG9hZGluZy5oaWRlKCk7ICAgIFxuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgXG5cbiAgIFx0fSk7XG4gICAgXG4gICAgXG5cbiAgXG59O1xuXG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ1NlYXJjaEN0cmwnLCBTZWFyY2hDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycsIFtdKTtcblxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTsiLCIndXNlIHN0cmljdCc7XG5cblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gT25Db25maWcoJHN0YXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRwcm92aWRlKSB7XG4gIFxuICAvL2FjdGl2YXRlIExvZ0RlY29yYXRvclxuICByZXF1aXJlKCcuL3V0aWxzL2xvZ2dpbmcvTG9nRGVjb3JhdG9yLmpzJykoJHByb3ZpZGUpO1xuXG4kc3RhdGVQcm92aWRlclxuXG4gIC5zdGF0ZSgnYXBwJywge1xuICAgIHVybDogJy9hcHAnLFxuICAgIGFic3RyYWN0OiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL21lbnUuaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ0FwcEN0cmwnXG4gIH0pXG5cbiAgLnN0YXRlKCdhcHAuc2VhcmNoJywge1xuICAgIHVybDogJy9zZWFyY2gnLFxuICAgIHZpZXdzOiB7XG4gICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3NlYXJjaC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1NlYXJjaEN0cmwnXG4gICAgICB9XG4gICAgfSxcblxuICAgIGRhdGE6e1xuICAgICAgbG9jYXRpb25zOiBbXG4gIHtcbiAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNmVcIixcbiAgICAgXCJuYW1lXCI6IFwiTG9zIEdhbGxvc1wiLFxuICAgICBcImFkcmVzc1wiOiBcIjk1MSBXb2xmIFN0IFBoaWxhZGVscGhpYSBQQSAxOTE0OCBVbml0ZWQgU3RhdGVzXCIsXG4gICAgIFwibGF0XCI6IFwiMzkuOTIxMTc4XCIsXG4gICAgIFwibG9uZ1wiOiBcIi03NS4xNjMyNTk5XCIsXG4gICAgIFwiY2F0ZWdvcnlcIjpcIkZvb2RcIixcbiAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uXCI6MTkxOFxuICB9LFxuICB7XG4gICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTZmXCIsXG4gICAgIFwibmFtZVwiOiBcIkhhcmRlbmFcIixcbiAgICAgXCJhZHJlc3NcIjogXCI3NTQgUyBIaWNrcyBTdCwgUGhpbGFkZWxwaGlhLCBQQSAxOTE0NVwiLFxuICAgICBcImxhdFwiOiBcIjM5Ljk0MTY4NlwiLFxuICAgICBcImxvbmdcIjogXCItNzUuMTY4NDE4NFwiLFxuICAgICBcImNhdGVnb3J5XCI6XCJGb29kXCIsXG4gICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvblwiOjQyM1xuICB9LFxuICB7XG4gICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTcxXCIsXG4gICAgIFwibmFtZVwiOiBcIk5hbSBTb24gQmFrZXJ5XCIsXG4gICAgIFwiYWRyZXNzXCI6IFwiMTYwMSBXYXNoaW5ndG9uIEF2ZSBQaGlsYWRlbHBoaWEgUEEgMTkxNDYgVW5pdGVkIFN0YXRlc1wiLFxuICAgICBcImxhdFwiOiBcIjM5LjkzOTIwOTRcIixcbiAgICAgXCJsb25nXCI6IFwiLTc1LjE3MDI2NFwiLFxuICAgICBcImNhdGVnb3J5XCI6XCJGb29kXCIsXG4gICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvblwiOjE4NVxuICB9LFxuICB7XG4gICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTcyXCIsXG4gICAgIFwibmFtZVwiOiBcIkJyZWV6eSdzIENhZmVcIixcbiAgICAgXCJhZHJlc3NcIjogXCIxMjAwIFBvaW50IEJyZWV6ZSBBdmUgUGhpbGFkZWxwaGlhIFBBIDE5MTQ2IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgXCJsYXRcIjogXCIzOS45MzcyMzcyXCIsXG4gICAgIFwibG9uZ1wiOiBcIi03NS4xNzcxMDczXCIsXG4gICAgIFwiY2F0ZWdvcnlcIjpcIkZvb2RcIixcbiAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uXCI6NzAyXG4gIH0sXG4gIHtcbiAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNzNcIixcbiAgICAgXCJuYW1lXCI6IFwiUGl6emEgQnJhaW4vTGl0dGxlIEJhYnknc1wiLFxuICAgICBcImFkcmVzc1wiOiBcIjIzMTMgRnJhbmtmb3JkIEF2ZSBQaGlsYWRlbHBoaWEgUEEgMTkxMjUgVW5pdGVkIFN0YXRlc1wiLFxuICAgICBcImxhdFwiOiBcIjM5Ljk4MDY3NDZcIixcbiAgICAgXCJsb25nXCI6IFwiLTc1LjEyODA5NjhcIixcbiAgICAgXCJjYXRlZ29yeVwiOlwiRm9vZFwiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjo1ODk0XG4gIH0sXG4gIHtcbiAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNzRcIixcbiAgICAgXCJuYW1lXCI6IFwiU2tldGNoIEJ1cmdlclwiLFxuICAgICBcImFkcmVzc1wiOiBcIjQxMyBFIEdpcmFyZCBBdmUgUGhpbGFkZWxwaGlhIFBBIDE5MTI1IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgXCJsYXRcIjogXCIzOS45NzA1NzkyXCIsXG4gICAgIFwibG9uZ1wiOiBcIi03NS4xMzAxMTg0XCIsXG4gICAgIFwiY2F0ZWdvcnlcIjpcIkZvb2RcIixcbiAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uXCI6NDkxN1xuICB9LFxuICB7XG4gICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTc2XCIsXG4gICAgIFwibmFtZVwiOiBcIlRvcnRpbGxlcmlhIFNhbiBSb21hblwiLFxuICAgICBcImFkcmVzc1wiOiBcIjk1MSBTIDl0aCBTdCBQaGlsYWRlbHBoaWEgUEEgMTkxNDcgVW5pdGVkIFN0YXRlc1wiLFxuICAgICBcImxhdFwiOiBcIjM5LjkzNzYzOTZcIixcbiAgICAgXCJsb25nXCI6IFwiLTc1LjE1Nzk4OVwiLFxuICAgICBcImNhdGVnb3J5XCI6XCJGb29kXCIsXG4gICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvblwiOjkzNlxuICB9LFxuICB7XG4gICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTc4XCIsXG4gICAgIFwibmFtZVwiOiBcIkhhaSBTdHJlZXQgS2l0Y2hlbiAmIENvLlwiLFxuICAgICBcImFkcmVzc1wiOiBcIjMyIFMgMTh0aCBTdCBQaGlsYWRlbHBoaWEgUEEgMTkxMDMgVW5pdGVkIFN0YXRlc1wiLFxuICAgICBcImxhdFwiOiBcIjM5Ljk1MjE2MzhcIixcbiAgICAgXCJsb25nXCI6IFwiLTc1LjE3MDQ2MTlcIixcbiAgICAgXCJjYXRlZ29yeVwiOlwiRm9vZFwiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjoxNTkwXG4gIH0sXG4gIHtcbiAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllODBcIixcbiAgICAgXCJuYW1lXCI6IFwiRmVkZXJhbCBEb251dHNcIixcbiAgICAgXCJhZHJlc3NcIjogXCIxMjE5IFMgMm5kIFN0IFBoaWxhZGVscGhpYSBQQSAxOTE0NyBVbml0ZWQgU3RhdGVzXCIsXG4gICAgIFwibGF0XCI6IFwiMzkuOTMyMjA5OFwiLFxuICAgICBcImxvbmdcIjogXCItNzUuMTQ3NDYwM1wiLFxuICAgICBcImNhdGVnb3J5XCI6XCJGb29kXCIsXG4gICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvblwiOjE5NDFcbiAgfSxcbiAge1xuICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU4MVwiLFxuICAgICBcIm5hbWVcIjogXCJCaW5nIEJpbmcgRGltIFN1bVwiLFxuICAgICBcImFkcmVzc1wiOiBcIjE2NDggRSBQYXNzeXVuayBBdmUgUGhpbGFkZWxwaGlhIFBBIDE5MTQ4IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgXCJsYXRcIjogXCIzOS45Mjg5NTlcIixcbiAgICAgXCJsb25nXCI6IFwiLTc1LjE2NDcwOTJcIixcbiAgICAgXCJjYXRlZ29yeVwiOlwiRm9vZFwiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjoxMDU2XG4gIH0sXG4gIHtcbiAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllODhcIixcbiAgICAgXCJuYW1lXCI6IFwiQmxhY2sgTiBCcmV3XCIsXG4gICAgIFwiYWRyZXNzXCI6IFwiNTIzIEUgUGFzc3l1bmsgQXZlLCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ3XCIsXG4gICAgIFwibGF0XCI6IFwiMzkuOTQxNzYxXCIsXG4gICAgIFwibG9uZ1wiOiBcIi03NS4xNTAzOTI4XCIsXG4gICAgIFwiY2F0ZWdvcnlcIjpcIkZvb2RcIixcbiAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uXCI6MTY0MlxuICB9LFxuICB7XG4gICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZThlXCIsXG4gICAgIFwibmFtZVwiOiBcIlBoaWxseSBGbGF2b3JzXCIsXG4gICAgIFwiYWRyZXNzXCI6IFwiMjAwNCBGYWlybW91bnQgQXZlLCBQaGlsYWRlbHBoaWEsIFBBIDE5MTMwXCIsXG4gICAgIFwibGF0XCI6IFwiMzkuOTY3MDg3XCIsXG4gICAgIFwibG9uZ1wiOiBcIi03NS4xNzA1MTI2XCIsXG4gICAgIFwiY2F0ZWdvcnlcIjpcIkZvb2RcIixcbiAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uXCI6MzI0NFxuICB9LFxuICB7XG4gICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZThmXCIsXG4gICAgIFwibmFtZVwiOiBcIkNhcG9naXJvIEdlbGF0b1wiLFxuICAgICBcImFkcmVzc1wiOiBcIjIzMyBDaGVzdG51dCBTdHJlZXQsIFBoaWxhZGVscGhpYSwgUEFcIixcbiAgICAgXCJsYXRcIjogXCIzOS45NDg4MjJcIixcbiAgICAgXCJsb25nXCI6IFwiLTc1LjE0NTM1OFwiLFxuICAgICBcImNhdGVnb3J5XCI6XCJGb29kXCIsXG4gICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvblwiOjIzNTJcbiAgfSxcbiAge1xuICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU5M1wiLFxuICAgICBcIm5hbWVcIjogXCIxc3QgT3JpZW50YWwgU3VwZXJtYXJrZXRcIixcbiAgICAgXCJhZHJlc3NcIjogXCIxMTExIFMgNnRoIFN0IFBoaWxhZGVscGhpYSwgUEEgMTkxNDdcIixcbiAgICAgXCJsYXRcIjogXCIzOS45MzQwMTU4XCIsXG4gICAgIFwibG9uZ1wiOiBcIi03NS4xNTM2ODUxXCIsXG4gICAgIFwiY2F0ZWdvcnlcIjpcIkZvb2RcIixcbiAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uXCI6MTM3M1xuICB9LFxuICB7XG4gICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZWEwXCIsXG4gICAgIFwibmFtZVwiOiBcIksgJiBBIFNhbmR3aWNoZXMgJiBHcm9jZXJ5XCIsXG4gICAgIFwiYWRyZXNzXCI6IFwiMTQzOSBTIDIwdGggU3QsIFBoaWxhZGVscGhpYSwgUEEgMTkxNDZcIixcbiAgICAgXCJsYXRcIjogXCIzOS45MzMwMDEyXCIsXG4gICAgIFwibG9uZ1wiOiBcIi03NS4xNzc0NzQ4XCIsXG4gICAgIFwiY2F0ZWdvcnlcIjpcIkZvb2RcIixcbiAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uXCI6OTEwXG4gIH0sXG4gIHtcbiAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllYTFcIixcbiAgICAgXCJuYW1lXCI6IFwiU291dGggSG91c2VcIixcbiAgICAgXCJhZHJlc3NcIjogXCIyNTM1IFMgMTN0aCBTdCwgUGhpbGFkZWxwaGlhLCBQQSAxOTE0OFwiLFxuICAgICBcImxhdFwiOiBcIjM5LjkxODAzNzRcIixcbiAgICAgXCJsb25nXCI6IFwiLTc1LjE2ODcxMzFcIixcbiAgICAgXCJjYXRlZ29yeVwiOlwiRm9vZFwiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjoyMjA1XG4gIH0sXG4gIHtcbiAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllYTdcIixcbiAgICAgXCJuYW1lXCI6IFwiQ2luZW11Z1wiLFxuICAgICBcImFkcmVzc1wiOiBcInMgMTkxNDgsIDE2MDcgUyBCcm9hZCBTdCwgUGhpbGFkZWxwaGlhLCBQQSAxOTE0OFwiLFxuICAgICBcImxhdFwiOiBcIjM5LjkzMDE4MzlcIixcbiAgICAgXCJsb25nXCI6IFwiLTc1LjE2ODAwNlwiLFxuICAgICBcImNhdGVnb3J5XCI6XCJGb29kXCIsXG4gICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvblwiOjg2MFxuICB9XG5dXG4gICAgfVxuICB9KVxuXG4gIC5zdGF0ZSgnYXBwLm1hcCcsIHtcbiAgICAgIC8vIHJlc29sdmU6e1xuICAgICAgLy8gICBjb29yZHM6ZnVuY3Rpb24oQ3VycmVudENvb3Jkcykge1xuICAgICAgLy8gICAgIHJldHVybiBDdXJyZW50Q29vcmRzLmdldCgpO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9LFxuICAgICAgdXJsOiAnL21hcCcsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbWFwLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdNYXBDdHJsIGFzIE1hcCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLnN0YXRlKCdhcHAucGxheWxpc3RzJywge1xuICAgICAgdXJsOiAnL3BsYXlsaXN0cycsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvcGxheWxpc3RzLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdQbGF5bGlzdHNDdHJsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAuc3RhdGUoJ2FwcC5zaW5nbGUnLCB7XG4gICAgdXJsOiAnL3BsYXlsaXN0cy86cGxheWxpc3RJZCcsXG4gICAgdmlld3M6IHtcbiAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvcGxheWxpc3QuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdQbGF5bGlzdEN0cmwnXG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuXG4gIC8vIGlmIG5vbmUgb2YgdGhlIGFib3ZlIHN0YXRlcyBhcmUgbWF0Y2hlZCwgdXNlIHRoaXMgYXMgdGhlIGZhbGxiYWNrXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9hcHAvbWFwJyk7XG4gIFxuICBcblxuXG59Ly8vLyBPbkNvbmZpZ1xuXG5cbm1vZHVsZS5leHBvcnRzID0gT25Db25maWc7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBPblJ1bigkaW9uaWNQbGF0Zm9ybSwgJGxvZykge1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnT25SdW4nKTtcbiAgXG4gICRpb25pY1BsYXRmb3JtLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIC8vIEhpZGUgdGhlIGFjY2Vzc29yeSBiYXIgYnkgZGVmYXVsdCAocmVtb3ZlIHRoaXMgdG8gc2hvdyB0aGUgYWNjZXNzb3J5IGJhciBhYm92ZSB0aGUga2V5Ym9hcmRcbiAgICAvLyBmb3IgZm9ybSBpbnB1dHMpXG4gICAgaWYgKHdpbmRvdy5jb3Jkb3ZhICYmIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQpIHtcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5oaWRlS2V5Ym9hcmRBY2Nlc3NvcnlCYXIodHJ1ZSk7XG4gICAgICBjb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQuZGlzYWJsZVNjcm9sbCh0cnVlKTtcblxuICAgIH1cbiAgICBpZiAod2luZG93LlN0YXR1c0Jhcikge1xuICAgICAgLy8gb3JnLmFwYWNoZS5jb3Jkb3ZhLnN0YXR1c2JhciByZXF1aXJlZFxuICAgICAgU3RhdHVzQmFyLnN0eWxlRGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT25SdW47IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2VydmljZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBDdXJyZW50Q29vcmRzKCRxLCAkaHR0cCwgJGxvZywgIEFwcFNldHRpbmdzKSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKFwiQ3VycmVudENvb3Jkc1NlcnZpY2VcIik7XG4gIFxuICB2YXIgc2VydmljZSA9IHt9O1xuXG4gIHNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpOyAgICBcblxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24ocG9zKSB7XG4gICAgICAgIFxuICAgICAgJGxvZy5kZWJ1ZygnbGF0OiB7Y29vcmRzLmxhdGl0dWRlfScscG9zKTtcbiAgICAgICRsb2cuZGVidWcoJ2xvbmc6IHtjb29yZHMubG9uZ2l0dWRlfScscG9zKTtcblxuICAgICAgZGVmZXJyZWQucmVzb2x2ZShwb3MuY29vcmRzKTtcbiAgICAgICAgXG4gICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICRsb2cud2FybignVW5hYmxlIHRvIGdldCBsb2NhdGlvbjogJyArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIsIHN0YXR1cyk7XG4gICB9KTtcblxuXG4gICAgXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG5cbn1cblxuc2VydmljZXNNb2R1bGUuc2VydmljZSgnQ3VycmVudENvb3JkcycsIEN1cnJlbnRDb29yZHMpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNlcnZpY2VzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gWW9jYWwoJHEsICRodHRwLCBBcHBTZXR0aW5ncywgJGxvZykge1xuXG4gIHZhciBzZXJ2aWNlID0ge307XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKFwiWW9jYWxTZXJ2aWNlXCIpO1xuXG4gIHNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24oIGdldERhdGEgKSB7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAvLyAvbGlzdEJ5RGlzdGFuY2VDYXQvRm9vZC84MDAwLzM5LjkzNzg5My8tNzUuMTY4OTM0N1xuICAgIC8vIFxuICAgICRodHRwLmdldChBcHBTZXR0aW5ncy55b2NhbEFQSS5iYXNlKydsaXN0QnlEaXN0YW5jZUNhdC9Gb29kLycrZ2V0RGF0YS5yYWRpdXMrJy8nK2dldERhdGEubGF0KycvJytnZXREYXRhLmxuZykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ2ZvdW5kIHtsZW5ndGh9IHNwb3RzIHdpdGhpbiAnK2dldERhdGEucmFkaXVzKycgbWV0ZXJzIG9mICcrZ2V0RGF0YS5sYXQrJywnK2dldERhdGEubG5nLCBkYXRhLmxvY2F0aW9ucyk7XG5cbiAgICAgICAgZGF0YS5yYWRpdXMgPSBnZXREYXRhLnJhZGl1cztcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICB9KS5lcnJvcihmdW5jdGlvbihlcnIsIHN0YXR1cykge1xuICAgICAgICAkbG9nLmVycm9yKCdVbmFibGUgdG8gZ2V0IGxvY2F0aW9uOiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIsIHN0YXR1cyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfTtcblxuICByZXR1cm4gc2VydmljZTtcblxufVxuXG5zZXJ2aWNlc01vZHVsZS5zZXJ2aWNlKCdZb2NhbCcsIFlvY2FsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5zZXJ2aWNlcycsIFtdKTtcblxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIEV4YW1wbGVTZXJ2aWNlKCRxLCAkaHR0cCkge1xuXG4gIHZhciBzZXJ2aWNlID0ge307XG5cbiAgc2VydmljZS5nZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgJGh0dHAuZ2V0KCdhcGlQYXRoJykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyLCBzdGF0dXMpIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVyciwgc3RhdHVzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ0V4YW1wbGVTZXJ2aWNlJywgRXhhbXBsZVNlcnZpY2UpOyIsIi8qKlxuICogQGF1dGhvciAgICAgVGhvbWFzIEJ1cmxlc29uXG4gKiBAYXV0aG9yICAgICBTdGFja092ZXJmbG93IC0gSGFydG8sIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjMxNTQwOC9ob3ctZG8taS1mb3JtYXQtYS10aW1lc3RhbXAtaW4tamF2YXNjcmlwdC10by1kaXNwbGF5LWl0LWluLWdyYXBocy11dGMtaXMtZmluZVxuICogQGRlc2NyaXB0aW9uXG4gKiAgXG4gKiBEYXRlVGltZSB1dGlsaXR5IGNsYXNzIHRoYXQgc3BpdHMgb3V0IFVUQyB0aW1lc3RhbXAgc3RyaW5ncyB1c3VhbGx5IHVzZWQgaW4gYSByZXBvcnRpbmcsIHByaW50LWNhcGFibGUgcHJvY2Vzcy5cbiovXG4gXG5cbiAndXNlIHN0cmljdCc7XG5cblxudmFyIGJ1aWxkVGltZVN0cmluZyA9IGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCBcIiVoOiVtOiVzOiV6XCI7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBhZCh2YWx1ZSwgaXNNaWxsaVNlY29uZHMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIChpc01pbGxpU2Vjb25kcykgPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpc01pbGxpU2Vjb25kcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihpc01pbGxpU2Vjb25kcylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlIDwgMTApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCIwMFwiICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih2YWx1ZSA8IDEwMClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIjBcIiArIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybih2YWx1ZS50b1N0cmluZygpLmxlbmd0aCA8IDIpID8gXCIwXCIgKyB2YWx1ZSA6IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoLyUoW2EtekEtWl0pL2csIGZ1bmN0aW9uIChfLCBmbXRDb2RlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN3aXRjaChmbXRDb2RlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiWVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldERhdGUoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldEhvdXJzKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNaW51dGVzKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgZm9ybWF0IGNvZGU6IFwiICsgZm10Q29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cblxuIC8vIFB1Ymxpc2ggQVBJIGZvciBEYXRlVGltZSB1dGlsc1xuICAgICAgICAvLyByZXR1cm4ge1xuICAgICAgICAvLyAgICAgZm9ybWF0dGVkTm93OiBmdW5jdGlvbiAoKVxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBidWlsZFRpbWVTdHJpbmcobmV3IERhdGUoKSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIFxuIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZvcm1hdHRlZE5vdzogZnVuY3Rpb24gKCkgeyByZXR1cm4gYnVpbGRUaW1lU3RyaW5nKG5ldyBEYXRlKCkpOyB9XG4gfTtcblxuXG5cbiIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogTG9nRGVjb3JhdG9yXG4gKiAgQHNvdXJjZTogaHR0cDovL3NvbHV0aW9ub3B0aW1pc3QuY29tLzIwMTMvMTAvMDcvZW5oYW5jZS1hbmd1bGFyanMtbG9nZ2luZy11c2luZy1kZWNvcmF0b3JzL1xuICovXG5cbiB2YXIgTG9nRGVjb3JhdG9yID0gZnVuY3Rpb24oICRwcm92aWRlICApe1xuXG5cbiAgICAgICAgICAgICAgLy8gUmVnaXN0ZXIgb3VyICRsb2cgZGVjb3JhdG9yIHdpdGggQW5ndWxhckpTICRwcm92aWRlclxuICAgICAgICAgICAgICAkcHJvdmlkZS5kZWNvcmF0b3IoICckbG9nJywgWyBcIiRkZWxlZ2F0ZVwiLCBmdW5jdGlvbiggJGRlbGVnYXRlIClcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgLy8gTk9URTogdGhlIExvZ0VuY2hhbmNlciBtb2R1bGUgcmV0dXJucyBhIEZVTkNUSU9OIHRoYXQgd2UgbmFtZWQgYGVuY2hhbmNlTG9nZ2VyRm5gXG4gICAgICAgICAgICAgICAvLyAgICAgICBBbGwgdGhlIGRldGFpbHMgb2YgaG93IHRoZSBgZW5jaGFuY2VtZW50YCB3b3JrcyBpcyBlbmNhcHN1bGF0ZWQgaW4gTG9nRW5oYW5jZXIhXG5cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmUoJy4vTG9nRW5oYW5jZXIuanMnKSggJGRlbGVnYXRlICk7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAkZGVsZWdhdGU7XG4gICAgICAgICAgICAgIH1dKTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSAgTG9nRGVjb3JhdG9yOyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogTG9nRW5oYW5jZXJcbiAqIFRoaXMgYWRkcyB0aW1lc3RhbXBzIGFuZCBzdXBwbGFudCBmdW5jdGlvbmFsaXR5IHRvIEFuZ3VsYXIgJGxvZyBzZXJ2aWNlXG4gKiBAc291cmNlOiBodHRwOi8vc29sdXRpb25vcHRpbWlzdC5jb20vMjAxMy8xMC8wNy9lbmhhbmNlLWFuZ3VsYXJqcy1sb2dnaW5nLXVzaW5nLWRlY29yYXRvcnMvXG4gKiBAYXBpOiBwdWJsaWNcbiAqIEByZXR1cm5zOiBPYmplY3QgLSBleHRlbmRlZCAkbG9nIHNlcnZpY2VcbiAqL1xuXG52YXIgZW5jaGFuY2VMb2dnZXIgPSBmdW5jdGlvbiggJGxvZyApe1xuICB2YXIgc3VwcGxhbnQgPSByZXF1aXJlKCcuLi9zdXBwbGFudC5qcycpO1xuICB2YXIgRGF0ZVRpbWUgPSByZXF1aXJlKCcuLi9EYXRlVGltZS5qcycpO1xuXG5cbiAgLyoqXG4gICAqIENhcHR1cmUgdGhlIG9yaWdpbmFsICRsb2cgZnVuY3Rpb25zOyBmb3IgdXNlIGluIGVuaGFuY2VkTG9nRm4oKVxuICAgKiBAYXBpICBwcml2YXRlIFxuICAgKi9cbiAgXG4gIHZhciBfJGxvZyA9IChmdW5jdGlvbiggJGxvZyApe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9nICAgOiAkbG9nLmxvZyxcbiAgICAgICAgaW5mbyAgOiAkbG9nLmluZm8sXG4gICAgICAgIHdhcm4gIDogJGxvZy53YXJuLFxuICAgICAgICBkZWJ1ZyA6ICRsb2cuZGVidWcsXG4gICAgICAgIC8vIGVycm9yIDogJGxvZy5lcnJvclxuICAgICAgfTtcbiAgfSkoICRsb2cgKTsgXG5cblxuXG4gICAvKipcbiAgICAqIFBhcnRpYWwgYXBwbGljYXRpb24gdG8gcHJlLWNhcHR1cmUgYSBsb2dnZXIgZnVuY3Rpb25cbiAgICAqIEBhcGk6ICBwcml2YXRlIFxuICAgICogQHJldHVybnM6IEZ1bmN0aW9uIFxuICAgICovXG4gICAgdmFyIHByZXBhcmVMb2dGbiA9IGZ1bmN0aW9uKCBsb2dGbiwgY2xhc3NOYW1lICl7XG5cbiAgICAgIC8qKlxuICAgICAgICogSW52b2tlIHRoZSBzcGVjaWZpZWQgYGxvZ0ZuPGAgd2l0aCB0aGUgc3VwcGxhbnQgZnVuY3Rpb25hbGl0eS4uLlxuICAgICAgICogQGFwaTogcHJpdmF0ZSBcbiAgICAgICAqIEBleGFtcGxlOiBcbiAgICAgICAqICAgdmFyIHVzZXIgPSB7IHdobzpcIlRob21hcyBCdXJsZXNvblwiXCIsIGVtYWlsPVwiVGhvbWFzQnVybGVzb25AZ21haWwuY29tXCJcIiB9O1xuICAgICAgICogICAkbG9nLndhcm4oIFwiQSB3YXJuaW5nIG1lc3NhZ2UgZm9yIGB7d2hvfWAgd2lsbCBiZSBzZW50IHRvIGB7ZW1haWx9YCAhXCIsIHVzZXIgKTsgICBcbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNob3VsZCBvdXRwdXQ6IEEgd2FybmluZyBtZXNzYWdlIGZvciBgVGhvbWFzIEJ1cmxlc29uYCB3aWxsIGJlIHNlbnQgdG8gYFRob21hc0J1cmxlc29uQGdtYWlsLmNvbWAgIVxuICAgICAgICovXG4gICAgICB2YXIgZW5oYW5jZWRMb2dGbiA9IGZ1bmN0aW9uKCApe1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgICAgICBub3cgID0gRGF0ZVRpbWUuZm9ybWF0dGVkTm93KCk7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJztcbiAgICAgICAgICAgIC8vIHByZXBlbmQgYSB0aW1lc3RhbXAgdG8gdGhlIG9yaWdpbmFsIG91dHB1dCBtZXNzYWdlXG4gICAgICAgICAgICBhcmdzWzBdID0gc3VwcGxhbnQoXCJ7MH0gLSB7MX17Mn1cIiwgWyBub3csIGNsYXNzTmFtZSwgYXJnc1swXSBdKTtcblxuICAgICAgICBsb2dGbi5jYWxsKCBudWxsLCAgc3VwcGxhbnQuYXBwbHkoIG51bGwsIGFyZ3MgKSApO1xuICAgICAgfTtcblxuICAgICAgLy8gU3BlY2lhbC4uLiBvbmx5IG5lZWRlZCB0byBzdXBwb3J0IGFuZ3VsYXItbW9ja3MgZXhwZWN0YXRpb25zXG4gICAgICBlbmhhbmNlZExvZ0ZuLmxvZ3MgPSBbIF07XG4gXG4gICAgICByZXR1cm4gZW5oYW5jZWRMb2dGbjtcbiAgICAgIFxuICAgIH07XG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBTdXBwb3J0IHRvIGdlbmVyYXRlIGNsYXNzLXNwZWNpZmljIGxvZ2dlciBpbnN0YW5jZSB3aXRoIGNsYXNzbmFtZSBvbmx5XG4gICAgICpcbiAgICAgKiBAcGFyYW06IG5hbWVcbiAgICAgKiBAcmV0dXJuczogT2JqZWN0IHdyYXBwZXIgZmFjYWRlIHRvICRsb2dcbiAgICAgKi9cbiAgICB2YXIgZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiggY2xhc3NOYW1lICl7XG4gICAgICBjbGFzc05hbWUgPSAoIGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICkgPyBjbGFzc05hbWUgKyBcIjo6XCIgOiBcIlwiO1xuXG4gICAgICByZXR1cm57XG4gICAgICAgICBsb2cgICA6IHByZXBhcmVMb2dGbiggXyRsb2cubG9nLCAgICBjbGFzc05hbWUgKSxcbiAgICAgICAgIGluZm8gIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy5pbmZvLCAgIGNsYXNzTmFtZSApLFxuICAgICAgICAgd2FybiAgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLndhcm4sICAgY2xhc3NOYW1lICksXG4gICAgICAgICBkZWJ1ZyA6IHByZXBhcmVMb2dGbiggXyRsb2cuZGVidWcsICBjbGFzc05hbWUgKSxcbiAgICAgICAgIC8vIGVycm9yIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy5lcnJvciwgIGNsYXNzTmFtZSApXG4gICAgICB9O1xuXG4gICAgfTtcblxuXG5cbiAgICAvLyB3cmFwIGVhY2ggbG9nIG1ldGhvZCBcbiAgICAkbG9nLmxvZyAgID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLmxvZyApO1xuICAgICRsb2cuaW5mbyAgPSBwcmVwYXJlTG9nRm4oICRsb2cuaW5mbyApO1xuICAgICRsb2cud2FybiAgPSBwcmVwYXJlTG9nRm4oICRsb2cud2FybiApO1xuICAgICRsb2cuZGVidWcgPSBwcmVwYXJlTG9nRm4oICRsb2cuZGVidWcgKTtcbiAgICAvLyAkbG9nLmVycm9yID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLmVycm9yICk7XG5cbiAgICAvLyBBZGQgc3BlY2lhbCBtZXRob2QgdG8gQW5ndWxhckpTICRsb2dcbiAgICAkbG9nLmdldEluc3RhbmNlID0gZ2V0SW5zdGFuY2U7XG4gXG5cbiAgICByZXR1cm4gJGxvZztcbn07Ly9lbmNoYW5jZUxvZ2dlclxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSAgZW5jaGFuY2VMb2dnZXI7IiwiLyoqXG4gKiBAYXV0aG9yICAgICAgVGhvbWFzIEJ1cmxlc29uXG4gKiBAZGF0ZSAgICAgICAgTm92ZW1iZXIsIDIwMTNcbiAqIEBzb3VyY2U6ICAgICBodHRwczovL2dpdGh1Yi5jb20vVGhvbWFzQnVybGVzb24vYW5ndWxhcmpzLWxvZ0RlY29yYXRvci9ibG9iL21hc3Rlci9zcmMvbWluZHNwYWNlL3V0aWxzL3N1cHBsYW50LmpzXG4gICovXG4gXG5cbiAndXNlIHN0cmljdCc7XG5cbnZhciBzdXBwbGFudCA9ICBmdW5jdGlvbiggdGVtcGxhdGUsIHZhbHVlcywgcGF0dGVybiApIHtcbiAgICAgICAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuIHx8IC9cXHsoW15cXHtcXH1dKilcXH0vZztcblxuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UocGF0dGVybiwgZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHZhciBwID0gYi5zcGxpdCgnLicpLFxuICAgICAgICAgICAgICAgICAgICByID0gdmFsdWVzO1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyBpbiBwKSB7IHIgPSByW3Bbc11dOyAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAgICAgICAgIHIgPSBhO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAodHlwZW9mIHIgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiByID09PSAnbnVtYmVyJykgPyByIDogYTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG5cbi8vIHN1cHBsYW50KCkgbWV0aG9kIGZyb20gQ3JvY2tmb3JkcyBgUmVtZWRpYWwgSmF2YXNjcmlwdGBcbkZ1bmN0aW9uLnByb3RvdHlwZS5tZXRob2QgPSBmdW5jdGlvbiAobmFtZSwgZnVuYykge1xuICAgIHRoaXMucHJvdG90eXBlW25hbWVdID0gZnVuYztcbiAgICByZXR1cm4gdGhpcztcbn07XG5cblN0cmluZy5tZXRob2QoXCJzdXBwbGFudFwiLCBmdW5jdGlvbiggdmFsdWVzLCBwYXR0ZXJuICkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICByZXR1cm4gc3VwcGxhbnQoc2VsZiwgdmFsdWVzLCBwYXR0ZXJuKTtcbn0pO1xuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9ICBTdHJpbmcuc3VwcGxhbnQgPSBzdXBwbGFudDsiXX0=

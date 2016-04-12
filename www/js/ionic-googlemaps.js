(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/app-main.js":[function(require,module,exports){
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

},{"./constants.development":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/constants.development.js","./controllers/_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/_index.js","./on_config":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/on_config.js","./on_run":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/on_run.js","./services/_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/constants.development.js":[function(require,module,exports){
'use strict';

var AppSettings = {
  yocalAPI:{
    // base: 'http://yoendpoint4-wbbs.rhcloud.com/api/v1/yokal/data/'
    base: 'http://localhost:8100/api/v1/yokal/data/'
  }

};

module.exports = AppSettings;

},{}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/AppCtrl.js":[function(require,module,exports){
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

},{"./_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/BrowseCtrl.js":[function(require,module,exports){
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

},{"./_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/MapCtrl.js":[function(require,module,exports){
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
  
  	$log.debug('initMap');
  	
  	      
    var mapOptions = {
      center:    {lat: 39.937893, lng:-75.1689347},
      zoom:      1,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    $ionicLoading.show({
      template: "Exploring Your Location ...",
      backdrop: true
    });

    
    CurrentCoords.get().then(function(pos){
      // mapOptions.center = {lat: pos.latitude, lng: pos.longitude};

      vm.gmap = new google.maps.Map(document.getElementById("Map"), mapOptions);

      var youAreHere = new google.maps.Marker({
        position: mapOptions.center,
        map:      vm.gmap,
        title:    'You Are Here'
      });
      
      $ionicLoading.hide();
    
      // return Yocal.get({radius: 100000, lat:pos.latitude, lng:pos.longitude });
      return Yocal.get({radius: 8000, lat:mapOptions.center.lat, lng:mapOptions.center.lng });
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



    
 
   
};


controllersModule.controller('MapCtrl', MapCtrl);

},{"./_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/PlaylistCtrl.js":[function(require,module,exports){
'use strict';

PlaylistCtrl.$inject = ["$scope"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function PlaylistCtrl($scope) {
  


};

controllersModule.controller('PlaylistCtrl', PlaylistCtrl);

},{"./_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/PlaylistsCtrl.js":[function(require,module,exports){
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

},{"./_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/SearchCtrl.js":[function(require,module,exports){
'use strict';

SearchCtrl.$inject = ["$scope", "$log", "$state", "Yocal", "CurrentCoords", "$ionicLoading", "$ionicSlideBoxDelegate"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function SearchCtrl($scope, $log, $state, Yocal, CurrentCoords, $ionicLoading, $ionicSlideBoxDelegate) {
 	// ViewModel
  	var vm = this;
    // $scope.locations = $state.current.data.locations;
    $scope.locations =[];
    $scope.shouldShowDelete = false;
 	$scope.shouldShowReorder = false;
 	$scope.listCanSwipe = true;

    $ionicLoading.show({
    	template: "Finding Rad Spots ...",
    	backdrop: true
    });

    var southPhilly = {lat: 39.937893, lng:-75.1689347};

     

    CurrentCoords.get().then(function(youAreHere){
    	return Yocal.get({radius: 80000, lat:southPhilly.lat, lng:southPhilly.lng});
    })
    .then(function(data){
    	

    	angular.forEach(data.locations, function(value, index){
    		var service = new google.maps.DistanceMatrixService;
    		service.getDistanceMatrix({
    			origins:       [southPhilly],
    			destinations:  [{lat: parseFloat(value.lat), lng: parseFloat(value.long)}],
    			travelMode:    google.maps.TravelMode.WALKING,
    			unitSystem:    google.maps.UnitSystem.IMPERIAL,
    			avoidHighways: false,
    			avoidTolls:    false
    		}, function(response, status) {
    			value.travelTime = response.rows[0].elements[0].duration.text;
    		});
    	});

   		$scope.locations = data.locations;	
   		$ionicSlideBoxDelegate.update();
   		$ionicLoading.hide();
   	});
    
    
  	$log.debug('SearchCtrl');
  
};


controllersModule.controller('SearchCtrl', SearchCtrl);

},{"./_index":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/_index.js":[function(require,module,exports){
'use strict';



module.exports = angular.module('app.controllers', []);

({"AppCtrl":require("./AppCtrl.js"),"BrowseCtrl":require("./BrowseCtrl.js"),"MapCtrl":require("./MapCtrl.js"),"PlaylistCtrl":require("./PlaylistCtrl.js"),"PlaylistsCtrl":require("./PlaylistsCtrl.js"),"SearchCtrl":require("./SearchCtrl.js")});

},{"./AppCtrl.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/AppCtrl.js","./BrowseCtrl.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/BrowseCtrl.js","./MapCtrl.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/MapCtrl.js","./PlaylistCtrl.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/PlaylistCtrl.js","./PlaylistsCtrl.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/PlaylistsCtrl.js","./SearchCtrl.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/controllers/SearchCtrl.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/on_config.js":[function(require,module,exports){
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

},{"./utils/logging/LogDecorator.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/utils/logging/LogDecorator.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/on_run.js":[function(require,module,exports){
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

},{}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/CurrentCoordsService.js":[function(require,module,exports){
'use strict';

CurrentCoords.$inject = ["$q", "$http", "$log", "AppSettings"];
var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function CurrentCoords($q, $http, $log,  AppSettings) {

  var service = {};

  service.get = function() {
    var deferred = $q.defer();


    navigator.geolocation.getCurrentPosition(function(pos) {
        
      $log.debug('current lat: "{coords.latitude}"',pos);
      $log.debug('current long: "{coords.longitude}"',pos);

      deferred.resolve(pos.coords);
        
   }, function(error) {
       $log.error('Unable to get location: ' + error.message);
       deferred.reject(err, status);
   });


    
    return deferred.promise;
  };

  return service;

}

servicesModule.service('CurrentCoords', CurrentCoords);

},{"./_index.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/Yocal.js":[function(require,module,exports){
'use strict';

Yocal.$inject = ["$q", "$http", "AppSettings", "$log"];
var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function Yocal($q, $http, AppSettings, $log) {

  var service = {};

  service.get = function( getData ) {
    var deferred = $q.defer();
    // /listByDistanceCat/Food/8000/39.937893/-75.1689347
    // 
    $http.get(AppSettings.yocalAPI.base+'listByDistanceCat/Food/'+getData.radius+'/'+getData.lat+'/'+getData.lng).success(function(data) {
        $log.debug('Yocal found "{length}" spots within '+getData.radius+'meters of '+getData.lat+','+getData.lng, data.locations);
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

},{"./_index.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/_index.js":[function(require,module,exports){
'use strict';



module.exports = angular.module('app.services', []);

({"CurrentCoordsService":require("./CurrentCoordsService.js"),"Yocal":require("./Yocal.js"),"example":require("./example.js")});

},{"./CurrentCoordsService.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/CurrentCoordsService.js","./Yocal.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/Yocal.js","./example.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/example.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/example.js":[function(require,module,exports){
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

},{"./_index.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/utils/DateTime.js":[function(require,module,exports){
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

},{}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/utils/logging/LogDecorator.js":[function(require,module,exports){
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

},{"./LogEnhancer.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/utils/logging/LogEnhancer.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/utils/logging/LogEnhancer.js":[function(require,module,exports){
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

},{"../DateTime.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/utils/DateTime.js","../supplant.js":"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/utils/supplant.js"}],"/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/utils/supplant.js":[function(require,module,exports){
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

},{}]},{},["/Library/WebServer/Documents/sideProjects/ionic-googlemaps/www/js/app-main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9hcHAtbWFpbi5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnN0YW50cy5kZXZlbG9wbWVudC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL0FwcEN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9Ccm93c2VDdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvTWFwQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL1BsYXlsaXN0Q3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL1BsYXlsaXN0c0N0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb250cm9sbGVycy9TZWFyY2hDdHJsLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvX2luZGV4LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvb25fY29uZmlnLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvb25fcnVuLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvQ3VycmVudENvb3Jkc1NlcnZpY2UuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9Zb2NhbC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3NlcnZpY2VzL19pbmRleC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3NlcnZpY2VzL2V4YW1wbGUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3NpZGVQcm9qZWN0cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy91dGlscy9EYXRlVGltZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3V0aWxzL2xvZ2dpbmcvTG9nRGVjb3JhdG9yLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9zaWRlUHJvamVjdHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvdXRpbHMvbG9nZ2luZy9Mb2dFbmhhbmNlci5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvc2lkZVByb2plY3RzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3V0aWxzL3N1cHBsYW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7O0FBS0EsUUFBUTtBQUNSLFFBQVE7Ozs7QUFJUixRQUFRLFFBQVEsVUFBVSxNQUFNLFdBQVc7O0VBRXpDLElBQUksV0FBVztJQUNiO0lBQ0E7SUFDQTtJQUNBOzs7Ozs7OztFQVFGLE9BQU8sTUFBTSxRQUFRLE9BQU8sT0FBTzs7RUFFbkMsUUFBUSxPQUFPLE9BQU8sU0FBUyxlQUFlLFFBQVE7O0VBRXRELFFBQVEsT0FBTyxPQUFPLE9BQU8sUUFBUTs7RUFFckMsUUFBUSxPQUFPLE9BQU8sSUFBSSxRQUFROztFQUVsQyxRQUFRLFVBQVUsVUFBVSxDQUFDOztHQUU1Qjs7O0FDbENIOztBQUVBLElBQUksY0FBYztFQUNoQixTQUFTOztJQUVQLE1BQU07Ozs7O0FBS1YsT0FBTyxVQUFVLFlBQVk7OztBQ1Y3Qjs7O0FBRUEsSUFBSSxvQkFBb0IsUUFBUTs7Ozs7QUFLaEMsU0FBUyxRQUFRLFFBQVEsYUFBYSxVQUFVOzs7RUFHOUMsT0FBTyxZQUFZOzs7RUFHbkIsWUFBWSxnQkFBZ0Isd0JBQXdCO0lBQ2xELE9BQU87S0FDTixLQUFLLFNBQVMsT0FBTztJQUN0QixPQUFPLFFBQVE7Ozs7RUFJakIsT0FBTyxhQUFhLFdBQVc7SUFDN0IsT0FBTyxNQUFNOzs7O0VBSWYsT0FBTyxRQUFRLFdBQVc7SUFDeEIsT0FBTyxNQUFNOzs7O0VBSWYsT0FBTyxVQUFVLFdBQVc7SUFDMUIsUUFBUSxJQUFJLGVBQWUsT0FBTzs7OztJQUlsQyxTQUFTLFdBQVc7TUFDbEIsT0FBTztPQUNOOzs7OztDQUtOOztBQUVELGtCQUFrQixXQUFXLFdBQVcsU0FBUzs7O0FDNUNqRDs7O0FBRUEsSUFBSSxvQkFBb0IsUUFBUTs7Ozs7QUFLaEMsU0FBUyxXQUFXLFFBQVEsT0FBTzs7RUFFakMsT0FBTyxRQUFRLEtBQUs7RUFDcEIsT0FBTyxVQUFVLFNBQVMsRUFBRTtJQUMxQixPQUFPLE9BQU87O0VBRWhCLE9BQU8sV0FBVztFQUNsQixNQUFNLE1BQU0sS0FBSyxTQUFTLEtBQUs7SUFDN0IsUUFBUSxJQUFJO0lBQ1osT0FBTyxZQUFZOztFQUVyQixJQUFJLGFBQWE7SUFDZjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxR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QUFVLFNBQVMsVUFBVSxNQUFNLE1BQU07SUFDOUMsS0FBSyxVQUFVLFFBQVE7SUFDdkIsT0FBTzs7O0FBR1gsT0FBTyxPQUFPLFlBQVksVUFBVSxRQUFRLFVBQVU7SUFDbEQsSUFBSSxPQUFPO0lBQ1gsT0FBTyxTQUFTLE1BQU0sUUFBUTs7Ozs7O0FBTWxDLE9BQU8sV0FBVyxPQUFPLFdBQVcsU0FBUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbi8vIGFuZ3VsYXIgbW9kdWxlc1xuLy8gcmVxdWlyZSgnYW5ndWxhci1tb2R1bGUtc2FuaXRpemUnKTtcbi8vIHJlcXVpcmUoJy4vdGVtcGxhdGVzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL19pbmRleCcpO1xucmVxdWlyZSgnLi9zZXJ2aWNlcy9faW5kZXgnKTtcbi8vIHJlcXVpcmUoJy4vY29tcG9uZW50cy9faW5kZXgnKTtcblxuLy8gY3JlYXRlIGFuZCBib290c3RyYXAgYXBwbGljYXRpb25cbmFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgdmFyIHJlcXVpcmVzID0gW1xuICAgICdpb25pYycsXG4gICAgJ2FwcC5jb250cm9sbGVycycsXG4gICAgJ2FwcC5zZXJ2aWNlcycsXG4gICAgJ3VpLnJvdXRlcidcbiAgICAvLyAndGVtcGxhdGVzJyxcbiAgICAvLyAnbmdTYW5pdGl6ZScsXG4gICAgLy8gJ2FwcC5zZXJ2aWNlcycsXG4gICAgLy8gJ2FwcC5jb21wb25lbnRzJ1xuICBdO1xuXG4gIC8vIG1vdW50IG9uIHdpbmRvdyBmb3IgdGVzdGluZ1xuICB3aW5kb3cuYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIHJlcXVpcmVzKTtcblxuICBhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29uc3RhbnQoJ0FwcFNldHRpbmdzJywgcmVxdWlyZSgnLi9jb25zdGFudHMuZGV2ZWxvcG1lbnQnKSk7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbmZpZyhyZXF1aXJlKCcuL29uX2NvbmZpZycpKTtcblxuICBhbmd1bGFyLm1vZHVsZSgnYXBwJykucnVuKHJlcXVpcmUoJy4vb25fcnVuJykpO1xuXG4gIGFuZ3VsYXIuYm9vdHN0cmFwKGRvY3VtZW50LCBbJ2FwcCddKTtcblxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQXBwU2V0dGluZ3MgPSB7XG4gIHlvY2FsQVBJOntcbiAgICAvLyBiYXNlOiAnaHR0cDovL3lvZW5kcG9pbnQ0LXdiYnMucmhjbG91ZC5jb20vYXBpL3YxL3lva2FsL2RhdGEvJ1xuICAgIGJhc2U6ICdodHRwOi8vbG9jYWxob3N0OjgxMDAvYXBpL3YxL3lva2FsL2RhdGEvJ1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwU2V0dGluZ3M7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBBcHBDdHJsKCRzY29wZSwgJGlvbmljTW9kYWwsICR0aW1lb3V0KSB7XG4gIFxuICAvLyBGb3JtIGRhdGEgZm9yIHRoZSBsb2dpbiBtb2RhbFxuICAkc2NvcGUubG9naW5EYXRhID0ge307XG5cbiAgLy8gQ3JlYXRlIHRoZSBsb2dpbiBtb2RhbCB0aGF0IHdlIHdpbGwgdXNlIGxhdGVyXG4gICRpb25pY01vZGFsLmZyb21UZW1wbGF0ZVVybCgndGVtcGxhdGVzL2xvZ2luLmh0bWwnLCB7XG4gICAgc2NvcGU6ICRzY29wZVxuICB9KS50aGVuKGZ1bmN0aW9uKG1vZGFsKSB7XG4gICAgJHNjb3BlLm1vZGFsID0gbW9kYWw7XG4gIH0pO1xuXG4gIC8vIFRyaWdnZXJlZCBpbiB0aGUgbG9naW4gbW9kYWwgdG8gY2xvc2UgaXRcbiAgJHNjb3BlLmNsb3NlTG9naW4gPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUubW9kYWwuaGlkZSgpO1xuICB9O1xuXG4gIC8vIE9wZW4gdGhlIGxvZ2luIG1vZGFsXG4gICRzY29wZS5sb2dpbiA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5tb2RhbC5zaG93KCk7XG4gIH07XG5cbiAgLy8gUGVyZm9ybSB0aGUgbG9naW4gYWN0aW9uIHdoZW4gdGhlIHVzZXIgc3VibWl0cyB0aGUgbG9naW4gZm9ybVxuICAkc2NvcGUuZG9Mb2dpbiA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdEb2luZyBsb2dpbicsICRzY29wZS5sb2dpbkRhdGEpO1xuXG4gICAgLy8gU2ltdWxhdGUgYSBsb2dpbiBkZWxheS4gUmVtb3ZlIHRoaXMgYW5kIHJlcGxhY2Ugd2l0aCB5b3VyIGxvZ2luXG4gICAgLy8gY29kZSBpZiB1c2luZyBhIGxvZ2luIHN5c3RlbVxuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLmNsb3NlTG9naW4oKTtcbiAgICB9LCAxMDAwKTtcbiAgfTtcblxuICBcblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignQXBwQ3RybCcsIEFwcEN0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gQnJvd3NlQ3RybCgkc2NvcGUsIFlvY2FsKSB7XG4gIFxuICAkc2NvcGUucmFuZG8gPSBNYXRoLnJhbmRvbSgpO1xuICAkc2NvcGUuZ2V0VHlwZSA9IGZ1bmN0aW9uKHgpe1xuICAgIHJldHVybiB0eXBlb2YgeDtcbiAgfVxuICAkc2NvcGUubG9jYXRpb25zID1bXTtcbiAgWW9jYWwuZ2V0KCkudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAkc2NvcGUubG9jYXRpb25zID0gZGF0YTtcbiAgfSk7XG4gIHZhciBfbG9jYXRpb25zID0gW1xuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNmVcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJMb3MgR2FsbG9zXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCI5NTEgV29sZiBTdCBQaGlsYWRlbHBoaWEgUEEgMTkxNDggVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTIxMTc4XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE2MzI1OTlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjE5MThcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU2ZlwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkhhcmRlbmFcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjc1NCBTIEhpY2tzIFN0LCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ1XCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45NDE2ODZcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTY4NDE4NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246NDIzXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNzFcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJOYW0gU29uIEJha2VyeVwiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMTYwMSBXYXNoaW5ndG9uIEF2ZSBQaGlsYWRlbHBoaWEgUEEgMTkxNDYgVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTM5MjA5NFwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNzAyNjRcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjE4NVwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTcyXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQnJlZXp5J3MgQ2FmZVwiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMTIwMCBQb2ludCBCcmVlemUgQXZlIFBoaWxhZGVscGhpYSBQQSAxOTE0NiBVbml0ZWQgU3RhdGVzXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45MzcyMzcyXCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE3NzEwNzNcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjcwMlwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTczXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiUGl6emEgQnJhaW4vTGl0dGxlIEJhYnknc1wiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMjMxMyBGcmFua2ZvcmQgQXZlIFBoaWxhZGVscGhpYSBQQSAxOTEyNSBVbml0ZWQgU3RhdGVzXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45ODA2NzQ2XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjEyODA5NjhcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjU4OTRcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU3NFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlNrZXRjaCBCdXJnZXJcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjQxMyBFIEdpcmFyZCBBdmUgUGhpbGFkZWxwaGlhIFBBIDE5MTI1IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5Ljk3MDU3OTJcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTMwMTE4NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246NDkxN1wiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTc2XCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiVG9ydGlsbGVyaWEgU2FuIFJvbWFuXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCI5NTEgUyA5dGggU3QgUGhpbGFkZWxwaGlhIFBBIDE5MTQ3IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5LjkzNzYzOTZcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTU3OTg5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjo5MzZcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU3OFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkhhaSBTdHJlZXQgS2l0Y2hlbiAmIENvLlwiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMzIgUyAxOHRoIFN0IFBoaWxhZGVscGhpYSBQQSAxOTEwMyBVbml0ZWQgU3RhdGVzXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45NTIxNjM4XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE3MDQ2MTlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjE1OTBcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU4MFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkZlZGVyYWwgRG9udXRzXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIxMjE5IFMgMm5kIFN0IFBoaWxhZGVscGhpYSBQQSAxOTE0NyBVbml0ZWQgU3RhdGVzXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45MzIyMDk4XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE0NzQ2MDNcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjE5NDFcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU4MVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkJpbmcgQmluZyBEaW0gU3VtXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIxNjQ4IEUgUGFzc3l1bmsgQXZlIFBoaWxhZGVscGhpYSBQQSAxOTE0OCBVbml0ZWQgU3RhdGVzXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45Mjg5NTlcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTY0NzA5MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246MTA1NlwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTg4XCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQmxhY2sgTiBCcmV3XCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCI1MjMgRSBQYXNzeXVuayBBdmUsIFBoaWxhZGVscGhpYSwgUEEgMTkxNDdcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5Ljk0MTc2MVwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNTAzOTI4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjoxNjQyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllOGVcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJQaGlsbHkgRmxhdm9yc1wiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMjAwNCBGYWlybW91bnQgQXZlLCBQaGlsYWRlbHBoaWEsIFBBIDE5MTMwXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45NjcwODdcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTcwNTEyNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246MzI0NFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZThmXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQ2Fwb2dpcm8gR2VsYXRvXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIyMzMgQ2hlc3RudXQgU3RyZWV0LCBQaGlsYWRlbHBoaWEsIFBBXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45NDg4MjJcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTQ1MzU4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjoyMzUyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllOTNcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCIxc3QgT3JpZW50YWwgU3VwZXJtYXJrZXRcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjExMTEgUyA2dGggU3QgUGhpbGFkZWxwaGlhLCBQQSAxOTE0N1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTM0MDE1OFwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNTM2ODUxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjoxMzczXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllYTBcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJLICYgQSBTYW5kd2ljaGVzICYgR3JvY2VyeVwiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMTQzOSBTIDIwdGggU3QsIFBoaWxhZGVscGhpYSwgUEEgMTkxNDZcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5LjkzMzAwMTJcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTc3NDc0OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246OTEwXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllYTFcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJTb3V0aCBIb3VzZVwiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMjUzNSBTIDEzdGggU3QsIFBoaWxhZGVscGhpYSwgUEEgMTkxNDhcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5LjkxODAzNzRcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTY4NzEzMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246MjIwNVwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZWE3XCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQ2luZW11Z1wiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwicyAxOTE0OCwgMTYwNyBTIEJyb2FkIFN0LCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ4XCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45MzAxODM5XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE2ODAwNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246ODYwXCJcbiAgICAgIF1cbiAgICB9XG4gIF07XG5cblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignQnJvd3NlQ3RybCcsIEJyb3dzZUN0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gTWFwQ3RybCgkc2NvcGUsICRsb2csICRzdGF0ZSwgJGlvbmljTG9hZGluZywgQ3VycmVudENvb3JkcywgWW9jYWwsICR0aW1lb3V0ICkge1xuIFx0Ly8gVmlld01vZGVsXG4gIFx0dmFyIHZtID0gdGhpcztcbiAgICB2bS5jb29yZGluYXRlcyA9IHt9O1x0XG4gIFxuICBcdCRsb2cuZGVidWcoJ2luaXRNYXAnKTtcbiAgXHRcbiAgXHQgICAgICBcbiAgICB2YXIgbWFwT3B0aW9ucyA9IHtcbiAgICAgIGNlbnRlcjogICAge2xhdDogMzkuOTM3ODkzLCBsbmc6LTc1LjE2ODkzNDd9LFxuICAgICAgem9vbTogICAgICAxLFxuICAgICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCxcbiAgICB9O1xuXG4gICAgJGlvbmljTG9hZGluZy5zaG93KHtcbiAgICAgIHRlbXBsYXRlOiBcIkV4cGxvcmluZyBZb3VyIExvY2F0aW9uIC4uLlwiLFxuICAgICAgYmFja2Ryb3A6IHRydWVcbiAgICB9KTtcblxuICAgIFxuICAgIEN1cnJlbnRDb29yZHMuZ2V0KCkudGhlbihmdW5jdGlvbihwb3Mpe1xuICAgICAgLy8gbWFwT3B0aW9ucy5jZW50ZXIgPSB7bGF0OiBwb3MubGF0aXR1ZGUsIGxuZzogcG9zLmxvbmdpdHVkZX07XG5cbiAgICAgIHZtLmdtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFwXCIpLCBtYXBPcHRpb25zKTtcblxuICAgICAgdmFyIHlvdUFyZUhlcmUgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgcG9zaXRpb246IG1hcE9wdGlvbnMuY2VudGVyLFxuICAgICAgICBtYXA6ICAgICAgdm0uZ21hcCxcbiAgICAgICAgdGl0bGU6ICAgICdZb3UgQXJlIEhlcmUnXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgJGlvbmljTG9hZGluZy5oaWRlKCk7XG4gICAgXG4gICAgICAvLyByZXR1cm4gWW9jYWwuZ2V0KHtyYWRpdXM6IDEwMDAwMCwgbGF0OnBvcy5sYXRpdHVkZSwgbG5nOnBvcy5sb25naXR1ZGUgfSk7XG4gICAgICByZXR1cm4gWW9jYWwuZ2V0KHtyYWRpdXM6IDgwMDAsIGxhdDptYXBPcHRpb25zLmNlbnRlci5sYXQsIGxuZzptYXBPcHRpb25zLmNlbnRlci5sbmcgfSk7XG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihkYXRhKXtcblxuICAgICAgXG4gICAgICBhbmd1bGFyLmZvckVhY2goZGF0YS5sb2NhdGlvbnMsIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCl7XG4gICAgICAgIHZhciBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICc8aDMgaWQ9XCJmaXJzdEhlYWRpbmdcIiBjbGFzcz1cImZpcnN0SGVhZGluZ1wiPicrdmFsdWUubmFtZSsnPC9oMz4nXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgICBwb3NpdGlvbjogIHtsYXQ6IHBhcnNlRmxvYXQodmFsdWUubGF0KSwgbG5nOnBhcnNlRmxvYXQodmFsdWUubG9uZyl9LFxuICAgICAgICAgICAgICBtYXA6ICAgICAgIHZtLmdtYXAsXG4gICAgICAgICAgICAgIGxhYmVsOiAgICAgdmFsdWUubmFtZSxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCxcbiAgICAgICAgICAgICAgb3BhY2l0eTogICAwXG4gICAgICAgICAgfSk7XG5cblxuICAgICAgICAgIHZhciBkaXJlY3Rpb25zRGlzcGxheSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIoe1xuICAgICAgICAgICAgbWFwOiB2bS5nbWFwXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbjogbWFya2VyLnBvc2l0aW9uLFxuICAgICAgICAgICAgb3JpZ2luOiAgICAgIG1hcE9wdGlvbnMuY2VudGVyLFxuICAgICAgICAgICAgdHJhdmVsTW9kZTogIGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuV0FMS0lOR1xuICAgICAgICAgIH07XG5cblxuICAgICAgICAgIC8vIFBhc3MgdGhlIGRpcmVjdGlvbnMgcmVxdWVzdCB0byB0aGUgZGlyZWN0aW9ucyBzZXJ2aWNlLlxuICAgICAgICAgIHZhciBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpO1xuXG4gICAgICAgICAgZGlyZWN0aW9uc1NlcnZpY2Uucm91dGUocmVxdWVzdCwgZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cykge1xuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgIC8vIERpc3BsYXkgdGhlIHJvdXRlIG9uIHRoZSBtYXAuXG4gICAgICAgICAgICAgIGRpcmVjdGlvbnNEaXNwbGF5LnNldERpcmVjdGlvbnMocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgLy8gbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgIGluZm93aW5kb3cub3Blbih2bS5nbWFwLCBtYXJrZXIpO1xuICAgICAgICAvLyB9KTsvLyBlbmQgbWFya2VyIGV2ZW50XG5cblxuICAgICAgfSk7XG4gICAgICAgIFxuICAgIH0pO1xuXG5cblxuICAgIFxuIFxuICAgXG59O1xuXG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ01hcEN0cmwnLCBNYXBDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIFBsYXlsaXN0Q3RybCgkc2NvcGUpIHtcbiAgXG5cblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignUGxheWxpc3RDdHJsJywgUGxheWxpc3RDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIFBsYXlsaXN0c0N0cmwoJHNjb3BlKSB7XG4gIFxuICRzY29wZS5wbGF5bGlzdHMgPSBbXG4gICAgeyB0aXRsZTogJ1JlZ2dhZScsIGlkOiAxIH0sXG4gICAgeyB0aXRsZTogJ0NoaWxsJywgaWQ6IDIgfSxcbiAgICB7IHRpdGxlOiAnRHVic3RlcCcsIGlkOiAzIH0sXG4gICAgeyB0aXRsZTogJ0luZGllJywgaWQ6IDQgfSxcbiAgICB7IHRpdGxlOiAnUmFwJywgaWQ6IDUgfSxcbiAgICB7IHRpdGxlOiAnQ293YmVsbCcsIGlkOiA2IH1cbiAgXTtcblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignUGxheWxpc3RzQ3RybCcsIFBsYXlsaXN0c0N0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gU2VhcmNoQ3RybCgkc2NvcGUsICRsb2csICRzdGF0ZSwgWW9jYWwsIEN1cnJlbnRDb29yZHMsICRpb25pY0xvYWRpbmcsICRpb25pY1NsaWRlQm94RGVsZWdhdGUpIHtcbiBcdC8vIFZpZXdNb2RlbFxuICBcdHZhciB2bSA9IHRoaXM7XG4gICAgLy8gJHNjb3BlLmxvY2F0aW9ucyA9ICRzdGF0ZS5jdXJyZW50LmRhdGEubG9jYXRpb25zO1xuICAgICRzY29wZS5sb2NhdGlvbnMgPVtdO1xuICAgICRzY29wZS5zaG91bGRTaG93RGVsZXRlID0gZmFsc2U7XG4gXHQkc2NvcGUuc2hvdWxkU2hvd1Jlb3JkZXIgPSBmYWxzZTtcbiBcdCRzY29wZS5saXN0Q2FuU3dpcGUgPSB0cnVlO1xuXG4gICAgJGlvbmljTG9hZGluZy5zaG93KHtcbiAgICBcdHRlbXBsYXRlOiBcIkZpbmRpbmcgUmFkIFNwb3RzIC4uLlwiLFxuICAgIFx0YmFja2Ryb3A6IHRydWVcbiAgICB9KTtcblxuICAgIHZhciBzb3V0aFBoaWxseSA9IHtsYXQ6IDM5LjkzNzg5MywgbG5nOi03NS4xNjg5MzQ3fTtcblxuICAgICBcblxuICAgIEN1cnJlbnRDb29yZHMuZ2V0KCkudGhlbihmdW5jdGlvbih5b3VBcmVIZXJlKXtcbiAgICBcdHJldHVybiBZb2NhbC5nZXQoe3JhZGl1czogODAwMDAsIGxhdDpzb3V0aFBoaWxseS5sYXQsIGxuZzpzb3V0aFBoaWxseS5sbmd9KTtcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuICAgIFx0XG5cbiAgICBcdGFuZ3VsYXIuZm9yRWFjaChkYXRhLmxvY2F0aW9ucywgZnVuY3Rpb24odmFsdWUsIGluZGV4KXtcbiAgICBcdFx0dmFyIHNlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlzdGFuY2VNYXRyaXhTZXJ2aWNlO1xuICAgIFx0XHRzZXJ2aWNlLmdldERpc3RhbmNlTWF0cml4KHtcbiAgICBcdFx0XHRvcmlnaW5zOiAgICAgICBbc291dGhQaGlsbHldLFxuICAgIFx0XHRcdGRlc3RpbmF0aW9uczogIFt7bGF0OiBwYXJzZUZsb2F0KHZhbHVlLmxhdCksIGxuZzogcGFyc2VGbG9hdCh2YWx1ZS5sb25nKX1dLFxuICAgIFx0XHRcdHRyYXZlbE1vZGU6ICAgIGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuV0FMS0lORyxcbiAgICBcdFx0XHR1bml0U3lzdGVtOiAgICBnb29nbGUubWFwcy5Vbml0U3lzdGVtLklNUEVSSUFMLFxuICAgIFx0XHRcdGF2b2lkSGlnaHdheXM6IGZhbHNlLFxuICAgIFx0XHRcdGF2b2lkVG9sbHM6ICAgIGZhbHNlXG4gICAgXHRcdH0sIGZ1bmN0aW9uKHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICBcdFx0XHR2YWx1ZS50cmF2ZWxUaW1lID0gcmVzcG9uc2Uucm93c1swXS5lbGVtZW50c1swXS5kdXJhdGlvbi50ZXh0O1xuICAgIFx0XHR9KTtcbiAgICBcdH0pO1xuXG4gICBcdFx0JHNjb3BlLmxvY2F0aW9ucyA9IGRhdGEubG9jYXRpb25zO1x0XG4gICBcdFx0JGlvbmljU2xpZGVCb3hEZWxlZ2F0ZS51cGRhdGUoKTtcbiAgIFx0XHQkaW9uaWNMb2FkaW5nLmhpZGUoKTtcbiAgIFx0fSk7XG4gICAgXG4gICAgXG4gIFx0JGxvZy5kZWJ1ZygnU2VhcmNoQ3RybCcpO1xuICBcbn07XG5cblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignU2VhcmNoQ3RybCcsIFNlYXJjaEN0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmNvbnRyb2xsZXJzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pOyIsIid1c2Ugc3RyaWN0JztcblxuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBPbkNvbmZpZygkc3RhdGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJHByb3ZpZGUpIHtcbiAgXG4gIC8vYWN0aXZhdGUgTG9nRGVjb3JhdG9yXG4gIHJlcXVpcmUoJy4vdXRpbHMvbG9nZ2luZy9Mb2dEZWNvcmF0b3IuanMnKSgkcHJvdmlkZSk7XG5cbiRzdGF0ZVByb3ZpZGVyXG5cbiAgLnN0YXRlKCdhcHAnLCB7XG4gICAgdXJsOiAnL2FwcCcsXG4gICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbWVudS5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnQXBwQ3RybCdcbiAgfSlcblxuICAuc3RhdGUoJ2FwcC5zZWFyY2gnLCB7XG4gICAgdXJsOiAnL3NlYXJjaCcsXG4gICAgdmlld3M6IHtcbiAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvc2VhcmNoLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnU2VhcmNoQ3RybCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGF0YTp7XG4gICAgICBsb2NhdGlvbnM6IFtcbiAge1xuICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU2ZVwiLFxuICAgICBcIm5hbWVcIjogXCJMb3MgR2FsbG9zXCIsXG4gICAgIFwiYWRyZXNzXCI6IFwiOTUxIFdvbGYgU3QgUGhpbGFkZWxwaGlhIFBBIDE5MTQ4IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgXCJsYXRcIjogXCIzOS45MjExNzhcIixcbiAgICAgXCJsb25nXCI6IFwiLTc1LjE2MzI1OTlcIixcbiAgICAgXCJjYXRlZ29yeVwiOlwiRm9vZFwiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjoxOTE4XG4gIH0sXG4gIHtcbiAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNmZcIixcbiAgICAgXCJuYW1lXCI6IFwiSGFyZGVuYVwiLFxuICAgICBcImFkcmVzc1wiOiBcIjc1NCBTIEhpY2tzIFN0LCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ1XCIsXG4gICAgIFwibGF0XCI6IFwiMzkuOTQxNjg2XCIsXG4gICAgIFwibG9uZ1wiOiBcIi03NS4xNjg0MTg0XCIsXG4gICAgIFwiY2F0ZWdvcnlcIjpcIkZvb2RcIixcbiAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uXCI6NDIzXG4gIH0sXG4gIHtcbiAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNzFcIixcbiAgICAgXCJuYW1lXCI6IFwiTmFtIFNvbiBCYWtlcnlcIixcbiAgICAgXCJhZHJlc3NcIjogXCIxNjAxIFdhc2hpbmd0b24gQXZlIFBoaWxhZGVscGhpYSBQQSAxOTE0NiBVbml0ZWQgU3RhdGVzXCIsXG4gICAgIFwibGF0XCI6IFwiMzkuOTM5MjA5NFwiLFxuICAgICBcImxvbmdcIjogXCItNzUuMTcwMjY0XCIsXG4gICAgIFwiY2F0ZWdvcnlcIjpcIkZvb2RcIixcbiAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uXCI6MTg1XG4gIH0sXG4gIHtcbiAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNzJcIixcbiAgICAgXCJuYW1lXCI6IFwiQnJlZXp5J3MgQ2FmZVwiLFxuICAgICBcImFkcmVzc1wiOiBcIjEyMDAgUG9pbnQgQnJlZXplIEF2ZSBQaGlsYWRlbHBoaWEgUEEgMTkxNDYgVW5pdGVkIFN0YXRlc1wiLFxuICAgICBcImxhdFwiOiBcIjM5LjkzNzIzNzJcIixcbiAgICAgXCJsb25nXCI6IFwiLTc1LjE3NzEwNzNcIixcbiAgICAgXCJjYXRlZ29yeVwiOlwiRm9vZFwiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjo3MDJcbiAgfSxcbiAge1xuICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU3M1wiLFxuICAgICBcIm5hbWVcIjogXCJQaXp6YSBCcmFpbi9MaXR0bGUgQmFieSdzXCIsXG4gICAgIFwiYWRyZXNzXCI6IFwiMjMxMyBGcmFua2ZvcmQgQXZlIFBoaWxhZGVscGhpYSBQQSAxOTEyNSBVbml0ZWQgU3RhdGVzXCIsXG4gICAgIFwibGF0XCI6IFwiMzkuOTgwNjc0NlwiLFxuICAgICBcImxvbmdcIjogXCItNzUuMTI4MDk2OFwiLFxuICAgICBcImNhdGVnb3J5XCI6XCJGb29kXCIsXG4gICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvblwiOjU4OTRcbiAgfSxcbiAge1xuICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU3NFwiLFxuICAgICBcIm5hbWVcIjogXCJTa2V0Y2ggQnVyZ2VyXCIsXG4gICAgIFwiYWRyZXNzXCI6IFwiNDEzIEUgR2lyYXJkIEF2ZSBQaGlsYWRlbHBoaWEgUEEgMTkxMjUgVW5pdGVkIFN0YXRlc1wiLFxuICAgICBcImxhdFwiOiBcIjM5Ljk3MDU3OTJcIixcbiAgICAgXCJsb25nXCI6IFwiLTc1LjEzMDExODRcIixcbiAgICAgXCJjYXRlZ29yeVwiOlwiRm9vZFwiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjo0OTE3XG4gIH0sXG4gIHtcbiAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNzZcIixcbiAgICAgXCJuYW1lXCI6IFwiVG9ydGlsbGVyaWEgU2FuIFJvbWFuXCIsXG4gICAgIFwiYWRyZXNzXCI6IFwiOTUxIFMgOXRoIFN0IFBoaWxhZGVscGhpYSBQQSAxOTE0NyBVbml0ZWQgU3RhdGVzXCIsXG4gICAgIFwibGF0XCI6IFwiMzkuOTM3NjM5NlwiLFxuICAgICBcImxvbmdcIjogXCItNzUuMTU3OTg5XCIsXG4gICAgIFwiY2F0ZWdvcnlcIjpcIkZvb2RcIixcbiAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uXCI6OTM2XG4gIH0sXG4gIHtcbiAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNzhcIixcbiAgICAgXCJuYW1lXCI6IFwiSGFpIFN0cmVldCBLaXRjaGVuICYgQ28uXCIsXG4gICAgIFwiYWRyZXNzXCI6IFwiMzIgUyAxOHRoIFN0IFBoaWxhZGVscGhpYSBQQSAxOTEwMyBVbml0ZWQgU3RhdGVzXCIsXG4gICAgIFwibGF0XCI6IFwiMzkuOTUyMTYzOFwiLFxuICAgICBcImxvbmdcIjogXCItNzUuMTcwNDYxOVwiLFxuICAgICBcImNhdGVnb3J5XCI6XCJGb29kXCIsXG4gICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvblwiOjE1OTBcbiAgfSxcbiAge1xuICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU4MFwiLFxuICAgICBcIm5hbWVcIjogXCJGZWRlcmFsIERvbnV0c1wiLFxuICAgICBcImFkcmVzc1wiOiBcIjEyMTkgUyAybmQgU3QgUGhpbGFkZWxwaGlhIFBBIDE5MTQ3IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgXCJsYXRcIjogXCIzOS45MzIyMDk4XCIsXG4gICAgIFwibG9uZ1wiOiBcIi03NS4xNDc0NjAzXCIsXG4gICAgIFwiY2F0ZWdvcnlcIjpcIkZvb2RcIixcbiAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uXCI6MTk0MVxuICB9LFxuICB7XG4gICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTgxXCIsXG4gICAgIFwibmFtZVwiOiBcIkJpbmcgQmluZyBEaW0gU3VtXCIsXG4gICAgIFwiYWRyZXNzXCI6IFwiMTY0OCBFIFBhc3N5dW5rIEF2ZSBQaGlsYWRlbHBoaWEgUEEgMTkxNDggVW5pdGVkIFN0YXRlc1wiLFxuICAgICBcImxhdFwiOiBcIjM5LjkyODk1OVwiLFxuICAgICBcImxvbmdcIjogXCItNzUuMTY0NzA5MlwiLFxuICAgICBcImNhdGVnb3J5XCI6XCJGb29kXCIsXG4gICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvblwiOjEwNTZcbiAgfSxcbiAge1xuICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU4OFwiLFxuICAgICBcIm5hbWVcIjogXCJCbGFjayBOIEJyZXdcIixcbiAgICAgXCJhZHJlc3NcIjogXCI1MjMgRSBQYXNzeXVuayBBdmUsIFBoaWxhZGVscGhpYSwgUEEgMTkxNDdcIixcbiAgICAgXCJsYXRcIjogXCIzOS45NDE3NjFcIixcbiAgICAgXCJsb25nXCI6IFwiLTc1LjE1MDM5MjhcIixcbiAgICAgXCJjYXRlZ29yeVwiOlwiRm9vZFwiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjoxNjQyXG4gIH0sXG4gIHtcbiAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllOGVcIixcbiAgICAgXCJuYW1lXCI6IFwiUGhpbGx5IEZsYXZvcnNcIixcbiAgICAgXCJhZHJlc3NcIjogXCIyMDA0IEZhaXJtb3VudCBBdmUsIFBoaWxhZGVscGhpYSwgUEEgMTkxMzBcIixcbiAgICAgXCJsYXRcIjogXCIzOS45NjcwODdcIixcbiAgICAgXCJsb25nXCI6IFwiLTc1LjE3MDUxMjZcIixcbiAgICAgXCJjYXRlZ29yeVwiOlwiRm9vZFwiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjozMjQ0XG4gIH0sXG4gIHtcbiAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllOGZcIixcbiAgICAgXCJuYW1lXCI6IFwiQ2Fwb2dpcm8gR2VsYXRvXCIsXG4gICAgIFwiYWRyZXNzXCI6IFwiMjMzIENoZXN0bnV0IFN0cmVldCwgUGhpbGFkZWxwaGlhLCBQQVwiLFxuICAgICBcImxhdFwiOiBcIjM5Ljk0ODgyMlwiLFxuICAgICBcImxvbmdcIjogXCItNzUuMTQ1MzU4XCIsXG4gICAgIFwiY2F0ZWdvcnlcIjpcIkZvb2RcIixcbiAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uXCI6MjM1MlxuICB9LFxuICB7XG4gICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTkzXCIsXG4gICAgIFwibmFtZVwiOiBcIjFzdCBPcmllbnRhbCBTdXBlcm1hcmtldFwiLFxuICAgICBcImFkcmVzc1wiOiBcIjExMTEgUyA2dGggU3QgUGhpbGFkZWxwaGlhLCBQQSAxOTE0N1wiLFxuICAgICBcImxhdFwiOiBcIjM5LjkzNDAxNThcIixcbiAgICAgXCJsb25nXCI6IFwiLTc1LjE1MzY4NTFcIixcbiAgICAgXCJjYXRlZ29yeVwiOlwiRm9vZFwiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjoxMzczXG4gIH0sXG4gIHtcbiAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllYTBcIixcbiAgICAgXCJuYW1lXCI6IFwiSyAmIEEgU2FuZHdpY2hlcyAmIEdyb2NlcnlcIixcbiAgICAgXCJhZHJlc3NcIjogXCIxNDM5IFMgMjB0aCBTdCwgUGhpbGFkZWxwaGlhLCBQQSAxOTE0NlwiLFxuICAgICBcImxhdFwiOiBcIjM5LjkzMzAwMTJcIixcbiAgICAgXCJsb25nXCI6IFwiLTc1LjE3NzQ3NDhcIixcbiAgICAgXCJjYXRlZ29yeVwiOlwiRm9vZFwiLFxuICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb25cIjo5MTBcbiAgfSxcbiAge1xuICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWVhMVwiLFxuICAgICBcIm5hbWVcIjogXCJTb3V0aCBIb3VzZVwiLFxuICAgICBcImFkcmVzc1wiOiBcIjI1MzUgUyAxM3RoIFN0LCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ4XCIsXG4gICAgIFwibGF0XCI6IFwiMzkuOTE4MDM3NFwiLFxuICAgICBcImxvbmdcIjogXCItNzUuMTY4NzEzMVwiLFxuICAgICBcImNhdGVnb3J5XCI6XCJGb29kXCIsXG4gICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvblwiOjIyMDVcbiAgfSxcbiAge1xuICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWVhN1wiLFxuICAgICBcIm5hbWVcIjogXCJDaW5lbXVnXCIsXG4gICAgIFwiYWRyZXNzXCI6IFwicyAxOTE0OCwgMTYwNyBTIEJyb2FkIFN0LCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ4XCIsXG4gICAgIFwibGF0XCI6IFwiMzkuOTMwMTgzOVwiLFxuICAgICBcImxvbmdcIjogXCItNzUuMTY4MDA2XCIsXG4gICAgIFwiY2F0ZWdvcnlcIjpcIkZvb2RcIixcbiAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uXCI6ODYwXG4gIH1cbl1cbiAgICB9XG4gIH0pXG5cbiAgLnN0YXRlKCdhcHAubWFwJywge1xuICAgICAgLy8gcmVzb2x2ZTp7XG4gICAgICAvLyAgIGNvb3JkczpmdW5jdGlvbihDdXJyZW50Q29vcmRzKSB7XG4gICAgICAvLyAgICAgcmV0dXJuIEN1cnJlbnRDb29yZHMuZ2V0KCk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0sXG4gICAgICB1cmw6ICcvbWFwJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9tYXAuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ01hcEN0cmwgYXMgTWFwJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuc3RhdGUoJ2FwcC5wbGF5bGlzdHMnLCB7XG4gICAgICB1cmw6ICcvcGxheWxpc3RzJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9wbGF5bGlzdHMuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ1BsYXlsaXN0c0N0cmwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gIC5zdGF0ZSgnYXBwLnNpbmdsZScsIHtcbiAgICB1cmw6ICcvcGxheWxpc3RzLzpwbGF5bGlzdElkJyxcbiAgICB2aWV3czoge1xuICAgICAgJ21lbnVDb250ZW50Jzoge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9wbGF5bGlzdC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1BsYXlsaXN0Q3RybCdcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG5cbiAgLy8gaWYgbm9uZSBvZiB0aGUgYWJvdmUgc3RhdGVzIGFyZSBtYXRjaGVkLCB1c2UgdGhpcyBhcyB0aGUgZmFsbGJhY2tcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2FwcC9tYXAnKTtcbiAgXG4gIFxuXG5cbn0vLy8vIE9uQ29uZmlnXG5cblxubW9kdWxlLmV4cG9ydHMgPSBPbkNvbmZpZzsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIE9uUnVuKCRpb25pY1BsYXRmb3JtLCAkbG9nKSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKCdPblJ1bicpO1xuICBcbiAgJGlvbmljUGxhdGZvcm0ucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgLy8gSGlkZSB0aGUgYWNjZXNzb3J5IGJhciBieSBkZWZhdWx0IChyZW1vdmUgdGhpcyB0byBzaG93IHRoZSBhY2Nlc3NvcnkgYmFyIGFib3ZlIHRoZSBrZXlib2FyZFxuICAgIC8vIGZvciBmb3JtIGlucHV0cylcbiAgICBpZiAod2luZG93LmNvcmRvdmEgJiYgd2luZG93LmNvcmRvdmEucGx1Z2lucy5LZXlib2FyZCkge1xuICAgICAgY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmhpZGVLZXlib2FyZEFjY2Vzc29yeUJhcih0cnVlKTtcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5kaXNhYmxlU2Nyb2xsKHRydWUpO1xuXG4gICAgfVxuICAgIGlmICh3aW5kb3cuU3RhdHVzQmFyKSB7XG4gICAgICAvLyBvcmcuYXBhY2hlLmNvcmRvdmEuc3RhdHVzYmFyIHJlcXVpcmVkXG4gICAgICBTdGF0dXNCYXIuc3R5bGVEZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPblJ1bjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIEN1cnJlbnRDb29yZHMoJHEsICRodHRwLCAkbG9nLCAgQXBwU2V0dGluZ3MpIHtcblxuICB2YXIgc2VydmljZSA9IHt9O1xuXG4gIHNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbihwb3MpIHtcbiAgICAgICAgXG4gICAgICAkbG9nLmRlYnVnKCdjdXJyZW50IGxhdDogXCJ7Y29vcmRzLmxhdGl0dWRlfVwiJyxwb3MpO1xuICAgICAgJGxvZy5kZWJ1ZygnY3VycmVudCBsb25nOiBcIntjb29yZHMubG9uZ2l0dWRlfVwiJyxwb3MpO1xuXG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKHBvcy5jb29yZHMpO1xuICAgICAgICBcbiAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgJGxvZy5lcnJvcignVW5hYmxlIHRvIGdldCBsb2NhdGlvbjogJyArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIsIHN0YXR1cyk7XG4gICB9KTtcblxuXG4gICAgXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG5cbn1cblxuc2VydmljZXNNb2R1bGUuc2VydmljZSgnQ3VycmVudENvb3JkcycsIEN1cnJlbnRDb29yZHMpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNlcnZpY2VzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gWW9jYWwoJHEsICRodHRwLCBBcHBTZXR0aW5ncywgJGxvZykge1xuXG4gIHZhciBzZXJ2aWNlID0ge307XG5cbiAgc2VydmljZS5nZXQgPSBmdW5jdGlvbiggZ2V0RGF0YSApIHtcbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgIC8vIC9saXN0QnlEaXN0YW5jZUNhdC9Gb29kLzgwMDAvMzkuOTM3ODkzLy03NS4xNjg5MzQ3XG4gICAgLy8gXG4gICAgJGh0dHAuZ2V0KEFwcFNldHRpbmdzLnlvY2FsQVBJLmJhc2UrJ2xpc3RCeURpc3RhbmNlQ2F0L0Zvb2QvJytnZXREYXRhLnJhZGl1cysnLycrZ2V0RGF0YS5sYXQrJy8nK2dldERhdGEubG5nKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZygnWW9jYWwgZm91bmQgXCJ7bGVuZ3RofVwiIHNwb3RzIHdpdGhpbiAnK2dldERhdGEucmFkaXVzKydtZXRlcnMgb2YgJytnZXREYXRhLmxhdCsnLCcrZ2V0RGF0YS5sbmcsIGRhdGEubG9jYXRpb25zKTtcbiAgICAgICAgZGF0YS5yYWRpdXMgPSBnZXREYXRhLnJhZGl1cztcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICB9KS5lcnJvcihmdW5jdGlvbihlcnIsIHN0YXR1cykge1xuICAgICAgICAkbG9nLmVycm9yKCdVbmFibGUgdG8gZ2V0IGxvY2F0aW9uOiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIsIHN0YXR1cyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfTtcblxuICByZXR1cm4gc2VydmljZTtcblxufVxuXG5zZXJ2aWNlc01vZHVsZS5zZXJ2aWNlKCdZb2NhbCcsIFlvY2FsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5zZXJ2aWNlcycsIFtdKTtcblxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIEV4YW1wbGVTZXJ2aWNlKCRxLCAkaHR0cCkge1xuXG4gIHZhciBzZXJ2aWNlID0ge307XG5cbiAgc2VydmljZS5nZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgJGh0dHAuZ2V0KCdhcGlQYXRoJykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyLCBzdGF0dXMpIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVyciwgc3RhdHVzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG59XG5cbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ0V4YW1wbGVTZXJ2aWNlJywgRXhhbXBsZVNlcnZpY2UpOyIsIi8qKlxuICogQGF1dGhvciAgICAgVGhvbWFzIEJ1cmxlc29uXG4gKiBAYXV0aG9yICAgICBTdGFja092ZXJmbG93IC0gSGFydG8sIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjMxNTQwOC9ob3ctZG8taS1mb3JtYXQtYS10aW1lc3RhbXAtaW4tamF2YXNjcmlwdC10by1kaXNwbGF5LWl0LWluLWdyYXBocy11dGMtaXMtZmluZVxuICogQGRlc2NyaXB0aW9uXG4gKiAgXG4gKiBEYXRlVGltZSB1dGlsaXR5IGNsYXNzIHRoYXQgc3BpdHMgb3V0IFVUQyB0aW1lc3RhbXAgc3RyaW5ncyB1c3VhbGx5IHVzZWQgaW4gYSByZXBvcnRpbmcsIHByaW50LWNhcGFibGUgcHJvY2Vzcy5cbiovXG4gXG5cbiAndXNlIHN0cmljdCc7XG5cblxudmFyIGJ1aWxkVGltZVN0cmluZyA9IGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCBcIiVoOiVtOiVzOiV6XCI7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBhZCh2YWx1ZSwgaXNNaWxsaVNlY29uZHMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIChpc01pbGxpU2Vjb25kcykgPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpc01pbGxpU2Vjb25kcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihpc01pbGxpU2Vjb25kcylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlIDwgMTApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCIwMFwiICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih2YWx1ZSA8IDEwMClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIjBcIiArIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybih2YWx1ZS50b1N0cmluZygpLmxlbmd0aCA8IDIpID8gXCIwXCIgKyB2YWx1ZSA6IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoLyUoW2EtekEtWl0pL2csIGZ1bmN0aW9uIChfLCBmbXRDb2RlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN3aXRjaChmbXRDb2RlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiWVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldERhdGUoKSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldEhvdXJzKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNaW51dGVzKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgZm9ybWF0IGNvZGU6IFwiICsgZm10Q29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cblxuIC8vIFB1Ymxpc2ggQVBJIGZvciBEYXRlVGltZSB1dGlsc1xuICAgICAgICAvLyByZXR1cm4ge1xuICAgICAgICAvLyAgICAgZm9ybWF0dGVkTm93OiBmdW5jdGlvbiAoKVxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBidWlsZFRpbWVTdHJpbmcobmV3IERhdGUoKSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIFxuIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZvcm1hdHRlZE5vdzogZnVuY3Rpb24gKCkgeyByZXR1cm4gYnVpbGRUaW1lU3RyaW5nKG5ldyBEYXRlKCkpOyB9XG4gfTtcblxuXG5cbiIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogTG9nRGVjb3JhdG9yXG4gKiAgQHNvdXJjZTogaHR0cDovL3NvbHV0aW9ub3B0aW1pc3QuY29tLzIwMTMvMTAvMDcvZW5oYW5jZS1hbmd1bGFyanMtbG9nZ2luZy11c2luZy1kZWNvcmF0b3JzL1xuICovXG5cbiB2YXIgTG9nRGVjb3JhdG9yID0gZnVuY3Rpb24oICRwcm92aWRlICApe1xuXG5cbiAgICAgICAgICAgICAgLy8gUmVnaXN0ZXIgb3VyICRsb2cgZGVjb3JhdG9yIHdpdGggQW5ndWxhckpTICRwcm92aWRlclxuICAgICAgICAgICAgICAkcHJvdmlkZS5kZWNvcmF0b3IoICckbG9nJywgWyBcIiRkZWxlZ2F0ZVwiLCBmdW5jdGlvbiggJGRlbGVnYXRlIClcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgLy8gTk9URTogdGhlIExvZ0VuY2hhbmNlciBtb2R1bGUgcmV0dXJucyBhIEZVTkNUSU9OIHRoYXQgd2UgbmFtZWQgYGVuY2hhbmNlTG9nZ2VyRm5gXG4gICAgICAgICAgICAgICAvLyAgICAgICBBbGwgdGhlIGRldGFpbHMgb2YgaG93IHRoZSBgZW5jaGFuY2VtZW50YCB3b3JrcyBpcyBlbmNhcHN1bGF0ZWQgaW4gTG9nRW5oYW5jZXIhXG5cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmUoJy4vTG9nRW5oYW5jZXIuanMnKSggJGRlbGVnYXRlICk7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAkZGVsZWdhdGU7XG4gICAgICAgICAgICAgIH1dKTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSAgTG9nRGVjb3JhdG9yOyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogTG9nRW5oYW5jZXJcbiAqIFRoaXMgYWRkcyB0aW1lc3RhbXBzIGFuZCBzdXBwbGFudCBmdW5jdGlvbmFsaXR5IHRvIEFuZ3VsYXIgJGxvZyBzZXJ2aWNlXG4gKiBAc291cmNlOiBodHRwOi8vc29sdXRpb25vcHRpbWlzdC5jb20vMjAxMy8xMC8wNy9lbmhhbmNlLWFuZ3VsYXJqcy1sb2dnaW5nLXVzaW5nLWRlY29yYXRvcnMvXG4gKiBAYXBpOiBwdWJsaWNcbiAqIEByZXR1cm5zOiBPYmplY3QgLSBleHRlbmRlZCAkbG9nIHNlcnZpY2VcbiAqL1xuXG52YXIgZW5jaGFuY2VMb2dnZXIgPSBmdW5jdGlvbiggJGxvZyApe1xuICB2YXIgc3VwcGxhbnQgPSByZXF1aXJlKCcuLi9zdXBwbGFudC5qcycpO1xuICB2YXIgRGF0ZVRpbWUgPSByZXF1aXJlKCcuLi9EYXRlVGltZS5qcycpO1xuXG5cbiAgLyoqXG4gICAqIENhcHR1cmUgdGhlIG9yaWdpbmFsICRsb2cgZnVuY3Rpb25zOyBmb3IgdXNlIGluIGVuaGFuY2VkTG9nRm4oKVxuICAgKiBAYXBpICBwcml2YXRlIFxuICAgKi9cbiAgXG4gIHZhciBfJGxvZyA9IChmdW5jdGlvbiggJGxvZyApe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9nICAgOiAkbG9nLmxvZyxcbiAgICAgICAgaW5mbyAgOiAkbG9nLmluZm8sXG4gICAgICAgIHdhcm4gIDogJGxvZy53YXJuLFxuICAgICAgICBkZWJ1ZyA6ICRsb2cuZGVidWcsXG4gICAgICAgIC8vIGVycm9yIDogJGxvZy5lcnJvclxuICAgICAgfTtcbiAgfSkoICRsb2cgKTsgXG5cblxuXG4gICAvKipcbiAgICAqIFBhcnRpYWwgYXBwbGljYXRpb24gdG8gcHJlLWNhcHR1cmUgYSBsb2dnZXIgZnVuY3Rpb25cbiAgICAqIEBhcGk6ICBwcml2YXRlIFxuICAgICogQHJldHVybnM6IEZ1bmN0aW9uIFxuICAgICovXG4gICAgdmFyIHByZXBhcmVMb2dGbiA9IGZ1bmN0aW9uKCBsb2dGbiwgY2xhc3NOYW1lICl7XG5cbiAgICAgIC8qKlxuICAgICAgICogSW52b2tlIHRoZSBzcGVjaWZpZWQgYGxvZ0ZuPGAgd2l0aCB0aGUgc3VwcGxhbnQgZnVuY3Rpb25hbGl0eS4uLlxuICAgICAgICogQGFwaTogcHJpdmF0ZSBcbiAgICAgICAqIEBleGFtcGxlOiBcbiAgICAgICAqICAgdmFyIHVzZXIgPSB7IHdobzpcIlRob21hcyBCdXJsZXNvblwiXCIsIGVtYWlsPVwiVGhvbWFzQnVybGVzb25AZ21haWwuY29tXCJcIiB9O1xuICAgICAgICogICAkbG9nLndhcm4oIFwiQSB3YXJuaW5nIG1lc3NhZ2UgZm9yIGB7d2hvfWAgd2lsbCBiZSBzZW50IHRvIGB7ZW1haWx9YCAhXCIsIHVzZXIgKTsgICBcbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHNob3VsZCBvdXRwdXQ6IEEgd2FybmluZyBtZXNzYWdlIGZvciBgVGhvbWFzIEJ1cmxlc29uYCB3aWxsIGJlIHNlbnQgdG8gYFRob21hc0J1cmxlc29uQGdtYWlsLmNvbWAgIVxuICAgICAgICovXG4gICAgICB2YXIgZW5oYW5jZWRMb2dGbiA9IGZ1bmN0aW9uKCApe1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgICAgICBub3cgID0gRGF0ZVRpbWUuZm9ybWF0dGVkTm93KCk7XG4gICAgICAgICAgICAvLyBwcmVwZW5kIGEgdGltZXN0YW1wIHRvIHRoZSBvcmlnaW5hbCBvdXRwdXQgbWVzc2FnZVxuICAgICAgICAgICAgYXJnc1swXSA9IHN1cHBsYW50KFwiezB9IC0gezF9ezJ9XCIsIFsgbm93LCBjbGFzc05hbWUsIGFyZ3NbMF0gXSk7XG5cbiAgICAgICAgbG9nRm4uY2FsbCggbnVsbCwgIHN1cHBsYW50LmFwcGx5KCBudWxsLCBhcmdzICkgKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIFNwZWNpYWwuLi4gb25seSBuZWVkZWQgdG8gc3VwcG9ydCBhbmd1bGFyLW1vY2tzIGV4cGVjdGF0aW9uc1xuICAgICAgZW5oYW5jZWRMb2dGbi5sb2dzID0gWyBdO1xuIFxuICAgICAgcmV0dXJuIGVuaGFuY2VkTG9nRm47XG4gICAgICBcbiAgICB9O1xuXG5cblxuXG4gICAgLyoqXG4gICAgICogU3VwcG9ydCB0byBnZW5lcmF0ZSBjbGFzcy1zcGVjaWZpYyBsb2dnZXIgaW5zdGFuY2Ugd2l0aCBjbGFzc25hbWUgb25seVxuICAgICAqXG4gICAgICogQHBhcmFtOiBuYW1lXG4gICAgICogQHJldHVybnM6IE9iamVjdCB3cmFwcGVyIGZhY2FkZSB0byAkbG9nXG4gICAgICovXG4gICAgdmFyIGdldEluc3RhbmNlID0gZnVuY3Rpb24oIGNsYXNzTmFtZSApe1xuICAgICAgY2xhc3NOYW1lID0gKCBjbGFzc05hbWUgIT09IHVuZGVmaW5lZCApID8gY2xhc3NOYW1lICsgXCI6OlwiIDogXCJcIjtcblxuICAgICAgcmV0dXJue1xuICAgICAgICAgbG9nICAgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmxvZywgICAgY2xhc3NOYW1lICksXG4gICAgICAgICBpbmZvICA6IHByZXBhcmVMb2dGbiggXyRsb2cuaW5mbywgICBjbGFzc05hbWUgKSxcbiAgICAgICAgIHdhcm4gIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy53YXJuLCAgIGNsYXNzTmFtZSApLFxuICAgICAgICAgZGVidWcgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmRlYnVnLCAgY2xhc3NOYW1lICksXG4gICAgICAgICAvLyBlcnJvciA6IHByZXBhcmVMb2dGbiggXyRsb2cuZXJyb3IsICBjbGFzc05hbWUgKVxuICAgICAgfTtcblxuICAgIH07XG5cblxuXG4gICAgLy8gd3JhcCBlYWNoIGxvZyBtZXRob2QgXG4gICAgJGxvZy5sb2cgICA9IHByZXBhcmVMb2dGbiggJGxvZy5sb2cgKTtcbiAgICAkbG9nLmluZm8gID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLmluZm8gKTtcbiAgICAkbG9nLndhcm4gID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLndhcm4gKTtcbiAgICAkbG9nLmRlYnVnID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLmRlYnVnICk7XG4gICAgLy8gJGxvZy5lcnJvciA9IHByZXBhcmVMb2dGbiggJGxvZy5lcnJvciApO1xuXG4gICAgLy8gQWRkIHNwZWNpYWwgbWV0aG9kIHRvIEFuZ3VsYXJKUyAkbG9nXG4gICAgJGxvZy5nZXRJbnN0YW5jZSA9IGdldEluc3RhbmNlO1xuIFxuXG4gICAgcmV0dXJuICRsb2c7XG59Oy8vZW5jaGFuY2VMb2dnZXJcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gIGVuY2hhbmNlTG9nZ2VyOyIsIi8qKlxuICogQGF1dGhvciAgICAgIFRob21hcyBCdXJsZXNvblxuICogQGRhdGUgICAgICAgIE5vdmVtYmVyLCAyMDEzXG4gKiBAc291cmNlOiAgICAgaHR0cHM6Ly9naXRodWIuY29tL1Rob21hc0J1cmxlc29uL2FuZ3VsYXJqcy1sb2dEZWNvcmF0b3IvYmxvYi9tYXN0ZXIvc3JjL21pbmRzcGFjZS91dGlscy9zdXBwbGFudC5qc1xuICAqL1xuIFxuXG4gJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3VwcGxhbnQgPSAgZnVuY3Rpb24oIHRlbXBsYXRlLCB2YWx1ZXMsIHBhdHRlcm4gKSB7XG4gICAgICAgICAgICBwYXR0ZXJuID0gcGF0dGVybiB8fCAvXFx7KFteXFx7XFx9XSopXFx9L2c7XG5cbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKHBhdHRlcm4sIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IGIuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgICAgICAgICAgciA9IHZhbHVlcztcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHMgaW4gcCkgeyByID0gcltwW3NdXTsgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgICAgICAgICByID0gYTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKHR5cGVvZiByID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgciA9PT0gJ251bWJlcicpID8gciA6IGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuXG4vLyBzdXBwbGFudCgpIG1ldGhvZCBmcm9tIENyb2NrZm9yZHMgYFJlbWVkaWFsIEphdmFzY3JpcHRgXG5GdW5jdGlvbi5wcm90b3R5cGUubWV0aG9kID0gZnVuY3Rpb24gKG5hbWUsIGZ1bmMpIHtcbiAgICB0aGlzLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmM7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdHJpbmcubWV0aG9kKFwic3VwcGxhbnRcIiwgZnVuY3Rpb24oIHZhbHVlcywgcGF0dGVybiApIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIHN1cHBsYW50KHNlbGYsIHZhbHVlcywgcGF0dGVybik7XG59KTtcblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSAgU3RyaW5nLnN1cHBsYW50ID0gc3VwcGxhbnQ7Il19

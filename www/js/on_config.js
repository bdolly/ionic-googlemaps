'use strict';


/**
 * @ngInject
 */
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
      resolve:{
        coords:function(CurrentCoords) {
          return CurrentCoords.get();
        }
      },
      url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html',
          controller: 'MapCtrl as Map'
        },
        data:{
          cords: "43.07493,-89.381388"  
        },
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
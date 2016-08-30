'use strict';

var modelsModule = require('./_index.js');

/**
 * @ngInject
 */
modelsModule.factory('Location', function($rootScope, $log, $q) {
  $log = $log.getInstance('Location', true);

  function Location(LocationData){
    angular.extend(this, LocationData);
    $log.log('{name}', this);
  }


  Location.responseTransformer = function (responseData) {
    $log.log('resoponseTransformer for {length} items', responseData.locations);
    
    if(responseData.locations){
      
      var populated_locations = [];

      responseData.locations
              .map(function(data){
                var location = new Location(data);
                location.setGooglePlaceID().then(function(place) {
                  location.setGooglePlaceDetails();
                });

                

                populated_locations.push(location.setTravelTime());
                
              });

        return populated_locations;
    }



      return responseData.map(Location.build);  

    
  }


  Location.prototype.setTravelTime = function() {
      $log.log('setTravelTime:{name}', this);
      
      var _location = this;
      var deferred = $q.defer();

      var service = new google.maps.DistanceMatrixService;
       service.getDistanceMatrix({
         origins:       [{lat: $rootScope.currentPosition.coords.latitude, lng:$rootScope.currentPosition.coords.longitude}],
         destinations:  [{lat: parseFloat(this.lat), lng: parseFloat(this.long)}],
         travelMode:    google.maps.TravelMode.WALKING,
         unitSystem:    google.maps.UnitSystem.IMPERIAL,
         avoidHighways: true,
         avoidTolls:    true
       }, function(response, status) {
         	_location.travelTime = response.rows[0].elements[0].duration;
          _location.distance = response.rows[0].elements[0].distance;
         	deferred.resolve(_location);
         // $log.debug("{name} - {travelTime}", _location);
          
       });

       
       return deferred.promise;

  }


  Location.prototype.setGooglePlaceID = function() {

    $log.log('setGooglePlaceID:{name}', this);

      var _location = this,
          deferred = $q.defer(),
          PlacesService = new google.maps.places.PlacesService($rootScope.gmap.map),
          _searchQuery = {query:_location.name, 
                          location: new google.maps.LatLng(parseFloat(_location.lat), parseFloat(_location.long)),
                          radius:500};


          PlacesService.textSearch(_searchQuery, 
                    function (results, status) {
                        if (status == google.maps.places.PlacesServiceStatus.OK) {
                            //TODO: make sure this is the correct result
                            _location.googlePlaceId = results[0].place_id;
                            deferred.resolve(_location);
                        }
          });


      return deferred.promise;
    
  };


  Location.prototype.setGooglePlaceDetails = function() {
    $log.log('setGooglePlaceDetails:{name}', this);
    var _location = this,
         deferred = $q.defer(),
         PlacesService = new google.maps.places.PlacesService($rootScope.gmap.map);
         
        PlacesService.getDetails( {placeId:_location.googlePlaceId}, 
                    function(place, status) {
                      console.log(status);
                        if (status == google.maps.places.PlacesServiceStatus.OK) {
                          console.log(place);
                          angular.extend(_location, place);
                          deferred.resolve(_location);
                        }
                 });

        return deferred.promise;
  };


  Location.build = function(lData) {
    $log.log('build:{name}', lData);
    
    return new Location(lData);
  }

   

  
 
  return Location;


});
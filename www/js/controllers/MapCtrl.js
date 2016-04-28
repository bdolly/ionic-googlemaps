'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MapCtrl($rootScope, $scope, $log, $timeout, $ionicLoading, AppSettings, GMap, LocationsService ) {

    $log = $log.getInstance("MapCtrl");

 	  // ViewModel
  	var vm = this;
    var currentCenter = $rootScope.currentPosition;

    vm.this_radius = 5000;
    vm.gmap = new GMap({zoom:13, radius:vm.this_radius});    
    vm.gmap.height = 625;
    vm.markers = [];    
    vm.clearMarkers = function(markers){
       for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
    }
    
    // vm.gmap.plotLocations();
    
    vm.locations_by_distance = [];
    

    // get all locations around specified area
      LocationsService
        .get({radius: vm.this_radius, 
              lat:    currentCenter.latitude, 
              lng:    currentCenter.longitude})
        .then(function(locations) {

          // sort locations by distnace 
          vm.locations_by_distance = _.sortBy(locations, 'distancefromlocation');
          vm.locations_by_distance.map(function(locate){
            var marker = vm.gmap.dropMarker({
                        center: {
                            lat: parseFloat(locate.lat),
                            lng: parseFloat(locate.long)
                        },
                        title:     locate.name,
                        map:       vm.gmap.map,
                        opacity:   0.125
                      });
                    
                    vm.markers[locate._id] = marker;
          });

          // set the locations radius and knob value to the closes loction to test
          vm.this_radius = _.first(vm.locations_by_distance).distancefromlocation;
          vm.locationsRadius = vm.gmap.setRadiusCircle({radius: vm.this_radius});
          vm.gmap.map.fitBounds(vm.locationsRadius.getBounds());

          vm.knob.value = vm.this_radius;


          // wathc for the knob value to change 
          $scope.$watch("Map.knob.value", function(oldValue, newValue) {
              vm.gmap.map.panTo({lat:$rootScope.currentPosition.latitude, lng:$rootScope.currentPosition.longitude});
              vm.locationsRadius.setRadius(newValue);
              // TODO: calculate proper zoom based on locationRadius
              // vm.gmap.map.setZoom(newValue);
              
              

              vm.locations_by_distance.map(function(locate){
                    if( locate.distancefromlocation < newValue ){
                      vm.markers[locate._id].setOpacity(1);
                    }else {
                      vm.markers[locate._id].setOpacity(0);
                    }
              });//vm.locations_by_distance.map


          });///$scope.$watch "Map.knob.value",

            
        });//end .then

        
        
         vm.knob ={
              value: vm.this_radius,
              options:{
                size: 200,
                min:  1,
                max:  10000,
                step: 1,
                
                barColor: '#5BC01E',
                trackColor: '#212121',
                trackWidth: 15,
                barWidth: 30,
                subText: {
                  enabled: true,
                  text: 'meter radius'
                },
              }
            };
   
            
            

  
    


  $rootScope.$on('marker:clicked', function(e, locale) {
    $scope.$apply(function() {
      
      vm.gmap.height = vm.gmap.height/2;
      vm.gmap.map.panTo({lat:parseFloat(locale.lat), 
                         lng:parseFloat(locale.long)});
    });
    
  });
};//// MapCtrl



controllersModule.controller('MapCtrl', MapCtrl);
'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MapCtrl($rootScope, $scope, $log, $ionicLoading, AppSettings, GMap, LocationsService) {

    $log = $log.getInstance("MapCtrl");

 	  // ViewModel
  	var vm = this;
    var currentCenter = $rootScope.currentPosition;

    vm.this_radius = 5000;
    vm.gmap = new GMap({zoom:13, radius:vm.this_radius});    
    vm.gmap.height = 625;
    vm.markers = [];    
    // vm.gmap.plotLocations();
    
    vm.locations_by_distance = [];

    vm.knob ={
              value: 0,
              options:{ dynamicOptions: true },
            };

    
    var setKnobValue = function(val) {
      // set ui.knob options here
      // this tricks the knob into updating the value correctly
          vm.knob ={
              value:val,
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
                }
              }
            };
    };
   

    var setMarkers = function(locations) {
      locations.map(function(locate){
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

        return vm.markers;
    };

    
    $ionicLoading.show({
        template: "Exploring Your Area ...",
        backdrop: true
    });

    // get all locations around specified area
      LocationsService
        .get({radius: vm.this_radius, 
              lat:    currentCenter.latitude, 
              lng:    currentCenter.longitude})
        .then(function(locations) {

          // sort locations by distnace 
          vm.locations_by_distance = _.sortBy(locations, 'distancefromlocation');
          setMarkers(vm.locations_by_distance);

          // set the locations radius and knob value to the closes loction to test
          vm.this_radius = _.first(vm.locations_by_distance).distancefromlocation;
          vm.locationsRadius = vm.gmap.setRadiusCircle({radius: vm.this_radius});
          vm.gmap.map.fitBounds(vm.locationsRadius.getBounds());
          
          setKnobValue(vm.this_radius);
          $ionicLoading.hide();


        });//end .then







         $scope.$watch("Map.knob.value", function(newValue, oldValue) {
            // $log.log("new Map.knob.value: "+newValue);
            // $log.log("old Map.knob.value: "+oldValue);

            if(vm.locationsRadius) vm.locationsRadius.setRadius(newValue);
            
            
            if(vm.locationsRadius){

               // Get the bounds
              var circleBounds = vm.locationsRadius.getBounds();
              var mapBounds = vm.gmap.map.getBounds();


              var ne = circleBounds.getNorthEast(); // LatLng of the north-east corner
              var sw = circleBounds.getSouthWest();
              var nw = new google.maps.LatLng(ne.lat(), sw.lng());
              var se = new google.maps.LatLng(sw.lat(), ne.lng());
              
              var LatLngList = new Array (nw, se);

              
              if(!mapBounds.contains(ne)){
                for (var i = 0, LtLgLen = LatLngList.length; i < LtLgLen; i++) {
                  //  And increase the bounds to take this point
                  mapBounds.extend(LatLngList[i]);
                }
                vm.gmap.map.fitBounds(mapBounds);
              }else{
                vm.gmap.map.fitBounds(circleBounds);
              }
            

            }//end if(vm.locationsRadius)
           
            

            // show/reveal locations inside radius
            vm.locations_by_distance.map(function(locate){
                  if( locate.distancefromlocation < newValue ){
                    vm.markers[locate._id].setOpacity(1);
                  }else {
                    vm.markers[locate._id].setOpacity(0);
                  }
            });//vm.locations_by_distance.map


        });///$scope.$watch "Map.knob.value"
      
    


        
        
         
            
            

  
  

  $rootScope.$on('marker:clicked', function(e, locale) {
    $scope.$apply(function() {
      
      vm.gmap.height = vm.gmap.height/2;
      vm.gmap.map.panTo({lat:parseFloat(locale.lat), 
                         lng:parseFloat(locale.long)});
    });
    
  });
};//// MapCtrl



controllersModule.controller('MapCtrl', MapCtrl);
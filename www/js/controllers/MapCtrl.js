'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MapCtrl($rootScope, $scope, $timeout, $log, $ionicLoading, AppSettings, GMap, LocationsService, $ionicSlideBoxDelegate) {

    $log = $log.getInstance("MapCtrl");

 	  // ViewModel
  	var vm = this;
    var currentCenter = $rootScope.currentPosition;

    vm.this_radius = 5000;

    vm.gmap = new GMap({zoom:13, radius:vm.this_radius});    
    vm.gmap.height = 575,
    vm.gmap.locationFocused = false;
    vm.gmap.markers = [];
    vm.gmap.routes = [];  
     // drop marker on current position
    vm.gmap.dropMarker({
              map: vm.gmap.map,
              center: {lat: currentCenter.latitude, 
                       lng: currentCenter.longitude },
              opacity:1
            });
    
    vm.locations_by_distance = [];

    vm.knob ={
              value: 0,
              options:{ dynamicOptions: true },
            };


    vm.slider ={
      shown: false,
      meta:{
        category:     '',
        travelTime:   '',
        neighborhood: ''
      }
    };

    $scope.slideHasChanged = function(indx) {
        $log.log("ion-slide-box:slideHasChanged:"+indx);
        
        var slider_location = vm.locations_by_distance[indx];
        //set active slide
        vm.locations_by_distance.map(function(location) { location.isActive = false; return location;});
        slider_location.isActive = true;

        showRouteTo(slider_location);
        fitInMapView(slider_location);
        vm.slider = {
          shown: true,
          meta:{
            category:     slider_location.catagorylevel1,
            travelTime:   slider_location.travelTime,
            neighborhood: slider_location.neighborhood
          }
        };

      };


    $ionicLoading.show({
        template: "Exploring Your Area ...",
        backdrop: true
    });


    
    var setKnobValue = function(val,min, max) {
      // set ui.knob options here
      // this tricks the knob into updating the value correctly
          vm.knob ={
              value:val,
              options:{
                size: 100,
                min:  100,
                max:  max,
                step: 1,
                barColor: '#5BC01E',
                trackColor: '#212121',
                trackWidth: 5,
                barWidth: 20,
                subText: {
                  enabled: true,
                  text: 'meter radius'
                }
              }
            };
    };

    
    var showMarkerFor = function(location) {
      $log.log("showMarkerFor:{name}", location);
      vm.gmap.markers[location._id].setOpacity(1);
      vm.gmap.markers[location._id].setClickable(true);
    }

    var hideMarkerFor = function(location) {
      $log.log("hideMarkerFor:{name}", location);
      vm.gmap.markers[location._id].setOpacity(0);
      vm.gmap.markers[location._id].setClickable(false);
    }

    var setMarkers = function(locations) {
      locations.map(function(locate){
            var marker = vm.gmap.dropMarker({
                        center: {
                            lat: parseFloat(locate.lat),
                            lng: parseFloat(locate.long)
                        },
                        title:     locate.name,
                        map:       vm.gmap.map,
                        opacity:   0,
                        clickable: false
                      });

                  marker.addListener('click',function(){
                     $scope.$broadcast('marker:clicked', locate);
                  });

                vm.gmap.markers[locate._id] = marker;
    
          });

        return vm.markers;
    };



    var clearFromMap = function(obj) {
      $log.log('clearFromMap');
      return obj.setMap(null);
    };

    var showRouteTo = function(location) {
      $log.log('showRouteTo;{name}', location);
      // clear all routes
      vm.gmap.routes.map(clearFromMap);
      vm.locationsRadius.setVisible(false);
      vm.locations_by_distance.map(hideMarkerFor);
      showMarkerFor(location);
      var route = vm.gmap.plotRouteTo(location);
      vm.gmap.routes.push(route); 
      
      // vm.gmap.map.panTo({lat:    currentCenter.latitude, 
      //                   lng:    currentCenter.longitude});
    }
    
        
    var fitInMapView = function(location) {
      if(location) vm.locationsRadius.setRadius(location.distancefromlocation);
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
            
    }
    



    // get all locations around specified area
      LocationsService
        .get({radius: vm.this_radius, 
              lat:    currentCenter.latitude, 
              lng:    currentCenter.longitude})
        .then(function(locations) {
          
          // sort locations by distnace 
          vm.locations_by_distance = _.sortBy(locations, 'distancefromlocation');

          // set all markers on map
          setMarkers(vm.locations_by_distance);  

          // set the locations radius and knob value to the closes loction to test
          vm.this_radius = _.first(vm.locations_by_distance).distancefromlocation+100;
          vm.locationsRadius = vm.gmap.setRadiusCircle({radius: vm.this_radius});
          vm.gmap.map.fitBounds(vm.locationsRadius.getBounds());
          
          setKnobValue(vm.this_radius, _.first(vm.locations_by_distance).distancefromlocation, _.last(vm.locations_by_distance).distancefromlocation);
          vm.locations_loaded = true;
          $ionicLoading.hide();
          $ionicSlideBoxDelegate.update();
        });//end .then



        // watch for the ui knob value to update
         $scope.$watch("Map.knob.value", function(newValue, oldValue) {
            // $log.log("new Map.knob.value: "+newValue);
            // $log.log("old Map.knob.value: "+oldValue);
            
            vm.locationsRadius.setRadius(newValue);
            vm.locationsRadius.setVisible(true);

            vm.gmap.routes.map(clearFromMap);
            
            vm.gmap.map.setOptions({styles: null});

            vm.slider.shown = false;
            vm.gmap.locationFocused = false;

            if(vm.locationsRadius) fitInMapView();

            // show/reveal locations inside radius
            vm.locations_by_distance.map(function(locate){
                  if( locate.distancefromlocation < newValue ){
                    showMarkerFor(locate);
                  }else {
                    hideMarkerFor(locate);
                  }
            });//vm.locations_by_distance.map


        });///$scope.$watch "Map.knob.value"




      $scope.$on("marker:clicked", function(e, marker) {
        $scope.$apply(function() {
        
        $log.log("marker:clicked - {name}", marker);


        
        vm.gmap.map.setOptions({styles: AppSettings.GMAP_DEFAULT.THEME.light});

        vm.gmap.locationFocused = true;
        vm.slider = {
          shown: true,
          meta:{
            category:     marker.catagorylevel1,
            travelTime:   marker.travelTime,
            neighborhood: marker.neighborhood
          }
        };

        $ionicSlideBoxDelegate.slide(_.indexOf(vm.locations_by_distance, marker));

        showRouteTo(marker);
        fitInMapView();

      })


    });// $scope.$on "marker:clicked"
      


};//// MapCtrl



controllersModule.controller('MapCtrl', MapCtrl);
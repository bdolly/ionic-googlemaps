'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MapCtrl($rootScope, $scope, $timeout, $log, $ionicLoading, AppSettings, GMap, LocationsService, $ionicSlideBoxDelegate) {

    $log = $log.getInstance("MapCtrl");

 	  // ViewModel
  	var vm = this;
    var currentCenter = $rootScope.currentPosition.coords;

    vm.this_radius = 5000;

    vm.gmap = new GMap({
                        zoom:   13, 
                        radius: vm.this_radius, 
                        styles: AppSettings.GMAP_DEFAULT.THEME.light
                      });    


    vm.gmap.height = 575,
    vm.gmap.locationFocused = false;
    vm.gmap.markers = [];
    vm.gmap.routes = [];  
     // drop marker on current position
    vm.gmap.dropMarker({
              map:    vm.gmap.map,
              center: {lat: currentCenter.latitude, 
                       lng: currentCenter.longitude },
              opacity:1,
            });
    
    
    vm.locations_by_distance = [];
    vm.locations_categories = {
      distance: 80,
      current:  null,
      list: [
              {name: 'Arts'},
              {name: 'Drink'},
              {name: 'Food'}
            ]
    };
    


    vm.knob ={ 
              options:{  
                dynamicOptions: true 
              } 
            };

    vm.distance_knob ={
              options:{
                readOnly:       true,
                dynamicOptions: true,
                displayInput:   false,
                // scale:          {
                //   enabled:  true,
                //   type:     'lines',
                //   color:    'gray',
                //   width:    1,
                //   quantity: 30,
                //   height:   5,
                //   spaceWidth: 5
                // },
                size:         30,
                min:          0,
                max:          80,//hour and a half
                step:         1,
                barColor:     '#5BC01E',
                trackColor:   '#212121',
                trackWidth:   3,
                barWidth:     6
              }
    };



    vm.slider ={
      shown:   false,
      meta:{
        category:     '',
        travelTime:   '',
        neighborhood: ''
      },
      activeSlide:{}
    };

    
  vm._metersPerMin  = function( far) {
      // parse tiem for either a double digit minute format
      // or the first did
      var _time = far.text.match(/([0-9][0-9])|(\d)/g);
      // if hours convert to mins
      if(_time.length == 2) var mins = +_time[1] + (+_time[0]*60);
      var _mins = mins || +_time[0];
      var _distance = far.value; 
      
      return _distance/_mins;
  };



  vm.load_category = function(category) {
      $log.log('load_category: {name}',category);
      
      vm.gmap.map.setOptions({styles:null});

      $ionicLoading.show({
        template: "Exploring Your Area ...",
        backdrop: true
      });


      // get all locations around specified area
      LocationsService
        .get({
              category: category.name,
              radius:   vm.this_radius, 
              lat:      currentCenter.latitude, 
              lng:      currentCenter.longitude
            })
        .then(function(locations) {
          vm.locations_categories.distance = 0;
          vm.locations_loaded = true;

          vm.locations_categories.current = category.name;

          // sort locations by distnace 
          vm.locations_by_distance = _.sortBy(locations, 'distancefromlocation');

          // set all markers on map
          setMarkers(vm.locations_by_distance);  

          // set the locations radius and knob value to the closes loction to test
          vm.this_radius = _.first(vm.locations_by_distance).travelTime.value+100;
          vm.locationsRadius = vm.gmap.setRadiusCircle({radius: vm.this_radius});
          vm.gmap.map.fitBounds(vm.locationsRadius.getBounds());


          vm.travelRate = vm._metersPerMin(_.last(vm.locations_by_distance).travelTime);
          vm.distance_knob.value = Math.ceil(vm.this_radius/vm.travelRate);
          
          setKnobValue(vm.this_radius, _.first(vm.locations_by_distance).travelTime.value, _.last(vm.locations_by_distance).travelTime.value);
          vm.locations_loaded = true;
        

          $ionicLoading.hide();
          $ionicSlideBoxDelegate.update();
        });//end .then


    }////end vm.load_category


    $scope.slideHasChanged = function(indx) {
        $log.log("ion-slide-box:slideHasChanged:"+indx);
        
        var slider_location = vm.locations_by_distance[indx];
        //set active slide
        vm.locations_by_distance.map(function(location) { location.isActive = false; return location;});
        slider_location.isActive = true;

        showRouteTo(slider_location);
        fitInMapView(slider_location);
        vm.slider = {
          shown:    true,
          isActive: false,
          meta:     {
            category:     slider_location.catagorylevel1,
            travelTime:   slider_location.travelTime,
            neighborhood: slider_location.neighborhood
          }
        };

      };//  $scope.slideHasChanged


    


    
    var setKnobValue = function(val,min, max) {
      // set ui.knob options here
      // this tricks the knob into updating the value correctly
          vm.knob ={
              value:val,
              options:{
                displayInput: true,
                subText: {
                  enabled: true,
                  text:    'meter radius',
                  color:   'black',
                  font:    'auto'
                },
                size:         100,
                min:          100,
                max:          max,
                step:         1,
                barColor:     '#5BC01E',
                trackColor:   '#212121',
                trackWidth:   5,
                barWidth:     20
              }
            };
        return vm.knob;
    };

    
    var showMarkerFor = function(location) {
      $log.log("showMarkerFor:{name}", location);
      var shownMarker = vm.gmap.markers[location._id];
      shownMarker.setOpacity(1);
      shownMarker.setClickable(true);
      return shownMarker; 
    }//showMarkerFor


    var hideMarkerFor = function(location) {
      // $log.log("hideMarkerFor:{name}", location);
      var hiddenMarker = vm.gmap.markers[location._id];
      hiddenMarker.setOpacity(0);
      hiddenMarker.setClickable(false);
      return hiddenMarker;
    }//hideMarkerFor


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
    };//setMarkers



    var clearFromMap = function(obj) {
      $log.log('clearFromMap');
      return obj.setMap(null);
    }//clearFromMap



    var showRouteTo = function(location) {
      $log.log('showRouteTo;{name}', location);
      // clear all routes
      vm.gmap.routes.map(clearFromMap);
      vm.locationsRadius.setVisible(false);
      vm.locations_by_distance.map(hideMarkerFor);

      var marker = showMarkerFor(location);

      var route = vm.gmap.plotRouteTo(location)
                         .then(function(route) {
                            vm.gmap.routes.push(route);   
                          
                            // $timeout(function() { 
                            //   // if(vm.gmap.map.zoom < 13 )vm.gmap.map.setZoom(13);
                            //   var markerPos = vm.gmap.getPixelPosition(marker);
                            //   var posFromTop = (vm.gmap.height - markerPos.y);
                            //   var panY = posFromTop - (posFromTop*0.5);
                            //   vm.gmap.map.panBy(0, Math.abs(panY) );
                            // },450);
                            
                          });
    }// showRouteTo
    
        

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
    
    }//fitInMapView
    


    


    


        // watch for the ui knob value to update
         $scope.$watch("Map.knob.value", function(newValue, oldValue) {
            // $log.log("new Map.knob.value: "+newValue);
            // $log.log("old Map.knob.value: "+oldValue);
            
            if(vm.locationsRadius){
              vm.locationsRadius.setRadius(newValue);
              vm.locationsRadius.setVisible(true);  

              // update distance knob
              vm.distance_knob.value = Math.ceil(newValue/vm.travelRate);
              vm.distance_knob.options = vm.distance_knob.options;

            }
            
            vm.gmap.height = 575;
            vm.gmap.locationFocused = false;
            vm.gmap.routes.map(clearFromMap);
            if(vm.locations_by_distance.length) vm.gmap.map.setOptions({styles: null});

            vm.slider.shown = false;
            

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
          vm.gmap.height = 350;
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

      });
    });// $scope.$on "marker:clicked"
      


};//// MapCtrl



controllersModule.controller('MapCtrl', MapCtrl);
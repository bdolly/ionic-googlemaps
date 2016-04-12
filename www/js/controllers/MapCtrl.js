'use strict';

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
'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MapCtrl($rootScope, $scope, $log, $ionicLoading, AppSettings, LocationsService ) {

    $log = $log.getInstance("MapCtrl");

 	  // ViewModel
  	var vm = this;
    vm.coordinates = {};	
    vm.radius = AppSettings.GMAP_RADIUS;
    $scope.CurrentCoords =  $rootScope.currentPosition;

      
    var mapOptions = {
      center:    {lat: $scope.CurrentCoords.latitude, 
                  lng: $scope.CurrentCoords.longitude},
      zoom:      1,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    $ionicLoading.show({
      template: "Exploring Your Location ...",
      backdrop: true
    });


    vm.gmap = new google.maps.Map(document.getElementById("Map"), mapOptions);

    // Drop pin on current location
    // var youAreHere = new google.maps.Marker({
    //     position: mapOptions.center,
    //     map:      vm.gmap,
    //     title:    'You Are Here'
    // });

    
    
    LocationsService.get({radius: vm.radius, 
                          lat: $scope.CurrentCoords.latitude, 
                          lng: $scope.CurrentCoords.longitude })
      .then(function(locations){
      $ionicLoading.hide();
      
      angular.forEach(locations, function(location, index){

        var infowindow = new google.maps.InfoWindow({
                content: '<h3 id="firstHeading" class="firstHeading">'+location.name+'</h3>'
            }),

            marker = new google.maps.Marker({
              position:  {lat: parseFloat(location.lat), 
                          lng: parseFloat(location.long)},
              map:       vm.gmap,
              label:     location.name,
              animation: google.maps.Animation.DROP,
              opacity:   0
          });


          var directionsDisplay = new google.maps.DirectionsRenderer({
            map: vm.gmap
          }),

          request = {
            destination: marker.position,
            origin:      mapOptions.center,
            travelMode:  google.maps.TravelMode.WALKING
          };

          var directionsService = new google.maps.DirectionsService();// Pass the directions request to the directions service.

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
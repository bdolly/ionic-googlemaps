'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MapCtrl($scope, $log, $state, $ionicLoading, coords, $timeout ) {
 	// ViewModel
  	var vm = this;
  	
  
  	$log.debug('initMap');
  	$log.debug('zoom "{zoom}"',vm);
  	$log.debug('number "{number}"',vm);
  	$log.debug('starting coords "{cords}"',vm);  	
  	      
    var mapOptions = {
      center:    new google.maps.LatLng(coords.latitude+','+coords.longitude),
      zoom:      16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    vm.gmap = new google.maps.Map(document.getElementById("Map"), mapOptions);
    vm.gmap.setCenter(new google.maps.LatLng(coords.latitude, coords.longitude));


	var marker = new google.maps.Marker({
        position: {lat: coords.latitude, lng: coords.longitude},
        map: vm.gmap,
        title: 'You Are Here'
   });
 
   
};


controllersModule.controller('MapCtrl', MapCtrl);
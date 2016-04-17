'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MapCtrl($rootScope, $scope, $log, $timeout, $ionicLoading, AppSettings, GMap ) {

    $log = $log.getInstance("MapCtrl");

 	  // ViewModel
  	var vm = this;
    vm.gmap = new GMap();    
    vm.gmap.height = 625;
    var locationsRadius = vm.gmap.setRadiusCircle();
    vm.gmap.plotLocations();

  $rootScope.$on('marker:clicked', function(e, locale) {
    $scope.$apply(function() {
      
      vm.gmap.height = vm.gmap.height/2;
      vm.gmap.map.panTo({lat:parseFloat(locale.lat), 
                         lng:parseFloat(locale.long)});
    });
    
  });
};//// MapCtrl



controllersModule.controller('MapCtrl', MapCtrl);
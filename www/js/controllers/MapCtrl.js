'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MapCtrl($rootScope, $scope, $log, $timeout, $ionicLoading, AppSettings, GMap ) {

    $log = $log.getInstance("MapCtrl");

 	  // ViewModel
  	var vm = this;
    vm.gmap = new GMap({zoom:13});    
    vm.gmap.height = 625/2;
    var locationsRadius = vm.gmap.setRadiusCircle();
    vm.gmap.plotLocations();

    


    vm.knob ={
      value: vm.gmap.mapOptions.zoom,
      options:{
        size: 200,
        min:  1,
        max:  40,
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


  $scope.$watch("Map.knob.value", function(oldValue, newValue) {
      vm.gmap.map.panTo({lat:$rootScope.currentPosition.latitude, lng:$rootScope.currentPosition.longitude});
      locationsRadius.setRadius((newValue/2)*100);
      var hasBing = locationsRadius.containsLocation({lat:9.928959, lng:-75.1647092}, locationsRadius);
      console.log(hasBing);
      
      // vm.gmap.map.setZoom(newValue);
  
  });
    


  $rootScope.$on('marker:clicked', function(e, locale) {
    $scope.$apply(function() {
      
      vm.gmap.height = vm.gmap.height/2;
      vm.gmap.map.panTo({lat:parseFloat(locale.lat), 
                         lng:parseFloat(locale.long)});
    });
    
  });
};//// MapCtrl



controllersModule.controller('MapCtrl', MapCtrl);
'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function SearchCtrl($scope, $rootScope, $q,  $log,  LocationsService,  $ionicLoading,  $ionicSlideBoxDelegate, AppSettings) {
    $log = $log.getInstance('SearchCtrl');

 	// ViewModel
  	var vm = this;
    vm.radius = AppSettings.GMAP_RADIUS;
    $scope.radius = AppSettings.GMAP_RADIUS;

    $scope.locations =[];
    $scope.CurrentCoords =  $rootScope.currentPosition;

    $ionicLoading.show({
    	template: "Finding Rad Spots ...",
    	backdrop: true
    });


    LocationsService.get({radius: vm.radius,  
                          lat:    $scope.CurrentCoords.latitude,  
                          lng:    $scope.CurrentCoords.longitude })

                    .then(function(data){
                        data[0].setTravelTime().then(function(locale) {
                            data[0] =locale;
                            $scope.locations = data;   
                            $ionicSlideBoxDelegate.update();
                            $ionicLoading.hide();    
                        });
   	                });


    $scope.slideHasChanged = function(idx) {
        var currentSlide = $scope.locations[idx];
        $log.debug('slideHasChanged {name}', currentSlide);

        currentSlide.setTravelTime().then(function(locale) {
            return locale;
        });
    }

  
};


controllersModule.controller('SearchCtrl', SearchCtrl);
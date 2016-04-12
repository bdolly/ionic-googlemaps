'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function SearchCtrl($scope, $log, $state, Yocal, CurrentCoords, $ionicLoading, $ionicSlideBoxDelegate) {
 	// ViewModel
  	var vm = this;
    // $scope.locations = $state.current.data.locations;
    $scope.locations =[];
    $scope.shouldShowDelete = false;
 	$scope.shouldShowReorder = false;
 	$scope.listCanSwipe = true;

    $ionicLoading.show({
    	template: "Finding Rad Spots ...",
    	backdrop: true
    });

    var southPhilly = {lat: 39.937893, lng:-75.1689347};

     

    CurrentCoords.get().then(function(youAreHere){
    	return Yocal.get({radius: 80000, lat:southPhilly.lat, lng:southPhilly.lng});
    })
    .then(function(data){
    	

    	angular.forEach(data.locations, function(value, index){
    		var service = new google.maps.DistanceMatrixService;
    		service.getDistanceMatrix({
    			origins:       [southPhilly],
    			destinations:  [{lat: parseFloat(value.lat), lng: parseFloat(value.long)}],
    			travelMode:    google.maps.TravelMode.WALKING,
    			unitSystem:    google.maps.UnitSystem.IMPERIAL,
    			avoidHighways: false,
    			avoidTolls:    false
    		}, function(response, status) {
    			value.travelTime = response.rows[0].elements[0].duration.text;
    		});
    	});

   		$scope.locations = data.locations;	
   		$ionicSlideBoxDelegate.update();
   		$ionicLoading.hide();
   	});
    
    
  	$log.debug('SearchCtrl');
  
};


controllersModule.controller('SearchCtrl', SearchCtrl);
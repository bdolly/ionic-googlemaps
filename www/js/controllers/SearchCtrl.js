'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function SearchCtrl($scope, $log, $state, Yocal, CurrentCoords, $ionicLoading, $ionicSlideBoxDelegate, $timeout) {
 	// ViewModel
  	var vm = this;
    // $scope.locations = $state.current.data.locations;
    $scope.locations =[];
    $scope.shouldShowDelete = false;
 	$scope.shouldShowReorder = false;
 	$scope.listCanSwipe = true;
    var currentCords ={};

    $log = $log.getInstance('SearchCtrl');

    $ionicLoading.show({
    	template: "Finding Rad Spots ...",
    	backdrop: true
    });

    // var southPhilly = {lat: 39.937893, lng:-75.1689347};

    CurrentCoords.get().then(function(youAreHere){
        currentCords = {lat:youAreHere.latitude, lng:youAreHere.longitude};

    	return Yocal.get({radius: 80000, lat:currentCords.lat, lng:currentCords.lng});
    })
    .then(function(data){
        var service = new google.maps.DistanceMatrixService;

    	angular.forEach(data.locations, function(value, index){
    	
    		service.getDistanceMatrix({
    			origins:       [currentCords],
    			destinations:  [{lat: parseFloat(value.lat), lng: parseFloat(value.long)}],
    			travelMode:    google.maps.TravelMode.WALKING,
    			unitSystem:    google.maps.UnitSystem.IMPERIAL,
    			avoidHighways: false,
    			avoidTolls:    false
    		}, function(response, status) {

    			data.locations[index].travelTime = response.rows[0].elements[0].duration.text;
                // $log.debug("{name} - {travelTime}", value);
    		});
    	});

        $ionicSlideBoxDelegate.update();
        $scope.locations = data.locations;      

        $timeout(function() {
            $ionicLoading.hide();    
        }, 1000);
        

   	});
    
    

  
};


controllersModule.controller('SearchCtrl', SearchCtrl);
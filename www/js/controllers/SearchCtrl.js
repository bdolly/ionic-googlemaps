'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function SearchCtrl($scope, $rootScope, $q, $http, $log,  LocationsService,  $ionicLoading,  $ionicSlideBoxDelegate, AppSettings) {
    $log = $log.getInstance('SearchCtrl');

 	// ViewModel
  	var vm = this;
    vm.radius = AppSettings.GMAP_RADIUS;
    $scope.radius = AppSettings.GMAP_RADIUS;

    $scope.locations =[];
    $scope.locations_groups =[];
    $scope.locations_loaded = 0; 
    $scope.CurrentCoords =  $rootScope.currentPosition;

    vm.carouselOptions = {
            carouselId    : 'locations-carousel', // unique id for the carousel
            template      : '../../templates/locations-carousel.item.html', // templateUrl in case you don't need to pass a directive but just a html view
            align         : 'left', // alignement of the carousel
            centerOnSelect: true, // center carousel when an item is selected
            trackBy       : '$index',  // indicate a track by property
            selectFirst   : true, // select first carousel item at start
            selectAtStart : {    // optional => Select at start the item with the property (string) with value passed
                property: null,
                value   : null
            },
            pullRefresh   : {  // optional => set active to true for pull refresh passing a callBack
                active  : false,
                callBack: angular.noop
            }
        };

    $ionicLoading.show({
    	template: "Finding Rad Spots ...",
    	backdrop: true
    });



    LocationsService.all()
                    .then(function(data){
                        
                        $scope.locations = data;
                        $scope.locations_groups = _.chain(data)
                                        .groupBy("catagorylevel1")
                                        .map(function(locations, cat) {

                                            locations.map(function(location) {
                                                location.setTravelTime().then(function() {
                                                    $scope.locations_loaded++;
                                                });
                                            });

                                            return {
                                                category: cat,
                                                locations: locations
                                            };
                                        })
                                        .value();


                        $scope.$watch('locations_loaded',function(new_val) {
                            if(new_val == data.length){
                                $ionicSlideBoxDelegate.update();
                                $ionicLoading.hide();      
                            }
                        })
                        
                        
                        
                        

                                        

                        // data[0].setTravelTime().then(function(locale) {

                        //     data[0] =locale;
                        //     $scope.locations = data;   
                        //     $ionicSlideBoxDelegate.update();
                        //     $ionicLoading.hide();  

                        // });
   	                });


    // $scope.slideHasChanged = function(idx) {
    //     var currentSlide = $scope.locations[idx];
    //     $log.debug('slideHasChanged {name}', currentSlide);

    //     currentSlide.setTravelTime().then(function(locale) {
    //         return locale;
    //     });
    // }

  
};


controllersModule.controller('SearchCtrl', SearchCtrl);
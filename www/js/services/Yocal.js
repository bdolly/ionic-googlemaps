'use strict';

var servicesModule = require('./_index.js');
var LocationsMock = {
  drink: require('../DATA/LocationsMock_drink.json'),
  food:  require('../DATA/LocationsMock_food.json')
};

/**
 * @ngInject
 */
function Yocal($q, $http, AppSettings, $log, $timeout) {

  var service = {};
  $log = $log.getInstance("YocalService");

    

  service.get = function( getData ) {
    var deferred = $q.defer();
    $timeout(function() {
      deferred.resolve(LocationsMock[getData.category.toLowerCase()]);  
    }, 1000);

    // listByDistanceCat/Food/8000/39.937893/-75.1689347
   // $http.get(AppSettings.yocalAPI.base+'listByDistanceCat/'+getData.category+'/'+getData.radius+'/'+getData.lat+'/'+getData.lng)
   //      .success(function(data) {
   //        $log.debug('found {length} '+getData.category+' spots within '+getData.radius+' meters of '+getData.lat+','+getData.lng, data.locations);
   //        data.radius = getData.radius;
   //        deferred.resolve(data);
   //      })
   //      .error(function(err, status) {
   //        $log.warn('Unable to get location: ' + err.message);
   //        deferred.reject(err, status);
   //      });
   
    return deferred.promise;
  };



  service.all = function(getData){
    var deferred = $q.defer();

    //listByDistanceCat/Food/8000/39.937893/-75.1689347
   $http.get(AppSettings.yocalAPI.base+'/list')
        .success(function(data) {
          $log.debug('all: found {length} total spots', data);
          deferred.resolve(data);
        })
        .error(function(err, status) {
          $log.warn('Unable to get location: ' + err.message);
          deferred.reject(err, status);
        });

    return deferred.promise;

  }

  return service;

}

servicesModule.service('Yocal', Yocal);
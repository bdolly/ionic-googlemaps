'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function Yocal($q, $http, AppSettings, $log) {

  var service = {};
  $log = $log.getInstance("YocalService");

  service.get = function( getData ) {
    var deferred = $q.defer();

    // /listByDistanceCat/Food/8000/39.937893/-75.1689347
   $http.get(AppSettings.yocalAPI.base+'/listByDistanceCat/Food/'+getData.radius+'/'+getData.lat+'/'+getData.lng).success(function(data) {
        $log.debug('found {length} spots within '+getData.radius+' meters of '+getData.lat+','+getData.lng, data.locations);
        data.radius = getData.radius;
        deferred.resolve(data);
    }).error(function(err, status) {
        $log.warn('Unable to get location: ' + err.message);
        deferred.reject(err, status);
    });

    return deferred.promise;
  };

  service.all = function(getData){
    var deferred = $q.defer();

    // /listByDistanceCat/Food/8000/39.937893/-75.1689347
   $http.get(AppSettings.yocalAPI.base+'/list').success(function(data) {
        $log.debug('all: found {length} total spots', data);
        deferred.resolve(data);
    }).error(function(err, status) {
        $log.warn('Unable to get location: ' + err.message);
        deferred.reject(err, status);
    });

    return deferred.promise;

  }

  return service;

}

servicesModule.service('Yocal', Yocal);
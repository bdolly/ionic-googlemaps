'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function CurrentCoords($q, $http, $log,  AppSettings) {

  var service = {};

  service.get = function() {
    var deferred = $q.defer();


    navigator.geolocation.getCurrentPosition(function(pos) {
        
      $log.debug('current lat: "{coords.latitude}"',pos);
      $log.debug('current long: "{coords.longitude}"',pos);

      deferred.resolve(pos.coords);
        
   }, function(error) {
       $log.error('Unable to get location: ' + error.message);
       deferred.reject(err, status);
   });


    
    return deferred.promise;
  };

  return service;

}

servicesModule.service('CurrentCoords', CurrentCoords);
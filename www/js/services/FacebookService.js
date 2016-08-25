'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function FacebookService($q, $http, $log) {
  $log = $log.getInstance("FacebookService", true);

  var service = {};

  service.getMyLastName = function () {
    $log.log("getMyLastName");

    var deferred = $q.defer();

    var _getLastName = function (deffered) {

      FB.api('/me', {
        fields:'last_name'
      }, function(response) {
          if (!response || response.error) {
              deferred.reject('Error occured');
          } else {
              deferred.resolve(response);
          }
      });

    };

    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        _getLastName();
      }
      else {
        deferred.reject('NOT Logged in');
        FB.login();

      }
    });

  

    return deferred.promise;
      
  };


  return service;
}

servicesModule.service('FacebookService', FacebookService);
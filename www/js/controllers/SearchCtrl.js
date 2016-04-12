'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function SearchCtrl($scope, $log, $state ) {
 	// ViewModel
  	var vm = this;
    $scope.locations = $state.current.data.locations;
    
  	$log.debug('SearchCtrl');
  
};


controllersModule.controller('SearchCtrl', SearchCtrl);
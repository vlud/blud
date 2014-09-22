'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testAppApp
 */
angular.module('testAppApp')
  .controller('AboutCtrl', function ($scope) {

    $scope.selectedTab = 1;

    $scope.setSelectedTab = function(tab) {
    	console.log('setSelectedTab ' + tab);
    	$scope.selectedTab = tab;
    }

    $scope.openPositions = [
    {
    	'position' : 'Backend developer',
    	'description' : 'Ukoliko ste izrazito neprivlačni, nemate prijatelja i život, savršeno ćete se uklopiti. Ako nešto i znate to je +.'
    }]
  });

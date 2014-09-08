'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAppApp
 */
angular.module('testAppApp')
  .controller('ContactsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
    ];
  });
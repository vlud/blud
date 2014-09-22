'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the testAppApp
 */
angular.module('testAppApp')
  .controller('BlogCtrl', function ($scope, $routeParams) {
  	$scope.article = {
  		title: ''
  	};
  	console.log($routeParams.param);
  	$scope.article = blogPosts[$routeParams.param];
  	//console.log(JSON.stringify($scope.article))
  });

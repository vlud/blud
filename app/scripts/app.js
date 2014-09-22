'use strict';

/**
 * @ngdoc overview
 * @name testAppApp
 * @description
 * # testAppApp
 *
 * Main module of the application.
 */
angular
  .module('testAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl'
      })
      .when('/help', {
        templateUrl: 'views/help.html',
        controller: 'HelpCtrl'
      })

      .when('/phones', {
        templateUrl: 'views/phones.html',
        controller: 'PhonesCtrl'
      })

      .when('/blog/:param', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .filter('customFilter', function( ){
  	return function (arr, filtrs){
  		var new_arr = [];

  		for(var i in arr){
  			new_arr.push(arr[i])
  		}
  		var filtr;
  		for(var i in filtrs){
  			if(filtrs[i].length === 0){
  				continue;
  			}
  			filtr = filtrs[i]
  			for(var j = new_arr.length - 1; j >= 0; j--){
  				if( filtr.indexOf(new_arr[j][i]) === -1 ){
  					new_arr.splice(j, 1);
  				}
  			}
  		}
  		return new_arr;
  	}
  });

  var blogPosts = [];

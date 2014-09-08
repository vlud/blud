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

      .when('/phones/:phoneId', {
        templateUrl: 'views/phone_details.html',
        controller: 'PhonedetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

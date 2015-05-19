'use strict';

/**
 * @ngdoc overview
 * @name spotsearchmvcApp
 * @description
 * # spotsearchmvcApp
 *
 * Main module of the application.
 */
angular
  .module('spotsearchmvcApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        
      })
      .when('/about', {
        
      })
      .otherwise({
        redirectTo: '/'
      });
  });

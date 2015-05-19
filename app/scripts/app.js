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
      .when('/search/artist/:query', {
        templateUrl: 'views/artistsearch.html',
        controller: 'SearchArtistController'
      })
      .when('/search/album/:query', {
        templateUrl: 'views/albumsearch.html',
        controller: 'SearchAlbumController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

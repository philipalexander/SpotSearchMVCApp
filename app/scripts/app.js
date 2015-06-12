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
    'mediaPlayer'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/search/artist/:query', {
        templateUrl: 'views/artistsearch.html',
        controller: 'SearchArtistController'
      })
      .when('/search/album/:query', {
        templateUrl: 'views/albumsearch.html',
        controller: 'SearchAlbumController'
      })
      .when('/album/:albumId', {
        templateUrl: 'views/album.html',
        controller: 'AlbumController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

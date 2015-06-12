'use strict';

angular.module('spotsearchmvcApp')
.factory('searchFactory', ['$http', function($http) {

  var searchFactory = {};

  searchFactory.getSearchResults = function(searchInput, types) {
    return $http.get('https://api.spotify.com/v1/search?q=' + searchInput + '&type=' + types);
  };

  searchFactory.getAlbum = function(albumId) {
    return $http.get('https://api.spotify.com/v1/albums/' + albumId);
  };

  return searchFactory;

}]);

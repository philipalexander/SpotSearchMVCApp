'use strict';
//search controller

angular.module('spotsearchmvcApp')
.controller('SearchController', ['$scope', '$location', function($scope, $location) {

  $scope.types = 'album';

  // $scope.runSearch = function() {
  //   searchFactory.getSearchResults($scope.searchQuery, $scope.types)
  //     .success(function(results){
  //       $scope.results = results;
  //       console.log($scope.results);
  //     })
  //     .error(function(error){
  //       $scope.status = 'Unable to load search results: ' + error.message;
  //     });
  // };

  $scope.runSearch = function() {
    $location.path('/search/' + $scope.types + '/' + $scope.searchQuery);
  };

}
]);

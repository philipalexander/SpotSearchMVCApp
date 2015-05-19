// Controller to search Album

angular.module('spotsearchmvcApp')
.controller('SearchAlbumController', ['$scope', '$routeParams', 'searchFactory',
function($scope, $routeParams, searchFactory) {

  $scope.types = 'album';
  $scope.query = $routeParams.query;
  $scope.results = {};

  searchFactory.getSearchResults($routeParams.query, 'album')
	  
  .success(function(results){
  	$scope.results = results;
	console.log($scope.results);
   })
  .error(function(error){
    $scope.status = 'Unable to load search results: ' + error.message;
  });
  
}]);
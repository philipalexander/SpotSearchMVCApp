// Test for SearchController
'use strict';

describe('Controller: SearchController', function() {

  // load the controller's module
  beforeEach(module('spotsearchmvcApp'));

  var SearchController, scope, location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, $location) {
    scope = $rootScope.$new();
    location = $location;
    SearchController = $controller('SearchController', {
      $scope: scope
    });
  }));

  it('type should default to album', function() {
    expect(scope.type).toBe('album');
  });

  describe('$scope.runSearch', function() {
    it('should update the browser location URL to the search query and types', function() {
      scope.searchQuery = 'biosphere';
      scope.types = 'artist';
      scope.runSearch();
      expect(location(path)).toBe('/search/artist/biosphere')
    });
  });
});

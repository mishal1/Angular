describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('GitUserSearchController', {
      $scope: scope
    })
  }));

  describe('when searching for a user', function(){
    var items = [{"login": "mishal1",
        "avatar_url": "https://avatars0.githubusercontent.com/u/8863744?v=3&s=460",
        "html_url": "https://github.com/mishal1"
      },{"login":"abridger",
        "avatar_url": "https://avatars1.githubusercontent.com/u/4664049?v=3&s=460",
        "html_url": "https://github.com/abridger"
      }];

    var httpBackend;

    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend
      httpBackend
      .when("GET", "https://api.github.com/search/users?q=hello")
      .respond({
        items: items
      })
    }));

      it('should initialise with an empty search result and term', function(){
        expect(scope.searchResult).toBeUndefined();
        expect(scope.searchTerm).toBeUndefined();
      });

      it('should display search results', function(){
        scope.searchTerm = 'hello';
        scope.doSearch();
        scope.$apply();
        httpBackend.flush();
        expect(scope.searchResult.items).toEqual(items);
      });
  });
});

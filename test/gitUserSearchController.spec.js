describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('GitUserSearchController', {
      $scope: scope
    })
  }));

  it('should initialise with an empty search result and term', function(){
    expect(scope.searchResult).toBeUndefined();
    expect(scope.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function(){
    var httpBackend;

    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend
      httpBackend
        .when("GET", "https://api.github.com/search/users?q=hello")
        .respond({
          items: items
        });
    }));

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
      .when("GET", "https://api.github.com/search/users?client_id=854d5e8b53f81ffd8ad6&client_secret=3bbf10d29a017cbcd20b87614217396ff67debe6&q=hello")
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
      scope.doUserSearch();
      scope.$apply();
      httpBackend.flush();
      expect(scope.userSearchResult.items).toEqual(items);
    });
  });
});

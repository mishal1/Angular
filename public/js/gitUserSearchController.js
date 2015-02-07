githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {

  var userResource = $resource('https://api.github.com/search/users');

  $scope.doUserSearch = function() {
    $scope.userSearchResult = userResource.get({
      q: $scope.searchTerm,
      client_id: '854d5e8b53f81ffd8ad6',
      client_secret: '3bbf10d29a017cbcd20b87614217396ff67debe6'
    });
  };
});

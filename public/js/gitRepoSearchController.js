githubUserSearch.controller('GitRepoSearchController', function($scope, $resource) {

  var repoResource = $resource('https://api.github.com/repos/:user/:repo');

  $scope.doRepoSearch = function(username, repo) {
    $scope.repoSearchResult = repoResource.get({
      user: username,
      repo: repo,
      client_id: '854d5e8b53f81ffd8ad6',
      client_secret: '3bbf10d29a017cbcd20b87614217396ff67debe6'
    },{
      'get': {method: 'GET', isArray:true}
    });
    console.log($scope.repoSearchResult)
  };

});

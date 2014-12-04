githubUserSearch.controller('GitRepoSearchController', function($scope, $resource) {

  var repoResource = $resource('https://api.github.com/repos/:user/:repo');

  $scope.doRepoSearch = function(username, repo) {
    $scope.repoSearchResult = repoResource.get({
      user: username,
      repo: repo,
      client_id: '854d5e8b53f81ffd8ad6',
      client_secret: '3bbf10d29a017cbcd20b87614217396ff67debe6'
    });
  };

  var repoStatsResource = $resource('https://api.github.com/repos/:user/:repo/stats/contributors');

  $scope.doRepoStatsSearch = function(username, repo) {
    $scope.repoStatsSearchResult = repoStatsResource.query({
        user: username,
        repo: repo,
        client_id: '854d5e8b53f81ffd8ad6',
        client_secret: '3bbf10d29a017cbcd20b87614217396ff67debe6'
      },{
        'query': {method: 'GET', isArray:false}
      });
    };

});

githubUserSearch.controller('GitRepoListController', function($scope, $resource) {

  var repoListResource = $resource('https://api.github.com/users/:user/repos');

  $scope.getRepoList = function(username) {
    $scope.repoList = repoListResource.query({
      user: username,
      client_id: '854d5e8b53f81ffd8ad6',
      client_secret: '3bbf10d29a017cbcd20b87614217396ff67debe6'
    },{
      'query': {method: 'GET', isArray:true}
    });
  };

});

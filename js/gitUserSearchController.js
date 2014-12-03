githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {
<<<<<<< HEAD
	var searchResource = $resource('https://api.github.com/search/users');
	$scope.doSearch = function(){
		
			$scope.$apply();
		$scope.searchResult = searchResource.get({
			q: $scope.searchTerm
		});
	};
=======

  var searchResource = $resource('https://api.github.com/search/users');

  $scope.doSearch = function() {
    $scope.searchResult = searchResource.get({
      q: $scope.searchTerm
  	});
  };
>>>>>>> a6ecead1d984ec26be3ab0d1c070a195cee59560
});

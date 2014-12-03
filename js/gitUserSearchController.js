githubUserSearch.controller('GitUserSearchController', function($scope) {
	$scope.doSearch = function(){
		$scope.searchResult ={
			"items": [{
				"login": "mishal1",
		        "avatar_url": "https://avatars0.githubusercontent.com/u/8863744?v=3&s=460",
		        "html_url": "https://github.com/mishal1"
		      },{"login":"abridger",
		        "avatar_url": "https://avatars1.githubusercontent.com/u/4664049?v=3&s=460",
		        "html_url": "https://github.com/abridger"
				}]
		};
		
	};
});

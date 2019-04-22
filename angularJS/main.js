window.onload = function(){
	main();
};

var main = function(){



};

angular.module("app", ["ngMaterial"])
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
		.dark();
	})
	.controller("header", function($scope){
		$scope.message = "Hello World!";
	})
	.controller("content", function($scope){
		this.movies = [
			// {name : , yearOfRelease : , producer : , actors : }
			{name : "The pianist", yearOfRelease : "2002", producer : "Some Guy", actors : "guy1, guy2"},
			{name : "movie1", yearOfRelease : "2000", producer : "Some Guy1", actors : "guy1, guy3"},
			{name : "movie2", yearOfRelease : "2001", producer : "Some Guy2", actors : "guy1, guy4"},
			{name : "movie3", yearOfRelease : "1999", producer : "Some Guy3", actors : "guy3, guy4"}
		];
		console.log($scope);
		this.addMovieClick = function($event){
			console.log($event);
		}
		this.editMovieClick = function($event, $index){
			console.log($event);
			console.log($index);
		}
	})
	.controller("footer", function($scope){
		$scope.message = "Hello World!";
	})

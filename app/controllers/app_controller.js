app.controller('AppController', function( $scope, $routeParams, fetch ){

	"use strict";
	$scope.name = "AppController";

	var Round = fetch.data('rounds'); //rounds contains all the other data that is commented out

	$scope.Round = Round;
	
	$scope.Device = Round.data;
	
	/**
	*	$scope.users = fetch.data('users');
	*	$scope.devices = fetch.data('devices');
	*	$scope.courses = fetch.data('courses');
	*	$scope.clubs = fetch.data('clubs');
	**/
	
});

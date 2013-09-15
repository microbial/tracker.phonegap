app.config(function( $routeProvider ){
	$routeProvider
		.when('/', {
			'templateUrl': 'app/views/app.default.angv',
			'controller' : 'AppController'
		})
		.when('/clubs/add', {
			'templateUrl': 'app/views/app.add.angv',
			'controller' : 'ClubsController'
		})
		.when('/courses', {
			'templateUrl': 'app/views/courses.default.angv',
			'controller' : 'CoursesController'
		})
		.when('/courses/add', {
			'templateUrl': 'app/views/app.add.angv',
			'controller' : 'CoursesController'
		})		
		.when('/play', {
			'templateUrl': 'app/views/play.default.angv',
			'controller' : 'AppController'
		})
		.otherwise({
			'templateUrl': 'app/views/error.default.angv',
			'controller' : 'ErrorController'
		});
});
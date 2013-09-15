var scripts = {};

scripts.App = [
	"app/_lib/js/angular.js",
	"app/_lib/js/jquery-1.10.2.min.js",
	"app/_lib/js/jquery-no-conflict.js",
	"app/_lib/js/jquery.mobile-1.2.1.min.js",
	"app/_lib/js/app.js"
];

scripts.Controllers = [
	"app/controllers/app_controller.js",
	"app/controllers/error_controller.js",
	"app/controllers/play_controller.js",
	"app/controllers/courses_controller.js",
	"app/controllers/clubs_controller.js",
	//"app/controllers/play_controller.js",
	//"app/controllers/practice_controller.js",
	//"app/controllers/rounds_controller.js"
];

scripts.Filters = [
	"app/filters/checkmark.js",
];

scripts.Routes = [
	"app/routes/app_routes.js",
	//"app/routes/club_routes.js",
	//"app/routes/course_routes.js",
	//"app/routes/play_routes.js",
	//"app/routes/practice_routes.js",
	//"app/routes/round_routes.js"
];

scripts.Services = [
	//"app/services/course.js",
	//"app/services/device.js",
	//"app/services/round.js",
	"app/services/app/fetch.js"
]

for(var scriptCategory in scripts){

	document.writeln( "<!--[START] "+ scriptCategory +"-->"+"\n" );
	
	scripts[scriptCategory].forEach(function( scriptFile ){
	
		document.writeln( '<script type="text/javascript" src="'+scriptFile+'"></script>'+ '\n');
	
	});
};

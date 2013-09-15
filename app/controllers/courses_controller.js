app.controller('CoursesController', function( $scope ){
	$scope.name = "courses";
	$scope.model = "Course";
	$scope.items = ['settings', 'home', 'other'];
  	$scope.selection = $scope.items[0];
  
	//This is how form data should be formatted
	$scope.formFields = [
		{	
			"Name": "id",
			"defaultValue":12,
			inputType: "hidden"
		},
		{
			"Name": "device_id",
			"defaultValue":5
		},
		{
			"Name": "Name",
			"defaultValue":"Beth Page Black"
		},
		{
			"Name": "Description",
			"defaultValue":"Nice Course"
		},
		{
			"Name": "Active",
			"defaultValue": 1	
		},
		{
			"Name": "SubCourseName",
			"defaultValue": "Black"
		},
		{
			"Name": "Slope",
			"defaultValue": 79.3	
		},
		{
			"Name": "Rating"
			
		},
		{
			"Name":	"ApiCourseId"
		},
		{
			"Name": "Created"
		},
		{
			"Name": "Updated",
			"inputType": "date"
		}
	];
	
});
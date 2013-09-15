app.service('fetch', function( $http ){
	
	this.data = function( model ){
		
		var api = app.apiEndpoint;
		
		api+= model;
		
		api+= ".json";

		var apiData = $http.get(api)
		
		.success(function(retrievedData){

			return retrievedData;
			
		})
		.error(function(data, status, headers, config){
		
			return "Oh crap "+message;
		});
		
		return apiData;

	}
	
});
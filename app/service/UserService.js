app.factory("UserService",function($http,$q) {

	var UserServiceFactory={};

	UserServiceFactory.retrieveUser = function(){
		var deferred = $q.defer();

			$http.get("http://rest-service.guides.spring.io/greetings").success(function mySucces(response, status, headers, config) {
					deferred.resolve(response.users);	    
			}).error(function myError(err, status, headers, config) {
	        deferred.reject(err+"Technical Problem");
	    });

		 return deferred.promise;
	}


	UserServiceFactory.deleteUser = function(id){
		var deferred = $q.defer();

		$http.delete("/welcome.htm",id).success(function mySucces(response, status, headers, config) {
				deferred.resolve(response.message);	    
		}).error(function myError(err, status, headers, config) {
	        deferred.reject(err+"Technical Problem");
	    });

	    return deferred.promise;
	}


	UserServiceFactory.addUser = function(){
		var deferred = $q.defer();

		http.post("/welcome.htm",id).success(function mySucces(response, status, headers, config) {
				deferred.resolve(response.message);	    
		}).error(function myError(err, status, headers, config) {
	        deferred.reject(err+"Technical Problem");
	    });

	    return deferred.promise;
	}

	return UserServiceFactory;

});


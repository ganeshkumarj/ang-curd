app.controller("UserController", function($scope, UserService) {
  
  $scope.users =undefined;
  $scope.addUser = function(){

  	UserService.addUser($scope.user).then(function(response) {
			$scope.message="User added";
			$scope.user="";
		}, function(err) {
			console.log(err);
			$scope.message ="Some Problem Occurred"
		});

  }

  $scope.deleteUser = function(user){

  	UserService.deleteUser($scope.user.id).then(function(response) {
			$scope.message="User added";
			$scope.user="";
		}, function(err) {
			console.log(err);
			$scope.message ="Some Problem Occurred"
		});

  }

  $scope.getUsers = function(){
  	UserService.retrieveUser().then(function(response) {
			$scope.users=response.users;
			$scope.user="";
		}, function(err) {
			console.log(err);
			$scope.message ="Some Problem Occurred"
		});
  }

});
var app = angular.module('myApp', []);

app.controller('controllerOne', function($scope){
	$scope.lists = [
  			{name:'Cainton Milroy', age:25, gender:'Male'},
  			{name:'Viviane Scott', age:30, gender:'Female'},
  			{name:'Thomas Moss', age:28, gender:'Male'},
  			{name:'Mary Jane', age:15, gender:'Female'},
  			{name:'Bob Marley', age:28, gender:'Male'},
  			{name:'Elvis Presly', age:95, gender:'Male'},
  			{name:'Samson Thruja', age:50, gender:'Male'},
  			{name:'Laurak Kalo', age:27, gender:'Female'},
  			{name:'Masongi Peter', age:40, gender:'Female'},
  			{name:'Solly McGap', age:60, gender:'Male'}
				]
});


app.controller("customerController", function($scope, $http){
  $http.get("http://www.w3schools.com//website/Customers_JSON.php")
  .success(function(response) 
    {$scope.names = response;});

});
app.controller("stdctrl", function($scope, $http){
  $http.get('js/data.json')
  .success(function(data) 
    {$scope.students = data;}).error(function(error){
       console.log(error);
   })

});






























//The AngularJS application is defined by ng-app. The application runs inside a <div>.

//The ng-controller directive names the controller object.

//The customersController function is a standard JavaScript object constructor.

//AngularJS will invoke customersController with a $scope and $http object.

//$scope is the application object (the owner of application variables and functions).

 //$http is an XMLHttpRequest object for requesting external data.

//$http.get() reads static JSON data from http://www.w3schools.com/website/Customers_JSON.php.

//If success, the controller creates a property (names) in the scope, with JSON data from the server.
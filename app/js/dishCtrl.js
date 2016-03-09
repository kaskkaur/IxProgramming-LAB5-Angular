// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {


  
  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
 		
  		// $scope.menu = Dinner.menu;


  		
		 
		$scope.numberOfGuests = Dinner.getNumberOfGuests();
		
 		$scope.getNumberOfGuests = function() {
		    return Dinner.getNumberOfGuests();
		  }

		id = $routeParams.dishId;

	console.log(id);

	Dinner.Dish.get({id},function(data){


			$scope.status = "Loading...";
			Dinner.DishDataArray = data;
		    $scope.dish = Dinner.DishDataArray;
		    $scope.status = "";
		    

		     // console.log(data.Results);

		 });


	 $scope.getTotalDishPriceView = function() {
    	return Dinner.getTotalDishPriceView();
  	}

  	console.log(Dinner.DishDataArray);

$scope.addDishToMenu = function (id) {
  		// alert("addDish ctrl")
  		id = $routeParams.dishId;
  		console.log(id);

  		Dinner.addDishToMenu(id);

  		

  	}






	// $scope.getDishData = function(id) {
	// 	alert("wtf")
	// 	   $scope.status = "Searching...";
		   	
	// 	   	Dinner.Dish.get({id},function(data){
	// 	     $scope.dish=data.Results;
	// 	     console.log(data.Results)
		     
	// 	     $scope.status = "Showing " + data.Results.length + " results";
	// 	   },

	// 	   function(data){
	// 	     $scope.status = "There was an error";
	// 	   });
	// 	 }


// alert("wjustin?")




  
});
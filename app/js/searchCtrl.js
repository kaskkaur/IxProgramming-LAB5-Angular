// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope,Dinner) {

  // TODO in Lab 5: you will need to implement a method that searchers for dishes
  // including the case while the search is still running.

$scope.dishes = Dinner.SelectorDishesArray;

  $scope.search = function(query) {
	  
	   $scope.status = "Searching...";
	   	

	   	Dinner.DishSearch.get({title_kw:query},function(data){
	     	
	     Dinner.SelectorDishesArray = data.Results;

	     
	     $scope.dishes = Dinner.SelectorDishesArray;
	     
	     $scope.status = "Showing " + data.Results.length + " results";
	   },function(data){
	     $scope.status = "There was an error";
	   });
	 }


	$scope.dishviewbutton = function() {




	}

});
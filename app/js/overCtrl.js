
dinnerPlannerApp.controller('OverCtrl', function ($scope,Dinner) {
  // alert("OverCtrl")

	 //$scope.menu = Dinner.getFullMenu();
$scope.fullMenu = function() {
  console.log(Dinner.getFullMenu());
         return Dinner.getFullMenu();
       }

	// $scope.numberOfGuests = Dinner.getNumberOfGuests();
	 
   $scope.getNumberOfGuests = function() {

    return Dinner.getNumberOfGuests();
  }



  $scope.getTotalMenuPrice = function() {
	console.log(Dinner.menu);
    return Dinner.getTotalMenuPrice();

  }

  $scope.getTotalDishPrice = function(id) {
    	
    	return Dinner.getTotalDishPrice(id);
  	}


});
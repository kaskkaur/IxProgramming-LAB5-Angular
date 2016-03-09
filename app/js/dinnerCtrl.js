// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

  $scope.numberOfGuests = Dinner.getNumberOfGuests();

  $scope.setNumberOfGuests = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }


  

$scope.removeDish = function(id) {
	// alert("remove")

    Dinner.removeDishFromMenu(id);
    $scope.menu = Dinner.getFullMenu();

  }

$scope.getTotalMenuPrice = Dinner.getTotalMenuPrice();

$scope.getTotalMenuPrice = function() {
	console.log(Dinner.menu);
    return Dinner.getTotalMenuPrice();

  }

  $scope.getTotalDishPrice = function(id) {
    	
    	return Dinner.getTotalDishPrice(id);
  	}




  $scope.menu = Dinner.getFullMenu();

	



// $scope.getFullMenu = function() {
//     return Dinner.getFullMenu();
//   }


  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});
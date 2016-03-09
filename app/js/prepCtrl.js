dinnerPlannerApp.controller('PrepCtrl', function ($scope,Dinner) {
	// alert("sap")


// $scope.menu = Dinner.getFullMenu();
$scope.fullMenu = function() {
  console.log(Dinner.getFullMenu());
         return Dinner.getFullMenu();
       }


$scope.getNumberOfGuests = function() {

    return Dinner.getNumberOfGuests();
  }




});
// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource, $cookieStore) {
  self = this;
   this.DishDataArray = [];
   var menu = [];
   var menuData = [];


  var numberOfGuests = 1;


 if ( $cookieStore.get("numGuests") > 1) {
  
    numberOfGuests = $cookieStore.get("numGuests");
    // $cookieStore.put("numGuests", numberOfGuests)
    
  }

    else {

      numberOfGuests = 1;

    }


 
  // $cookieStore.put(numberOfGuests);
  $cookieStore.put("numGuests", numberOfGuests);


  this.SelectorDishesArray = [];

  this.price = 1;
  // this.ingPrice = 1;

  DishType = "Main";

  this.currentID = 432218;

  // this.SearchString = "";


  this.setNumberOfGuests = function(num) {

    // alert("setguests");
    
    if(num > 1) {


      numberOfGuests = num;
      $cookieStore.put("numGuests", numberOfGuests);

    } else {

      numberOfGuests = 1;
      $cookieStore.put("numGuests", numberOfGuests);
    }


  }

  // should return 
  this.getNumberOfGuests = function() {


   var guests = $cookieStore.get("numGuests"); 
   console.log(guests);
    return guests
    
    

  }

  //Returns the dish that is on the menu for selected type 
  // this.getSelectedDish = function(type) {

  //   // alert('SELECTdishfunc initiated');

  //   var TypeArray = [] // we create an empty array to store the specific type dishes

  //   for (var key = 0; key < menu.length; key++) {
  //        if (menu[key].type === type){ // check if type matches
  //         var obj = menu[key]
  //         TypeArray.push(obj); // place to array

  //         }
  
  //      }
  //     console.log(TypeArray);
  //     return TypeArray;
  // }



  

  //Returns all the dishes on the menu.
  this.getFullMenu = function() {

    // alert("getfullmenu")
  
  console.log(menu)
  return menu;

    //TODO Lab 2
  }
//console.log(obj.name)
 //return obj.name;
      
    //return obj.name;
        
  
  //Returns all ingredients for all the dishes on the menu.
  // this.getAllIngredients = function() {
      
  //     IngredientsArray = []

  //     for(var i = 0; i < menu.length; i++) {
  //       var obj = menu[i];
  //       var DishIngredients = obj.ingredients

  //      IngredientsArray.push(DishIngredients)


  // }

  // console.log(IngredientsArray);
  // return IngredientsArray;
  // }

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  this.getTotalMenuPrice = function() {

    // alert("totalmenuprice")

    var sumArr = [] //summation array
  
    $.each(menu, function () { // loop through menu 
      $.each(this.Ingredients, function (name, value) { //and then its child: ingredients
        multiplied = value.MetricDisplayQuantity * numberOfGuests; // multiply by # of guests
        
        sumArr.push(multiplied) //add all of the multiplied values to summation array
              
      });

    });

    // get the total from the array
    var total = 0; 
    for(var i = 0; i < sumArr.length; i++)
    {
        total = total + sumArr[i];
    }

    console.log(total)

    var roundedTotal = Math.round(total);
    return roundedTotal;
    

}


this.getTotalDishPrice = function(id) {

    //this.notifyObservers("wat");
    var sumArr = [] //summation array
    // currentDish = this.DishDataArray;

  for(key in menu){
      if(menu[key].RecipeID == id) {


        $.each(menu[key].Ingredients, function (name, value) { //and then its child: ingredients
      //  console.log(value) // multiply by # of guests
        multiplied = value.MetricDisplayQuantity * numberOfGuests;
        
        sumArr.push(multiplied) //add all of the multiplied values to summation array
              
          });


      }
        
    }
      

    // get the total from the array
    var total = 0; 
    for(var i = 0; i < sumArr.length; i++)
    {
        total = total + sumArr[i];
    }


    var roundedTotal = Math.round(total);
    return roundedTotal;
    
}

this.getTotalDishPriceView = function() {
  
  
  currentDish = this.DishDataArray;
  ing = currentDish.Ingredients;
  // console.log(currentDish.Ingredients);

  var sumArr = [] //summation array

  for(key in ing){

      
      multiplied = ing[key].MetricDisplayQuantity * numberOfGuests;
      sumArr.push(multiplied);
      
      }



  // console.log(sumArr);


  var total = 0; 
    for(var i = 0; i < sumArr.length; i++)
    {
        total = total + sumArr[i];
    }

    var roundedTotal = Math.round(total);
    // console.log(total);
    // console.log(roundedTotal);
    return roundedTotal;
}





  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
this.addDishToMenu = function(id) {

  // alert("service adddish")

  for (var j = 0; j < menu.length; j++) {
      var obj = menu[j]
      var remove = obj.RecipeID;
      
        
        if (remove == id) {
          
          var removeItem = obj;
          menu = jQuery.grep(menu, function(value) {
            return value != removeItem;
          });
          // menu.splice(obj, 1);
          
          break;
          

        };

      };





  // $cookieStore.put("MenuCookie", this.DishDataArray.RecipeID);
  // var MenuCookie = $cookieStore.get("MenuCookie")

  menu.push(this.DishDataArray)
  menuData.push(this.DishDataArray.RecipeID)
  console.log("MENU DATA ADD", menuData);
  $cookieStore.put("menuCookie", menuData);
  console.log(menu);

}

    
  

  //Removes dish from menu
  this.removeDishFromMenu = function(id) {
    
    console.log(id);


    for (var j = 0; j < menu.length; j++) {
      var obj = menu[j]
      var remove = obj.RecipeID;
      
        
        if (remove == id) {
          
          var removeItem = obj;
          menu = jQuery.grep(menu, function(value) {
            return value != removeItem;
          });
          // menu.splice(obj, 1);
          
          break;
          

        };

      };

      menuData = [];
      for(var i in menu) {
        menuData.push(menu[i].RecipeID);


      }
      



  console.log("MENU DATA RM", menuData);

      $cookieStore.put("menuCookie", menuData);
  }
  


  //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
  //you can use the filter argument to filter out the dish by name or ingredient (use for search)
  //if you don't pass any filter all the dishes will be returned

  this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:10,api_key:'H9n1zb6es492fj87OxDtZM9s5sb29rW3'});
  this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'H9n1zb6es492fj87OxDtZM9s5sb29rW3'}); 


  // this.getAllDishes = function (type,filter) {
  //   // || (filterKey != "" && typeof filterKey != "undefined"))
  //   console.log(type);
  //   self = this;
  //   dishType = type;

  //     var typeString = "";
  //     var RecipeArray = [];
  //     var searchString = "";
  //     filterKey = filter;
  //     console.log(filterKey)

  //   if(filterKey != "" && typeof filterKey != "undefined")  {
  //     // alert("we not empty")

  //     searchString = "title_kw=" + filterKey + "&"
         
              
  //     } else {

  //       searchString = "";
  //     }


  //   if (dishType === "All") {

  //     typeString = "";

  //   } else {

  //     typeString = "include_primarycat=" + dishType


  //   }

  //   console.log(DishType)

  //     paging = "&pg=6&rpp=10"

  //     var apiKey = "66J8l00npnHHZcCNLRhxkfW1OHxbojy4";
  //     // var recipeID = 196149;
  //     var url = "http://api.bigoven.com/recipes?" + searchString + typeString + paging + "&api_key=" + apiKey;

  //     console.log(url);
      
  //     $.ajax({
  //              type: "GET",
  //              dataType: 'json',
  //              cache: false,
  //              url: url,
  //              context: this,
  //              success: function (data) {

  //               console.log(data);
  //               results = data.Results;

               
  //                RecipeArray.push(data);
                
                      
  //                 }

  //              });
  
  //   console.log(RecipeArray);
  //   // return RecipeArray;
  // }


  // this.getDishData = function (id) { 
  //       // alert("DishdataFunc")

    
  //             var apiKey = "66J8l00npnHHZcCNLRhxkfW1OHxbojy4";
              
  //             console.log(id + "HEY Im rec value")
  //                 recipeID = id;

  //                 var recipeURL = "http://api.bigoven.com/recipe/" + recipeID + "?api_key=" + apiKey;

  //                 $.ajax({
  //                      type: "GET",
  //                      dataType: 'json',
  //                      cache: false,
  //                      url: recipeURL,
  //                      context: this,
  //                      success: function (recipeData) {
                      

                       
                      
  //                         }

  //                      });

  // }
  

  // //function that returns a dish of specific ID
  // this.getDish = function (id) {

  //   for(key in dishes){
  //     if(dishes[key].id == id) {
 
        
  //       return dishes[key];


  //     }


  //   }
    

    
  // }


  

 this.loadMenu = function() {
  // alert("loadmenu")

  var menuCookie = $cookieStore.get("menuCookie");
  console.log("MENU COOKIE!", menuCookie);

  if (menuCookie) {
    for (var i in menuCookie) {
      console.log(menuCookie[i]);





      this.Dish.get({id: menuCookie[i]},function(data){

          menu.push(data);

         console.log(data);

     });


      
    };

  };

 }

this.loadMenu();

  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details





  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});
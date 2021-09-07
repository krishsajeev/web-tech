var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.quantity = {"Milk":1,"Bread":1,"Cheese":1};
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
            $scope.quantity[$scope.addMe]=1;
        } else {
            $scope.quantity[$scope.addMe]++;
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.products.splice(x, 1);
    }
});

//Login page scripts....
var validationApp = angular.module('validationApp', []);

// create angular controller
validationApp.controller('mainController', function($scope) {

  // function to submit the form after all validation has occurred      
  $scope.submitForm = function(isValid) {

    // check to make sure the form is completely valid
    if (isValid) { 
      alert('Logged in sucessfully..');
    }

  };

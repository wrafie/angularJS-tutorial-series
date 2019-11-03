var myApp = angular.module("myModule", []);

// var myController = function ($scope){
//     $scope.message= "hello everyone!";
// };
// myApp.controller("firstController", myController);

myApp.controller("firstController", function($scope){
    $scope.message="hello everyone!";
})
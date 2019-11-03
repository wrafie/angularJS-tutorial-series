// var myApp = angular.module("myModule", []);

// myApp.controller("firstController", function ($scope) {
//     var employee = { name: "rafie", id: "123" };
//     $scope.employeeObject = employee;
// });

//Method Chaining way

var myApp = angular
    .module("myModule", [])
    .controller("firstController", function ($scope) {
        var employee = { name: "rafie", id: "123" };
        $scope.employeeObject = employee;
    });
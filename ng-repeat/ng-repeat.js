var myapp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            {firstName: "Kabir", lastName : "Hasan", gender: "male"},
            {firstName: "Junaed", lastName : "Hasan", gender: "male"},
            {firstName: "Sinthia", lastName : "Hasan", gender: "female"},
            {firstName: "Mehedi", lastName : "Hasan", gender: "male"},
        ]
        $scope.employees = employees;
    });
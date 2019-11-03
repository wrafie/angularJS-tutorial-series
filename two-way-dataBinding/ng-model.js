var myapp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employee = {
            firstName: "Kabir",
            lastName: "Hasan",
            mail: "kabir.hasan@gmail.com"
        }
        $scope.employee = employee;
    });
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var country = {
            name: "Bangladesh",
            flag: "flag.png"
        };
        $scope.country = country;
    });
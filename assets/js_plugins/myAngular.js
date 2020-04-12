var app = angular.module('DmDoors', ['ngRoute', 'ngSanitize']);



app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});




app.controller('DmDoorsCtrl', function($scope, $http) {

    $scope.selectedModel = "шотатам";
    $scope.selectedImg = "1";
    $scope.selectModel = function(index) {
        $scope.selectedModel = index;
        $scope.selectedImg = 1;
    };
$scope.selectImg = function(index) {
        $scope.selectedImg = index+1;
    };



    $http.get("assets/data/data.json").then(function(response) {
        $scope.data = response.data;

    });
});
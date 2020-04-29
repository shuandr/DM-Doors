
var app = angular.module('mainDM', ['ngAnimate']);

// 'ngAnimate', 

app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});




app.controller('mainDmCtrl', function($scope, $http) {

    $http.get("assets/data/main.json").then(function(response) {
        $scope.data = response.data;
        $scope.selectedCat = $scope.data.works[0];
    });
    $scope.selectedImg = "01";
    $scope.selectCat = function(cat) {
        $scope.selectedCat = $scope.data.works[cat];
        // $scope.selectedImg = 1;
    };
    $scope.selectImg = function(index) {
        $scope.selectedImg = index;
    };

    $scope.nextImg = function() {
        if ($scope.selectedCat.img.indexOf($scope.selectedImg) < $scope.selectedCat.img.length - 1) {
            $scope.selectedImg = $scope.selectedCat.img[$scope.selectedImg++];

        } else {
            $scope.selectedImg = "01";
        };
    };

    $scope.prevImg = function() {
        if ($scope.selectedCat.img.indexOf($scope.selectedImg) !== 0) {
            $scope.selectedImg = $scope.selectedCat.img[$scope.selectedCat.img.indexOf($scope.selectedImg)-1];

        } else {
            $scope.selectedImg = $scope.selectedCat.img[$scope.selectedCat.img.length - 1];
        };
    };



});
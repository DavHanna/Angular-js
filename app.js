(function() {
'use strict';

angular.module('myFirstApp', [])

.controller('myFirstController', myFirstController);
myFirstController.$inject = ['$scope', '$filter'];

function myFirstController ($scope, $filter) {
  $scope.name = "";
  $scope.numVal = 0;

  $scope.displayNumVal = function () {
    $scope.numVal = calcNumVal($scope.name);
  }

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  }

  function calcNumVal(string) {
    var totalNumVal = 0;
    for (var i = 0; i < string.length; i++) {
      totalNumVal += string.charCodeAt(i);
    }
    return totalNumVal;
  }


  $scope.imgNum = 1;

  $scope.changeImg = function() {
    $scope.imgNum = 2;
  }

}

})();

(function() {
'use strict';

angular.module('myFirstApp', [])
.controller('myFirstController', myFirstController)
.filter('opposite', oppositeFilter);

myFirstController.$inject = ['$scope', '$filter', 'oppositeFilter'];

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

  $scope.$watch('numVal', function(newVal, oldVal) {
    console.log("old: ", oldVal);
    console.log("new: ", newVal);
  });

}

function oppositeFilter() {
  return function(input, max) {
    input = input || "";
    max = max || 99999;
    var output = "";
    if (input.length <= max)
    {
      for (var i = (input.length - 1); i >= 0; i--) {
        output += input[i];
      }
    }
    else {
      output = input;
    }
    return output;
  };
}

})();

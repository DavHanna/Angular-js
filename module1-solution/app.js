(function() {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.lunchItems = '';
  $scope.processLunch = function () {
    var items = countStrElements($scope.lunchItems);
    if (items == 0) {
      $scope.message = "Please enter data first";
      $scope.textColor = "red";
      $scope.borderColor = "red";
    } else if (items <= 3) {
      $scope.message = "Enjoy!";
      $scope.textColor = "green";
      $scope.borderColor = "green";
    } else {
      $scope.message = "Too Much!";
      $scope.textColor = "green";
      $scope.borderColor = "green";
    }
  };
}

function countStrElements (string) {
  var items = string.split(',');
  var count = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i].length > 0) {
      count++;
    }
  }
  return count;
}

})();

(function() {
'use strict';

angular.module("MenuApp", ["ui.router", "data"])
.controller("ctrl", ctrl);

ctrl.$inject = ["$rootScope"]
function ctrl($rootScope)
{
  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    console.log("david:   " + error);
  });

  $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams, error) {
    console.log("Success");
  });
}


})();

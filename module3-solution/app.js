(function() {
'use strict';

angular.module("NarrowItDownApp", [])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive("foundItems", foundItems);

function foundItems() {
  var ddo = {
    templateUrl: "directive.html",
    scope: {
      found: "<",
      onRemove: "&"
    }
  };

  return ddo;
};

NarrowItDownController.$inject = ["MenuSearchService", "$timeout"];
function NarrowItDownController(MenuSearchService, $timeout) {
  var ctrl = this;
  ctrl.search = function(searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
    promise.then(function(response) {
      ctrl.found = response;
    })
    .catch(function(error) {
      console.log(error);
    });
  };
  ctrl.removeItem = function(index) {
    MenuSearchService.removeItem(index);
  };
};

MenuSearchService.$inject = ["$http"];
function MenuSearchService($http) {
  var service = this;
  var found = [];
  service.getMatchedMenuItems = function (searchTerm) {
    found = [];
    return $http({url : "https://davids-restaurant.herokuapp.com/menu_items.json"})
     .then(function(result) {
         if (typeof(searchTerm) == "undefined" || searchTerm.length == 0)
          return found;
        result.data.menu_items.forEach(function(item, index) {
          if (item.description.includes(searchTerm)) {
            found.push(item);
          }
        });
      return found;
    })
    .catch(function(result) {
      console.log(result);
    });
  };

  service.removeItem = function (index) {
    found.splice(index,1);
  };
};

})();

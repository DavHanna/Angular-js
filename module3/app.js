(function () {
'use strict';

angular.module("MenuCategoriesApp", [])
.controller("MenuCategoriesCtrl", MenuCategoriesCtrl)
.service("MenuCategoriesService", MenuCategoriesService)
.constant("ApiBasePath", "http://davids-restaurant.herokuapp.com");

MenuCategoriesCtrl.$inject = ["MenuCategoriesService"];
function MenuCategoriesCtrl(MenuCategoriesService) {
  var menu = this;

  var promise = MenuCategoriesService.getMenuCategories();

  promise.then(function(response) {
    menu.categories = response.data;
  })
  .catch(function(error) {
    console.log("There's an error!");
  });

  menu.logMenuItems = function(shortName) {
    var promise = MenuCategoriesService.getMenuForCategory(shortName);

    promise.then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

}

MenuCategoriesService.$inject = ["$http", "ApiBasePath"];
function MenuCategoriesService($http, ApiBasePath) {
  var service = this;

  service.getMenuCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    return response;
  };

  service.getMenuForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    });

    return response;
  };
}
})();

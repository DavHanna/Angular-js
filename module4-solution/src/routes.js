(function() {
'use strict';

angular.module("MenuApp")
.config(RoutesConfig);

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
function RoutesConfig ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider

  .state("home", {
    url: "/",
    templateUrl: "src/templates/home.template.html"
  })

  .state("categories", {
    url: "/categories",
    templateUrl: "src/templates/categories.template.html",
    controller: "CategoriesCtrl",
    controllerAs: "catCtrl",
    resolve: {
      categories: ["MenuDataService", function(MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state("items", {
    url: "/items/{param1}",
    templateUrl: "src/templates/items.template.html",
    controller: "itemsCtrl",
    controllerAs: "itemsCtrl",
    resolve: {
      items: ["MenuDataService", "$stateParams", function(MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.param1);
      }]
    }
  });

};

})();

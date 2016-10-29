(function() {
"use strict";

angular.module("MenuApp")
.controller("itemsCtrl", itemsCtrl);

itemsCtrl.$inject = ["items"];
function itemsCtrl(items) {
  var $ctrl = this;
  $ctrl.items = items.menu_items;
};

})();

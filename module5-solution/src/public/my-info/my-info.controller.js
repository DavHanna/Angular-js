(function () {
"use strict";

angular.module("public")
.controller("MyInfoController", MyInfoController);

MyInfoController.$inject = ["MenuService", "MyInfoService", "userInfo"];
function MyInfoController(MenuService, MyInfoService, userInfo) {
  var MyInfoCtrl = this;
  MyInfoCtrl.userInfo = userInfo;

}

})();

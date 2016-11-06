(function () {
"use strict";

angular.module("public")
.controller("SignUpController", SignUpController);

SignUpController.$inject = ["MenuService", "MyInfoService"];
function SignUpController(MenuService, MyInfoService) {
  var SignUpCtrl = this;

  SignUpCtrl.invalidDish = false;
  SignUpCtrl.infoSaved = false;

  SignUpCtrl.submit = function() {
    MenuService.getDish(SignUpCtrl.favoriteDish)
    .then(function(response) {
      SignUpCtrl.invalidDish = false;
      return response;
    })
    .then(function(response) {
      MyInfoService.saveUserInfo(SignUpCtrl.firstName, SignUpCtrl.lastName, SignUpCtrl.email, SignUpCtrl.phoneNumber, response);
    })
    .then(function() {
      SignUpCtrl.infoSaved = true;
    })
    .catch(function() {
      SignUpCtrl.invalidDish = true
    });
  }



}

})();

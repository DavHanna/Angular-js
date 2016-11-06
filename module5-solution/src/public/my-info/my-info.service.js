(function () {
"use strict";

angular.module('public')
.service('MyInfoService', MyInfoService);


function MyInfoService() {
  var service = this;
  this.user = {};

  this.saveUserInfo = function(fn, ln, em, pn, fd) {
    this.user.firstName = fn;
    this.user.lastName = ln;
    this.user.email = em;
    this.user.phoneNumber = pn;
    this.user.favoriteDish = fd;
  }

  this.getUserInfo = function() {
    return this.user;
  }

}

})();

(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.factory('shoppingServiceFactory', shoppingServiceFactory)
.provider('shoppingServiceProvider', shoppingServiceProvider);

ToBuyShoppingController.$inject = ['shoppingServiceProvider','shoppingServiceFactory'];
function ToBuyShoppingController (shoppingServiceProvider, shoppingServiceFactory)
{
  var ToBuyController = this;
  ToBuyController.list = shoppingServiceProvider();
  ToBuyController.items = ToBuyController.list.showToBuy();
  ToBuyController.buyItem = function (index) {
    ToBuyController.list.buy(index);
  };
}

AlreadyBoughtShoppingController.$inject = ['shoppingServiceProvider', 'shoppingServiceFactory'];
function AlreadyBoughtShoppingController (shoppingServiceProvider, shoppingServiceFactory)
{
  var AlreadyBoughtController = this;
  AlreadyBoughtController.list = shoppingServiceProvider();
  AlreadyBoughtController.items = AlreadyBoughtController.list.showBought();
}

function shoppingServiceProvider ()
{
  var service = this;

  var defaults = {};

  service.$get = function () {
    var newService = function () {
      return new ShoppingListCheckOffService(defaults);
    };
    return newService;
  };
}

function shoppingServiceFactory ()
{
  var defaults = {};

  var service = function () {
    return new ShoppingListCheckOffService(defaults);
  };

  return service;
}

function ShoppingListCheckOffService ()
{
  var service = this;
  var to_buy = [
    { name: "Cookies", quantity: 10 },
    { name: "Chips", quantity: 100 },
    { name: "Cakes", quantity: 5 },
    { name: "Chocolates", quantity: 20 },
    { name: "Juices", quantity: 3 }
  ];
  var bought = [];

  service.buy = function (index) {
    bought.push(to_buy[index]);
    to_buy.splice(index, 1);
  };

  service.showToBuy = function () {
    return to_buy;
  };

  service.showBought = function () {
    return bought;
  };
}

})();

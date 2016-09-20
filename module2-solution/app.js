(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController (ShoppingListCheckOffService)
{
  var ToBuyController = this;
  ToBuyController.items = ShoppingListCheckOffService.showToBuy();
  ToBuyController.buyItem = function (index) {
    ShoppingListCheckOffService.buy(index);
  };
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController (ShoppingListCheckOffService)
{
  var AlreadyBoughtController = this;
  AlreadyBoughtController.items = ShoppingListCheckOffService.showBought();
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

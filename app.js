angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', function(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.toBuyList = [{ name: "cookies", quantity: 10 },
      { name: "cake", quantity: 10 },
      { name: "coke", quantity: 10 },
      { name: "Apples", quantity: 10 },
      { name: "Bananas", quantity: 10 }];
    ShoppingListCheckOffService.toBuyList = toBuy.toBuyList;

    toBuy.buyItem = function(index){
      ShoppingListCheckOffService.moveToBought(index);
    };
  })
  .controller('AlreadyBoughtController', function(ShoppingListCheckOffService) {
    var bought = this;
    bought.boughtList = ShoppingListCheckOffService.boughtList;


  })
  .service('ShoppingListCheckOffService', function() {
    var service = this;
    service.toBuyList = [];
    service.boughtList = [];

    service.moveToBought = function(index) {
      service.boughtList.push(service.toBuyList[index]);
      service.toBuyList.splice(index,1);
    };

  });

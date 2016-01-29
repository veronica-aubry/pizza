
var toppingsOptions = ["pepperoni", "anchovies", "pineapple"];

var total = 0;

var small = {
  price: 9.99,
}

var medium = {
  price: 11.99,
}

var large = {
  price: 15.99,
}

var pepperoni = {
  name: "pepperoni",
  price: .50,
}

var anchovies = {
  name: "anchovies",
  price: .75,
}

var pineapple = {
  name: "pineapple",
  price: .25,
}

function Pizza(pizzaSize, toppings, priceArray, sum){
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.priceArray = [];
  this.sum = 0;
}

Pizza.prototype.pizzaSum = function() {
  this.priceArray.push(this.pizzaSize.price);
  var that = this.priceArray
  this.toppings.forEach(function(topping) {
    that.push(topping.price);
  });
  for (var i = 0;  i < this.priceArray.length; this.sum += this.priceArray [i++])
    ;
    return this.sum;
}

// Pizza.prototype.total = function() {
//   this.
// }





 // Pizza.prototype.calculation = function(){
 //   this.pizzaSize.price.
 // }

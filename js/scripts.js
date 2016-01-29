
var toppingsOptions = ["pepperoni", "anchovies", "pineapple"];

var total = 0;


//literal objects: pizza size and toppings//

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

var olives = {
  name: "olives",
  price: .25,
}

//Pizza constructor//

function Pizza(pizzaSize, toppings, priceArray, sum){
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.priceArray = [];
  this.sum = 0;
}


//Pushes all prices to an array and then adds them together//

Pizza.prototype.pizzaSum = function() {
  this.priceArray.push(this.pizzaSize.price);
  var that = this.priceArray
  this.toppings.forEach(function(topping) {
    that.push(topping.price);
  });
  for (var i = 0;  i < this.priceArray.length; this.sum += this.priceArray [i++])
    ;
    this.sum = Math.round(this.sum * 100) / 100
    return this.sum;
}




$(document).ready(function() {

$("form#order").submit(function(event) {
  var inputSize = eval($("input[name=size]:checked").val());
  var inputToppings = eval($("input[name=toppings]:checked").val());
  var newPizza = new Pizza(inputSize, [inputToppings]);

  console.log(newPizza.priceArray);
  console.log(newPizza.toppings);

  $("#price-display").text("$" + newPizza.pizzaSum())  ;

 event.preventDefault();
  });
});

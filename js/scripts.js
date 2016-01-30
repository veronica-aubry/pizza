
var toppingsOptions = ["pepperoni", "anchovies", "pineapple"];

var total = 0;


//literal objects: pizza size and toppings//

var small = {
  name: "small",
  price: 9.99,
}

var medium = {
  name: "medium",
  price: 11.99,
}

var large = {
  name: "large",
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
  this.toppings = [];
  this.priceArray = [];
  this.sum = 0;
}

//Order constructor//

function Order(pizzas, totalCost){
  this.pizzas = [];
  this.totalCost = 0
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

// Prints type and price of pizza
Pizza.prototype.pizzaDescription = function() {
  var toppingNames = this.toppings.map(function(topping) {
    return topping['name'];
      });
    return this.pizzaSize.name + " " + "pizza with " + toppingNames;
}


$(document).ready(function() {
var newOrder = new Order();

  $("form#order").submit(function(event) {
    var inputSize = eval($("input[name=size]:checked").val());
    var newPizza = new Pizza(inputSize);

    $("input:checkbox[name=toppings]:checked").each(function(){
     newPizza.toppings.push(eval($(this).val()));
      });

      var pizzaName = ("\n" + newPizza.pizzaDescription() + " $" + newPizza.pizzaSum() + "\n")

      $("#cart-list").append("<li>" + pizzaName + "</li>");

      event.preventDefault();

    // $("#price-display").click(function(event) {
    //   newOrder.pizzas.push(pizzaName);
    //   $("#cart-display").text(newOrder.pizzas);
    //
    //   });
    });
  });

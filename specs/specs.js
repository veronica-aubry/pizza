
describe('Pizza', function() {
  it("creates the pizza constructor and adds properties", function() {
    var testPizza = new Pizza(medium);
    expect(testPizza.pizzaSize).to.equal(medium);
    expect(testPizza.toppings).to.eql([]);
  });
});

describe('Pizza.prototype.pizzaDescription', function() {
  it("describes the created pizza", function() {
    var testPizza = new Pizza(medium);
    testPizza.toppings.push(pepperoni);
    expect(testPizza.pizzaDescription()).to.equal("medium pizza with pepperoni: $12.49");
  });
});


describe('Pizza.prototype.pizzaSum', function() {
  it("creates an array of pizza prices and then sums the array", function() {
    var testPizza = new Pizza(medium);
    testPizza.toppings.push(pepperoni, anchovies);
    expect(testPizza.toppings).to.eql([pepperoni, anchovies]);
    expect(testPizza.pizzaSum()).to.eql(13.24);

  });
});

describe('Pizza.pizzaSum', function() {
  it("creates an array of pizza prices and then sums the array", function() {
    var testPizza = new Pizza(medium, [pepperoni]);
    testPizza.toppings.push(pepperoni);
    expect(testPizza.pizzaSum()).to.eql(12.49);

  });
});

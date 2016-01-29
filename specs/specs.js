
describe('Pizza', function() {
  it("creates the pizza constructor and adds properties", function() {
    var testPizza = new Pizza(medium, [pepperoni, anchovies] );
    expect(testPizza.pizzaSize).to.equal(medium);
    expect(testPizza.toppings).to.eql([pepperoni, anchovies]);
  });
});


describe('Pizza', function() {
  it("works with only one topping value", function() {
    var testPizza = new Pizza(medium, pepperoni );
    expect(testPizza.pizzaSize).to.equal(medium);
    expect(testPizza.toppings).to.eql(pepperoni);
  });
});



describe('Pizza.pizzaSum', function() {
  it("creates an array of pizza prices and then sums the array", function() {
    var testPizza = new Pizza(medium, [pepperoni, anchovies]);
    expect(testPizza.pizzaSum()).to.eql(13.24);

  });
});

describe('Pizza.pizzaSum', function() {
  it("creates an array of pizza prices and then sums the array", function() {
    var testPizza = new Pizza(medium, [pepperoni]);
    expect(testPizza.pizzaSum()).to.eql(13.24);

  });
});

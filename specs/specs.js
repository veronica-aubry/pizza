
describe('Pizza', function() {
  it("creates the pizza constructor and adds properties", function() {
    var testPizza = new Pizza(medium, [pepperoni, anchovies] );
    expect(testPizza.pizzaSize).to.equal(medium);
    expect(testPizza.toppings).to.eql([pepperoni, anchovies]);
  });
});


describe('Pizza.sum', function() {
  it("creates an array of pizza prices and then sums the array", function() {
    var testPizza = new Pizza(medium, [pepperoni, anchovies]);
    expect(testPizza.sum()).to.eql(13.24);

  });
});

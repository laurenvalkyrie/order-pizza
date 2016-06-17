// ============ Backend Logic ============
var toppingPrices = {'pepper' : 1, 'mushroom' : 1, 'onion' : 1, 'olive' : 1};

function Pizza (size) {
  this.pizzaSize = size;
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
 }

Pizza.prototype.getPrice = function () {
  this.price = 0;
  if (this.pizzaSize === "small") {
    this.price += 12;
  } else if (this.pizzaSize === "medium") {
    this.price += 18;
  } else {
    this.price += 22;
  }
  for (var i = 0; i < this.toppings.length; i++) {
    var currentTopping = this.toppings[i];
    var toppingPrice = toppingPrices[currentTopping];
    this.price += toppingPrice;
  }
  return this.price;
}

// ============ Frontend Logic ============
$(document).ready(function() {
  $('form#order-pizza').submit(function(e) {
    e.preventDefault();

    $('input:radio[name="size"]').click(function() {
      var size = $(this.value).val();
    });

    var pizza = new Pizza(size);

    $('input[name="topping"]:checked').each(function(){
      pizza.addTopping(this.value);
    });

    var pizzaPrice = pizza.getPrice();

    $('#output').append('<p>' + pizza.pizzaPrice + '</p>');
    $('#output').show();
    $('form#order-pizza').toggle();

  });
});

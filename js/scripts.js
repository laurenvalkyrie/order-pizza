// ============ Backend Logic ============


function Pizza (size, toppings, cost) {
  this.pizzaSize = size;
  this.toppings = toppings;
  this.totalCost = cost;
}

Pizza.prototype.yourOrder = function () {
  if (this.pizzaSize === "small") {
    return this.price += 12;
  } else if (this.pizzaSize === "medium") {
    return this.price += 18;
  } else {
    return this.price += 22;
  }
}



// ============ Frontend Logic ============
$(function() {
  $('order-pizza'.submit(function(e) {
    e.preventDefault();
    var size = $('#pizza-size').val();
    // var toppings = [];
    // $('input[name="topping":checked').each(function(){
    //   (toppings).push(this.value);
    // });
    var pizza = new Pizza(size, toppings, cost);

    $('#output'.append('<p>' + pizza.pizzaSize + '</p>', '<li>' + pizza.toppings + '</li>', '<p>' + pizza.totalCost + '</p>');
    $('#output').show();
    $('#order-pizza').toggle();

  });

});

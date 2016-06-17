// ============ Backend Logic ============

function Pizza (size, toppings) {
  this.pizzaSize = size;
  this.toppings = [];
  this.totalCost = cost;
}

Pizza.prototype.yourOrder = function () {

}



// ============ Frontend Logic ============
$(function() {
  $('order-pizza'.submit(function(e) {
    e.preventDefault();
    var size = $('#pizza-size').val();
    var toppings = $('#toppings').val();
    var pizza = new Pizza(size, toppings, cost);

    $('#output'.append('<p>' + pizza.pizzaSize + '</p>', '<li>' + pizza.toppings + '</li>', '<p>' + pizza.totalCost + '</p>');
    $('#output').show();
    $('#order-pizza').toggle();

  });

});

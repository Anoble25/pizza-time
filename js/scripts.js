var cart=[];

function Pizza (size, toppings){
  this.size=size;
  this.toppings=toppings;
}

function buildPizza(){
  var toppings = [];
  var size=$('#size').val();

  $("input:checkbox[name=toppings]:checked").each(function(){
    var topping = $(this).val();
    toppings.push(topping);
  });

  pizza1=new Pizza(size, toppings);
  cart.push(pizza1);
}


$(document).ready(function() {

  $("#addToCart").click(function(){
    buildPizza();
    console.log(cart)
  });

});

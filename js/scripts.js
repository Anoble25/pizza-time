var cart=[];

function Pizza (size, toppings){
  this.size=size;
  this.toppings=toppings;
}

function buildPizza(){
  var toppings = [];
  var size=$('#size').val();

//Justin please don't copy my code

  $("input:checkbox[name=toppings]:checked").each(function(){
    var topping = $(this).val();
    toppings.push(topping);
  });

  pizza1=new Pizza(size, toppings);
  cart.push(pizza1);
}

$(document).ready(function() {
    $("#orderForm").submit(function(event) {
      event.preventDefault();
      if ($('#size').val()!=""){
        buildPizza();
        console.log(cart);
      } else{}
    });
});

var cart=[];

function Pizza (size, toppings){
  this.size=size;
  this.toppings=toppings;
  this.cost=0;
}

function buildPizza(){
  var toppings = [];
  var size=$('#size').val();

//Justin please don't copy my code

Pizza.prototype.setCost = function() {
  cost=0;
  if (this.size==="small"){
    cost=8;
  } else if (this.size==="medium"){
    cost=12;
  } else if (this.size==="large"){
    cost=14;
  } else if (this.size==="extraLarge"){
    cost=16;
  } else{
    console.log("pizza size error");
  }

  this.toppings.forEach(function(topping){
    cost=cost+1;
  });
  this.cost=cost;
}

  $("input:checkbox[name=toppings]:checked").each(function(){
    var topping = $(this).val();
    toppings.push(topping);
  });

  pizza1=new Pizza(size, toppings);
  pizza1.setCost();
  cart.push(pizza1);
}

$(document).ready(function() {
    $("#orderForm").submit(function(event) {
      event.preventDefault();
      if ($('#size').val()!=""){
        buildPizza();
        console.log(cart);
      } else{}

      $("#cartDisplay").text("");
      var pizzaNumber=1;
      cart.forEach(function(item){
      //  $("#pizzaNumber").append(pizzaNumber);
        $("#cartDisplay").append("<li>Pizza "+pizzaNumber+"<br>Size: "+item.size+"<br>Toppings:"+item.toppings+ "<br>Cost: $"+item.cost+"</li>");
        pizzaNumber++;


      });

    });
});

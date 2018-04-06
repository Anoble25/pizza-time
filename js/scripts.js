var cart=[];

function Pizza (size, toppings){
  this.size=size;
  this.toppings=toppings;
  this.cost=0;
}

function showCost(){
  var runningTotal=0;
  cart.forEach(function(item){
    runningTotal=runningTotal+item.cost;
  });
  $("#cartTotal").text(runningTotal);
}

function clearCart(){
  cart=[];
  showCost();
  $("#cartDisplay").text("");
}


Pizza.prototype.setCost = function() {
  cost=0;
  if (this.size==="Small"){
    cost=8;
  } else if (this.size==="Medium"){
    cost=12;
  } else if (this.size==="Large"){
    cost=14;
  } else if (this.size==="Extra Large"){
    cost=16;
  } else{
    console.log("pizza size error");
  }

  this.toppings.forEach(function(topping){
    cost=cost+1;
  });
  this.cost=cost;
}
function buildPizza(){
  var toppings = [];
  var size=$('#size').val();

  $("input:checkbox[name=toppings]:checked").each(function(){
    var topping = $(this).val();
    toppings.push(topping);
  });

  pizza1=new Pizza(size, toppings);
  pizza1.setCost();
  cart.push(pizza1);
}

$(document).ready(function() {

    showCost();
    $("#orderForm").submit(function(event) {
      event.preventDefault();
      if ($('#size').val()!=""){
        buildPizza();
        console.log(cart);
        document.getElementById("orderForm").reset();b
      } else{}

      $("#cartDisplay").text("");
      var pizzaNumber=1;
      cart.forEach(function(item){
        $("#cartDisplay").append("<li>Pizza "+pizzaNumber+"<br>Size: "+item.size+"<br>Toppings:"+item.toppings+ "<br>Cost: $"+item.cost+"</li>");
        pizzaNumber++;
      });
      showCost();

    });

    $("#clearCart").click(function(){
      clearCart();
    });
});

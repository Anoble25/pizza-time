var toppings=[];

function Pizza (size, toppings){
  this.size=size;
  this.toppings=toppings;
}

function buildPizza(){
  var size=$('#size').val();
  console.log(size);
}



$(document).ready(function() {

  $("#addToCart").click(function(){
    
    buildPizza();
  });

});

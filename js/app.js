$(function(){

 $( "#right" ).click(function() {
  console.log("right clicked")
  $( "#spaceship" ).animate({ "left": "+=50px" }, "slow" );
  });
 
$( "#left" ).click(function(){
  console.log("left clicked")
  $( "#spaceship" ).animate({ "left": "-=50px" }, "slow" );
  });
});
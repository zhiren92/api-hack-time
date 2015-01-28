$(function(){

   $( "#right" ).click(function() {
    console.log("right clicked")
    $( "#spaceship" ).animate({ "left": "+=50px" }, "slow" );
    });
   
  $( "#left" ).click(function(){
    console.log("left clicked")
    $( "#spaceship" ).animate({ "left": "-=50px" }, "slow" );
    });
  $( "#up" ).click(function(){
    console.log("up clicked")
    $( "#spaceship" ).animate({ "top": "-=50px" }, "slow" );
    });
  $( "#down" ).click(function(){
    console.log("down clicked")
    $( "#spaceship" ).animate({ "top": "+=50px" }, "slow" );
    });
});
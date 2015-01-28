$(function(){

   

  // function moveRight (){
   $( "#right" ).click(function() {
    console.log("right clicked")
    $( "#spaceship" ).animate({ "left": "+=50px" }, "slow" );
    });
  // }

  // function moveLeft (){
  $( "#left" ).click(function(){
    console.log("left clicked")
    $( "#spaceship" ).animate({ "left": "-=50px" }, "slow" );
    });
  // }
  // function moveUp(){
  $( "#up" ).click(function(){
    console.log("up clicked")
    $( "#spaceship" ).animate({ "top": "-=50px" }, "slow" );
    });
  // }

  // function moveDown(){
  $( "#down" ).click(function(){
    console.log("down clicked")
    $( "#spaceship" ).animate({ "top": "+=50px" }, "slow" );
    });
  // }

  
});
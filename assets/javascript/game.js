$(document).ready(function() {
    var Random=Math.floor(Math.random()*101+19)
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    //
    $('#target').text(Random);
    // Appending random number to the randomNumber id in the html doc
    //
    var crystal1 = Math.floor(Math.random()*11+1)
    var crystal2 = Math.floor(Math.random()*11+1)
    var crystal3 = Math.floor(Math.random()*11+1)
    var crystal4 = Math.floor(Math.random()*11+1)
    // Setting up random numbers for each jewel
    // Random number has to be between 1 - 12
    // 
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    //  Decaring variables for tallies
  $('#wins').text(wins);
  $('#losses').text(losses);
  //resets the game
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#target').text(Random);
        crystal1 = Math.floor(Math.random()*11+1);
        crystal2 = Math.floor(Math.random()*11+1);
        crystal3 = Math.floor(Math.random()*11+1);
        crystal4 = Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#score').text(userTotal);
        } 
  //adds the wins to the userTotal
  function win(){
  alert("You won!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  //addes the losses to the userTotal
  function lose(){
  alert ("You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
  }
  //sets up click for jewels
    $('#crystal1').on ('click', function(){
      userTotal = userTotal + crystal1;
      console.log("New userTotal= " + userTotal);
      $('#score').text(userTotal); 
            //sets win/lose conditions
          if (userTotal === Random){
            win();
          }
          else if ( userTotal > Random){
            lose();
          }   
    })  
    $('#crystal2').on ('click', function(){
      userTotal = userTotal + crystal2;
      console.log("New userTotal= " + userTotal);
      $('#score').text(userTotal); 
          if (userTotal === Random){
            win();
          }
          else if ( userTotal > Random){
            lose();
          } 
    })  
    $('#crystal3').on ('click', function(){
      userTotal = userTotal + crystal3;
      console.log("New userTotal= " + userTotal);
      $('#score').text(userTotal);
  //sets win/lose conditions
            if (userTotal === Random){
            win();
          }
          else if ( userTotal > Random){
            lose();
          } 
    })  
    $('#crystal4').on ('click', function(){
      userTotal = userTotal + crystal4;
      console.log("New userTotal= " + userTotal);
      $('#score').text(userTotal); 
        
            if (userTotal === Random){
            win();
          }
          else if ( userTotal > Random){
            lose();
          }
    });   
  }); 
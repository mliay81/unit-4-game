$(document).ready(function() {
    // sets the target number
    var target = Math.floor(Math.random() * 101+19)
    $("#target").text(target);
    // assigns the value to crystal
    var crystal1 = Math.floor(Math.random() * 11+1)
    $("#crystal1").val(crystal1);
    // console.log(crystal1)
    // assigns the value to crystal
    var crystal2 = Math.floor(Math.random() * 11+1)
    $("#crystal2").val(crystal2);
    // assigns the value to crystal
    var crystal3 = Math.floor(Math.random() * 11+1)
    $("#crystal3").val(crystal3);
    // assigns the value to crystal
    var crystal4 = Math.floor(Math.random() * 11+1)
    $("#crystal4").val(crystal4);
    // console.log(crystal4)

    // win, loss, total variables and jquery call-outs
    var win = 0
    var lose = 0
    var total = 0
    $("#score").text(total)
    $("#wins").text(win)
    $("#losses").text(lose)
    $("#target").text(target)

    // resets the game logic after a win or loss, does not refresh win/loss count
    function reset(){
        target = Math.floor(Math.random() * 101+19)
        $("#target").text(target);
        crystal1 = Math.floor(Math.random() * 11+1)
        $("#crystal1").val(crystal1)
        crystal2 = Math.floor(Math.random() * 11+1)
        $("#crystal2").val(crystal2)
        crystal3 = Math.floor(Math.random() * 11+1)
        $("#crystal3").val(crystal3)
        crystal4 = Math.floor(Math.random() * 11+1)
        $("#crystal4").val(crystal4)
        total = 0;
        $("#score").text(total);
    }

    // click logic for the crystals, and win/loss logic
    $(".crystal").on("click", function() {
        var num = $(this).val()
        var number = parseInt(num)
        console.log(num)
        console.log(number)
        total+=number
        $("#score").text(total)
        if (total === target) {
            alert("You win!")
            win++
            $("#wins").text(win)
            reset()
        }
        
        else if (total > target) {
            alert("You lose!")
            lose++
            $("#losses").text(lose)
            reset()
        }
            
      
    
    })

    

});
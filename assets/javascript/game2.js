$(document).ready(function() {
    var target = (Math.floor(Math.random() * 101))+19
    $("#target").text(target);
    
    var crystal1 = (Math.floor(Math.random() * 11))+1
    $("#crystal1").val(crystal1);
    // console.log(crystal1)

    var crystal2 = (Math.floor(Math.random() * 11))+1
    $("#crystal2").val(crystal2);

    var crystal3 = (Math.floor(Math.random() * 11))+1
    $("#crystal3").val(crystal3);

    var crystal4 = (Math.floor(Math.random() * 11))+1
    $("#crystal4").val(crystal4);
    // console.log(crystal4)


    var win = 0
    var lose = 0
    var total = 0
    $("#score").text(total)
    $("#wins").text(win)
    $("#losses").text(lose)

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
        }
        
        else if (total > target) {
            alert("You lose!")
            lose++
            $("#losses").text(lose)
        }
            

    
    })

    

});
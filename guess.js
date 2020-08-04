var prevGuess;
var newGuess;
var random; 
var guessInput;
var randomNum = function(){
    random = Math.floor(Math.random() * 101);
    console.log(random);
};

   
$(document).ready(function(){
    $("#reset").click(function(){
        randomNum();
        
    });
});

var guessNum = function(){
    guessInput = $("#guessInput").val();
};
$(document).ready(function(){
    $("#guess").click(function(){
        guessNum();

        console.log(guessInput);
    
        //if (guessInput > 100 || guessInput < 0);{
        //      alert ("select between 0 and 100");
        //  };
        prevGuess = newGuess;
        newGuess = guessInput;       
      prevDiff = Math.abs(prevGuess - random);
      newDiff = Math.abs(newGuess - random);

        if (guessInput == random || newGuess == random) {
            $("#myBar").animate({
               left: '495px',
                height: '30px',
                width: '+=350px',
            });
            randomNum();
        }
        else if (prevDiff < newDiff) {
            $("#myBar").animate({
                left: '495px',
                 height: '30px',
                 width: '+=200px',
            });
             
        }
       else if (prevDiff > newDiff){
        $("#myBar").animate({
            left: '495px',
             height: '30px',
             width: '+=300px',
            });
       }
       else {
        $("#myBar").animate({
            left: '495px',
             height: '30px',
             width: '0',
            });
       

       }
    });
    
});


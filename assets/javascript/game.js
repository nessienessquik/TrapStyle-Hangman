
$( document ).ready(function() {
    //set counter variable for wins
    var counterWins = 0;
    $(".game-wins").text(counterWins);

    //set counter for number of guesses left
    var counterGuess = 10;
     $(".game-guesses-remaining").text(counterGuess);

    var lettersGuessed = [];

    //create array of hangman terms
    var wordsArray = ["migos", "future", "ti", "waka flocka flame", "gucci mane", "lil uzi vert", "young thug", "2 chainz", "young jeezy", "fetty wap"];
    var wordSelected = [];

    document.onkeyup = function() { 

        //store event.key into a variable
        var userInput = event.key;
        console.log(userInput);

        if (wordSelected.length === 0) {
            var newWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

            console.log (newWord);

            for (i=0; i < newWord.length; i++) {
            
            wordSelected.push(newWord[i]);


                //console.log(userInput);
                //console.log(wordSelected[i]);

            $(".game-current-word").append("<div class='letter-container'><div class='letters " + wordSelected[i] + "' >" +wordSelected[i] + "</div></div>");

            if(newWord[i] != " " && userInput != wordSelected[i]) {
                $(".letters").addClass("hide");      
            } //closes if statement
          }  //closes for loop
        } else { 
            
            for(i = 0; i < wordSelected.length; i++) {
                if(wordSelected[i] === userInput) {
                    $("." + userInput).removeClass("hide");
                    console.log("true");
                }//closes if statement
            }//closes for loop
        
        }

        for( i=0; i < wordSelected.length; i++ ) {


             var indexOfW = jQuery.inArray( userInput, wordSelected );
             var indexOfG = jQuery.inArray( userInput, lettersGuessed );

            //console.log(indexOfI);

            if (wordSelected[i] != userInput && indexOfW === -1 && indexOfG === -1) {
                
                lettersGuessed.push(userInput);

                $(".game-guesses-letters").text(lettersGuessed);

            } else if (wordSelected[i] === userInput) {

                //something heppens
                }

        }
       

    };
    
});


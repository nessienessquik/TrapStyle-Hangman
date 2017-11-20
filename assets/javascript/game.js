
$( document ).ready(function() {
    //set counter variable for wins
    var counterWins = 0;
    $(".game-wins").text(counterWins);

    //set counter for number of guesses left
    var counterGuess = 15;


    var lettersGuessed = [];

    //create array of hangman terms
    var wordsArray = ["migos", "future", "ti", "waka flocka flame", "gucci mane", "lil uzi vert", "young thug", "2 chainz", "young jeezy", "fetty wap"];
    var wordSelected = [];

    document.onkeyup = function() { 

        //store event.key into a variable
        var userInput = event.key;
        //console.log(userInput);

        //if there isn't a word selected, randomy select one from wordsArray
        if (wordSelected.length === 0) {
            var newWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

            console.log (newWord);

            for (i=0; i < newWord.length; i++) {
            //push to wordSelected array
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
                    //console.log("true");
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

                counterGuess = counterGuess - 1;

                $(".game-guesses-remaining").text(counterGuess);


                if(counterGuess === 0) {
                    $(".game-over").removeClass("hide");
                    $(".game-current-word").addClass("hide");
                    
                    $(".game-over").on("click", function() {

                        debugger
                        $("game-current-word").empty();
                        counterGuess = 15;
                        wordSelected = [];
                        });

                        $(".game-over").addClass("hide");
                        $(".game-current-word").removeClass("hide");
                }
            } 

        }

    };

    
});


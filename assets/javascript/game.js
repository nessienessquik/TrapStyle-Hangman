
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

    //var indexOfI = -1;
    
    document.onkeyup = function() { 

        //store event.key into a variable
        var userInput = event.key;
        console.log(userInput)

        //if wordSelected variable is empty
        if( wordSelected.length === 0 ) {
            //randomly select a word item from wordsArray and push into wordSelected
            var newWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

            console.log (newWord);

            //break the word into individual letters within the array
 
            for (i=0; i < newWord.length; i++) {
                wordSelected.push(newWord[i]);


                    console.log(userInput);
                    console.log(wordSelected[i]);

                $(".game-current-word").append("<div class='letter-container'><div class='letters " + wordSelected[i] + "' >" +wordSelected[i] + "</div></div>");

                if(newWord[i] != " " && userInput != wordSelected[i]) {
                    $(".letters").addClass("hide");
                    //debugger
                } 
                
            }
        

        } else {
            for(i = 0; wordSelected.length; i++) {
                if(wordSelected[i] === userInput) {
                    $('.' + wordSelected[i]).addClass("added")
                    console.log("true");
                }
            }
        }
            
            //else if wordSelected has a word defined, parse through the array to see if the
            //else if (wordSelected.length != 0) {

                //if the letter is a part of wordSelected, add it to game-current-word ID

                //if the letter is not a part of wordSelected AND is not a part of game-guesses-letters guessed, add it to game-guesses-letters
        // }
  //debugger
    for( i=0; i < wordSelected.length; i++ ) {


         var indexOfI = jQuery.inArray( userInput, wordSelected );

        //console.log(indexOfI);

        if (wordSelected[i] != userInput && indexOfI === -1) {
            
            lettersGuessed.push(userInput);

            $(".game-guesses-letters").text(lettersGuessed);

        } else if (wordSelected[i] === userInput) {


        }



        //console.log(lettersGuessed);
    }
    //make the word invisible in the DOM, but add lines for every letter
    //automatically run the function again at the end

    };

    
});


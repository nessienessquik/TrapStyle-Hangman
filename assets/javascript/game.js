
$(document).ready(function() {
    //set counter variable for wins
    var counterWins = 0;
    $(".game-wins").text(counterWins);

    //set counter for number of guesses left
    var counterGuess = 15;
    $(".game-guesses-remaining").text(counterGuess);

    // empty array for letters guessed
    var lettersGuessed = [];

    //create array of hangman terms
    var wordsArray = ["migos", "future", "ti", "waka flocka flame", "gucci mane", "lil uzi vert", "young thug", "2 chainz", "young jeezy", "fetty wap", "travis scott", "rick ross", "rae sremmurd", "ugk", "master p", "yo gotti", "chief keef", "too short", "cardi b", "rich homie quan", "bobby shmurda", "lil yachty", "21 savage"];
    var wordSelected = [];

    document.onkeyup = function() { 

        //store event.key into a variable
        var userInput = event.key;

        //deals with generating a random word & displaying correct letter guesses
        //if there isn't a word selected, randomy select one from wordsArray
        if (wordSelected.length === 0) {
            var newWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

                for (i=0; i < newWord.length; i++) {
                    //push to wordSelected array
                    wordSelected.push(newWord[i]);

                    //if statement adds appends spaces with "empty container" class
                    if( wordSelected[i] === " " && userInput != wordSelected[i]) {
                        $(".invisible-word").append("<div class='empty-container'> </div>");

                    } else { 
                        //appends letters with "letter container", "letters", "hide", and character-specific classes
                        $(".invisible-word").append("<div class='letter-container'><div class='letters " + wordSelected[i] + " hide'>" + wordSelected[i] + "</div></div>");

                    }//closes if statement for auto-hiding letters

                }  //closes for loop to push leters to wordSelected array

            }  else { //else, run a for loop on the wordSelected array, and if the userInput letter = a letter in the wordSelected array, the "hide" class will be removed, making the letter visible
                
                for(i = 0; i < wordSelected.length; i++) {
                    if(wordSelected[i] === userInput) {
                        $("." + userInput).removeClass("hide");
                    }//closes if statement for removing hide class

                    //deals with winning. if counter guess is not equal to zero and no letters classes have the hidden class applied, display winner button and iterate counterWins variable

                    var hideTest = $(".letters").hasClass("hide");
                    console.log(wordSelected);
                    

                    if(hideTest === false && counterGuess > 0) {
                        $(".game-winner").removeClass("hide");

                        counterWins = counterWins + 1;
                        $(".game-wins").text(counterWins);
                    }//closes if statement for hideTest

                }//closes for loop for wordSelected array
            
            }//closes if/else statement

        //deals with displaying incorrect letter guesses
        //runs loop on wordSelected, stores the index # of userInput letter in the wordSelected and lettersGuessed arrays
        for( i=0; i < wordSelected.length; i++ ) {

             var indexOfW = jQuery.inArray( userInput, wordSelected );
             var indexOfG = jQuery.inArray( userInput, lettersGuessed );

            //if the userInput letter is NOT the wordSelected and lettersGuessed arrays, push to the lettersGuessed array & display in the game-guesses-letters span on the DOM
            if (wordSelected[i] != userInput && indexOfW === -1 && indexOfG === -1) {
                
                lettersGuessed.push(userInput);

                $(".game-guesses-letters").text(lettersGuessed);

                //also, increment the counterGuess variable down one and display that in the game-guesses-remaining span in the DOM
                counterGuess = counterGuess - 1;

                $(".game-guesses-remaining").text(counterGuess);


                if(counterGuess === 0) {
                    $(".game-over").removeClass("hide");  
                    $(".letters").removeClass("hide"); 
                    }//closes inner if counterGuess = 0 statement

            }//closes if userInput = wordSelected / indexOfW & indexOfG = -1 statement 

        }//closes for loop

    };//closes onKeyUp function

    //deals with resetting. this button is hidden by default, but if it's clicked it resets the game 
    $(".game-over, .game-winner").on("click", function() {
        //debugger;
        counterGuess = 15;
        wordSelected = [];
        $(".invisible-word").empty();
        $(".game-guesses-letters").empty();
        $(".game-over, .game-winner").addClass("hide");

        var newWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

        for (i=0; i < newWord.length; i++) {
            //push to wordSelected array
            wordSelected.push(newWord[i]);

            if( wordSelected[i] === " ") {
                $(".invisible-word").append("<div class='empty-container'> </div>");

            } else { 
                //appends letters with "letter container", "letters", "hide", and character-specific classes
                $(".invisible-word").append("<div class='letter-container'><div class='letters " + wordSelected[i] + " hide'>" + wordSelected[i] + "</div></div>");

            }
            //auto-hides all of the letters in the wordSelected
            //$(".letters").addClass("hide");    

        }  //closes for loop to push letters to wordSelected array
 
    });//closes the click function on game-over button

    
});//closes document ready function



$(document).ready(function() {
    //set counter variable for wins
    var counterWins = 0;
    $(".game-wins").text(counterWins);

    //set counter for number of guesses left
    var counterGuess = 10;
    $(".game-guesses-remaining").text(counterGuess);

    // empty array for letters guessed
    var lettersGuessed = [];

    // variable for letter key entered
    var userInput;

    //create array of hangman terms
    var wordsArray = ["migos", "future", "ti", "waka flocka flame", "gucci mane", "lil uzi vert", "young thug", "2 chainz", "young jeezy", "fetty wap", "travis scott", "rick ross", "rae sremmurd", "ugk", "master p", "yo gotti", "chief keef", "too short", "cardi b", "rich homie quan", "bobby shmurda", "lil yachty", "21 savage"];
    var lettersArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"]
    var wordSelected = [];

    //action functions
    function confirmAlpha(a){
        //compares event.key to lettersArray. if the event key is in the alphabet, it will store it to var userInput variable

        for( i=0; i < lettersArray.length; i++ ){
            if(a === lettersArray[i]){
                userInput = event.key;
            }
        }

    }

    function generateRandomWord(){
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

    }

    function runHideTest(){

        //deals with winning. if counter guess is not equal to zero and no letters classes have the hidden class applied, display winner button and iterate counterWins variable

        var hideTestLetters = $(".letters").hasClass("hide");   
        var hideTestWinners = $(".game-winner").hasClass("hide");   

        if(hideTestLetters === false && hideTestWinners === true && counterGuess > 0) {
            $(".game-winner").removeClass("hide");

            counterWins++;
            $(".game-wins").text(counterWins);
            console.log(counterWins);
        }//closes if statement for hideTest

    }

    function compareSelectedWord() {
        //run a for loop on the wordSelected array, and if the userInput letter = a letter in the wordSelected array, the "hide" class will be removed, making the letter visible
                

                for(i = 0; i < wordSelected.length; i++) {

                    var indexOfW = jQuery.inArray( userInput, wordSelected );
                    var indexOfG = jQuery.inArray( userInput, lettersGuessed );

                    if(wordSelected[i] === userInput) {
                        $("." + userInput).removeClass("hide");
                    } else if (indexOfW === -1 && indexOfG === -1 && counterGuess > 0){

                        lettersGuessed.push(userInput);

                        $(".game-guesses-letters").append("<span class='guess-container'>" + userInput + "</span>");

                        //also, increment the counterGuess variable down one and display that in the game-guesses-remaining span in the DOM
                        counterGuess--;

                        $(".game-guesses-remaining").text(counterGuess);


                        if(counterGuess === 0) {
                            $(".game-over").removeClass("hide");  
                            $(".letters").removeClass("hide"); 
                            }//closes inner if counterGuess = 0 statement

                    }

                }//closes for loop for wordSelected array

                runHideTest();
    }

    function checkWordSelected() {
        //deals with generating a random word & displaying correct letter guesses
        //if there isn't a word selected, randomy select one from wordsArray
        if (wordSelected.length === 0) {

            generateRandomWord();

            }  else { 

            compareSelectedWord();
            
            } //closes if/else statement
    }

    document.onkeyup = function() { 

        confirmAlpha(event.key);
        checkWordSelected();

        };//closes onKeyUp function


        //deals with resetting. this button is hidden by default, but if it's clicked it resets the game 
    $(".game-over, .game-winner").on("click", function() {

        counterGuess = 10;
        wordSelected = [];
        lettersGuessed = [];
        $(".invisible-word").empty();
        $(".game-guesses-letters").empty();
        $(".game-over, .game-winner").addClass("hide");
        
        generateRandomWord()
 
    });//closes the click function on game-over button


});//closes document ready function


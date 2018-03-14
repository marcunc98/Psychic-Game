// **VARIABLES**

        // this variable is establised so that i have a means to produce letter gues by both me and computer. As well, our functions and methods to navigate
        var computerChoices = ["a", "b", "c"];
        //"d", "e", "f", "g", "h", "i", "j" ,"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
        // this variables are needed to keep count and measure success and track guesses attempted
        var wins = 0;
        var losses = 0;
        var guessesRemaining =5;
        var letterCount = [];
        var computerGuesses;

        // FUNCTIONS   
        function reset() {

            computerGuesses = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log("computerGuesses");
            console.log(computerGuesses);
            guessesRemaining = 5;
            letterCount = [];


            document.querySelector("#guessesLeft").innerHTML = guessesRemaining;
            document.querySelector("#guessesMade").innerHTML = letterCount.join();
        }

        reset();

        document.onkeyup = function (event) {

            var userGuesses = event.key;
            console.log(userGuesses);
            

            if (userGuesses.toLowerCase() === computerGuesses) {
                wins++;
                console.log("win");
                console.log(userGuesses);

                document.querySelector("#wins").innerHTML = wins;
                reset();
            }
            else {

                letterCount.push(userGuesses);

                document.querySelector("#guessesMade").innerHTML = letterCount.join();
            
                guessesRemaining = guessesRemaining - 1;
                console.log(guessesRemaining);

                document.querySelector("#guessesLeft").innerHTML = guessesRemaining;

                document.querySelector("#losses").innerHTML = losses;

                if (guessesRemaining === 0) {
                    losses++;
                    alert("Computer guess: " + computerGuesses);
                    reset();
                }
            }


        }

// player makes their choice
// only allow choices "r", "p", and "s"
// computer makes choice
// capture choices
// compare the computer and player choices to determine who won or if it's a tie
// display wins, loses, ties on page


// VARIABLES
// ==========================================================

var choices = ["r", "p", "s"];
var computerChoiceImage = ["assets/images/rock.svg", "assets/images/paper.svg", "assets/images/scissors.svg"]
var playerChoiceImage = ["assets/images/rock.svg", "assets/images/paper.svg", "assets/images/scissors.svg"]
var winCount = 0;
var lossCount = 0;
var tieCount = 0;




// FUNCTIONS
// ==========================================================


window.onload = function() {

    document.onkeyup = function() {
        
        //after the key is released, create playerChoice that is the keycode that's attached to the key they pressed -- turn it into string and turn it into lowercase
        var playerChoice = String.fromCharCode(event.keyCode).toLowerCase();

        //testing
        console.log(playerChoice);


        //computer makes its choice
        var computerChoice = choices[Math.floor(Math.random()*choices.length)];

        //testing
        console.log(computerChoice);

        if (playerChoice === "r" || playerChoice === "p" || playerChoice === "s") {
        
            computerChoice

            //if both the computer and player choose "r"
            if (computerChoice === "r" && playerChoice === "r") {
                tieCount++;
            
            //if both the computer and player choose "p"
            } else if (computerChoice === "p" && playerChoice === "p") {
                tieCount++;

            //if both the computer and player choose "s"
            } else if (computerChoice === "s" && playerChoice === "s") {
                tieCount++;

            } else if (computerChoice === "r" && playerChoice === "p") {
                winCount++;
            
            } else if (computerChoice === "r" && playerChoice === "s") {
                lossCount++;
            
            } else if (computerChoice === "p" && playerChoice === "r") {
                lossCount++;
            
            } else if (computerChoice === "p" && playerChoice === "s") {
                winCount++;
            
            } else if (computerChoice === "s" && playerChoice === "r") {
                winCount++;
            
            } else if (computerChoice === "s" && playerChoice === "p") {
                lossCount++;
            }
        } else {
            //if none of the situations above occur, the player must have chosen a letter other than "r," "p," or "s"
            alert ("Please select an R, a P, or an S.")
        }
        

        //show images of game choices
        if (computerChoice === "r") {
            document.getElementById("choice-image-computer").src = "assets/images/rock.svg";
        } else if (computerChoice === "p") {
                document.getElementById("choice-image-computer").src = "assets/images/paper.svg";
        } else {
        document.getElementById("choice-image-computer").src = "assets/images/scissors.svg";
        }

        if (playerChoice === "r") {
            document.getElementById("choice-image-player").src = "assets/images/rock.svg";
        } else if (playerChoice === "p") {
                document.getElementById("choice-image-player").src = "assets/images/paper.svg";
        } else {
        document.getElementById("choice-image-player").src = "assets/images/scissors.svg";
        }

        //show counters on page
        document.getElementById("win-count-html").innerHTML = winCount;
        document.getElementById("loss-count-html").innerHTML = lossCount;
        document.getElementById("tie-count-html").innerHTML = tieCount;

    }

    //reset game
    document.getElementById("reset-button").addEventListener("click", function(){
        
        //set counters back to 0
        winCount = 0;
        lossCount = 0;
        tieCount = 0;

        //show 0 values in DOM
        document.getElementById("win-count-html").innerHTML = winCount;
        document.getElementById("loss-count-html").innerHTML = lossCount;
        document.getElementById("tie-count-html").innerHTML = tieCount;

      });

}











// CALL FUNCTIONS
// ==========================================================


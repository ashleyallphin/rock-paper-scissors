// player makes their choice
// only allow choices "r", "p", and "s"
// computer makes choice
// capture choices
// compare the computer and player choices to determine who won or if it's a tie
// display wins, loses, ties on page


// VARIABLES
// ==========================================================

var choices = ["r", "p", "s"];
var winCount = 0;
var lossCount = 0;
var tieCount = 0;




// FUNCTIONS
// ==========================================================

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
        
        //if both the computer and player choose "r"
        if (computerChoice === "r" && playerChoice === "r") {
            tieCount++;
            console.log("Ties: " + tieCount);
        
        //if both the computer and player choose "p"
        } else if (computerChoice === "p" && playerChoice === "p") {
            tieCount++;
            console.log("Ties: " + tieCount);

        //if both the computer and player choose "s"
        } else if (computerChoice === "s" && playerChoice === "s") {
            tieCount++;
            console.log("Ties: " + tieCount);

        } else if (computerChoice === "r" && playerChoice === "p") {
            winCount++;
            console.log("Wins: " + winCount);
        
        } else if (computerChoice === "r" && playerChoice === "s") {
            lossCount++;
            console.log("Losses: " + lossCount);
        
        } else if (computerChoice === "p" && playerChoice === "r") {
            lossCount++;
            console.log("Losses: " + lossCount);
        
        } else if (computerChoice === "p" && playerChoice === "s") {
            winCount++;
            console.log("Wins: " + winCount);
        
        } else if (computerChoice === "s" && playerChoice === "r") {
            winCount++;
            console.log("Wins: " + winCount);
        
        } else if (computerChoice === "s" && playerChoice === "p") {
            lossCount++;
            console.log("Losses: " + lossCount);
        }
    } else {
        //if none of the situations above occur, the player must have chosen a letter other than "r," "p," or "s"
        alert ("Please select an r, p, or s.")
    }
    
    //show counters on page
    document.getElementById("win-count-html").innerHTML = winCount;
    document.getElementById("loss-count-html").innerHTML = lossCount;
    document.getElementById("tie-count-html").innerHTML = tieCount;

}









// CALL FUNCTIONS
// ==========================================================


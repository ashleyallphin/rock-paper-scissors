// player makes their choice
// only allow choices "r", "p", and "s"
// computer makes choice
// capture choices
// compare the computer and player choices to determine who won or if it's a tie
// display wins, loses, ties on page


// VARIABLES
// ==========================================================

var choices = ["r", "p", "s"];



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
        
        // testing
        // console.log ("r, p, or s")

        

    } else {
        alert ("Please select an r, p, or s.")
    }

}

// CALL FUNCTIONS
// ==========================================================

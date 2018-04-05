var board = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
var newBoard = [];

function printBoard() {
    console.log(board)
}
function playerAction() {
    var pebblePrompt = parseInt(prompt("Please choose either 1, 2, or 3 pebbles to remove."));
    if (pebblePrompt === 1) { 
        board.pop();
    } else if (pebblePrompt === 2) { 
        board.splice(0, 2);        
    } else if (pebblePrompt === 3) { 
        board.splice(0, 3);
    } else if (pebblePrompt !== 1, 2, 3) { 
        var noMatch = parseInt(prompt("Please choose ONLY 1, 2, or 3 pebbles to remove."));
    }
    printBoard();
}
function checkVictory() {
    if (board.length >= 1) {
        playerAction(); 
        return true;
    }
}
while (checkVictory() === true) {
    playerAction();
}

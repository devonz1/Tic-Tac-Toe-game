const cells = document.querySelectorAll(".cell"); /*this will target our items in the html document
 with the class of cell*/
const statusText = document.querySelector("#statusText"); /*this queryselector will
target all of our ids in html with the id statusText*/

const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],/*<these will be the indexes for each box straight across*/
    [0, 3, 6],
    [1, 4, 7],/*<these will be the indexes for the boxes in each column*/
    [2, 5, 8],
    [0, 4, 8],/*these are for the diagonal boxes index*/
    [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;  /*this function will start the game  for each cell
    that is clicked in the grid it will show X or O the restart button eventlistener
    will restart the game once button is clicked and it will let the users know whos turn
    it is */
}

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");

    if (options[cellIndex] != "" || !running) {
        return;
    }
    updateCell(this, cellIndex);

    checkWinner();

}
function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer; /* fro each cell clicked this function
    will update the game and let the users know whos turn it is based on
    if x clicks a cell or O.

}

function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;  /*this function will 
   decide whos turn it is based on the currentplayer variable and the changeplayer function
   will switch to either "X" or "O"*/
}

function checkWinner() {
    let = roundWon = false;
    for (let i = 0; i < winConditions.length; i++){
    const condition = winConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];   /* these will check the options of our 
      winConditions at each inexes to see if anyone won the game the for loop will iterate 
      through each indexes in the winconditee if within our options array if there are no spaces 
        and their the same letter there is a winner */
    const cellC = options[condition[2]];



    if(cellA == "" || cellB == "" || cellC == ""){
        continue;
    }


   if (cellA == cellB && cellB == cellC){
         roundWon = true;
         break;
   }
}
  
   if(roundWon){
statusText.textContent = `${currentPlayer} wins!`;
   running = false;
   }
   else if(!options.includes("")){
     statusText.textContent = `Draw!`
     running = false;
   }
   else{
    changePlayer();
   }
}
 
function restartGame() {
currentPlayer = "X";
options = ["", "", "", "", "", "", "", "", ""];
 statusText.textContent = `${currentPlayer}'s turn`;
  cells.forEach(cell => cell.textContent = "" );
  running = true;
}  
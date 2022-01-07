/*
In this exercise we will be writing an algorithm, to detect if two queens on a chess board can attack each other.

Queen Threat Detector
A game of chess is played on an 8 column by 8 row board. In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.
*/

/*
In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays within an array). For this exercise, our chess board will have 2 queens, and nothing else. A 1 in the array represents a queen on the corresponding square, and a O in the array represents an unoccupied square.

So the following chess board:
***PICTURE OF CHESS BOARD***
Would be represented in JavaScript like this:
[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]

Our first challenge will be to write a function that generates a chess board like this. We will then write a function to detect weather or not the two queens are positioned so that they attack each other.
*/

let generateBoard = function (queenOne, queenTwo) {
  const boardSize = 8;

  const chessBoard = [];
  for (let y = 0; y < boardSize; y++) {
    const column = [];
    for (let x = 0; x < boardSize; x++) {
      ((queenOne[0] === y && queenOne[1] === x) || (queenTwo[0] === y && queenTwo[1] === x)) 
      ? column.push(1) : column.push(0);
    }; 
    chessBoard.push(column);
  }

  return chessBoard
};


let queenThreat = function (someBoard) {
  let queensAttack = false;
  for (let y = 0; y < someBoard.length; y++) {
    for (let x = 0; x < someBoard.length; x++) {
      
      //find a queen
      if (someBoard[y][x] === 1) {
        let yLocation = someBoard.indexOf(someBoard[y]);
        let xLocation = someBoard.indexOf(someBoard[x]);
        console.log(yLocation, xLocation);
        
        //Scan for horizontal or vertical threat
        let hv = 0;
        while (hv < someBoard.length) {
          if ( ((someBoard[y][hv] === 1) && (hv !== x)) || ((someBoard[hv][x] === 1) && (hv !== y)) ) {
            queensAttack = true;
            return queensAttack; 
          }
          hv++;
        };
        
        //Scan for diagonal threat, southwest direction
        let sw = 1;
        while (sw <= x) {
          if (someBoard[y + sw][x - sw] === 1) {
            queensAttack = true;
            return queensAttack; 
          }
          sw++;
        }
        
        //Scan for diagonal threat, northwest direction
        let nw = 1;
        while (nw < (someBoard.length - y)) {
          if (someBoard[y + nw][x + nw] === 1) {
            queensAttack = true;
            return queensAttack; 
          }
          nw++;
        }

      return queensAttack;
      }
    }
  }
}

//SCENARIO 1
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

/*
Expected Output
[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true
*/

//SCENARIO 2
whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
/*
Expected Output
[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false
*/

// Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
// Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.
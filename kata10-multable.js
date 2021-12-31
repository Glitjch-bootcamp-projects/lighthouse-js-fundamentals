// Multiplication Table
// We will be given a number as our input data. This number is the highest value of our multiplication table. Our job is to generate a multiplication table for the values from 1 to the provided number.


const multiplicationTable = function(maxValue) {
  // Your code here
let finishTable = "";

  //Go through the values. This for...loop represents each new row
  for (let x = 1; x <= maxValue; x++) {
    let lineOfNumbers = [];
    let y = 1;

    //This while...loop will calculated the individual values within a row based on the row# it is in, or x. While...loop will help break each row into new nested arrays with consistent row length based on maxValue. If rather another for...loop was used here, it would be one complete array only, appearing to make potential line break coding more ambiguous 
    while (y <= maxValue) {
      //inputting each value, multiplied by x, which represents the row number
      lineOfNumbers.push(y * x);
      y++
    }
    
    //Convert the array into a string using .join(), as to remove the commas, as desired by expected output
    lineOfNumbers = lineOfNumbers.join(" ");
    //Extract this data out of the loop onto the return-able variable, while adding a line break for each time a for...loop is iterated
    finishTable += lineOfNumbers + "\n";    
  }

  //Removing the final undesired format:The extra line break at the end
  finishTable = finishTable.replace(maxValue**2 + "\n", maxValue**2)

  return finishTable; 


};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

// Output

// 1

// 1 2 3 4 5
// 2 4 6 8 10
// 3 6 9 12 15
// 4 8 12 16 20
// 5 10 15 20 25 

// 1 2 3 4 5 6 7 8 9 10
// 2 4 6 8 10 12 14 16 18 20
// 3 6 9 12 15 18 21 24 27 30
// 4 8 12 16 20 24 28 32 36 40
// 5 10 15 20 25 30 35 40 45 50
// 6 12 18 24 30 36 42 48 54 60
// 7 14 21 28 35 42 49 56 63 70
// 8 16 24 32 40 48 56 64 72 80
// 9 18 27 36 45 54 63 72 81 90
// 10 20 30 40 50 60 70 80 90 100
// Create a function named multiplicationTable that receives a number maxValue as input and creates a square multiplication table where maxValue is the largest value in the table.ß
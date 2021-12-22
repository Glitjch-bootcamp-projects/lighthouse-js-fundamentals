//When this function is given an array and a value, 
// it should return the index of the last time the value occurs in the array. 
// If the value never occurs, the function should return -1.

function lastIndexOf(array, value) {
  //reverse looping through the array of numbers
  for (let test = array.length - 1; test >= 0; test--) {
    
    //the array is NOT empty and the value equals to one of the items in the array.
    if ((array.length > 0) && (value === array[test])) {
      //outputs the the last index that matches the value
      return test;
    }

    //the array is NOT empty and the first index (last one to be looped) does not equal to the value.
    else if ((array.length > 0) && (test === 0) && (array[0] !== value)) {
      //outputs -1
      test = -1; 
      return test;
    }
  }

  //the first parameter for array is empty.
  if (array.length === 0) {
    let test = -1; 
    return -1;
  }
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
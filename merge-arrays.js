// We've made a mistake, our researchers had already sorted the arrays for us, from least liked to most liked—but our concat function didn't take this into account. We'll need to create a new function that keeps our data sorted.

// Challenge
// Define a function called merge

// The function should, when given two sorted arrays containing numbers, returns a sorted array of the numbers from both lists.

const merge = function (arr1, arr2) {
  let combinedArr = arr1.concat(arr2);
  combinedArr.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    else if (a > b) {
      return 1;
    }
  });
  return combinedArr;
};

// For example:

// code	output
// merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]);	[ 1, 2, 3, 4, 4, 5, 6 ]
// merge([ 4 ], [ 2, 5, 8 ]);	[ 2, 4, 5, 8 ]
// merge([ 1, 2, 6 ], []);	[ 1, 2, 6 ]
// Tips
// You may paste the following code after your function definition to help you verify it works correctly:
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
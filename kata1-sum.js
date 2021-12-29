const sumLargestNumbers = function(data) {
  // console.log("data: " + data);
  
  let largest = 0;
  let secondLargest = 0;

  //if a value is greater than the largest number, that value becomes the largest number, and the previous largest number is bumped to the second largest number.
  for (let i of data) {
    if (i > largest) {
      //previous largest shifts down to being second largest.
      secondLargest = largest;
      //value becomes new largest.
      largest = i;
    }
  }

  //adding both largest and second largest numbers.
  return secondLargest + largest;
};

console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126

//gist: glitjch/gist:780429193e8d8928b379517626ff3d7d 
//link: https://gist.github.com/glitjch/780429193e8d8928b379517626ff3d7d
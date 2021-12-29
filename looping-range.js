// Creating a long array of repeating numbers can be a time consuming task. 
// Imagine creating an array of every even number from 0 to 100. In this challenge, 
// we will build a function that creates an array like this for a given start, end, and step parameter.

function range (start, end, step) {
  const array = [];
  if ((start < end) && (step > 0) && ((start !== undefined) && (end !== undefined) && (step !== undefined))) {

    for (let i = start; i <= end; i += step) {
      array.push(i);
    } return array;
  }
  else {
    return array;
  }
}
// console.log(range(10, 0, 1));
// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
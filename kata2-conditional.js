// For this kata, we'll be adding only the numbers in the array which match the given condition.\
const conditionalSum = function(values, condition) {
  let sumConditioned = 0;
  for (let i = 0; i < values.length; i++) {
    //condition is even numbers
    if ((condition === "even") && (values[i] % 2 === 0)) {
      sumConditioned += values[i];
    }
    //condition is odd numbers
    else if ((condition === "odd") && (values[i] % 2 === 1)) {
      sumConditioned += values[i];
    }
    //condition is either but values do not match up
    else if (values[i] === undefined) {
      return 0;
    }
  }
  return sumConditioned;
};


console.log(conditionalSum([1, 2, 3, 4, 5], "even")); //6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); //9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); //144
console.log(conditionalSum([], "odd")); //0

// Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

// Use some sort of looping. Do Not use Array.prototype.filter()


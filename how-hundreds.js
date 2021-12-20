const howManyHundreds = function (num) {
  let rounded = "";
  rounded = num / 100;
  return Math.floor(rounded);
}

console.log(howManyHundreds(1234), "=?", 12);
console.log(howManyHundreds(200), "=?", 2);
console.log(howManyHundreds(123456), "=?", 1234);
console.log(howManyHundreds(55), "=?", 0);
console.log(howManyHundreds(100), "=?", 0);
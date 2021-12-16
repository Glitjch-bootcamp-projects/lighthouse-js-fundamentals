/*
My First Attempt (using ternary operators)

//Complete the logic in the function whichSchool. 
The function returns one of the following strings, based on the value of age:
 - Elementary School if age is below 13
 - Secondary School if age is between 13 and 18 (both inclusive)
 - Lighthouse Labs in all other cases.

var age = "19";

let whichSchool = age < 13 ? "Elementary School" : ((age >= 13 && age <= 18) ? "Secondary School" : "Lighthouse Labs");

console.log(whichSchool)

*/

let whichSchool  = function (age) {
  //Complete the logic in the function whichSchool.
/* 
The function returns one of the following strings, based on the value of age:
 - Elementary School if age is below 13
 - Secondary School if age is between 13 and 18 (both inclusive)
 - Lighthouse Labs in all other cases.
*/
  if (age < 13) {
    return "Elementary School";
  } else if (age >= 13 && age <= 18) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }
  /*age = "19";
  const whichSchool = age < 13 ? "Elementary School" : ((age >= 13 && age <= 18) ? "Secondary School" : "Lighthouse Labs");
  console.log(whichSchool)
  */
}
console.log(whichSchool(13))

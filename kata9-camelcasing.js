const camelCase = function(input) {
  // Your code here

  //Setting up for a list of each word in a string by using an array. Using .split() method divides sections into string array values by the chosen value, and in this case ,the spaces between each word: " " of .split(" ")
  const firstUpper = [];
  let listOfWords = input.split(" ");

  //loop through each word and conver the first letter of each word with .toUpperCase(), followed by joining the remainder of its characters, using .subtring()
    for (let i = 0; i < listOfWords.length; i++) {
      firstUpper.push(listOfWords[i][0].toUpperCase() + listOfWords[i].substr(1))  
    }
    
    //Now that each word has been title-cased, remove the spaces between by using .join() and "" to represent zero space between each joined values, so we use .join("") 
    let camelCombined = firstUpper.join("");

    return camelCombined;    
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
// Output
// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious
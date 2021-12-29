// In this exercise, we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u.

const numberOfVowels = function(data) {
  //vowels
  const vowels = ["a", "e", "i", "o", "u"];
  let totalVowels = 0;
  for (let i = 0 ; i < data.length; i++) {
    //increase vowel count whenever a loop value matches with a vowel, i.e. is found in the vowels variable.
    if (vowels.includes(data[i]) === true) {
      totalVowels += 1;
    }
  }
  return totalVowels
};

console.log(numberOfVowels("orange")); //3
console.log(numberOfVowels("lighthouse labs")); //5
console.log(numberOfVowels("aeiou")); //5

//Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.
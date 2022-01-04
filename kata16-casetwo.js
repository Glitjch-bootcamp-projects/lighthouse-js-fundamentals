const makeCase = function(input, cases) {
  // Put your solution here
  const splitStr = (input) => input.split(" ");
    
  if (cases === "camel") {
    casedInput = splitStr(input);
    let revisedStr = "";
    for (let i = 0; i < casedInput.length; i++) {
      (i === 0) ? revisedStr += casedInput[i] :   
      revisedStr += casedInput[i][0].toUpperCase() + casedInput[i].substr(1);
    }
    revisedStr.trim();
    return revisedStr;
  }

  if (cases === "pascal") {
    casedInput = splitStr(input);
    let revisedStr = "";
    for (let i = 0; i < casedInput.length; i++) {
      revisedStr += casedInput[i][0].toUpperCase() + casedInput[i].substr(1);
    }
    revisedStr.trim();
    return revisedStr;
  }
  
  if (cases === "snake") {
    casedInput = splitStr(input);
    let revisedStr = casedInput.join("_");
    revisedStr.trim();
    return revisedStr;
  }
  
  if (cases === "kebab") {
    casedInput = splitStr(input);
    let revisedStr = casedInput.join("-");
    revisedStr.trim();
    return revisedStr;
  }
  
  if (cases === "title") {
    casedInput = splitStr(input);
    let revisedStr = "";
    for (const words of casedInput) {
      revisedStr += words[0].toUpperCase() + words.substr(1) + " ";
    }
    revisedStr.trim();
    return revisedStr;
  }
  
  if (cases === "vowel") {
    casedInput = splitStr(input);
    let revisedStr = "";
    const listOfVowels = ["a", "e", "i", "o", "u"]; 
    
    //every word of the string
    for (let v = 0; v < casedInput.length; v++) {
      //every letter of each word
      let upperOrLower = "";
      for (let w = 0; w < casedInput[v].length; w++) {
        //if a vowel, uppercase, else lowercase
        listOfVowels.includes(casedInput[v][w]) ?
          upperOrLower += (casedInput[v][w]).toUpperCase():
          upperOrLower += (casedInput[v][w]).toLowerCase();      
      }
      revisedStr += upperOrLower + " ";
    }
    revisedStr.trim();
    return revisedStr;
  };

  if (cases === "consonant") {
    casedInput = splitStr(input);
    let revisedStr = "";
    const listOfVowels = ["a", "e", "i", "o", "u"]; 
    
    //every word of the string
    for (let v = 0; v < casedInput.length; v++) {
      //every letter of each word
      let upperOrLower = "";
      for (let w = 0; w < casedInput[v].length; w++) {
        //if a vowel, lowercase, else uppercase
        listOfVowels.includes(casedInput[v][w]) ?
        upperOrLower += (casedInput[v][w]).toLowerCase():      
          upperOrLower += (casedInput[v][w]).toUpperCase();
      }
      revisedStr += upperOrLower + " ";
    }
    revisedStr.trim();
    return revisedStr;
  };

  if (cases === "upper", "snake") {
    casedInput = splitStr(input);
    let revisedStr = "";
    for (const words of casedInput) {
      revisedStr += "_" + words.toUpperCase();
    }
    revisedStr.trim();
    if (revisedStr[0] === "_") {
      revisedStr = revisedStr.substr(1);
    }
    return revisedStr;
  }
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

/*
thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING
Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.
*/
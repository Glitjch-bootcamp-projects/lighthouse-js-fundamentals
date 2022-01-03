// In this activity, we are going to create a function that can calculate which coins we should use when we need to give change.

// Change Calculator
// We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

// Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

// Valid denominations are as follows:

// Twenty dollars
// Ten dollars
// Five dollars
// Two dollars
// One dollar
// Quarter (25¢)
// Dime (10¢)
// Nickel (5¢)
// Penny (1¢)
// JS

const calculateChange = function(total, cash) {
  // Your code here

  let denominations = {
    // twentyDollar: 0,
    // tenDollar: 0,
    // fiveDollar: 0,
    // twoDollar: 0,
    // oneDollar: 0,
    // quarter: 0,
    // dime: 0,
    // nickel: 0,
    // penny: 0
  }
  
  let change = cash - total;
  
  //These nested ternary operators will determine which switch case (along with its money type) to start
  const typeOfChange = function (changeCount) {
    return changeCount >= 2000 ? "twentyDenom" :
      changeCount >= 1000 ? "tenDenom" :
        changeCount >= 500 ? "fiveDenom" :
          changeCount >= 200 ? "twoDenom" :
            changeCount >= 100 ? "dollarDenom" :
              changeCount >= 25 ? "quarterDenom" :
                changeCount >= 10 ? "dimeDenom" :
                  changeCount >= 5 ? "nickelDenom" :
                   changeCount >= 1 ? "pennyDenom" : "no change left!"; 
  }
  
  //Some functions to calculate the quantity of chosen largest denomination, and calculate the new remaining change amount, respectively.
  const howManyDenom = (valueOfDenom) => Number((Math.floor(change / valueOfDenom)).toFixed(0)); 
  const newLeftover = (valueOfDenom) => change % valueOfDenom;

  //Designed to trickle down to the next biggest denomination
  switch (typeOfChange(change)) {    
    case "twentyDenom": 
      denominations.twentyDollar = howManyDenom(2000);
      change = newLeftover(2000);

    case "tenDenom": 
      denominations.tenDollar = howManyDenom(1000);
      change = newLeftover(1000);
    
    case "fiveDenom": 
      denominations.fiveDollar = howManyDenom(500);
      change = newLeftover(500);
    
    case "twoDenom":
      denominations.twoDollar = howManyDenom(200);
      change = newLeftover(200);
      
    case "dollarDenom": 
      denominations.oneDollar = howManyDenom(100);
      change = newLeftover(100);
    
    case "quarterDenom": 
      denominations.quarter = howManyDenom(25);
      change = newLeftover(25);
    
    case "dimeDenom": 
      denominations.dime = howManyDenom(10);
      change = newLeftover(10);
    
    case "nickelDenom": 
      denominations.nickel = howManyDenom(5);
      change = newLeftover(5);
    
    case "pennyDenom":
      denominations.penny = howManyDenom(1);
      change = newLeftover(1);
  }

  //Finally, to remove any denominations that made it on the list but is zero
  for (let cleanUpZeroes in denominations) {
    if (denominations[cleanUpZeroes] == 0) {
      delete denominations[cleanUpZeroes];
    }
  }

  return denominations;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// Expected Output
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
// Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. Return a new object that describes the total amount of change for the cashier to give back. Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.
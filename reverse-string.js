//This is my first function example.

//To use a function, declare 'function', followed by an assigned name. Here we'll call it 'mirrorString'.
//Notice how mirrorString, the function's name has () ? Within these brackets you put a scope variable, and in this case we'll name it templateString. This acts like a default character in a video game selection, waiting to be substituted by your final choice of character!
function mirrorString(templateString) {
  //This line may seem confusing. This is a variable for creating the end-product of this function. Think of it as a craft table, just waiting for material to be assembled on it. We'll name it 'reconstructString'. It's left blank because the table is empty to start.
  let reconstructString = "";
  //Here is the for... loop. It's like any basic loop, but notice how we are reversing the order for the purpose of spelling the string backwards. the "-1" for the start is to make sure the last character of the string is chosen (the first character is [0]). If this is still confusing, you may need to review arrays.
  for (i = templateString.length -1; i >= 0; i--) {
    //Within this for... loop, this is where the building blocks churn out! We are telling the loop to place the blocks from our dummy variable, templateString, onto our table, reconstructString. Remember, we can use logical operators like +/- on string data types too.
    reconstructString += templateString[i];
  }
  //Once everything is assembled, we want to present it, by using the 'return' statement. Don't forget that this is the final building step of this factory. It should be the last statement in a function because it stops running the function after.
  return reconstructString;
}
//Now pring it out and show the world what you made! Oh it can move...and talk. What did you say? It possibly can't. Obey me! No. Stay away. Stay away! AHHHHHHHHHH.
console.log(mirrorString("Michael"));
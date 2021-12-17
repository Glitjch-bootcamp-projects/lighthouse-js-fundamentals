/*
 * Programming Quiz: Build A Triangle (5-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as describe above
 */


// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line;
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(stack) {
  var height = "";
  for (var i = 1; i <= stack; i++) {
      height += makeLine(i);
  }
  return height + "\n";
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));
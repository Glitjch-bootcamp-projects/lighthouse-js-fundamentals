/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


a = "Orbiter transfers from ground to internal power" //(T-50 seconds)
b = "Ground launch sequencer is go for auto sequence start" //(T-31 seconds)
c = "Activate launch pad sound suppression system" //(T-16 seconds)
d = "Activate main engine hydrogen burnoff system" //(T-10 seconds)
e = "Main engine start" //(T-6 seconds)
f = "Solid rocket booster ignition and liftoff!" //(T-0 seconds)

// your code goes here
let countDown = 60;
//count down!
while (countDown >= 0) {
    if (countDown === 50) {
          console.log(a);
      }
    else if (countDown === 31) {
          console.log(b);
      }
    else if (countDown === 16) {
          console.log(c);
      }
    else if (countDown === 10) {
          console.log(d);
      }
    else if (countDown === 6) {
          console.log(e);
      }
    else if (countDown === 0) {
          console.log(f);
      }
    else {
          console.log("T-" + countDown + " seconds")
      }
    countDown -= 1;
}
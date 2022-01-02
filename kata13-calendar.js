// In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

// Talking Calendar
// We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

// Input
const talkingCalendar = function(date) {
  // Your code here
  let dividedDate = date.split("/");

  //give error if date inputted incorrectly
  const positiveThreshold = (currentValue) => currentValue > 0;
  if (!(dividedDate[1] < 13) || !(dividedDate[2] < 32) || !dividedDate.every(positiveThreshold)) {
    return console.log("error on date input");
  }
  
  //The year, as is
  let year = dividedDate[0];
  
  //Convereting the month
  let month = dividedDate[1];
  switch (month) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "February";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
  }

  //Converting the day
  let day = dividedDate[2];

  let dayMaker = 1
  if ((day[1] === "1") && (day[0] !== "1")) {
    day += "st"
    dayMaker = 0;
  }
  if ((day[1] === "2") && (day[0] !== "1")) {
    day += "nd"
    dayMaker = 0;
  }
  if ((day[1] === "3") && (day[0] !== "1")) {
    day += "rd"
    dayMaker = 0;
  }
  if (dayMaker === 1) {
    day += "st";
  }

  //If day is one digit, then remove leading zero
  if (day[0] === "0") {
    day = day.substr(1);
  }

  let friendlyDate = month + " " + day + ", " + year;
  return friendlyDate; 
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
// Output
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987
// Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
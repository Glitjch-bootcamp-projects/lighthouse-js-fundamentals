// In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.

const instructorWithLongestName = function(instructors) {

  let longestName = "";
  for (let i of instructors) {
    if (i.name.length > longestName.length) {
      longestName = i.name;
    }
  }
  return longestName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
])); //{name: "Jeremiah", course: "Web"}

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
])); //{name: "Domascus", course: "Web"}

// Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.

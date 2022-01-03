const organizeInstructors = function(instructors) {
  // Put your solution here
  const courseWithInstructor = {};
  for (const sortThrough in instructors) {
   
    //Create a new property with arrays if it doesn't exist
    if (!courseWithInstructor[instructors[sortThrough]["course"]]) {
    courseWithInstructor[instructors[sortThrough]["course"]] = new Array ();
    }

    //Add values to the array
    courseWithInstructor[instructors[sortThrough]["course"]].push(String(instructors[sortThrough]["name"]));

  }
  
  return courseWithInstructor;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
// Expected Output
// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }
// Create a function named organizeInstructors that will receive an array of instructor objects, and will return a new object that has the following format:

// {
//   CourseName: [instructors]
// } 
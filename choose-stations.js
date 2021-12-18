const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
/*
MY FAILED ATTEMPT -LEARN FROM IT
const chooseStations = function (k) {
  //let goodStations = [];
  for (var i = 0; i < 3; i++) {
    if (k[1] === 1) {// && (list[i[2]] === "\'school\'" || list[i[2]] === "\'community centre\'")) {
      console.log(k);
      // return stations;
  }
  }
  //return goodStations;
}

chooseStations(stations)
*/

const chooseStations = function () {
  const goodStations = [];

  for (const station of stations) {
    const capacity = station[1];
    
    if (capacity >= 20) {
      const location = station[2]
      
      if (location === "school" || location === "community centre") {
        goodStations.push(station[0])
      } 
    } 
  }
  return goodStations;
}

console.log(chooseStations(stations))
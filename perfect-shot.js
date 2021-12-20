const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']; 

const finalPosition = function () {
  const coordinates = [0, 0];
  for (const directions of moves) {
    
    switch (directions) {
      case 'north':
        coordinates[1] += 1;
        console.log('north' + coordinates)
        break;
        case 'east':
          coordinates[0] += 1;
          console.log('east' + coordinates)
          break;
          case 'south':
        coordinates[1] -= 1;
        console.log('south' + coordinates)
        break;
        case 'west':
          coordinates[0] -= 1;
          console.log('west' + coordinates)
        break;
    } 
  }
  return coordinates;
}


finalPosition(moves);
// The parade begins at [0, 0]
// The finalPosition function should return the array:
// [-1, 4]

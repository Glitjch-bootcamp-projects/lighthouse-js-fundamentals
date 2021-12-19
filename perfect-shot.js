const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']; 

const finalPosition = function () {
  for (const directions of moves) {
    
    switch (directions) {
      case 'north':
        console.log('north')
        break;
      case 'east':
        console.log('east')
        break;
      case 'south':
        console.log('south')
        break;
      case 'west':
        console.log('west')
        break;
    } 
  }
}


finalPosition(moves);
// The parade begins at [0, 0]
// The finalPosition function should return the array:
// [-1, 4]

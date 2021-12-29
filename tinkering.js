const whereCanIPark = function (spots, vehicle) {
  // Code here!
  let column = 0;
  let row = 0;
  let parkingStall = '';

  switch( vehicle) {
    case 'motorcycle':
      parkingStall += 'M';
    case 'small':
      parkingStall += 'S';
    case 'regular':
      parkingStall += 'R';
  }

  while( row < spots.length ) {
    while( column < spots[row].length ) {
        if( parkingStall.includes( spots[row][column] ) ) {return [column,row]}
      column++;
    }
    column = 0;
    row++;
  }

  return false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
  ));
  //expected output: [4, 0]
  
console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
  ));
  //expected output: false

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
  ))
  //expected output: [3, 1]
const judgeVegetable = function (vegetables, metric) {
  //Where given info is made into an array
  const list = [];
  for (let i = 0; i < vegetables.length; i++) {
    list.push(vegetables[i])
  }
  console.log(list);  
  
  //where the metric value influences how to sort the list variable above, from highest score to lowest
    //UNRESOLVED: WHY CAN'T metric = "d" TRIGGER THE SORT METHOD WITHOUT HARD-CODING????
    list.sort(function(a, b) {
      return b.d - a.d;
      });
    console.log(list);

    list.sort(function(a, b) {
      return b.metric - a.metric;
      });
    console.log(list);
  
  //returns the winner for that specific metric characteristic and vegetable category.
  console.log(list[0].submitter);
  return list[0].submitter;
}

// given input
let vegetables = [
  {
    submitter: 'A',
    d: 5,
  },
  {
    submitter: 'B',
    d: 10,
  },
  {
    submitter: 'C',
    d: 25,
  }
]
metric = "d";
judgeVegetable(vegetables, metric)


vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

metric = "redness";
judgeVegetable(vegetables, metric)
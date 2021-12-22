/*
Welcome back to Codeville, where you are now the mayor! The people of Codeville
want you to focus on Smart City upgrades. You've decided to begin by replacing all of the city's
trash cans with smart cans: when citizens toss their rubbish into the smart can,
it automatically sorts items into waste, recycling, and compost bins.

We need to complete a function called smartGarbage(trash, bins), which will be responsible
for increasing the garbage count for waste, recycling, or compost depending on what
trash is submitted.

The first argument, trash, is a string that will tell our function what type of item is being submitted.
The second argument, bins, is an object containing three properties (waste, recycling, and compost),
which hold some numerical value. Our function must increase the correct value in the bins object,
and then return the newly updated object.
*/

const smartGarbage = function (trash, bins) {
  if (trash === "recycling") {
    bins.recycling += 1;
    // console.log(bins);
    console.log(trash)
    return bins
  }
  if (trash === "waste") {
    bins.waste += 1;
    // console.log(bins);
    console.log(trash)
    return bins
  }
  if (trash === "compost") {
    bins.compost += 1;
    // console.log(bins);
    console.log(trash)
    return bins
  }
}
let bins = {
  recycling: 9,
  waste: 8,
  compost: 7
}
console.log(smartGarbage("compost", bins))
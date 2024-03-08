function findFirstDuplicate(arr) {
  // type your code here
  let result = -1;
  const tested = [];

  for (let i = 0; i < arr.length; i++) {
    if (tested.includes(arr[i])) {
      result = arr[i];
      return result;
    } else {
      tested.push(arr[i]);
    }
  }
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log('Expecting: 3');
  console.log('=>', findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log('');

  console.log('Expecting: -1');
  console.log('=>', findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*
Assign result variable -1;
Declare empty array for tested values.

Iterate over array:
For each item, does does the tested array contain it?

  false: continue
  true: asign result index and return


*/

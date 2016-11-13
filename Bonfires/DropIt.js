/*
 Drop the elements of an array (first argument), starting from the front,
 until the predicate (second argument) returns true.
 */
function dropElements(arr, func) {
  // 1. Set a counter at which the first value that fullfils the requirement is
  var index_when_true = null;
  // 2. Iterate thru the array of values and run function to values
  for ( i = 0 ; i < arr.length ; i +=1){
    if (func(arr[i])) {
      // 3. When array element passes truth test record its index
      index_when_true = i;
      console.log(index_when_true);
      break;
    };
  }
  // 4. Return result
  // a) if no index have been asigned, return empty array
  if (index_when_true === null) return [];
  // b) if index was assigned, slice out a subarray starting from that point
  arr = arr.slice(index_when_true);
  return arr;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log("---------------");
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
console.log("---------------");
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));

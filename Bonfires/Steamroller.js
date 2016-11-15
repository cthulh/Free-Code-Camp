/*
 Flatten a nested array. You must account for varying levels of nesting.
 */
function steamrollArray(arr) {
  /*
  Example from MDN:
   var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
   return a.concat(b);
   }, []);
   */
  /*
  Step 1: call reduce on input array, taking two arguments, a function and an initial value = empty array []
    return arr.reduce(function, []);
  Step 2: the function will concatenate current element with previous element (at first cycle being [], the initial value)
    return arr.reduce(function(prev, curr){
      return prev.concat(curr);
    }, []);
  Step 3: check for nested arrays, and call the function recursively on the element if it is a nested array
  */
  return arr.reduce(function(prev, curr, index, arr){
    console.log("--");
    console.log("Previous value:");
    console.log(prev);
    console.log("Current value:");
    console.log(curr);
    console.log("Index:");
    console.log(index);
    console.log("Running array:");
    console.log(arr);
    return prev.concat(Array.isArray(curr) ? steamrollArray(curr) : curr );
  }, []);
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));
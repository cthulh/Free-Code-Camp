// https://www.freecodecamp.com/challenges/symmetric-difference

function sym(args) {
  var arr = [];
  // 1. Transfer arrays from arguments object (that isn't an array and we can't call array methods on) to new array
  for (x = 0; x < arguments.length; x += 1){
    arr.push(arguments[x]);
  }
  // 2. Call reduce on array of arguments
  var result = arr.reduce(function(prev,curr){
    // a) filter out elements that are not in the other array on both arrays
    var a = prev.filter(function(el){return (curr.indexOf(el) === -1)? true: false;});
    var b = curr.filter(function(el){return (prev.indexOf(el) === -1)? true: false;});
    // b) concatenate both arrays
    return a.concat(b);
  });
  // 3. Filter out unique values from the result set
  result = result.filter(function(el, ind, arr){return (arr.slice(ind + 1).indexOf(el) === -1)? true: false;});
  console.log(result);
  return result;
}

sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
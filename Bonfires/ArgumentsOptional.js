/*
 Create a function that sums two arguments together.
 If only one argument is provided, then return a function that expects one argument and returns the sum.
 */
function addTogether() {
  // 1. Create two vars to store input
  var arg1, arg2;
  // we are assuming at least 1 argument passed
  arg1 = arguments[0];
  console.log(arg1);
  if (typeof(arg1) !== "number") return undefined;
  // 2. If there's only 1 arg passed, return function expression with argument 1 locked in via closure
  if (arguments.length === 1) {
    return function(x){
      if (typeof(x) !== "number") return undefined;
      return x + arg1;
    };
  } else {
    // 3. If two args passed, return sum
    arg2 = arguments[1];
    if (typeof(arg2) !== "number") {
      return undefined;
    } else {
      return arg1 + arg2;
    }
  }
}

console.log(addTogether(2,3));
console.log("----------------");
console.log(addTogether(2,"3"));
console.log("----------------");
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log("----------------");
console.log(typeof([4]));

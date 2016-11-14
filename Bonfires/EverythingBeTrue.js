/*
 Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
 */
function truthCheck(collection, pre) {
  var obj = {};
  var result;
  // Variable to count number of thruthy vals for given prop
  var truths = 0;
  // 1. Iterate over all objects in collection
  for ( i = 0 ; i < collection.length ; i += 1) {
    obj = collection[i];
    // 2. Iterate over objects properties
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (prop === pre && obj[prop]) truths += 1;
      }
    }
  }
  console.log(truths);
  (truths === collection.length) ? result = true : result = false ;
  return result;
}

truthCheck([{"user": "Tinky-Winky", "sex": "ee"}, {"user": "Dipsy", "sex": 1}, {"user": "Laa-Laa", "sex": null}, {"user": "Po", "sex": null}], "sex");

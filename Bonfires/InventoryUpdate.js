/*
 Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
 Update the current existing inventory item quantities (in arr1). If an item cannot be found,
 add the new item and quantity into the inventory array.
 The returned inventory array should be in alphabetical order by item.
 */
function updateInventory(arr1, arr2) {
  var result = [];
  // 1. Iterate over each item in arr1 (current stock levels)
  for (i = 0; i < arr1.length; i += 1){
    result.push(arr1[i]);
    // a) for each added item iterate over arr2 (new delivery) to see if we get more stock of in
    for (j = 0; j < arr2.length; j += 1){
      // b) if so, update its quantity
      if (arr1[i][1] === arr2[j][1]) {
        result[result.length - 1][0] = arr1[i][0] + arr2[j][0];
      }
    }
  }
  // 2. Iterate over arr2 and if the item is new in stock (not in arr1) add it
  for (k = 0; k < arr2.length; k += 1){
    var present = false;
    for (l = 0; l < arr1.length; l += 1){
      if (arr2[k][1] === arr1[l][1]) {
        present = true;
        break;
      }
    }
    if (present === false) result.push(arr2[k]);
  }
  // 3. Sort result array alphabetically and return it
  function byNameSort(a,b){
    console.log("Comparing: " + a[1][0] + " and " + b[1][0] + ", result: " + (a[1][0] > b[1][0]).toString());
    return a[1][0] > b[1][0];
  }
  result.sort(byNameSort);
  console.log(result.toString());
  return result;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

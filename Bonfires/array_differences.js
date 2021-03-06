/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/
function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = arr1.filter(function(val){
    if(arr2.indexOf(val)===-1){
      return true;
    }
    return false;
  }).concat(arr2.filter(function(val){
    if(arr1.indexOf(val)===-1){
      return true;
    }
    return false;
  }));
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

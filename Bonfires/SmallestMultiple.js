/*
 Find the smallest common multiple of the provided parameters that can be evenly divided by both,
 as well as by all sequential numbers in the range between these parameters.
 */
function smallestCommons(arr) {
  var a, b, temp, the_smallest;
  // 1. Switch numbers around so we get [largest, smallest]
  if (arr[1] > arr[0]) {
    temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }
  var range = [];
  // 2. Produce a range array with all numbers in between as well [largest, all in between, smallest]
  for ( i = arr[0]; i >= arr[1] ; i -= 1 ){
    if (i !== 1) range.push(i);
  }
  console.log("Range: " + range);
  // 3. To do that, we will be stepping through all numbers that are multiples of the 2 largest numbers in the range
  var step = range[0] * range[1];
  console.log("Step: " + step);
  var j = step;

  while (true) {
    var counter = 0;
    for ( k = 2 ; k < range.length ; k += 1){
      // Count how many times its been evenly divided
      if (j % range[k] === 0){
        counter += 1;
      }
    }
    // If its been divided as many times as we have numbers in range, that's our smallest multiple, divisable by all
    if (counter === range.length - 2) {
      the_smallest = j;
      break;
    }
    j += step;
  }
  console.log(the_smallest);
  return the_smallest;
}


smallestCommons([1,13]);

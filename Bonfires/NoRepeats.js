/*
 Return the number of total permutations of the provided string
 that don't have repeated consecutive letters.
 Assume that all characters in the provided string are each unique.
 */
function permAlone(str) {
  // 1. Transform input string into an array, and start a counter for permutations matching our requirements
  var arr = str.split(""), counter = 0;
  // 2. Define a swap function for Heap's algorithm
  var swap = function (array, pos1, pos2) {
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
  };
  // 3. Heap's algorithm for permutations
  var heapsPermute = function (array, n) {
    var n = n || array.length; // set n default to array.length
    // regular expression looking for repeated characters
    var regex = /([a-z])\1+/;
    if (n === 1) {
      // a) the only change to the algorithm we are making is a requirement that a permutation must not have repeated char's
      if (!regex.test(array.join(""))) counter += 1;
    } else {
      for (var i = 1; i <= n; i += 1) {
        heapsPermute(array, n - 1);
        if (n % 2) {
          var j = 1;
        } else {
          var j = i;
        }
        swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
      }
    }
  };

  heapsPermute(arr);
  console.log(counter);
  return counter;
}

permAlone('aab');
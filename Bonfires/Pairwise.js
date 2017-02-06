/*
 Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
 If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices.
 Once an element has been used, it cannot be reused to pair with another.
 */
function pairwise(arr, arg) {
    console.log("input: [" + arr.toString() + "] , target sum: " + arg);
    var result = [];
    // Find indices and add them to result array
    for (var i = 0; i < arr.length - 1; i++){
        console.log("---- index: " + i);
        //For each element in the array check if a sum with another element equals passed arg
        for (var k = i + 1; k < arr.length; k++){
            console.log("---- ---- index: " + i + " , value: " + arr[i]);
            console.log("---- ---- index: " + k + " , value: " + arr[k]);
            console.log("---- ---- sum of values: " + (arr[i] + arr[k]));

            if (arr[i] + arr[k] === arg && result.indexOf(i) === -1 && result.indexOf(k) === -1){
                result.push(i);
                result.push(k);
                console.log("---- ---- added to results: " + i + ", " + k);
            }
        }
    }
    // Return the sum of all indices
    console.log("RESULT: [" + result.toString() + "]");
    return result.reduce(function (a,b){return a + b;},0);
}

pairwise([0, 0, 0, 0, 1, 1], 1);
pairwise([1, 1, 1], 2);


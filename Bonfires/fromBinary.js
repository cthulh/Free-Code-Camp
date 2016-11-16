
// Return an English translated sentence of the passed binary string.

function binaryAgent(str) {
  // 1. Define a function to convert binary to numbers
  function fromBinary(input){
    // We assume input is 8 digits long
    var result = 0;
    for ( i = 0 ; i < 8 ; i += 1 ){
      if ((input[i]) !== "0") result = result + Math.pow(2, 7 - i);
    }
    console.log(result);
    return result;
  }
  // 2. Divide input into binary code for particular letters
  var result = str.split(" ");
  console.log(result);
  // 3. Run through all array elements and convert them to characters
  for ( j = 0 ; j < result.length ; j += 1 ){
    result[j] = String.fromCharCode(fromBinary(result[j]));
    console.log(result[j]);
  }
  // 4. Merge all letters and return
  str = result.join("");
  console.log(str);
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

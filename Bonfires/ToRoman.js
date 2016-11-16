
function convertToRoman(num) {
  // If input is not a positive number abort
  if (num < 0 || num > 9999) return false;
  // 1. Setup an array for results
  var result = [];
  var num = num.toString();
  console.log(num);
  // Convert the array to 0000 format, 36 = 0036, 756 = 0756, 1985 = 1985
  var initial_len = num.length;
  for ( i = 0 ; i < 4 - initial_len ; i += 1){
    num = "0" + num;
  }
  console.log(num);

  console.log("Thousands: " + num[0]);
  console.log("Hundreds: " + num[1]);
  console.log("Tens: " + num[2]);
  console.log("Digits: " + num[3]);

  // 2. Conversion arrays
  var NUMS1000 = [[1, "M"],[2, "MM"],[3,"MMM"],[4,"DM"],[5,"V"],[6,"VM"],[7,"VMM"],[8,"VMMM"],[9,"MX"]];
  var NUMS100 = [[1, "C"],[2, "CC"],[3,"CCC"],[4,"CD"],[5,"D"],[6,"DC"],[7,"DCC"],[8,"DCCC"],[9,"CM"]];
  var NUMS10 = [[1, "X"],[2, "XX"],[3,"XXX"],[4,"XL"],[5,"L"],[6,"LX"],[7,"LXX"],[8,"LXXX"],[9,"XC"]];
  var NUMS1 = [[1, "I"],[2, "II"],[3,"III"],[4,"IV"],[5,"V"],[6,"VI"],[7,"VII"],[8,"VIII"],[9,"IX"]];
  // 3. Conversion function
  function convert(num, NUMS){
    // Coercion intended
    if (num == 0) return;
    for ( i = 0 ; i < NUMS.length ; i += 1){
      if (num == NUMS[i][0]) return NUMS[i][1];
    }
  }
  // 4. Fill result array in order 1000s, 100s, 10s, and digits
  if (num[0] !== 0) result.push(convert(num[0], NUMS1000));
  if (num[1] !== 0) result.push(convert(num[1], NUMS100));
  if (num[2] !== 0) result.push(convert(num[2], NUMS10));
  if (num[3] !== 0) result.push(convert(num[3], NUMS1));
  // 5. Merge the results array and return
  result = result.join("");
  console.log(result);
  return result;
}

convertToRoman(36);

/*Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.*/
function sumFibs(num) {
  if (num === 0) return 0;
  // 1. Create a sum var to store running total of odd numbers
  var sum = 1, temp;
  // 2. Generate an array of Fib numbers
  var fib_arr = [0, 1];
  while (true) {
    temp = (fib_arr[fib_arr.length - 2] + fib_arr[fib_arr.length - 1]);
    if (num >= temp) {
      fib_arr.push(temp);
    } else {
      break;
    }
  }
  console.log(fib_arr.toString());
  console.log("-------");
  // 3. Iterate over the array and sum the odd numbers
  for ( i = 2 ; i < fib_arr.length ; i +=1 ){
    if ( fib_arr[i] % 2 !== 0 ) sum += fib_arr[i];
  }
  // 4. Return the sum
  return sum;
}

console.log(sumFibs(75025));
console.log(sumFibs(75024));
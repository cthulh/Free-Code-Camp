// Sum all the prime numbers up to and including the provided number.
function sumPrimes(num) {
  if (num === 2) return 2;
  // 1. Generate array of primes
  var primes = [];
  for ( j = num ; j >= 2 ; j -= 1) {
    var isPrime = true;
    for (i = 2; i < j; i += 1) {
      if ( j % i === 0 ) isPrime = false;
    }
    if (isPrime) primes.push(j);

  }
  console.log(primes.toString());
  num = primes.reduce(function(pv,cv){ return pv + cv; });
  return num;
}

console.log(sumPrimes(10));

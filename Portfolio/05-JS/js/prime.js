/*
    Prime Factorization - Have the user enter a number and find
    all Prime Factors (if there are any) and display them.
*/

var getPrimeFactors = function () {
  "use strict";

  var n = parseInt(document.getElementById("num").value);
  var pfSpan = document.getElementById("pf");

  function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) { // Hasta la raiz del número (Por optimización)
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  var sequence = [];

  // Checar si los divisores son primos
  for (var i = 2; i <= n; i++) {
    if (n % i === 0 && isPrime(i)) {
      sequence.push(i);
    }
  }

  pfSpan.textContent = "Prime factors: " + sequence.join(", ");
};


// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ] 
console.log(getPrimeFactors(30030));
/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/
// Tuve MUCHOS problemas con el DOM :)
document.addEventListener("DOMContentLoaded", function () {
  var sieve = function (n) {
    "use strict";

    var array = [],
      primes = [];

    // Se inicializa el array con "true's"
    for (var i = 2; i <= n; i++) {
      array[i] = true;
    }

    // Criba de Eratóstenes
    for (var i = 2; i * i <= n; i++) {
      if (array[i]) {
        for (var j = i * i; j <= n; j += i) {
          array[j] = false; // Los múltiplos son "no primos"
        }
      }
    }

    // Todos los "true's" son primos
    for (var i = 2; i <= n; i++) {
      if (array[i]) primes.push(i);
    }

    return primes;
  };

  //Conectar con el HTML
  document.getElementById("btn").addEventListener("click", function () {
    var num = parseInt(document.getElementById("num").value);
    var output = document.getElementById("primes");

    if (isNaN(num) || num < 2) {
      output.textContent = "Please enter a number greater than 1.";
      return;
    }

    var result = sieve(num);
    output.textContent = result.join(", ");
  });
});

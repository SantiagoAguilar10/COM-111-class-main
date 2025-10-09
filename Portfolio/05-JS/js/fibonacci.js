/*
  Fibonacci Sequence - Enter a number and have the program
  generate the Fibonacci sequence to that number or to the Nth number.
*/

// This object will keep memory of the previous fibonacci numbers
var memo = {};

function fibonacci() {
  "use strict";
  var n = parseInt(document.getElementById("num").value);
  var val = f(n);
  document.getElementById("fibonacciLbl").textContent = "Result: " + val;
  return val;
}

function f(n) {
  var value;

// Check if the memory array already contains the requested number
  if (memo.hasOwnProperty(n)) {
    value = memo[n];
  } else {
    // TODO: Implement the fibonacci function here!
    if (n <= 0) {
      value = 0;
    } else if (n === 1) {
      value = 1;
    } else { 
      value = f(n - 1) + f(n - 2);
    }
    memo[n] = value;
  }

return value;
}

//El event listener para el botón
window.onload = function () {
document.getElementById("btn").addEventListener("click", fibonacci);
};

/*
Pig Latin
*/
function igpayAtinlay() {
  var input = document.getElementById("txtVal").value;
  var wordArray = input.split(" ");
  var returnArray = [];

  for (var i = 0; i < wordArray.length; i++) {
    var word = wordArray[i];
    var beginning = word.charAt(0);

    // Si empieza con vocal
    if (/[aeiouAEIOU]/.test(beginning)) {
      returnArray.push(word + "way");
      continue;
    }

    // Si empieza con consonante
    var prefix = "";
    for (var ii = 0; ii < word.length; ii++) {
      if (/[aeiouAEIOU]/.test(word.charAt(ii))) {
        break;
      } else {
        prefix += word.charAt(ii);
      }
    }

    // Resto - Después de las consonantes
    var rest = word.slice(prefix.length);
    returnArray.push(rest + prefix + "ay");
  }

  document.getElementById("pigLatLbl").textContent = returnArray.join(" ");
}


// Some examples of expected outputs
console.log(igpayAtinlay("pizza")); // "izzapay"
console.log(igpayAtinlay("apple")); // "appleway"
console.log(igpayAtinlay("happy meal")); // "appyhay ealmay"

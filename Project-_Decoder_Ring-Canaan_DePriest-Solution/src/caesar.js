// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
       if(shift === 0 || shift < -25 || shift > 25){
      return false
    }
    if(!encode){
     shift = shift * -1
    }
    // your solution code here
    if (shift < 0) {
    return caesar(input, shift + 26)
  }

  // Make an output variable
  let output = "";

  // Go through each character
  for (let i = 0; i < input.length; i++) {
    // Get the character we'll be appending
    let c = input[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {
      // Get its code
      let code = input.charCodeAt(i);

     if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 + shift) % 26) + 65 + 32);
      }
      


      // Lowercase letters
      if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }

    // Append
    output += c;
  }
    return output
  }
  

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

   function substitution(input, alphabet, encode = true) {
    // your solution code here
     if(!alphabet || alphabet.length != 26)
       return false;
     if(new Set(alphabet).size !== alphabet.length)
       return false
    let newStr = "";
    let orgAlphabet = "abcdefghijklmnopqrstuvwxyz"
    for(let i =0; i < input.length; i++){
      if(input[i] === " "){
        newStr += " ";
      } else 
      for(let j = 0; j < orgAlphabet.length; j++){
        if(encode){
        
        
        if(input[i].toLowerCase() === orgAlphabet[j]){
          newStr += alphabet[j];
          
        }
        } else {
           if(input[i].toLowerCase() === alphabet[j]){
          newStr += orgAlphabet[j];
          
        }
        }
      }
    }
    return newStr;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

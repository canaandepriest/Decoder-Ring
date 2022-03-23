// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
   let square = [
     ["a","b","c","d","e"],
     ["f","g","h","(i/j)","k"],
      ["l","m","n","o","p"],
      ["q","r","s","t","u"],
      ["v","w","x","y","z"]
                ];
    //encode
    let newStr = "";
    if(!encode){
     if(input.replace(" ", 65).length % 2 != 0)
        return false
          for(let i = 0; i < input.length; i){
      if(input[i] != " "){
      let row = parseInt(input[i + 1]) - 1;
      let col = parseInt(input[i]) - 1;
        newStr += square[row][col];
        i+=2
      } else {
        newStr += " ";
        i++
      }
    }
    } else {
    for(let j = 0; j < input.length; j++){
      let currentLetter = input[j].toLowerCase();
      if(currentLetter === " "){
        newStr += " ";
      } else if(currentLetter === "i" || currentLetter === "j"){
        newStr += "42"
      }
      for(let i = 0; i < square.length; i++){
        let row = square[i].findIndex((letter) => letter === currentLetter)
        if(row != -1)
        newStr += (row + 1) + "" + (i + 1)
      } 
    }
     
    }
     return newStr;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

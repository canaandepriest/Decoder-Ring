// Write your tests here! 
const { expect } = require("chai");
const  {caesar}  = require("../src/caesar.js")

describe("caesar()", () => {
  it("If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.", () =>{
   
  const result = caesar("thinkful", 0)
  const result2 = caesar("thinkful", 26)
  const result3 = caesar("thinkful", -26)
  expect([result,result2,result3]).to.eql([false,false,false])
  

    
  }), 
    
    
  it("Spaces should be maintained throughout, as should other nonalphabetic symbols.", () =>{
   
const result = caesar("thin $ful !", 3)

expect(result).to.equal("wklq $ixo !")
  

    
  }), 
    
  it("Capital letters can be ignored.", () =>{
   
const result = caesar("ThinkfuL", 3)

expect(result).to.equal("wklqnixo")
  

    
  }),
    
      it('If a letter is shifted so that it goes "off" the alphabet, it should wrap around to the front of the alphabet.', () =>{
   
const result = caesar("ThinkfuLz", 3)

expect(result).to.equal("wklqnixoc")
  

    
  }) 
})





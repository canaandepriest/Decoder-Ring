// Write your tests here!
const { expect } = require("chai");
const  {polybius}  = require("../src/polybius.js")
describe("polybius", () => {
  describe("encoding", () => {
    it("The letters I and J share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.", () => {
      expect(polybius("ij")).to.equal("4242");
    });

    it("should encode 'thinkful' to '4432423352125413'", () => {
      expect(polybius("thinkful")).to.equal("4432423352125413");
    });

    it("spaces should be maintained throughout", () => {
      expect(polybius("hello world")).to.equal("3251131343 2543241341");
    });
    it("should ignore capital letters", () => {
       expect(polybius("Hello World")).to.equal("3251131343 2543241341");
    });
  });
  
  describe("decoding", () => {
    it("should decode '4432423352125413' to 'th(i/j)nkful'", () => {
      expect(polybius("4432423352125413", false)).to.equal("th(i/j)nkful");;
    });

    it("should translate 42 to (i/j)", () => {
       expect(polybius("4242", false)).to.equal("(i/j)(i/j)");
    });

    
  
    it("Spaces should be maintained throughout.", () => {
      expect(polybius("3251131343 2543241341", false)).to.eql("hello world");
    });
    it("When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.", () => {
      expect(polybius("321", false)).to.be.false;
    });
  });
});
// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
 

  describe("constraints", () => {
 
    it("The alphabet parameter must be a string of exactly 26 characters.", () => {
    
      let actual = substitution("thinkful", "xoyq");
      expect(actual).to.be.false;
    });
    it("All the characters in the alphabet parameter must be unique. Otherwise, it should return false.", () => {
      
      let actual = substitution("thinkful", "xxxxmcgrukswaflnthdjpzibev");
      expect(actual).to.be.false;
    });
  });

  describe("encoding", () => {
    it("use alphabet paramater to encode message", () => {

      let actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal("jrufscpw");
    });
    it("Could include special characters such as #, $, *, etc.", () => {
     
      let actual = substitution("thinkful","xoyqm#gr_ks+aflnthd$pzibev");
      expect(actual).to.equal("$r_fs#p+");
    });
    it("Spaces should be maintained throughout.", () => {
    
      let actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal("elp xhm xf mbymwwmfj dne");
    });
    it("Capital letters can be ignored.", () => {
      
      let actual = substitution("ThiNkFul", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal("jrufscpw");
    });
  });

  describe("decoding", () => {
    it("should decode a message", () => {
      
      let actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
      expect(actual).to.equal("thinkful");
    });
    it("substitute alphabet can include speacial characters", () => {
      
      let actual = substitution("$r_fs#p+", "xoyqm#gr_ks+aflnthd$pzibev", false);
      expect(actual).to.equal("thinkful");
    });
    it("spaces should be maintained throughout", () => {
      
      let actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
      expect(actual).to.equal("you are an excellent spy");
    });
    it("capital letters should be ingnored", () => {
    
      let actual = substitution("jRufScPw", "xoyqmcgrukswaflnthdjpzibev", false);
      expect(actual).to.equal("thinkful");
    });
  });
});
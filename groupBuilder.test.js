const { groupBuilder } = require("./groupBuilder");

describe(":groupBuilder tests", () => {
  const groupBefore = {
    a: {
      refWord: "abc",
      words: ["abc", "cba"],
    },
  };
  describe(":group letter does not exist", () => {
    it("should add a new letter to the group", () => {
      const groupAfter = {
        a: {
          refWord: "abc",
          words: ["abc", "cba"],
        },
        f: {
          refWord: "fun",
          words: ["fun"],
        },
      };

      const currentWord = "fun";

      const result = groupBuilder(groupBefore, currentWord);
      expect(result).toEqual(groupAfter);
    });
  });

  describe(":group letter exists", () => {
    it('should add a letter to the words array', () => {
      
      const groupBefore = {
        a: {
          refWord: "abc",
          words: ["abc", "cba"],
        },
        f: {
          refWord: "fun",
          words: ["fun"],
        },
      };
      const groupAfter = {
        a: {
          refWord: "abc",
          words: ["abc", "cba"],
        },
        f: {
          refWord: "fun",
          words: ["fun", "unf"],
        },
      };
  
      const currentWord = "unf";
  
      const result = groupBuilder(groupBefore, currentWord);
  
      expect(result).toEqual(groupAfter);
    });
  });
});

const keyBuilder = require('./keyBuilder').keyBuilder;

describe(":keyBuilder", () => {

  const anagramObjectBefore = {
    3: {
      groups: {
        a: {
          refWord: "abc",
          words: ["abc", "cba", "bac"],
        },
        f: {
          refWord: "fun",
          words: ["fun", "unf"],
        },
      },
    },
  };


  describe(":key does not exist", () => {
    it("should add a key", () => {

      const anagramObjectAfter = {
        3: {
          groups: {
            a: {
              refWord: "abc",
              words: ["abc", "cba", "bac"],
            },
            f: {
              refWord: "fun",
              words: ["fun", "unf"],
            },
          },
        },
        5: {
          groups: {},
        },
      };
      const currentWord = 'Hello';
      const result = keyBuilder(anagramObjectBefore, currentWord);

      expect(result).toMatchObject(anagramObjectAfter)
    });
  
  });

  describe(':key does exist', () => {
   it('should not destroy data', () => {
     const currentWord = 'fun';
     const result = keyBuilder(anagramObjectBefore, currentWord);

     expect(result).toMatchObject(anagramObjectBefore)
   }) 
  });
});
